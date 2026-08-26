import Link from "next/link";

import {
  ContentItem,
} from "@/types/content";

interface ProjectCardProps {
  project: ContentItem;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  const { metadata } = project;

  return (
    <Link
      href={`/portfolio/${metadata.slug}`}
      className="project-card"
    >

      <div className="card-number">
        PROJECT
      </div>

      <h3>
        {metadata.title}
      </h3>

      {metadata.description && (
        <p>
          {metadata.description}
        </p>
      )}

      {metadata.tags && (
        <div className="tags">

          {metadata.tags.map(
            (tag) => (
              <span key={tag}>
                {tag}
              </span>
            )
          )}

        </div>
      )}

    </Link>
  );
}