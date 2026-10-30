export const profileData = {
  name: "Mohammad Amaan",
  title: "Data Science & AI Engineer",
  subtitle: "Machine Learning · Deep Learning · Full-Stack Systems",
  location: "Lucknow, India",
  email: "mohammadamaan.ai@gmail.com",
  phone: "+91 75658 39044",
  photo: "/profile.png",
  resume: "/resume.pdf",
  github: "https://github.com/Mohammad-Amaan756",
  linkedin: "https://www.linkedin.com/in/mohammad-amaan-1290a7294/",
  status: "Open to Summer 2025/2026 AI/ML & SWE Roles",
  education: {
    degree: "B.Tech in Computer Science & Engineering",
    specialization: "Data Science and Artificial Intelligence",
    affiliation: "In association with IBM",
    institution: "Integral University",
    location: "Lucknow, India",
    period: "2023 – 2027",
    cgpa: "9.0 / 10.0",
  },
  summary:
    "Computer Science & Engineering undergraduate specializing in Data Science & AI with a 9.0 CGPA. Bridges deep learning theory (PyTorch, CNNs, Explainable AI) with production-ready full-stack software (React, Node.js, Express, Flask). Proven track record analyzing large-scale datasets (57,000+ acoustic records) and engineering clinical AI applications with verifiable interpretability.",
  metrics: [
    { value: "9.0", label: "Academic CGPA", detail: "Integral University (IBM Partnered)" },
    { value: "57K+", label: "Data Records Analyzed", detail: "Acoustic ML pattern classification" },
    { value: "3+", label: "Production & Research Builds", detail: "Full-stack & Deep Learning pipelines" },
    { value: "07", label: "Professional Credentials", detail: "IBM & NPTEL certified" },
  ],
};

export const skillsData = {
  categories: [
    {
      id: "ai-ml",
      title: "Data Science & AI",
      description: "Model design, deep learning pipelines, and predictive analysis",
      accent: "emerald",
      skills: [
        { name: "Machine Learning", level: "Advanced" },
        { name: "Deep Learning", level: "Advanced" },
        { name: "Explainable AI (Grad-CAM)", level: "Specialized" },
        { name: "Computer Vision", level: "Proficient" },
        { name: "Natural Language Processing", level: "Proficient" },
        { name: "Exploratory Data Analysis (EDA)", level: "Advanced" },
        { name: "Statistical Modeling", level: "Proficient" },
      ],
    },
    {
      id: "languages",
      title: "Programming Languages",
      description: "Core algorithms, data structures, and backend logic",
      accent: "cyan",
      skills: [
        { name: "Python", level: "Primary" },
        { name: "JavaScript (ES6+)", level: "Advanced" },
        { name: "Java", level: "Proficient" },
        { name: "SQL", level: "Advanced" },
        { name: "C", level: "Foundational" },
      ],
    },
    {
      id: "frameworks",
      title: "Frameworks & Libraries",
      description: "ML computation engines and modern application stacks",
      accent: "violet",
      skills: [
        { name: "PyTorch", level: "Primary ML" },
        { name: "TensorFlow & Keras", level: "Proficient" },
        { name: "Scikit-learn", level: "Advanced" },
        { name: "Pandas & NumPy", level: "Expert" },
        { name: "Matplotlib & Seaborn", level: "Advanced" },
        { name: "OpenCV", level: "Proficient" },
        { name: "React.js", level: "Advanced" },
        { name: "Node.js & Express.js", level: "Advanced" },
        { name: "Flask", level: "Proficient" },
        { name: "Plotly", level: "Proficient" },
      ],
    },
    {
      id: "data-cloud",
      title: "Data Platforms, Cloud & Tools",
      description: "Data warehousing, workflow orchestration, and DevOps",
      accent: "amber",
      skills: [
        { name: "MongoDB", level: "NoSQL" },
        { name: "MySQL", level: "RDBMS" },
        { name: "Azure & Cloud Tools", level: "Cloud" },
        { name: "Azure Data Factory", level: "ETL" },
        { name: "Azure Databricks", level: "Big Data" },
        { name: "Hadoop & Hive", level: "Distributed" },
        { name: "Git & GitHub", level: "Version Control" },
        { name: "Postman", level: "API Testing" },
        { name: "Google Colab & Jupyter", level: "Environments" },
        { name: "Power BI", level: "BI Dashboards" },
      ],
    },
    {
      id: "foundations",
      title: "Core CS & Engineering",
      description: "Academic rigor and scalable architectural patterns",
      accent: "blue",
      skills: [
        { name: "Object-Oriented Programming (OOP)", level: "Core" },
        { name: "Database Management Systems (DBMS)", level: "Core" },
        { name: "Operating Systems (OS)", level: "Core" },
        { name: "Computer Networks (CN)", level: "Core" },
        { name: "RESTful API Architecture", level: "Core" },
        { name: "JWT Role-Based Auth", level: "Security" },
      ],
    },
  ],
};

export const projectsData = [
  {
    id: "explainable-ai",
    number: "01",
    featured: true,
    flagship: true,
    period: "02/02/2026 – Current",
    title: "Explainable AI in Healthcare",
    tagline: "Brain Tumor Classification with Grad-CAM Visual Attribution Heatmaps",
    category: "Deep Learning & Medical Imaging",
    badge: "Flagship Research & Clinical AI",
    pipelineFlow: "PYTORCH & GRAD-CAM FLOW",
    accentGlow: "bg-cyan-500/10",
    overview:
      "A medical imaging deep learning system that classifies brain MRI scans into four tumor categories while generating Layer-wise Gradient-weighted Class Activation Maps (Grad-CAM) to visualize the exact spatial regions influencing the model's clinical inferences.",
    problem:
      "High classification accuracy alone is unacceptable in diagnostic radiology without verifiable interpretability. Black-box neural networks obscure potential false activations, undermining clinical adoption, diagnostic auditability, and patient safety.",
    solution:
      "Built a deep learning model in PyTorch to classify brain MRI scans into four tumor categories, integrating Grad-CAM to visualize the regions influencing predictions. Developed an interactive Streamlit application for prediction and explainability visualization, improving transparency of AI-assisted diagnosis.",
    architecture: [
      { step: "MRI Preprocessing", detail: "Resizing, normalization, and contrast enhancement across axial, sagittal, and coronal scans." },
      { step: "Tumor Classification", detail: "Convolutional neural network categorizing scans into 4 distinct tumor classes." },
      { step: "Grad-CAM Engine", detail: "Calculates feature map gradients at the final convolutional layer to identify salient regions." },
      { step: "Streamlit App Deployment", detail: "Real-time scan upload, confidence score bar, and side-by-side original vs. Grad-CAM overlay." },
    ],
    highlights: [
      "Developed a PyTorch deep learning model to classify brain MRI scans into four categories",
      "Integrated Grad-CAM visualizations and a Streamlit application for explainable predictions",
      "Multi-class categorization: Glioma, Meningioma, Pituitary tumor, and Healthy (No Tumor)",
      "Layer-wise Grad-CAM saliency heatmaps highlighting tumor boundaries for clinical auditability",
      "Interactive Streamlit web interface for prediction and explainability visualization, improving diagnostic transparency",
    ],
    technologies: ["Python", "PyTorch", "OpenCV", "Grad-CAM", "Deep Learning", "Streamlit", "NumPy", "Matplotlib"],
    metrics: [
      { label: "Tumor Classes", value: "4 Categories" },
      { label: "Interpretability", value: "Grad-CAM Saliency" },
      { label: "Deployment", value: "Streamlit UI" },
    ],
    github: "https://github.com/Mohammad-Amaan756/Explainable-AI-in-Healthcare",
    demo: null,
    inProgress: true,
  },
  {
    id: "hospital-management",
    number: "02",
    featured: true,
    flagship: true,
    period: "01/06/2026 – 14/07/2026",
    title: "AI-Powered Hospital Management System",
    tagline: "Full-Stack Clinical Operations ERP with Role-Based JWT Security & Gemini AI Triage",
    category: "Full-Stack Healthcare System",
    badge: "Flagship Full-Stack System",
    pipelineFlow: "MERN & GEMINI AI FLOW",
    accentGlow: "bg-emerald-500/10",
    overview:
      "A comprehensive, full-stack hospital management application engineered with React.js, Node.js, Express.js, and MongoDB. Features granular role-based authentication for patients, doctors, and administrators, alongside Google Gemini AI integration for preliminary symptom analysis and triage.",
    problem:
      "Healthcare institutions struggle with disjointed software modules where appointment scheduling, doctor availability, patient records, and emergency symptom triaging operate in silos without centralized access control.",
    solution:
      "Developed a secure full-stack hospital management system with role-based authentication for patients, doctors, and administrators, using JWT auth and REST APIs. Integrated Gemini AI for intelligent symptom analysis and preliminary health recommendations, with responsive dashboards.",
    architecture: [
      { step: "Role-Based Dashboards", detail: "Responsive React dashboards customized by authenticated user roles (Patients, Doctors, Admins)." },
      { step: "Secure API Layer", detail: "Node.js and Express.js RESTful APIs with JWT authentication, Bcrypt password hashing, and route protection." },
      { step: "Data Persistence Layer", detail: "Normalized MongoDB collections for doctor profiles, appointments, patient records, and triage logs." },
      { step: "Gemini AI Consultation", detail: "Integrated Google Gemini API for intelligent symptom analysis and preliminary health recommendations." },
    ],
    highlights: [
      "Developed a secure full-stack hospital management system with role-based authentication for patients, doctors, and administrators, using JWT auth and REST APIs",
      "Integrated Gemini AI for intelligent symptom analysis and preliminary health recommendations",
      "Implemented appointment booking, doctor management, patient records, and responsive dashboards",
      "Collaborated within a 6-member team to integrate backend services with the frontend and deliver core application modules",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini AI", "JWT", "REST APIs"],
    metrics: [
      { label: "Access Roles", value: "Patient, Doctor, Admin" },
      { label: "AI Integration", value: "Google Gemini API" },
      { label: "Architecture", value: "MERN + RESTful APIs" },
    ],
    github: "https://github.com/Mohammad-Amaan756/AI_Powered_Hospital_Mangement_System",
    demo: "https://ai-hospital-mangement-system.vercel.app/",
    inProgress: false,
  },
  {
    id: "urban-noise",
    number: "03",
    featured: true,
    flagship: true,
    period: "09/06/2025 – 14/07/2025",
    title: "Urban Noise Pattern Analysis",
    tagline: "Large-Scale Environmental Sound Analytics & Supervised Classification (57K+ Records)",
    category: "Data Science & Environmental Analytics",
    badge: "Internship Excellence Award",
    pipelineFlow: "ACOUSTIC ML & EDA FLOW",
    accentGlow: "bg-violet-500/10",
    overview:
      "A comprehensive data science project processing and analyzing 57,449 real-world acoustic records across geographic, temporal, and sound-event attributes to identify urban environmental noise patterns, with Logistic Regression and Random Forest classification.",
    problem:
      "Urban municipal agencies lack structured insights into peak acoustic disturbance events, temporal noise surges, and environmental compliance deviations across city zones from large, noisy sensor logs.",
    solution:
      "Developed an Urban Noise Pattern Analysis project with Python, Pandas, NumPy, Matplotlib, Seaborn, and Scikit-learn, processing and analyzing 57,449 records across geographic, temporal, and sound-event attributes. Built and evaluated Logistic Regression and Random Forest classification models using feature scaling and train-test validation.",
    architecture: [
      { step: "Acoustic Data Ingestion", detail: "Cleaned and processed 57,449 raw records across geographic coordinates, timestamps, and sound attributes." },
      { step: "Exploratory Data Analysis", detail: "Synthesized decibel distribution curves, temporal surges, and spatial correlation heatmaps." },
      { step: "Feature Engineering", detail: "Standardized decibel variance, temporal groupings, and spatial cluster features." },
      { step: "Supervised Classification", detail: "Trained and benchmarked Logistic Regression and Random Forest models with feature scaling and validation." },
    ],
    highlights: [
      "Analyzed 57,449 records using Python and data visualization libraries (Pandas, NumPy, Matplotlib, Seaborn) to identify urban noise patterns",
      "Applied Logistic Regression and Random Forest for classification with feature scaling and train-test validation",
      "Processed multi-dimensional attributes across geographic, temporal, and acoustic sound-event domains",
      "Awarded 'Best Intern of the Program' for exceptional commitment, initiative, and contributions during the Global Certification + Internship Program",
    ],
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
    metrics: [
      { label: "Dataset Scale", value: "57,449 Records" },
      { label: "ML Classifiers", value: "Random Forest & LogReg" },
      { label: "Recognition", value: "Best Intern Award" },
    ],
    github: "https://github.com/Mohammad-Amaan756/Urban_noise_pattern_analysis",
    demo: null,
    inProgress: false,
  },
];

export const researchData = {
  title: "Deep Learning Approaches for Automated Image Captioning: A Comprehensive Literature Survey & Comparative Analysis",
  area: "Multimodal AI · Computer Vision & Natural Language Processing",
  status: "Ongoing Research / Under Review",
  institution: "Integral University",
  focus: "Vision-Language Grounding, Cross-Attention Mechanisms, and Metric Benchmarking",
  abstract:
    "An exhaustive investigation into deep learning paradigms for automated image caption generation, tracing the architectural evolution from traditional CNN-LSTM encoder-decoder pipelines to modern Vision Transformer (ViT) and Large Multimodal Model (LMM) cross-attention frameworks. Evaluates representational bottlenecks, alignment fidelity, and semantic hallucinations across standard benchmarks.",
  keyPoints: [
    {
      title: "Architectural Taxonomy",
      description: "Classifies foundational frameworks across CNN-RNN, Attention-guided Encoder-Decoders, and Vision-Language Pre-training (VLP) hybrids.",
    },
    {
      title: "Metric Sensitivity Analysis",
      description: "Compares n-gram overlap metrics (BLEU, ROUGE, METEOR) against semantic-consensus metrics (CIDEr, SPICE) and CLIPScore alignment.",
    },
    {
      title: "Hallucination & Bias Bottlenecks",
      description: "Identifies recurring language prior biases where recurrent models generate plausible but factually ungrounded descriptions.",
    },
    {
      title: "Efficiency & Edge Feasibility",
      description: "Surveys parameter quantization and distilled vision backbones suitable for real-time edge deployment in assistive technology.",
    },
  ],
  keywords: ["Deep Learning", "Vision-Language", "Image Captioning", "Attention Mechanisms", "Transformers", "Multimodal AI"],
};

export const experienceData = [
  {
    company: "One Big Bit",
    location: "Integral University",
    role: "Backend & API Developer — Web Development",
    period: "2026",
    badge: "Engineering Role",
    description:
      "Contributed to core backend infrastructure for an AI-powered Hospital Management platform, focusing on high-reliability REST API development, database schemas, and generative AI triage integration.",
    responsibilities: [
      "Engineered robust RESTful endpoints with Node.js and Express to manage patient appointments, doctor availability, and electronic medical records.",
      "Architected normalized MongoDB schemas, indexes, controllers, and service-layer abstraction modules.",
      "Integrated the Google Gemini API to build an intelligent conversational triage chatbot for real-time symptom inquiries.",
      "Collaborated within an agile 6-member engineering team to integrate APIs with the frontend UI and ensure strict input validation.",
    ],
    skills: ["Node.js", "Express.js", "MongoDB", "Google Gemini AI", "RESTful APIs", "Team Collaboration"],
  },
  {
    company: "eTrainIndia",
    location: "Remote",
    role: "Data Science Intern — Global Certification + Internship Program",
    period: "2025",
    badge: "Award Winner: Best Intern of the Program",
    description:
      "Conducted extensive data engineering, statistical modeling, and machine learning classification on real-world environmental sound recording datasets, receiving the highest distinction of the cohort.",
    responsibilities: [
      "Cleaned, normalized, and explored an environmental dataset of 57,449 acoustic records across geographic, temporal, and sound-event attributes.",
      "Built and tuned Logistic Regression and Random Forest classification models using Scikit-learn with standard train-test validation and feature scaling.",
      "Constructed publication-grade statistical visualizations and correlation heatmaps with Matplotlib and Seaborn to communicate insights clearly.",
      "Awarded 'Best Intern of the Program' for exceptional technical capability, initiative, and analytical rigor throughout the program.",
    ],
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Data Science"],
  },
];

export const certificationsData = [
  {
    title: "Programming in Java",
    issuer: "NPTEL / IIT",
    category: "Programming & OOP",
    verified: true,
  },
  {
    title: "Data Science 101",
    issuer: "IBM",
    category: "Data Science Foundation",
    verified: true,
  },
  {
    title: "Statistics 101",
    issuer: "IBM",
    category: "Statistical Modeling",
    verified: true,
  },
  {
    title: "Data Visualization with Python",
    issuer: "IBM",
    category: "Visual Analytics",
    verified: true,
  },
  {
    title: "Data Science Tools",
    issuer: "IBM",
    category: "Data Ecosystem",
    verified: true,
  },
  {
    title: "Build Your Own Chatbot",
    issuer: "IBM",
    category: "Conversational AI",
    verified: true,
  },
  {
    title: "Cloud Application Developer",
    issuer: "IBM",
    category: "Cloud Computing",
    verified: true,
  },
];
