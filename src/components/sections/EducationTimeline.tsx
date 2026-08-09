"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  ChevronDown,
  MapPin,
  CalendarDays,
  Clock3,
  Award,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { educations } from "@/data/education";

export function EducationTimeline() {
  const t = useTranslations("education");

  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggle = (id: string) =>
    setExpandedId((prev) => (prev === id ? null : id));

  return (
    <section className="max-w-6xl mx-auto px-8 py-12">
      {/* Header */}
      <div className="mb-12 max-w-3xl">
        <span className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1 text-sm font-medium text-yellow-500">
          {t("badge")}
        </span>

        <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
          {t("title")}
        </h2>

        <p className="mt-4 leading-7 text-muted-foreground">
          {t("description")}
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-8">
          {educations.map((edu, index) => {
            const isExpanded = expandedId === edu.id;

            const degree = t(edu.degreeKey);
            const school = t(edu.schoolKey);
            const period = t(edu.periodKey);
            const duration = t(edu.durationKey);
            const level = t(edu.levelKey);
            const major = t(edu.majorKey);
            const location = t(edu.locationKey);
            const description = t(edu.descriptionKey);

            const achievements = edu.achievementsKeys.map((key) => t(key));

            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-12 sm:pl-16"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[15px] top-7 z-10 flex h-6 w-6 items-center justify-center rounded-full border-4 border-background bg-yellow-500 shadow-lg shadow-yellow-500/30" />

                {/* Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  onClick={() => toggle(edu.id)}
                  className="
                    cursor-pointer
                    rounded-3xl
                    border
                    border-border
                    bg-card/80
                    backdrop-blur
                    p-5 sm:p-6
                    transition-all
                    duration-300
                    hover:border-yellow-500/40
                    hover:shadow-xl
                    hover:shadow-yellow-500/10
                  "
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start">
                    {/* Logo */}
                   <div className="relative h-16 w-16 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-2xl border bg-background">
                      <Image
                        src={edu.logo}
                        alt={school}
                        fill
                        className="object-contain rounded-2xl" 
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold">{degree}</h3>
                          <p className="mt-1 text-muted-foreground">
                            {school}
                          </p>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="hidden sm:block text-right">
                            <p className="font-medium">{period}</p>

                            <p className="text-sm text-muted-foreground">
                              {duration}
                            </p>
                          </div>

                          <ChevronDown
                            className={`size-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                              isExpanded ? "rotate-180 text-yellow-500" : ""
                            }`}
                          />
                        </div>
                      </div>

                      {/* Mobile Period */}
                      <div className="mt-2 text-sm text-muted-foreground sm:hidden">
                        <span>{period}</span>
                        <span> • {duration}</span>
                      </div>

                      {/* Badges */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-500">
                          {level}
                        </span>

                        <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                          {major}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="mt-5 text-sm leading-7 text-muted-foreground">
                        {description}
                      </p>

                      {/* Meta */}
                      <div className="mt-5 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
                        <div className="flex items-center gap-2">
                          <MapPin className="size-4 shrink-0 text-yellow-500" />
                          <span>{location}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <CalendarDays className="size-4 shrink-0 text-yellow-500" />
                          <span>{period}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Clock3 className="size-4 shrink-0 text-yellow-500" />
                          <span>{duration}</span>
                        </div>
                      </div>

                      {/* Expand */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{
                              duration: 0.3,
                              ease: "easeInOut",
                            }}
                            className="overflow-hidden"
                          >
                            <div className="mt-8 space-y-8 border-t border-border pt-6">
                              <div>
                                <h4 className="mb-4 flex items-center gap-2 font-semibold text-yellow-500">
                                  <Award className="size-5" />
                                  {t("achievements")}
                                </h4>

                                <ul className="space-y-3">
                                  {achievements.map((item, i) => (
                                    <li
                                      key={i}
                                      className="flex gap-3 text-sm text-muted-foreground sm:text-base"
                                    >
                                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-500" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}