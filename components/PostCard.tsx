import Link from "next/link";

import {
  ContentItem,
} from "@/types/content";

interface PostCardProps {
  post: ContentItem;
}

export default function PostCard({
  post,
}: PostCardProps) {
  const { metadata } = post;

  return (
    <Link
      href={`/writing/${metadata.slug}`}
      className="post-card"
    >

      <div className="post-meta">

        {metadata.category && (
          <span>
            {metadata.category}
          </span>
        )}

        <span>
          {new Date(
            metadata.date
          ).toLocaleDateString(
            "en-US",
            {
              month: "short",
              day: "numeric",
              year: "numeric",
            }
          )}
        </span>

      </div>

      <h3>
        {metadata.title}
      </h3>

      {metadata.description && (
        <p>
          {metadata.description}
        </p>
      )}

      <span className="read-more">
        Read →
      </span>

    </Link>
  );
}