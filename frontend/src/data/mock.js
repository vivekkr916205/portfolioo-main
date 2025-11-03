export const mockData = {
  skills: {
    frontend: {
      category: "Frontend Development",
      items: [
        { name: "React.js", level: "Advanced", icon: "react" },
        { name: "JavaScript", level: "Advanced", icon: "javascript" },
        { name: "TypeScript", level: "Intermediate", icon: "typescript" },
        { name: "HTML5 & CSS3", level: "Advanced", icon: "html" },
        { name: "Tailwind CSS", level: "Intermediate", icon: "tailwind" },
        { name: "Material-UI", level: "Intermediate", icon: "mui" },
        { name: "Redux", level: "Intermediate", icon: "redux" }
      ]
    },
    backend: {
      category: "Backend Development",
      items: [
        { name: "Node.js", level: "Intermediate", icon: "nodejs" },
        { name: "Express.js", level: "Intermediate", icon: "express" },
        { name: "REST APIs", level: "Intermediate", icon: "api" },
        { name: "Python", level: "Basic", icon: "python" }
      ]
    },
    database: {
      category: "Database",
      items: [
        { name: "MongoDB", level: "Intermediate", icon: "mongodb" },
        { name: "PostgreSQL", level: "Basic", icon: "postgresql" }
      ]
    },
    tools: {
      category: "Tools & Technologies",
      items: [
        { name: "Git & GitHub", level: "Advanced", icon: "git" },
        { name: "Vercel/Netlify", level: "Advanced", icon: "deploy" },
        { name: "VS Code", level: "Advanced", icon: "vscode" },
        { name: "npm/yarn", level: "Advanced", icon: "npm" },
        { name: "Docker", level: "Basic", icon: "docker" },
        { name: "AWS", level: "Basic", icon: "aws" }
      ]
    }
  },
  projects: [
    {
      title: "LookingForCare - Healthcare Platform",
      description: "Comprehensive healthcare website for US-based client. Migrated legacy PHP/TypeScript codebase to modern React framework with multi-page navigation and responsive design.",
      longDescription: "Comprehensive healthcare website for US-based client. Successfully migrated legacy PHP/TypeScript codebase to modern React framework. Features multi-page navigation, responsive design, form handling, and professional UI tailored for healthcare industry standards. Currently live and serving real users with optimized performance.",
      technologies: ["React", "JavaScript", "CSS", "Responsive Design", "Form Handling", "Migration"],
      features: [
        "Successfully migrated from legacy tech stack to modern React",
        "Implemented responsive design working flawlessly on all devices",
        "Built professional UI suitable for healthcare industry standards",
        "Multi-page navigation with smooth transitions",
        "Advanced form handling and validation",
        "Currently live and serving real users"
      ],
      status: "Production (Live)",
      role: "Full-Stack Developer",
      liveUrl: "https://webislandinfo.com/l4k/",
      demoUrl: "https://webislandinfo.com/l4k/",
      image: "/images/lookingforcare-screenshot.png"
    },
    {
      title: "Webisland InfoTech Website",
      description: "Business website for IT services company. Developed production-ready web application using React, integrated third-party APIs, and optimized performance reducing load time by 40%.",
      longDescription: "Business website for IT services company. Developed production-ready web application using React with Node.js backend. Integrated third-party APIs and optimized application performance reducing load time by 40%. Collaborated with cross-functional teams in Agile environment to deliver features on schedule with high code quality standards.",
      technologies: ["React", "Node.js", "Material-UI", "REST APIs", "Redux", "Performance Optimization"],
      features: [
        "40% performance improvement through code optimization",
        "Integrated multiple third-party services and APIs",
        "Worked in Agile environment with regular sprints",
        "Delivered on time with high code quality standards",
        "Implemented state management with Redux",
        "Built responsive UI with Material-UI components"
      ],
      status: "Production (Private)",
      role: "React Developer",
      liveUrl: null,
      demoUrl: null,
      note: "Client project under NDA",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    },
    {
      title: "Digital Solutions - Dynamic User Interface",
      description: "Built responsive and dynamic user interfaces for multiple client projects using React, Redux, and Material-UI with focus on component reusability and state management.",
      longDescription: "Built responsive and dynamic user interfaces for multiple client projects using React, Redux, and Material-UI. Focused on component reusability, state management best practices, and implementing modern design patterns. Participated in code reviews and maintained high quality standards throughout development lifecycle.",
      technologies: ["React", "Redux", "Material-UI", "JavaScript", "CSS", "Component Architecture"],
      features: [
        "Implemented reusable component architecture",
        "Applied advanced state management with Redux",
        "Created responsive designs working across all screen sizes",
        "Participated in code reviews and maintained high quality standards",
        "Implemented modern React patterns and best practices",
        "Built scalable and maintainable codebase"
      ],
      status: "Production (Private)",
      role: "React Developer",
      liveUrl: null,
      demoUrl: null,
      note: "Private client projects",
      image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&q=80"
    }
  ],
  experience: [
    {
      title: "AI/ML Research & Development",
      organization: "Self-Directed Learning",
      duration: "2024 - Present",
      description: "Exploring machine learning algorithms, neural networks, and AI applications through hands-on projects and online courses."
    },
    {
      title: "Competitive Programming",
      organization: "Codeforces, LeetCode",
      duration: "2023 - Present", 
      description: "Solved 200+ problems across various platforms, improving algorithmic thinking and problem-solving skills."
    },
    {
      title: "Open Source Contribution",
      organization: "GitHub",
      duration: "Planning",
      description: "Preparing to contribute to open source projects in web development and machine learning domains."
    }
  ],
  certifications: [
    {
      id: 1,
      name: "Meta Front-End Developer Professional Certificate",
      issuer: "Meta",
      platform: "Coursera",
      date: "2024",
      credentialUrl: null,
      logo: "meta",
      logoText: "META",
      color: "#0668E1"
    },
    {
      id: 2,
      name: "McKinsey Forward Program",
      issuer: "McKinsey & Company",
      platform: "McKinsey",
      date: "2025",
      credentialUrl: null,
      logo: "mckinsey",
      logoText: "McKinsey",
      color: "#00539B"
    },
    {
      id: 3,
      name: "Machine Learning Specialization",
      issuer: "DeepLearning.AI",
      platform: "Coursera",
      date: "2023",
      credentialUrl: null,
      logo: "deeplearning",
      logoText: "DeepLearning.AI",
      color: "#FF6B6B"
    }
  ]
};