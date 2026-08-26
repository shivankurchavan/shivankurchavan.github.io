import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import {
  getAllPosts,
  getContentBySlug,
} from "@/lib/content";

export function generateStaticParams() {
  return getAllPosts().map(
    (post) => ({
      slug: post.metadata.slug,
    })
  );
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;

  const post =
    getContentBySlug(
      "article",
      slug
    );

  if (!post) {
    notFound();
  }

  return (
    <article className="article">

      <header className="article-header">

        <div className="post-meta">

          <span>
            {post.metadata.category}
          </span>

          <span>
            {new Date(
              post.metadata.date
            ).toLocaleDateString(
              "en-US",
              {
                month: "long",
                day: "numeric",
                year: "numeric",
              }
            )}
          </span>

        </div>

        <h1>
          {post.metadata.title}
        </h1>

        {post.metadata.description && (
          <p className="article-description">
            {post.metadata.description}
          </p>
        )}

      </header>

      <div className="article-content">
        <MDXRemote
          source={post.content}
        />
      </div>

    </article>
  );
}