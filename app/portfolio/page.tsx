import {
  getAllProjects,
} from "@/lib/content";

import ProjectCard from "@/components/ProjectCard";

export default function PortfolioPage() {
  const projects =
    getAllProjects();

  return (
    <div className="page">

      <header className="page-header">

        <p className="eyebrow">
          WORK
        </p>

        <h1>
          Things I've built and
          problems I've worked on.
        </h1>

        <p>
          Projects, experiments and
          technical investigations.
        </p>

      </header>

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

    </div>
  );
}