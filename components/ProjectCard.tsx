import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/cn";

const accents: Record<
  Project["accent"],
  { from: string; to: string; glow: string }
> = {
  blue: {
    from: "from-accent/70",
    to: "to-cyan/50",
    glow: "bg-accent/30",
  },
  violet: {
    from: "from-violet/80",
    to: "to-accent/40",
    glow: "bg-violet/30",
  },
  cyan: {
    from: "from-cyan/70",
    to: "to-accent/50",
    glow: "bg-cyan/25",
  },
  magenta: {
    from: "from-violet/80",
    to: "to-pink-400/50",
    glow: "bg-violet/35",
  },
  indigo: {
    from: "from-indigo-400/80",
    to: "to-accent/40",
    glow: "bg-indigo-400/25",
  },
  teal: {
    from: "from-teal-400/70",
    to: "to-cyan/40",
    glow: "bg-teal-400/25",
  },
};

export function ProjectCard({ project }: { project: Project }) {
  const accent = accents[project.accent];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-navy-card/90 transition duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-glow">
      <div
        className="relative isolate h-44 overflow-hidden sm:h-48"
        aria-hidden="true"
      >
        <div className={cn("absolute inset-0 bg-gradient-to-br opacity-90", accent.from, accent.to)} />
        <div className={cn("absolute -right-6 -top-8 h-36 w-36 rounded-full blur-2xl", accent.glow)} />
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-24 w-36 rounded-xl border border-white/20 bg-ink/40 p-3 shadow-lg backdrop-blur-sm transition duration-300 group-hover:-translate-y-1 group-hover:rotate-1">
            <div className="mb-2 flex gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            </div>
            <div className="space-y-1.5">
              <div className="h-1.5 w-3/4 rounded bg-white/35" />
              <div className="h-1.5 w-1/2 rounded bg-white/20" />
              <div className="h-1.5 w-2/3 rounded bg-white/15" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-soft">
          {project.category}
        </p>
        <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-white">
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer noopener"
              className="transition hover:text-accent-soft"
            >
              {project.title}
              <ArrowUpRight
                className="ml-1 inline h-4 w-4 align-text-top opacity-70"
                aria-hidden="true"
              />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : (
            project.title
          )}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-soft transition hover:text-white"
          >
            Visit site
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : null}
      </div>
    </article>
  );
}
