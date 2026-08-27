"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
} from "lucide-react";

import {
  ContentItem,
} from "@/types/content";

interface SidebarProps {
  posts: ContentItem[];
}

export default function Sidebar({
  posts,
}: SidebarProps) {
  const [articlesOpen, setArticlesOpen] =
    useState(false);

  const [openCategory, setOpenCategory] =
    useState<string | null>(null);

  // Group articles by category
  const postsByCategory =
    posts.reduce(
      (groups, post) => {
        const category =
          post.metadata.category ||
          "Other";

        if (!groups[category]) {
          groups[category] = [];
        }

        groups[category].push(post);

        return groups;
      },
      {} as Record<string, ContentItem[]>
    );

  function toggleArticles() {
    setArticlesOpen((current) => !current);

    // Close category when articles close
    if (articlesOpen) {
      setOpenCategory(null);
    }
  }

  function toggleCategory(
    category: string
  ) {
    setOpenCategory((current) =>
      current === category
        ? null
        : category
    );
  }

  return (
    <aside className="sidebar">

      <div className="sidebar-top">

        <Link
          href="/"
          className="logo"
        >
          SHIVANKUR
        </Link>

        <p className="sidebar-description">
          Developer, builder and
          occasional thinker.
        </p>

      </div>

      <nav className="navigation">

        {/* HOME */}

        <Link href="/">
          Home
        </Link>

        {/* WORK */}

        <div className="nav-group">

          {/* <span className="nav-label">
            WORK
          </span> */}

          <Link href="/portfolio">
            Portfolio
          </Link>

        </div>

        {/* ARTICLES */}

        <div className="nav-group">

          <button
            className="dropdown-button"
            onClick={toggleArticles}
          >
            <span>ARTICLES</span>

            {articlesOpen ? (
              <ChevronDown size={14} />
            ) : (
              <ChevronRight size={14} />
            )}
          </button>

          {articlesOpen && (

            <div className="article-dropdown">

              {Object.entries(
                postsByCategory
              ).map(
                (
                  [
                    category,
                    categoryPosts,
                  ]
                ) => {

                  const categoryIsOpen =
                    openCategory ===
                    category;

                  return (
                    <div
                      key={category}
                      className="category-dropdown"
                    >

                      {/* CATEGORY BUTTON */}

                      <button
                        className="category-button"
                        onClick={() =>
                          toggleCategory(
                            category
                          )
                        }
                      >

                        <span>
                          {category}
                        </span>

                        {categoryIsOpen ? (
                          <ChevronDown
                            size={13}
                          />
                        ) : (
                          <ChevronRight
                            size={13}
                          />
                        )}

                      </button>

                      {/* ARTICLES */}

                      {categoryIsOpen && (

                        <div className="article-list">

                          {categoryPosts.map(
                            (post) => (

                              <Link
                                key={
                                  post.metadata
                                    .slug
                                }
                                href={`/writing/${post.metadata.slug}`}
                                className="article-link"
                              >

                                {
                                  post.metadata
                                    .title
                                }

                              </Link>

                            )
                          )}

                        </div>

                      )}

                    </div>
                  );
                }
              )}

            </div>

          )}

        </div>

        {/* OTHER */}

        <div className="nav-group">


          {/* <Link href="/thoughts">
            Thoughts
          </Link> */}

          <Link href="/about">
            About
          </Link>

        </div>

      </nav>

      <div className="sidebar-footer">

        <a
          href="https://github.com/shivankurchavan"
          target="_blank"
          rel="noopener noreferrer"
        >
          [GitHub]
        </a>


        {/* <a>|</a> */}

        <a
          href="https://linkedin.com/in/shivankurchavan"
          target="_blank"
          rel="noopener noreferrer"
        >
          [LinkedIn]
        </a>

        <a
        href="mailto:shivankurchavan@gmail.com"
        >
          [Email]
        </a>
      </div>

    </aside>
  );
}