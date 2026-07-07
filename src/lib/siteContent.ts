// ---------------------------------------------------------------------------
// SITE CONTENT — everything a recruiter-facing edit would touch lives here.
// Update handles, links, and copy in this one file; every page reads from it.
// ---------------------------------------------------------------------------

export const SITE_LINKS = {
  github: "https://github.com/rudrachauhan12999",
  linkedin: "https://www.linkedin.com/in/rudra-chauhan-69382a390?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  email: "rudrafordocs@gmail.com",
  resume: "/resume.pdf",
};

export const PROFILE = {
  name: "Rudra Chauhan",
  role: "Computer Engineering Student pursuing minor degree in Data Science with a CGPA 8.22 ",
  bio:
    "An engineer who treats every project like an expedition — mapping the unknown, salvaging what works, and surfacing with something worth sharing. Currently exploring AI/ML, cyber forensics, and interfaces that feel alive.",
  interests: ["AI", "Machine Learning", "Product ideation", "Data Analytics", "UI/UX"],
};

export const SKILLS = [
  { name: "Python / ML", level: 88 },
  { name: "Product ideation", level: 80 },
  { name: "TypeScript / React", level: 85 },
  { name: "Data Visualization", level: 82 },
  { name: "Cybersecurity Fundamentals", level: 75 },
  { name: "UI/UX & Motion Design", level: 78 },
];

export const TIMELINE = [
  { year: "2023", title: "Started Computer Engineering", detail: "Began B.E. studies and wrote the first real lines of code." },
  { year: "2024", title: "Hackathons & Project Building", detail: "Competed in hackathons and shipped several full-stack projects." },
  { year: "2025", title: "AI/ML & Data Analytics Projects", detail: "Went deep on machine learning and data-driven applications." },
  { year: "2026", title: "Deepfake Detection & Product Design", detail: "Building forensic ML tools alongside polished product design." },
];

export const FUN_FACTS = [
  "Builds pixel-art interfaces for fun, not just for portfolios.",
  "Thinks the best debugging tool is a good night's sleep.",
  "Genuinely enjoys reading research papers on a Friday night.",
  "Once fixed a bug at 3am and named the commit after it.",
];

export interface Project {
  title: string;
  tagline: string;
  stack: string[];
  detail: string;
  github: string;
  demo?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "FrameGuard",
    tagline: "Deepfake frame forensics",
    stack: ["Python", "OpenCV", "PyTorch"],
    detail: "Forensic tool that inspects individual video frames for manipulation artifacts to flag likely deepfakes.",
    github: "https://github.com/rudrachauhan12999/FrameGuard",
  },
  {
    title: "SunShare Grid",
    tagline: "Solar panel placement data analytics",
    stack: ["Python", "Pandas", "Data Viz"],
    detail: "Exploratory analysis and visualization pipeline over solar use optimization for a particular state.",
    github: "https://github.com/nush-13/SunShare-Grid",
  },
  {
    title: "Cortex Guard",
    tagline: "NLP summarization engine",
    stack: ["Python", "FastAPI","React","Docker","PostgresSQL", "Transformers"],
    detail: "AI SOC platform that surfaces security alerts with LLM powered treat analysis.",
    github: "https://github.com/rudrachauhan12999/cortex-guard",
  },
  
  {
    title: "Deep Dive Portfolio",
    tagline: "Portfolio website",
    stack: ["Next.js", "D3.js", "TypeScript"],
    detail: "Interactive website turning plain resume into explorable, animated portfolio website.",
    github: "https://github.com/your-handle/data-viz-dashboard",
    demo: "#",
  },
 
];

export interface Achievement {
  title: string;
  org: string;
  year: string;
  proof?: string;
}

export const SIDE_HUSTLES: { heading: string; entries: Achievement[] }[] = [
  {
    heading: "CERTIFICATES",
    entries: [
      { title: "Data mining", org: "NPTEL", year: "2026", proof: "/pdf/dm nptel certificate.pdf" },
      { title: "Training on ethical hacking", org: "Remarkskill Education", year: "2025", proof: "/pdf/ethical hacking certificate.jpg" },
      { title: "IBM AI Fundamentals(in progress)", org: "IBM", year: "2026", proof: "/pdf/mi-certificate.pdf" },
      { title: "IBM Data Science (in progress)", org: "IBM", year: "2026", proof: "/pdf/mi-certificate.pdf" },

    ],
  },
  {
    heading: "HACKATHONS",
    entries: [
      { title: "TechManthan 2026 — Winner ", org: "Techno NJP Institue", year: "2026", proof: "/pdf/TECHMANTHAN2026_Rudra_Chauhan.pdf" },
      { title: "Climate Data Hackathon — Finalist(Top 8)", org: "Delhi based Hackathon", year: "2026", proof: "/pdf/Climate data hackathon certificate.pdf" },
      { title: "Hack & Forge— Participant", org: "IITB/Unstop", year: "2026", proof: "/pdf/hack & forge certificate.pdf" },
    ],
  },
  {
    heading: "INTERNSHIPS",
    entries: [
      { title: "Ethcial hacking internship", org: "Remarkskill education", year: "2025", proof: "/pdf/internship letter.jpg" },
      
      { title: "Ethcial hacking internship", org: "Remarkskill education", year: "2025", proof: "/pdf/internship-letter.pdf" },
    ],
  },
  {
    heading: "COURSES",
    entries: [
      { title: "Advanced React Patterns", org: "Online Platform", year: "2023", proof: "/pdf/course-react.pdf" },
      { title: "Embedded Systems Basics", org: "Online Platform", year: "2023", proof: "/pdf/course-embedded.pdf" },
    ],
  },
  {
    heading: "ACHIEVEMENTS",
    entries: [
      { title: "Deepfake Detection — Research Recognition", org: "Department Showcase", year: "2026", proof: "/pdf/achievement-deepfake.pdf" },
    ],
  },
];
