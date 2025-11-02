import { Experience, Education, SkillCategory, Project } from './types';

export const RESUME_DATA = {
  name: 'Karthikeya Gattupalli',
  title: 'Front-end Software Engineer',
  summary: 'Driven by the crafting of seamless user interfaces and fostering the creation of frictionless development environments.',
  contact: {
    location: 'Reno, Nevada',
    email: 'xvskart@gmail.com',
    phone: '7752033227',
    linkedin: 'linkedin.com/in/vskart',
    github: 'github.com/vskart',
  },
  aboutMe: {
    photoUrl: 'https://placehold.co/400x400/1e293b/94a3b8.png?text=KG',
    bio: `As a passionate Front-End Software Engineer, I thrive on the challenge of transforming complex problems into elegant, intuitive, and highly performant user interfaces. My journey in tech began with a deep curiosity for how things work, which evolved into a career dedicated to building seamless digital experiences. I'm driven by a love for clean code, user-centric design, and the collaborative process of bringing ideas to life. Whether it's architecting a scalable React application or optimizing data-fetching for a protected data environment, I'm always eager to learn, grow, and contribute to impactful projects. Outside of coding, I'm an avid explorer of new technologies and enjoy contributing to open-source projects.`,
  },
  experience: [
    {
      company: 'Alan Gray',
      role: 'Product Engineer Front End',
      period: 'Feb 2024 - June 2025',
      description: [
        'Developed and maintained responsive front-end components using React and TypeScript to support insurance and litigation workflows',
        'Created a contact management UI that enabled personnel to control data access with higher granularity',
        'Integrated RESTful APIs to enable real-time data rendering and optimized data-fetching performance to work with protected case related data',
        'Worked within a rapidly-changing startup environment, requiring adept communication and flexibility',
        'Wrote extensive technical documentation for a project that required LEDES compliance',
        'Created new forms and ensured accessibility compliance for the customer support website of major retailers',
      ],
    },
    {
      company: 'Wasabi Technologies',
      role: 'Software Engineer',
      period: 'Aug 2019 - Dec 2021',
      description: [
        'Developed features for web applications that are used to manage cloud storage operations, using JavaScript, React, and CSS',
        'Designed core sections of front end architecture for projects, including both internal and customer-facing functions',
        'Served as the primary maintainer of multiple Git repositories, and ensured constant delivery of builds to the QA team',
        'Worked closely with the infrastructure team to maintain CI/CD pipelines with Docker and GitHub Actions',
        'Provided mentorship to junior engineers and guided them through learning development processes',
      ],
    },
    {
      company: 'NORM Software',
      role: 'Associate Software Engineer',
      period: 'Jan 2019 - May 2019',
      description: [
        'Created websites and applications for multiple contracted clients using JavaScript, React, and CSS',
        'Interacted with data provided through the EpiServer CMS, using C# and .NET',
        'Constructed features for a new eCommerce website of a multimedia company, with a focus on cart, user settings, and geolocation',
      ],
    },
    {
      company: 'Simply Organic',
      role: 'Software Engineering Intern',
      period: 'May 2018 - Jul 2018',
      description: [
        'Developed features for an enterprise network performance management application, using Java and JavaScript',
        'Created a test suite and a search tool for hardware metrics calculations using Python',
        'Supported the front end development of an OData query builder tool using Ext JS',
      ],
    },
  ] as Experience[],
  projects: [
    {
      title: 'Insurance & Litigation Workflow Platform',
      description: 'A responsive front-end for an insurance and litigation platform, featuring a granular contact management UI and real-time data rendering for protected case information.',
      technologies: ['React', 'TypeScript', 'Redux', 'RESTful APIs', 'HeadlessUI'],
      liveDemoUrl: '#',
      sourceCodeUrl: '#',
    },
    {
      title: 'Cloud Storage Management Dashboard',
      description: 'Developed key features for a web application to manage cloud storage operations. Designed core front-end architecture for both internal and customer-facing functions, ensuring robust and scalable solutions.',
      technologies: ['JavaScript', 'React', 'CSS', 'Docker', 'CI/CD'],
      liveDemoUrl: '#',
      sourceCodeUrl: '#',
    },
    {
      title: 'E-commerce Multimedia Website',
      description: 'Constructed features for a new eCommerce website, including shopping cart functionality, user settings, and geolocation services to enhance the user shopping experience.',
      technologies: ['JavaScript', 'React', 'CSS', 'EpiServer CMS', 'C#', '.NET'],
      liveDemoUrl: '#',
      sourceCodeUrl: '#',
    },
  ] as Project[],
  skills: [
    {
      title: 'Web',
      skills: ['React ecosystem', 'Node.js', 'Canvas', 'CSS', 'AWS S3', 'Accessibility', 'Networking', 'TC39'],
    },
    {
      title: 'Libraries',
      skills: ['React', 'Redux', 'Redux Toolkit', 'React Router', 'Material UI', 'HeadlessUI', 'Tailwind', 'Highcharts'],
    },
    {
      title: 'Tools',
      skills: ['Webpack', 'NextJS', 'Git', 'Docker', 'Kubernetes', 'ESLint', 'MySQL'],
    },
    {
      title: 'Concepts',
      skills: ['Agile', 'AI Prompts', 'DevOps', 'Microservices', 'Linux Administration', 'Open Source', 'Relational Databases'],
    },
    {
      title: 'Programming Languages',
      skills: ['JavaScript', 'TypeScript', 'Elm', 'C', 'C#', 'Python'],
    },
  ] as SkillCategory[],
  education: [
    {
      institution: 'Bridgewater State University',
      degree: 'MS in Computer Science',
    },
    {
      institution: 'PES University',
      degree: 'B.Tech in Computer Science',
    },
  ] as Education[],
};