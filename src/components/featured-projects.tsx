
import { projects } from '@/lib/data.tsx';
import { ProjectCard } from '@/components/project-card';

export function FeaturedProjects() {
  const featured = projects.slice(0, 3); // Show first 3 projects

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featured.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
