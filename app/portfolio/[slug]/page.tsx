import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import {
  getAllProjects,
  getContentBySlug,
} from "@/lib/content";

export function generateStaticParams() {
  return getAllProjects().map(
    (project) => ({
      slug:
        project.metadata.slug,
    })
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;

  const project =
    getContentBySlug(
      "project",
      slug
    );

  if (!project) {
    notFound();
  }

  return (
    <article className="article">

      <header className="article-header">

        <p className="eyebrow">
          PROJECT
        </p>

        <h1>
          {project.metadata.title}
        </h1>

        {project.metadata.description && (
          <p className="article-description">
            {project.metadata.description}
          </p>
        )}

        <div className="tags">

          {project.metadata.tags?.map(
            (tag) => (
              <span key={tag}>
                {tag}
              </span>
            )
          )}

        </div>

      </header>

      <div className="article-content">

        <MDXRemote
          source={project.content}
        />

      </div>

    </article>
  );
}