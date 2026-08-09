"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export function ContactForm() {
  const t = useTranslations("contact.form");

  const [status, setStatus] = useState<
    "idle" | "loading" | "sent" | "error"
  >("idle");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setStatus("loading");

    const formData = new FormData(e.currentTarget);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error();

      setStatus("sent");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="mt-10">
      <h2 className="mb-4 text-xl font-semibold">
        {t("title")}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            name="name"
            type="text"
            required
            placeholder={t("name")}
            className="rounded-xl border border-border bg-card px-4 py-3 text-sm focus:border-accent focus:outline-none"
          />

          <input
            name="email"
            type="email"
            required
            placeholder={t("email")}
            className="rounded-xl border border-border bg-card px-4 py-3 text-sm focus:border-accent focus:outline-none"
          />
        </div>

        <textarea
          name="message"
          required
          rows={5}
          placeholder={t("message")}
          className="resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm focus:border-accent focus:outline-none"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium transition-colors hover:border-accent disabled:opacity-50"
        >
          {status === "loading"
            ? t("sending")
            : t("send")}
        </button>

        {status === "sent" && (
          <p className="text-sm text-green-500">
            {t("success")}
          </p>
        )}

        {status === "error" && (
          <p className="text-sm text-red-500">
            {t("error")}
          </p>
        )}
      </form>
    </div>
  );
}