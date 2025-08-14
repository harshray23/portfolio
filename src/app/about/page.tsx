
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { aboutMe, personalDetails, skills, experience, education } from "@/lib/data";

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="flex-1">
        <section id="about" className="py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl font-headline font-bold text-center mb-4">About Me</h1>
            <p className="max-w-3xl mx-auto text-center text-lg text-muted-foreground mb-16">
              {aboutMe.introduction}
            </p>
            
            <div className="grid md:grid-cols-2 gap-16">
              <ExperienceTimeline title="Experience" items={experience} />
              <ExperienceTimeline title="Education" items={education} />
            </div>

          </div>
        </section>

        <section id="skills-about" className="py-16 md:py-24 bg-card/90">
            <div className="container">
                 <h2 className="text-3xl font-headline font-bold text-center mb-12">My Skills</h2>
                 <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {skills.map((skill) => (
                      <Badge 
                          key={skill.name} 
                          variant="secondary" 
                          className="text-base py-2 px-4 group relative overflow-hidden"
                      >
                          <div className="transition-transform duration-300 ease-in-out group-hover:translate-y-full">
                            {skill.name}
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out -translate-y-full group-hover:translate-y-0">
                            <skill.icon className="h-5 w-5" />
                          </div>
                      </Badge>
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
        instagram={personalDetails.instagram}
      />
    </>
  );
}
