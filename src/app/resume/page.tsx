
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { personalDetails } from '@/lib/data.tsx';
import { ResumeViewer } from '@/components/resume-viewer';

export default function ResumePage() {

  return (
    <>
      <Header />
      <ResumeViewer resumeUrl={personalDetails.resumeUrl} fileName="Harsh-Ray-Resume.pdf" />
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
