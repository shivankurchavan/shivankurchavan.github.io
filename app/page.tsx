import Link from "next/link";

import {
  getAllPosts,
  getAllThoughts,
  getFeaturedProjects,
} from "@/lib/content";

import ProjectCard from "@/components/ProjectCard";
import PostCard from "@/components/PostCard";
import ThoughtCard from "@/components/ThoughtCard";
import SectionHeading from "@/components/SectionHeading";

export default function HomePage() {
  const projects =
    getFeaturedProjects().slice(0, 3);

  const posts =
    getAllPosts().slice(0, 3);

  const thoughts =
    getAllThoughts().slice(0, 2);

  return (
    <div className="page">

      <section className="hero">

        <p className="eyebrow">
          HELLO
        </p>

        <h1>
          I build things and write about
          what I learn along the way.
        </h1>

        <p className="hero-description">
          I'm Shivankur — a developer
          interested in systems,
          performance, interesting problems
          and occasionally the things that
          happen outside the terminal.
        </p>

      </section>

      <section>

        <SectionHeading
          title="FEATURED WORK"
          href="/portfolio"
        />

        <div className="stack">

          {projects.map(
            (project) => (
              <ProjectCard
                key={project.metadata.slug}
                project={project}
              />
            )
          )}

        </div>

      </section>

      <section>

        <SectionHeading
          title="RECENT WRITING"
          href="/writing"
        />

        <div className="stack">

          {posts.map(
            (post) => (
              <PostCard
                key={post.metadata.slug}
                post={post}
              />
            )
          )}

        </div>

      </section>

      <section>

        <SectionHeading
          title="RECENT THOUGHTS"
          href="/thoughts"
        />

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

      </section>

      <section className="now-section">

        <p className="eyebrow">
          NOW
        </p>

        <div className="now-grid">

          <div>
            <span>Building</span>

            <p>
              Things that solve
              interesting problems.
            </p>
          </div>

          <div>
            <span>Learning</span>

            <p>
              More about systems and
              performance.
            </p>
          </div>

          <div>
            <span>Thinking</span>

            <p>
              How to build simpler,
              better software.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}