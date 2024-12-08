interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "AstroJs",
    description: "My favorite static site generator for building modern websites.",
    icon: "astro_dark" 
  },
  {
    name: "NestJs",
    description: "A powerful framework for building efficient, scalable Node.js server-side applications.",
    icon: "local:nestjs" 
  },
  {
    name: "NodeJs",
    description: "I've been using NodeJs for backend development since 2023.",
    icon: "local:nodejs" 
  },
  {
    name: "PostgreSQL",
    description: "A powerful, open-source object-relational database system.",
    icon: "local:postgresql" 
  },
  {
    name: "PHP",
    description: "A popular general-purpose scripting language that is especially suited to web development.",
    icon: "local:php" 
  },
  {
    name: "Laravel",
    description: "A web application framework with expressive, elegant syntax.",
    icon: "local:laravel" 
  },
  {
    name: "Tailwind CSS",
    description: "A utility-first CSS framework for creating custom designs without having to leave your HTML.",
    icon: "local:tailwind" 
  },
  {
    name: "React",
    description: "A JavaScript library for building user interfaces.",
    icon: "react" 
  },
  {
    name: "MongoDB",
    description: "A document database with the scalability and flexibility that you want with the querying and indexing that you need.",
    icon: "local:mongodb" // Local asset
  },
  {
    name: "MySQL",
    description: "The world's most popular open-source database.",
    icon: "local:mysql" // Local asset
  }
];

export default hardSkills;