import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProjectCard } from "@/components/project-card";
import { projects, personalDetails } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <div className="flex-1">
        <section id="projects" className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-headline font-bold text-center mb-12">All Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer
        name={personalDetails.name}
        email={personalDetails.email}
        github={personalDetails.github}
        linkedin={personalDetails.linkedin}
      />
    </>
  );
}
