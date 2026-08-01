"use client";

import { useState } from "react";
import Image from "next/image";
import { Briefcase, ChevronDown, ChevronRight, ListChecks, Lightbulb } from "lucide-react";
import { experiences } from "@/data/experience";

export function CareerTimeline() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggle = (id: string) =>
    setExpandedId((prev) => (prev === id ? null : id));

  return (
    <section className="max-w-6xl mx-auto px-6 pb-16">
      <h2 className="flex items-center gap-2 text-2xl font-bold mb-2">
        <Briefcase className="size-6" />
        Karier
      </h2>
      <p className="text-muted-foreground mb-8">Perjalanan profesional saya.</p>

      <div className="flex flex-col gap-6">
        {experiences.map((exp) => {
          const isExpanded = expandedId === exp.id;
          const hasDetails = exp.tasks.length > 0 || exp.learnings.length > 0;

          return (
            <div
              key={exp.id}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex gap-4">
                <div className="relative size-16 rounded-xl overflow-hidden bg-white shrink-0">
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    fill
                    className="object-contain p-1"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{exp.role}</h3>
                  <p className="text-muted-foreground mb-2">{exp.company}</p>

                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>{exp.location}</p>
                    <p>{exp.period}</p>
                    <p className="text-muted-foreground/70">{exp.duration}</p>
                    <p>{exp.type}</p>
                    <p>{exp.workMode}</p>
                  </div>
                </div>
              </div>

              {hasDetails && (
                <>
                  <button
                    onClick={() => toggle(exp.id)}
                    className="flex items-center gap-2 mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {isExpanded ? (
                      <ChevronDown className="size-4" />
                    ) : (
                      <ChevronRight className="size-4" />
                    )}
                    {isExpanded ? "Sembunyikan detail" : "Tampilkan detail"}
                  </button>

                  {isExpanded && (
                    <div className="mt-4 space-y-6">
                      {exp.tasks.length > 0 && (
                        <div>
                          <h4 className="flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wide mb-3">
                            <ListChecks className="size-4" />
                            Tugas
                          </h4>
                          <ul className="space-y-2">
                            {exp.tasks.map((task, i) => (
                              <li
                                key={i}
                                className="flex gap-2 text-sm text-muted-foreground"
                              >
                                <span className="text-foreground shrink-0">✓</span>
                                {task}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {exp.learnings.length > 0 && (
                        <div>
                          <h4 className="flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wide mb-3">
                            <Lightbulb className="size-4" />
                            Apa yang Saya Pelajari
                          </h4>
                          <ul className="space-y-2">
                            {exp.learnings.map((item, i) => (
                              <li
                                key={i}
                                className="flex gap-2 text-sm text-muted-foreground"
                              >
                                <span className="text-foreground shrink-0">✓</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}