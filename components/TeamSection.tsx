import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { team, type TeamLink } from "@/data/team";
import { cn } from "@/lib/cn";

type TeamSectionProps = {
  tone?: "light" | "dark";
  anchorId?: string;
  showCta?: boolean;
};

export function TeamSection({
  tone = "dark",
  anchorId = "team",
  showCta = false,
}: TeamSectionProps) {
  const isDark = tone === "dark";

  return (
    <section
      id={anchorId}
      className={cn(
        "relative scroll-mt-28",
        isDark ? "border-t border-white/8 bg-navy" : "bg-fog",
      )}
    >
      {isDark ? (
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-35" />
      ) : (
        <div className="bg-grid-light pointer-events-none absolute inset-0" />
      )}
      <Container className="relative py-16 sm:py-20 lg:py-24">
        <Reveal>
          <SectionHeading
            tone={isDark ? "light" : "dark"}
            eyebrow="Team"
            title="Meet the team"
            description="Engineers and designers who plan, build, and ship production software for growing businesses."
          />
        </Reveal>
        <div className="mt-12 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <Reveal key={member.slug} delay={index * 70} className="h-full">
              <article
                className={cn(
                  "flex h-full flex-col rounded-3xl border p-6 sm:p-7",
                  isDark
                    ? "border-white/8 bg-navy-card/80"
                    : "border-snow bg-paper shadow-sm",
                )}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-accent to-violet font-display text-base font-semibold text-white"
                    aria-hidden="true"
                  >
                    {member.initials}
                  </span>
                  <div className="min-w-0">
                    <h3
                      className={cn(
                        "font-display text-xl font-semibold tracking-tight",
                        isDark ? "text-white" : "text-ink-text",
                      )}
                    >
                      {member.name}
                    </h3>
                    <p
                      className={cn(
                        "mt-1 text-sm leading-snug",
                        isDark ? "text-accent-soft" : "text-accent",
                      )}
                    >
                      {member.role}
                    </p>
                    <p
                      className={cn(
                        "mt-1 text-xs font-medium",
                        isDark ? "text-muted" : "text-muted-dark",
                      )}
                    >
                      {member.experience} experience
                    </p>
                  </div>
                </div>
                <p
                  className={cn(
                    "mt-5 flex-1 text-sm leading-relaxed",
                    isDark ? "text-muted" : "text-slate-body",
                  )}
                >
                  {member.bio}
                </p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {member.skills.map((skill) => (
                    <li
                      key={skill}
                      className={cn(
                        "rounded-full border px-2.5 py-1 text-[11px] font-medium",
                        isDark
                          ? "border-white/10 bg-white/5 text-muted"
                          : "border-snow bg-fog text-ink-text",
                      )}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 min-h-6">
                  {member.links.length > 0 ? (
                    <ul className="flex flex-wrap gap-3">
                      {member.links.map((link) => (
                        <li key={link.href}>
                          <TeamSocialLink link={link} isDark={isDark} />
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        {showCta ? (
          <Reveal>
            <div className="mt-10 flex justify-center">
              <Button href="/about#team" variant="secondary">
                Learn more about us
              </Button>
            </div>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}

function TeamSocialLink({
  link,
  isDark,
}: {
  link: TeamLink;
  isDark: boolean;
}) {
  const isExternal = link.external ?? link.href.startsWith("http");

  return (
    <a
      href={link.href}
      {...(link.download ? { download: true } : {})}
      {...(isExternal
        ? { target: "_blank", rel: "noreferrer noopener" }
        : {})}
      className={cn(
        "inline-flex items-center gap-1 text-sm font-semibold transition",
        isDark
          ? "text-accent-soft hover:text-white"
          : "text-accent hover:text-violet",
      )}
    >
      {link.label}
      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
      {isExternal ? (
        <span className="sr-only"> (opens in a new tab)</span>
      ) : null}
    </a>
  );
}
