// FIX: Add type declaration for process.env to satisfy TypeScript when using process.env.API_KEY in a Vite project.
declare var process: {
  env: {
    API_KEY?: string;
  };
};

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ChatMessage {
  role: 'user' | 'model' | 'error';
  content: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveDemoUrl?: string;
  sourceCodeUrl?: string;
}
