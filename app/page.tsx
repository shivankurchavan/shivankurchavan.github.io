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
          I'm Shivankur — a developer interested in systems, interesting problems and also in the things that happen outside the terminal. 

        </p>

        <p className="hero-description ">
          I train for endurance events and my weekends are spent with BeachPlease

        </p>

        <p className="hero-description">
          I also like to eat various cuisines, i dont descriminate b/w street food and michelin star course meal (not that ive had one yet, lol)

        </p>

        
      </section>

      {/* <section>

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

      </section> */}

      {/* <section>

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

      </section> */}

      {/* <section>

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

      </section> */}

      <section className="now-section">

        <p className="eyebrow">
          NOW
        </p>

        <div className="now-grid ">

          <div>
            <span>Building</span>

            <p>
              This blog page 
            </p>
          </div>

          <div>
            <span>Enduring</span>

            <p>
              Ironman 70.3 Goa training
            </p>
          </div>

          <div>
            <span>Thinking</span>

            <p>
              How could chia seeds make me sh#t better....
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}