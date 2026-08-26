import {
  getAllThoughts,
} from "@/lib/content";

import ThoughtCard from "@/components/ThoughtCard";

export default function ThoughtsPage() {
  const thoughts =
    getAllThoughts();

  return (
    <div className="page">

      <header className="page-header">

        <p className="eyebrow">
          THOUGHTS
        </p>

        <h1>
          Smaller ideas that don't
          need to become full articles.
        </h1>

      </header>

      <div className="stack">

        {thoughts.map(
          (thought) => (
            <ThoughtCard
              key={thought.metadata.slug}
              thought={thought}
            />
          )
        )}

      </div>

    </div>
  );
}