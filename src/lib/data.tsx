
import { Briefcase, GraduationCap, Goal, Waves, Music, Plane, Trophy, Code, GitBranch, Database } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import React from 'react';

export const personalDetails = {
    name: "Harsh Ray",
    title: "Full-Stack Developer & AI Enthusiast",
    bio: "Crafting elegant solutions to complex problems. Passionate about building intelligent applications and user-centric interfaces.",
    email: "harshay2007@gmail.com",
    linkedin: "https://www.linkedin.com/in/harsh-ray-499856329/",
    github: "https://github.com/harshray23",
    instagram: "https://www.instagram.com/_harsh_ray_23/",
    resumeUrl: "/cv.pdf",
  };
  
  export const aboutMe = {
    summary: "A driven Computer Science student specializing in AI/ML, passionate about turning complex ideas into smart, user-friendly tech solutions.",
    introduction: "Hi, I'm Harsh Ray. I'm a second-year student specializing in Computer Science with a focus on Artificial Intelligence and Machine Learning. With a curious mind and a drive to keep learning, I’ve been honing my skills in Python, C, Java, Firebase, and MySQL — turning classroom concepts into hands-on projects. I’m passionate about building smart, efficient, and user-friendly tech solutions that not only work great but feel great to use.",
  };
  
  export const skills = [
    { name: 'Python', icon: '/python.jpg' },
    { name: 'Java', icon: '/java.jpg' },
    { name: 'C', icon: '/c.jpg' },
    { name: 'C++', icon: '/c++.jpg' },
    { name: 'HTML', icon: '/html.jpg' },
    { name: 'CSS', icon: '/css.jpg' },
    { name: 'Firebase', icon: '/firebase.jpg' },
    { name: 'MySQL', icon: '/mysql.jpg' },
    { name: 'Data Structures', icon: '/data_structures.jpg' },
    { name: 'Git', icon: '/git.jpg' },
  ];

  export const experience = [
    {
      title: 'Web Development Intern',
      company: 'AEC',
      date: 'Jun 2024 - Present',
      description: 'Developed and maintained the official college portal using Next.js and Firebase. Implemented features for student and faculty, improving data management and accessibility.',
      icon: Briefcase,
    },
    {
        title: 'NCC Cadet',
        company: 'National Cadet Corps',
        date: '2024 - Present',
        description: 'Engaged in various training activities, developing leadership, discipline, and teamwork skills. Participated in community service and national-level camps.',
        icon: Briefcase,
    }
  ];
  
  export const education = [
    {
      title: 'B.Tech in CSE (AI & ML)',
      institution: 'Asansol Engineering College',
      date: '2024 - 2028',
      description: 'Pursuing a degree with a focus on Artificial Intelligence and Machine Learning, gaining a strong foundation in computer science principles and advanced topics.',
      icon: GraduationCap,
    },
     {
      title: 'Higher Secondary Education',
      institution: 'D.A.V. Public School',
      date: '2022 - 2024',
      description: 'Completed higher secondary education with a focus on science and mathematics, achieving top grades and participating in various science fairs.',
      icon: GraduationCap,
    },
    {
      title: 'Matriculation',
      institution: 'D.A.V. Public School',
      date: '2022',
      description: 'Completed matriculation with excellent grades, setting a strong academic foundation.',
      icon: GraduationCap,
    }
  ];

  export const hobbies = [
    { name: 'Cricket', icon: 'Baseball' as unknown as LucideIcon },
    { name: 'Football', icon: Goal },
    { name: 'Swimming', icon: Waves },
    { name: 'Music', icon: Music },
    { name: 'Touring', icon: Plane },
  ];

  export const achievements = [
    {
        title: 'Achieved CPL (Corporal) Rank',
        description: 'Awarded the rank of Corporal in the NCC on 15th August, 2025, for demonstrating leadership and dedication.',
        icon: Trophy,
    },
    {
        title: 'Gold Medal in Swimming',
        description: 'Successfully defended the swimming championship title, securing the gold medal for two consecutive years.',
        icon: Trophy,
    },
    {
        title: 'Third Position in 400m Race',
        description: 'Secured the third position in the 400m race, demonstrating speed and endurance.',
        icon: Trophy,
    },
    {
        title: 'Inter-House Football Winner',
        description: 'Led the team to victory in the inter-house football tournament.',
        icon: Trophy,
    },
    {
        title: 'Inter-House Cricket Winner',
        description: 'Led the team to victory in the inter-house cricket tournament.',
        icon: Trophy,
    },
  ];
  
  export const projects = [
    {
      slug: "aec-fsp-portal",
      title: "AEC-FSP Portal",
      description: "A full-stack web portal built using Next.js, Tailwind CSS, and Firebase, designed for managing institutional data for AEC. It includes role-based login, dashboards for students, teachers, and admins, and cloud-hosted configurations. Ideal for institutional workflow management with responsive design.",
      summary: "A full-stack web portal for managing institutional data at AEC, featuring role-based logins and dashboards for students, teachers, and admins.",
      problemStatement: "AEC needed a centralized system to manage student, teacher, and administrative data efficiently, replacing manual processes with a streamlined digital solution.",
      thoughtProcess: "I chose Next.js for its performance and SEO benefits, Firebase for its real-time database and authentication, and Tailwind CSS for rapid, responsive UI development. The architecture was designed to be modular and scalable, with role-based access control as a core feature.",
      challengesFaced: "Implementing a secure and granular role-based access system was complex. Ensuring real-time data synchronization across different user dashboards without performance degradation required careful state management and optimized Firebase queries.",
      toolsUsed: ["Next.js", "Firebase", "Tailwind CSS", "React", "Node.js"],
      githubUrl: "https://github.com/harshray23/aec-fsp",
      imageUrl: "/aec-fsp-portal.png",
      dataAiHint: "portal dashboard"
    },
    {
      slug: "ncc-portal",
      title: "NCC Portal",
      description: "An online portal for NCC cadet management, allowing tracking of activities, schedules, and cadet performance. Built with modern frontend technologies (Next.js + Tailwind CSS) and structured for easy hosting and updates. Designed to digitize traditional paper-based NCC operations.",
      summary: "An online portal for NCC cadet management that tracks activities, schedules, and performance, digitizing traditional paper-based operations.",
      problemStatement: "The NCC's reliance on paper-based records made it difficult to track cadet progress, manage schedules, and communicate effectively. A digital platform was needed to modernize these operations.",
      thoughtProcess: "The goal was to create a user-friendly interface for both cadets and officers. I focused on a clean dashboard design to present key information at a glance. The use of a modern frontend stack ensured a fast and responsive experience.",
      challengesFaced: "The main challenge was designing a data model that could accommodate various NCC activities and hierarchies. Ensuring the portal was intuitive for users with varying levels of technical expertise was also a priority.",
      toolsUsed: ["Next.js", "Tailwind CSS", "React", "Vercel"],
      githubUrl: "https://github.com/harshray23/ncc-portal",
      imageUrl: "/nccportal.png",
      dataAiHint: "military management"
    },
    {
      slug: "hospconnect",
      title: "HospConnect",
      description: "Developed for the TubeDude Buildathon, HospConnect is a smart healthcare portal leveraging Next.js and Firebase to streamline patient-doctor communication. It features real-time updates, patient management, and hospital directory services. Deployed with cloud hosting for scalability.",
      summary: "HospConnect is a smart healthcare portal that streamlines patient-doctor communication with real-time updates, patient management, and hospital directory services.",
      problemStatement: "Patients often face difficulties in booking appointments and communicating with their doctors efficiently. HospConnect aimed to bridge this gap by providing a seamless digital platform for healthcare interaction.",
      thoughtProcess: "The project was developed under the tight deadline of a buildathon. I prioritized core features like appointment booking and a secure messaging system. Firebase was a natural choice for its real-time capabilities and ease of setup.",
      challengesFaced: "Building a secure and HIPAA-compliant messaging feature within the buildathon's timeframe was a significant challenge. Integrating with a hospital directory API and ensuring data accuracy was another hurdle.",
      toolsUsed: ["Next.js", "Firebase", "Tailwind CSS", "React"],
      githubUrl: "https://github.com/harshray23/hospconnect",
      webUrl: "https://hospconnect.vercel.app/",
      imageUrl: "/hospconnect.png",
      dataAiHint: "healthcare portal"
    },
    {
      slug: "arduino-mobile-communication",
      title: "Arduino Mobile Communication System",
      description: "An Arduino-based GSM communication system. Includes .ino files and documentation for sending and receiving SMS via GSM module. Ideal for use in emergency systems or IoT-based alerting mechanisms. Combines low-level hardware logic with real-world application.",
      summary: "An Arduino-based GSM system for sending and receiving SMS, ideal for emergency alerts and IoT applications.",
      problemStatement: "There was a need for a simple, low-cost solution for sending and receiving SMS notifications for IoT projects, especially in areas without reliable internet access.",
      thoughtProcess: "I selected the SIM800L GSM module for its affordability and reliability. The Arduino code was written to be as simple as possible, allowing for easy integration into other projects. The focus was on creating a reusable and well-documented module.",
      challengesFaced: "Interfacing with the GSM module using AT commands required a lot of trial and error. Power management for the module was also tricky, as it has specific voltage and current requirements.",
      toolsUsed: ["Arduino", "C++", "GSM Module (SIM800L)"],
      githubUrl: "https://github.com/harshray23/Arduino-Mobile.git",
      imageUrl: "/arduino-mobile.jpg",
      dataAiHint: "arduino iot"
    },
    {
      slug: "bluetooth-controlled-car",
      title: "Bluetooth Controlled Car",
      description: "A 6-wheeled car controlled via Bluetooth using an Arduino Uno and motor driver, with an Android interface. Includes .ino code and documentation. A practical robotics project demonstrating wireless control and real-time maneuvering.",
      summary: "A 6-wheeled, Bluetooth-controlled car using an Arduino Uno and motor driver, operated via an Android interface for wireless control.",
      problemStatement: "The goal was to build a simple and fun robotics project that could be controlled wirelessly from a smartphone, introducing basic concepts of robotics and wireless communication.",
      thoughtProcess: "I opted for a 6-wheeled chassis for better stability and maneuverability. The HC-05 Bluetooth module was chosen for its ease of use with Arduino. I developed a simple Android app using MIT App Inventor for controlling the car.",
      challengesFaced: "Calibrating the motor speeds for smooth movement and turning was a challenge. Ensuring a stable Bluetooth connection and minimizing latency between the phone and the car was crucial for a good user experience.",
      toolsUsed: ["Arduino", "C++", "HC-05 Bluetooth Module", "L298N Motor Driver", "MIT App Inventor"],
      githubUrl: "https://github.com/harshray23/Bluetooth-Car.git",
      imageUrl: "/car.jpg",
      dataAiHint: "robotics car"
    },
    {
      slug: "ultrasonic-radar-system",
      title: "Ultrasonic Radar System",
      description: "A radar system using an ultrasonic sensor mounted on a servo motor, visualized via a GUI or serial monitor. Includes PDF documentation and Arduino code. Excellent for basic object detection and distance mapping, applicable in robotics and obstacle detection.",
      summary: "A radar system using an ultrasonic sensor and servo motor for object detection and distance mapping, visualized via a GUI.",
      problemStatement: "This project aimed to create a low-cost radar system for object detection and mapping, which could be used as a foundation for more complex robotics projects like autonomous navigation.",
      thoughtProcess: "I used a servo motor to sweep the ultrasonic sensor across a 180-degree arc, continuously measuring distances. The data was then sent to a Processing-based GUI that visualized the detected objects in real-time.",
      challengesFaced: "Synchronizing the servo motor's movement with the ultrasonic sensor readings was key. Filtering out noise and false readings from the sensor required implementing a simple averaging algorithm.",
      toolsUsed: ["Arduino", "C++", "HC-SR04 Ultrasonic Sensor", "Servo Motor", "Processing"],
      githubUrl: "https://github.com/harshray23/Radar.git",
      imageUrl: "/radar.jpg",
      dataAiHint: "radar system"
    },
    {
      slug: "phone-info-portal",
      title: "Phone Info Portal",
      description: "A modern web-based tool for retrieving and displaying detailed phone information such as specifications, brand, and model. Built with Next.js and Tailwind CSS, it uses an API-driven approach to fetch device data. Ideal for tech comparison platforms or electronics resellers.",
      summary: "A web tool for retrieving and displaying detailed phone specifications using an API-driven approach. Ideal for tech comparison or resellers.",
      problemStatement: "Finding accurate and consolidated phone specifications can be time-consuming. This tool was created to provide a single, easy-to-use interface for fetching and displaying this information from a public API.",
      thoughtProcess: "The main focus was on creating a clean and intuitive UI for displaying a large amount of technical data. I used Next.js for server-side rendering to improve performance and ensure the latest data is fetched from the API.",
      challengesFaced: "The primary challenge was handling inconsistencies and missing data from the external API gracefully. I implemented fallback UIs and error messages to ensure a smooth user experience even when data was incomplete.",
      toolsUsed: ["Next.js", "Tailwind CSS", "React", "External Phone API"],
      githubUrl: "https://github.com/harshray23/phone-info",
      webUrl: "https://phone-info-nine.vercel.app/",
      imageUrl: "/phoneinfo.png",
      dataAiHint: "phone specifications"
    },
  ];

    
    