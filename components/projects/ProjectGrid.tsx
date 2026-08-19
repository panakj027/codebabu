"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import {
  projectFilters,
  projects,
  type ProjectFilter,
} from "@/data/projects";
import { cn } from "@/lib/cn";

export function ProjectGrid() {
  const [filter, setFilter] = useState<ProjectFilter>("all");

  const visible = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((project) => project.filter === filter);
  }, [filter]);

  return (
    <div>
      <div
        className="-mx-5 flex gap-2 overflow-x-auto overscroll-x-contain px-5 pb-2 snap-x snap-mandatory scrollbar-none sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
        role="tablist"
        aria-label="Filter projects by category"
      >
        {projectFilters.map((item) => {
          const selected = filter === item.value;
          return (
            <button
              key={item.value}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setFilter(item.value)}
              className={cn(
                "shrink-0 snap-start rounded-full border px-4 py-2.5 text-sm font-medium transition",
                selected
                  ? "border-accent bg-accent/15 text-white"
                  : "border-white/10 bg-white/5 text-muted hover:border-white/20 hover:text-white",
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {visible.map((project, index) => (
          <Reveal key={project.slug} delay={index * 40}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
      {visible.length === 0 ? (
        <p className="mt-10 text-center text-muted">
          No projects in this category yet.
        </p>
      ) : null}
    </div>
  );
}
