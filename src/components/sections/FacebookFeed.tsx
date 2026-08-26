import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export type FeedPost = {
  id: string;
  title: string;
  date: string;
};

// Static placeholder posts. Frontend-only — no Facebook API integration yet.
// A future data source can replace this array with fetched posts as long
// as it matches the `FeedPost` shape.
const placeholderPosts: FeedPost[] = [
  { id: "1", title: "News from the club will appear here.", date: "Coming soon" },
  { id: "2", title: "Upcoming tournaments and events.", date: "Coming soon" },
  { id: "3", title: "New machines and zone updates.", date: "Coming soon" },
];

/**
 * Placeholder for a future Facebook/news feed. Intentionally static —
 * do not wire up the Facebook API here, this only establishes the
 * component structure and expected data shape (`FeedPost`).
 */
export function FacebookFeed() {
  return (
    <Section id="news" tone="surface">
      <SectionHeading
        eyebrow="Stay in the loop"
        title="Latest from Facebook"
        description="This section will sync with our Facebook page. For now, it's a static placeholder."
      />

      <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {placeholderPosts.map((post) => (
          <li
            key={post.id}
            className="flex flex-col gap-3 rounded-lg border border-border bg-background p-5"
          >
            <div
              aria-hidden="true"
              className="aspect-video w-full rounded-md bg-gradient-to-br from-primary/15 via-background to-accent/15"
            />
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
              {post.date}
            </span>
            <p className="text-sm leading-relaxed text-text">{post.title}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
