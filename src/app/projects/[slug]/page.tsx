
import { notFound } from 'next/navigation';
import { projects, personalDetails } from '@/lib/data.tsx';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProjectDetail } from '@/components/project-detail';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <ProjectDetail project={project} />
      <Footer
        name={personalDetails.name}
        email={personalDetails.email}
        github={personalDetails.github}
        linkedin={personalDetails.linkedin}
        instagram={personalDetails.instagram}
        githubImage={personalDetails.githubImage}
        linkedinImage={personalDetails.linkedinImage}
        emailImage={personalDetails.emailImage}
        instagramImage={personalDetails.instagramImage}
      />
    </>
  );
}
