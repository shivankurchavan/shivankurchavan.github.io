import {
  ContentItem,
} from "@/types/content";

interface ThoughtCardProps {
  thought: ContentItem;
}

export default function ThoughtCard({
  thought,
}: ThoughtCardProps) {
  const { metadata, content } = thought;

  return (
    <article className="thought-card">

      <time>
        {new Date(
          metadata.date
        ).toLocaleDateString(
          "en-US",
          {
            month: "long",
            day: "numeric",
            year: "numeric",
          }
        )}
      </time>

      <h3>
        {metadata.title}
      </h3>

      <p>
        {content}
      </p>

      {metadata.tags && (
        <div className="tags">

          {metadata.tags.map(
            (tag) => (
              <span key={tag}>
                #{tag}
              </span>
            )
          )}

        </div>
      )}

    </article>
  );
}