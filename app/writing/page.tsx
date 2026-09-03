import {
  getAllPosts,
} from "@/lib/content";

import PostCard from "@/components/PostCard";

export default function WritingPage() {
  const posts =
    getAllPosts();

  const categories = [
    ...new Set(
      posts
        .map(
          (post) =>
            post.metadata.category
        )
        .filter(Boolean)
    ),
  ];

  return (
    <div className="page">

      <header className="page-header">

        <p className="eyebrow">
          WRITING
        </p>

        <h1>
          Things I've learned and thought about.
        </h1>

      </header>

      <div className="categories">

        {categories.map(
          (category) => (
            <section
              key={category}
              className="category-section"
            >

              <h2>
                {category}
              </h2>

              <div className="stack">

                {posts
                  .filter(
                    (post) =>
                      post.metadata.category ===
                      category
                  )
                  .map(
                    (post) => (
                      <PostCard
                        key={
                          post.metadata.slug
                        }
                        post={post}
                      />
                    )
                  )}

              </div>

            </section>
          )
        )}

      </div>

    </div>
  );
}