import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <main id="main-content" className="flex flex-1 items-center">
      <Container className="py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-soft">
          404
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white">
          This page does not exist.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          The link may be outdated, or the page may have moved. Head back home
          or start a conversation with us.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/">Back home</Button>
          <Button href="/contact" variant="secondary">
            Let&apos;s Talk
          </Button>
        </div>
      </Container>
    </main>
  );
}
