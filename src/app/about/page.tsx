
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { aboutMe, personalDetails, skills, experience, education, hobbies } from "@/lib/data.tsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { LucideIcon } from 'lucide-react';

const Baseball: LucideIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-baseball" {...props}>
        <circle cx="12" cy="12" r="10"/>
        <path d="M18 18c-3-1.5-7.5-1.5-10.5 0"/>
        <path d="M18 6c-3 1.5-7.5 1.5-10.5 0"/>
        <path d="M12 2v2"/>
        <path d="M12 20v2"/>
        <path d="M5.636 5.636l1.414 1.414"/>
        <path d="M16.95 16.95l1.414 1.414"/>
        <path d="M5.636 18.364l1.414-1.414"/>
        <path d="M16.95 7.05l1.414-1.414"/>
    </svg>
);

const hobbyIcons = {
    Baseball,
};

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
            
            <Card className="max-w-4xl mx-auto mb-16 bg-card/90">
                <CardHeader>
                    <CardTitle className="text-2xl font-headline text-center">Hobbies & Interests</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap justify-center gap-6">
                        {hobbies.map((hobby) => {
                            const IconComponent = hobbyIcons[hobby.icon as keyof typeof hobbyIcons] || hobby.icon;
                            return (
                                <div key={hobby.name} className="flex flex-col items-center gap-2 text-center">
                                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary border border-primary/20">
                                        <IconComponent className="h-8 w-8" />
                                    </div>
                                    <span className="font-medium">{hobby.name}</span>
                                </div>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>

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
