
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { personalDetails } from '@/lib/data';
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
      />
    </>
  );
}
