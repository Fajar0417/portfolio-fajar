import { NextResponse } from "next/server";

const GITHUB_USERNAME = "Fajar0417"; // ganti sesuai username kamu

const QUERY = `
  query($login: String!) {
    user(login: $login) {
      followers { totalCount }
      following { totalCount }
      repositories(privacy: PUBLIC) { totalCount }
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
            }
          }
        }
      }
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            description
            url
            stargazerCount
            forkCount
            primaryLanguage {
              name
              color
            }
          }
        }
      }
    }
  }
`;

export async function GET() {
  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: QUERY,
        variables: { login: GITHUB_USERNAME },
      }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error("Gagal fetch data GitHub");

    const json = await res.json();
    const user = json.data?.user;

    if (!user) throw new Error("User tidak ditemukan");

    const calendar = user.contributionsCollection.contributionCalendar;
    const days = calendar.weeks.flatMap(
      (w: { contributionDays: { date: string; contributionCount: number }[] }) =>
        w.contributionDays.map((d) => ({
          date: d.date,
          count: d.contributionCount,
        }))
    );

    const pinnedRepos = user.pinnedItems.nodes.map(
      (repo: {
        name: string;
        description: string | null;
        url: string;
        stargazerCount: number;
        forkCount: number;
        primaryLanguage: { name: string; color: string } | null;
      }) => ({
        name: repo.name,
        description: repo.description,
        url: repo.url,
        stars: repo.stargazerCount,
        forks: repo.forkCount,
        language: repo.primaryLanguage?.name ?? null,
        languageColor: repo.primaryLanguage?.color ?? "#666",
      })
    );

    return NextResponse.json({
      followers: user.followers.totalCount,
      following: user.following.totalCount,
      repos: user.repositories.totalCount,
      contributions: calendar.totalContributions,
      days,
      pinnedRepos,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Terjadi kesalahan pada server." },
      { status: 500 }
    );
  }
}