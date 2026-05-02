export const siteConfig = {
  name: "Catherine Varas",
  title: "Data Engineer",
  description: "Data Engineer specializing in cloud data platforms, large-scale migrations, and AI integration. 4+ years of experience building data pipelines at BBVA and crafting AI solutions in Sydney, Australia.",
  siteUrl: "https://catherine-varas.cofoundy.dev",

  colors: {
    bg: "#030712",
    bgAlt: "#0f172a",
    surface: "#1e293b",
    surfaceLight: "#334155",
    primary: "#3b82f6",
    primaryLight: "#93c5fd",
    accent: "#8b5cf6",
    accentLight: "#c4b5fd",
    text: "#f1f5f9",
    textMuted: "#94a3b8",
    gradient: "from-blue-500 via-violet-500 to-pink-500",
  },

  taglines: [
    "Building Data Platforms",
    "Migrating Legacy to Cloud",
    "Enabling AI Integration",
    "Engineering Scalable Pipelines",
  ],

  stats: [
    { value: "4+", label: "Years Experience" },
    { value: "6", label: "Cloud Certifications" },
    { value: "70+", label: "Components Deployed" },
    { value: "M+", label: "Records Migrated" },
  ],

  social: {
    email: "catherine.varas.padilla@gmail.com",
    linkedin: "https://www.linkedin.com/in/catherine-varas/",
    github: "https://github.com/CateHey",
  },

  about: {
    intro: "From engineering data pipelines at one of Latin America's largest banks to building AI-powered solutions in Sydney — I'm driven by the challenge of transforming complex data into actionable intelligence.",
    journey: "Lima, Peru → Sydney, Australia",
    current: "Master's in Data Science at the University of Queensland, currently interning at One51 building RAG frameworks and data migration tools.",
    superpower: "I've migrated millions of banking records from IBM Mainframes to the cloud, bridging legacy and modern systems while maintaining strict compliance.",
  },

  skills: {
    engineering: ["Java", "Python", "Apache Spark", "SQL", "ETL Pipelines", "Databricks"],
    cloud: ["Azure Data Factory", "Azure Fabric", "AWS", "Docker", "Kubernetes"],
    ai: ["RAG", "LLMs", "Spark MLlib", "scikit-learn", "MLOps", "Prompt Engineering"],
    tools: ["Power BI", "Streamlit", "Tableau", "Git", "CI/CD", "Control-M"],
    databases: ["PostgreSQL", "Oracle", "MySQL", "Snowflake", "IBM Mainframe"],
  },

  experience: [
    {
      company: "One51",
      subtitle: "Data & Analytics Consultancy",
      title: "Data Engineering Intern",
      location: "Sydney, Australia",
      dateRange: "Jul 2025 – Present",
      highlights: [
        "Built Python scripts and Streamlit app for QlikView → Power BI migration metadata analysis",
        "Implemented RAG framework in Azure Foundry for automated SQL translation",
      ],
      tags: ["Python", "Streamlit", "Azure AI Foundry", "RAG"],
    },
    {
      company: "BBVA",
      subtitle: "One of Latin America's Largest Banks",
      title: "Associate Data Engineer",
      location: "Lima, Peru",
      dateRange: "Jun 2024 – Jan 2025",
      featured: true,
      highlights: [
        "Led migration of millions of contractual records from IBM Mainframe to cloud infrastructure",
        "Designed data quality frameworks ensuring banking regulatory compliance",
        "Built Java backend routines for Mainframe/Oracle coexistence model",
        "Managed centralized contracts module across multiple squads",
      ],
      tags: ["Apache Spark", "Java", "Control-M", "Oracle", "IBM Mainframe"],
    },
    {
      company: "BBVA",
      subtitle: "",
      title: "Junior Data Engineer",
      location: "Lima, Peru",
      dateRange: "Oct 2022 – Jun 2024",
      highlights: [
        "Built Spark data pipelines for banking product data migration to cloud",
        "Deployed and maintained 70+ components: Java backend, Spark batch, DB scripts",
        "Collaborated with international teams across Colombia, Mexico, and Spain",
      ],
      tags: ["Spark", "Java", "Parquet", "CI/CD", "Docker"],
    },
    {
      company: "Kyndryl",
      subtitle: "",
      title: "Cloud Computing Intern",
      location: "Lima, Peru",
      dateRange: "Feb 2022 – Oct 2022",
      highlights: [
        "Disaster recovery architectural analysis and Azure cloud solutions",
      ],
      tags: ["Azure", "Cloud Architecture"],
    },
    {
      company: "Vida Software",
      subtitle: "",
      title: "Business Intelligence Analyst",
      location: "Lima, Peru",
      dateRange: "Jul 2021 – Feb 2022",
      highlights: [
        "Big Data processing, GraphQL↔SQL Server pipelines, Power BI dashboards",
      ],
      tags: ["Python", "Power BI", "GraphQL", "Node.js"],
    },
  ],

  projects: [
    {
      name: "AI Snowflake Migration Tool",
      description: "AI-driven code translation engine using LLMs, a custom Retrieval-Augmented Generation (RAG) pipeline, and deterministic validators.",
      github: "https://github.com/CateHey/ai_snowflake_migration_tool",
      tags: ["Python", "RAG", "LLM", "Snowflake"],
    },
    {
      name: "Computer Vision Tracking",
      description: "Computer vision pipeline built with neural networks models such as YOLO and SAM2 to track animals movement for Queensland Brain Institute.",
      github: "https://github.com/CateHey/computer-vision-tracking",
      tags: ["Python", "YOLOv8", "SAM2", "Computer Vision"],
    },
    {
      name: "AWS Deployed System",
      description: "Medical system for start-up deployed in AWS cloud services with scalable architecture.",
      github: "https://github.com/CateHey/aws_deployed_system",
      tags: ["Python", "AWS", "Cloud", "Healthcare"],
    },
    {
      name: "Predictive Maintenance Lakehouse",
      description: "Predictive Maintenance Pipeline for Industrial IoT using lakehouse architecture.",
      github: "https://github.com/CateHey/predictive-maintenance-lakehouse-industrial",
      tags: ["Jupyter", "IoT", "Machine Learning", "Data Pipeline"],
    },
    {
      name: "Traffic Analysis Spark HDFS",
      description: "Big data pipeline built with Spark using HDFS files to analyze traffic and identify causes of it in Sydney.",
      github: "https://github.com/CateHey/traffic-analysis-spark-hdfs-pipeline",
      tags: ["Spark", "HDFS", "Docker", "Big Data"],
    },
  ],

  certifications: [
    {
      name: "Fabric Data Engineer Associate",
      code: "DP-700",
      provider: "Microsoft",
      icon: "microsoft",
    },
    {
      name: "Fabric Analytics Engineer Associate",
      code: "DP-600",
      provider: "Microsoft",
      icon: "microsoft",
    },
    {
      name: "Power BI Data Analyst Associate",
      code: "PL-300",
      provider: "Microsoft",
      icon: "microsoft",
    },
    {
      name: "Cloud Practitioner",
      code: "CLF-C02",
      provider: "AWS",
      icon: "aws",
    },
    {
      name: "Azure Fundamentals",
      code: "AZ-900",
      provider: "Microsoft",
      icon: "microsoft",
    },
    {
      name: "Generative AI Fundamentals",
      code: "",
      provider: "Databricks",
      icon: "ai",
    },
  ],

  education: [
    {
      school: "University of Queensland",
      degree: "Master in Data Science",
      dateRange: "Feb 2025 – Jun 2026",
      location: "Brisbane, Australia",
      highlights: ["Cloud Computing", "Machine Learning", "AI", "Data Analytics"],
      featured: true,
    },
    {
      school: "Peruvian University of Applied Sciences (UPC)",
      degree: "Bachelor of Industrial Engineering",
      dateRange: "2019 – 2023",
      location: "Lima, Peru",
      highlights: ["Project Management", "Process Optimization"],
    },
    {
      school: "Institute Cibertec",
      degree: "Associate's in Computer Science",
      dateRange: "2019 – 2022",
      location: "Lima, Peru",
      highlights: ["SQL", "Java", "Python", "Web Development"],
    },
  ],
};
