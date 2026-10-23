
import { useState, useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  Menu,
  X,
  Download,
  Code2,
  Database,
  BrainCircuit,
  Terminal,
  ExternalLink,
  GraduationCap,
  BriefcaseBusiness,
  Hospital,
  MessageCircle,
  ChartNoAxesCombined,
  Sparkles,
  CloudSun,
  CheckCircle2,
} from "lucide-react";

const profile = {
  name: "Amir Khushroo",
  email: "amirkhushrootec@gmail.com",
  phone: "+91XXXXXXXXXX",
  github: "https://github.com/amirkhushroo",
  linkedin: "https://www.linkedin.com/in/amir-khushroo",
  photo: "/profile.jpg",
  resume: "/resume.pdf",
};

const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`;

const projects = [
  {
    number: "01",
    category: "AI · FULL-STACK",
    title: "AI Career Guidance",
    tagline: "Build a smarter career roadmap.",
    description:
      "A career guidance platform designed to compare resumes with job descriptions, identify skill gaps, and recommend personalized learning roadmaps and interview preparation resources.",
    technologies: ["React", "Node.js", "MongoDB", "AI API"],
    icon: BrainCircuit,
    status: "IN DEVELOPMENT",
    live: null,
  },
  {
    number: "02",
    category: "FULL-STACK · HEALTHCARE",
    title: "AI Hospital Management",
    tagline: "Simplifying healthcare workflows.",
    description:
      "A hospital management application featuring patient and doctor management, appointments, role-based access, report handling, and AI-assisted features.",
    technologies: ["MERN", "REST APIs", "Authentication"],
    icon: Hospital,
    status: "LIVE DEMO",
    live: "https://ai-hospital-mangement-system.vercel.app/",
  },
  {
    number: "03",
    category: "DATA ANALYTICS · FORECASTING",
    title: "Weather-Based Retail Forecasting",
    tagline: "Exploring weather and retail data.",
    description:
      "An internship project at E Train India focused on cleaning and preparing a retail dataset, making the data easier to interpret, and using diagrams and visualizations to present patterns and insights.",
    technologies: [
      "Data Cleaning",
      "Data Preparation",
      "Data Visualization",
      "Exploratory Analysis",
    ],
    icon: CloudSun,
    status: "INTERNSHIP PROJECT",
    live: null,
  },
  {
    number: "04",
    category: "AI · CHATBOT",
    title: "Chatbot Application",
    tagline: "A conversational web experience.",
    description:
      "A web-based chatbot project focused on interactive conversations, API integration, and a straightforward user experience.",
    technologies: ["React", "JavaScript", "API Integration"],
    icon: MessageCircle,
    status: "LIVE DEMO",
    live: "https://project-chatbot-1.netlify.app/",
  },
  {
    number: "05",
    category: "DATA · ANALYTICS",
    title: "Data Analysis Lab",
    tagline: "Finding useful insights in data.",
    description:
      "Data analysis practice covering data preparation, exploratory data analysis, visualizations, and communicating insights.",
    technologies: ["Python", "Pandas", "NumPy", "SQL"],
    icon: ChartNoAxesCombined,
    status: "LEARNING & PRACTICE",
    live: null,
  },
];

const skillGroups = [
  {
    icon: Code2,
    title: "Development",
    subtitle: "Building web applications",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "REST APIs"],
  },
  {
    icon: Database,
    title: "Data Analytics",
    subtitle: "Making data understandable",
    skills: ["Python", "SQL", "Pandas", "NumPy", "Data Cleaning", "EDA", "Matplotlib"],
  },
  {
    icon: BrainCircuit,
    title: "AI & Tools",
    subtitle: "Connecting ideas with technology",
    skills: ["AI Integration", "Prompt Design", "MongoDB", "Git & GitHub", "Postman", "Problem-Solving"],
  },
];

function SectionLabel({ number, children }) {
  return (
    <div className="mb-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
      <span className="text-violet-300">{number}</span>
      <span className="h-px w-8 bg-zinc-700" />
      <span>{children}</span>
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Experience", "#experience"],
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#090b12]/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#home" aria-label="Amir Khushroo home" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-violet-400/40 text-xs font-extrabold text-violet-300 transition group-hover:bg-violet-400 group-hover:text-black">
            AR
          </span>
          <span className="text-sm font-bold tracking-wide">
            Amir Khushroo
            <span className="ml-1 hidden text-zinc-600 sm:inline">/ PORTFOLIO</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="text-xs text-zinc-400 transition hover:text-violet-300">
              {label}
            </a>
          ))}
          <a href="#contact" className="rounded-full border border-violet-400/30 px-4 py-2.5 text-xs font-semibold transition hover:border-violet-300 hover:bg-violet-400/10 hover:text-violet-200">
            Let's talk <ArrowUpRight className="ml-1 inline" size={13} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-lg border border-white/10 p-2 md:hidden"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#090b12] px-5 py-4 md:hidden">
          {[...links, ["Contact", "#contact"]].map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)} className="block py-3 text-sm text-zinc-300 transition hover:text-violet-300">
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section id="home" className="hero-modern relative overflow-hidden border-b border-white/[0.07] pt-[68px]">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="hero-ribbon hero-ribbon-one" />
      <div className="hero-ribbon hero-ribbon-two" />
      <div className="hero-grid" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[650px] lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-20">
        <div className="hero-intro relative z-20">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.06] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            CSE · DATA SCIENCE · AI
          </div>

          <p className="mb-2 text-sm text-zinc-400">Hello, welcome to my portfolio</p>

          <h1 className="text-[clamp(3.5rem,7.5vw,6.4rem)] font-extrabold leading-[0.96] tracking-[-0.075em]">
            Hi, I'm
            <br />
            <span className="hero-gradient-text">Amir Khushroo</span>
          </h1>

          <h2 className="mt-4 text-lg font-semibold text-violet-200 sm:text-xl">
            Full-Stack Developer & AI Enthusiast
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-400 sm:text-base">
            I build web applications and explore data analytics and artificial
            intelligence to turn ideas into useful digital experiences.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#projects" className="hero-primary-button inline-flex items-center gap-2 rounded-lg px-5 py-3.5 text-sm font-bold text-white">
              View My Work <ArrowUpRight size={17} />
            </a>
            <a href={profile.resume} download className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.02] px-5 py-3.5 text-sm font-semibold text-zinc-200 transition hover:border-violet-400/50 hover:bg-white/[0.05]">
              <Download size={16} /> Download Resume
            </a>
          </div>

          <div className="mt-12 grid max-w-lg grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              ["05", "Featured Projects"],
              ["03", "Skill Areas"],
              ["02", "Internships"],
              ["∞", "Always Learning"],
            ].map(([number, label]) => (
              <div key={label} className="border-l border-violet-400/30 pl-3">
                <p className="text-2xl font-extrabold tracking-tight text-violet-200">{number}</p>
                <p className="mt-1 text-[11px] leading-4 text-zinc-500">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-portrait-wrap relative mx-auto w-full max-w-[440px] lg:ml-auto">
          <div className="hero-portrait-aura" />
          <div className="hero-portrait-ring" />
          <div className="hero-portrait relative z-10 aspect-[0.88] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#11111b]">
            {!photoFailed ? (
              <img
                src={profile.photo}
                alt="Amir Khushroo"
                onError={() => setPhotoFailed(true)}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-violet-950 via-[#10121b] to-blue-950">
                <span className="text-8xl font-black tracking-[-0.1em] text-white">
                  A<span className="text-violet-400">R</span>
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080912]/95 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-violet-300">CSE · Data Science · AI</p>
              <p className="mt-2 text-2xl font-bold text-white">Curious by default.</p>
              <p className="mt-1 text-sm text-zinc-300">Learn. Build. Improve.</p>
            </div>
          </div>

          <div className="hero-floating-card absolute -bottom-5 -left-3 z-20 rounded-xl border border-white/10 bg-[#141522]/95 p-4 shadow-2xl backdrop-blur-xl sm:-left-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-400/10 text-violet-300">
                <Terminal size={19} />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Always learning</p>
                <p className="mt-1 font-mono text-[9px] text-zinc-500">LEARN / BUILD / REPEAT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function About() {
  const focusAreas = [
    {
      number: "01",
      icon: Code2,
      title: "Full-Stack Development",
      description:
        "Building web applications with React, Node.js, Express, databases, and API integrations.",
      tags: ["React", "Node.js", "REST APIs"],
    },
    {
      number: "02",
      icon: BrainCircuit,
      title: "Artificial Intelligence",
      description:
        "Exploring AI-powered applications and integrating AI capabilities into practical projects.",
      tags: ["AI Integration", "Prompt Design"],
    },
    {
      number: "03",
      icon: Database,
      title: "Data Analytics",
      description:
        "Cleaning datasets, exploring patterns, and communicating insights through visualizations.",
      tags: ["Python", "Pandas", "Data Visualization"],
    },
  ];

  return (
    <section id="about" className="about-cinematic section-modern relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="about-glow about-glow-one" aria-hidden="true" />
      <div className="about-glow about-glow-two" aria-hidden="true" />
      <div className="about-grid" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        {/* Section heading */}
        <div className="scroll-reveal">
          <SectionLabel number="01">About me</SectionLabel>

          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-violet-300">
                The person behind the code
              </p>

              <h2 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-[-0.065em] sm:text-6xl">
                Curious mind.
                <br />
                <span className="about-gradient-text">
                  Practical builder.
                </span>
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-7 text-zinc-400 sm:text-base lg:justify-self-end">
              I'm a Computer Science student interested in building useful
              software, exploring artificial intelligence, and turning raw
              data into insights people can understand.
            </p>
          </div>
        </div>

        {/* Main introduction and education */}
        <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="about-intro-card scroll-reveal relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-9">
            <div className="about-card-shine" aria-hidden="true" />

            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-300/20 bg-violet-300/[0.07] text-violet-300">
                  <Sparkles size={20} />
                </span>

                <div>
                  <p className="text-sm font-bold text-white">A little about me</p>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.15em] text-zinc-500">
                    Learn · Build · Improve
                  </p>
                </div>
              </div>

              <p className="text-base leading-8 text-zinc-300 sm:text-lg">
                I'm <span className="font-semibold text-white">Amir Khushroo</span>,
                pursuing a B.Tech in Computer Science and Engineering with a
                specialization in Data Science and Artificial Intelligence at
                Integral University, Lucknow.
              </p>

              <p className="mt-5 text-sm leading-7 text-zinc-400">
                Through internships and projects, I've gained exposure to
                full-stack development, API integration, AI-powered
                applications, and data analysis. At E Train India, I worked
                on a weather-based retail forecasting project, focusing on
                data cleaning, preparation, and making information easier to
                interpret through diagrams and visualizations.
              </p>

              <p className="mt-5 text-sm leading-7 text-zinc-400">
                My goal is to keep strengthening my technical skills and
                build projects that solve practical problems.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Problem-Solving",
                  "Continuous Learning",
                  "Team Collaboration",
                ].map((item) => (
                  <span
                    key={item}
                    className="about-pill rounded-full border border-white/10 bg-black/20 px-3 py-2 text-[10px] text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <article
            className="about-education-card scroll-reveal relative overflow-hidden rounded-3xl border border-violet-300/15 bg-[#11111c] p-6 sm:p-8"
            style={{ "--reveal-delay": "100ms" }}
          >
            <div className="about-education-glow" aria-hidden="true" />

            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center justify-between gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-300/20 bg-violet-300/[0.08] text-violet-300">
                  <GraduationCap size={23} />
                </span>

                <span className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-zinc-400">
                  Education
                </span>
              </div>

              <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-violet-300">
                My academic foundation
              </p>

              <h3 className="mt-3 text-2xl font-bold leading-snug tracking-[-0.04em] text-white">
                B.Tech in Computer Science & Engineering
              </h3>

              <p className="mt-4 text-sm leading-6 text-zinc-300">
                Specialization in Data Science and Artificial Intelligence
              </p>

              <div className="mt-6 rounded-xl border border-white/[0.07] bg-black/20 p-4">
                <p className="text-sm font-semibold text-zinc-200">
                  Integral University
                </p>
                <p className="mt-1 text-xs text-zinc-500">
                  Lucknow, Uttar Pradesh
                </p>
              </div>

              <div className="mt-auto flex items-center gap-2 pt-7 text-xs text-zinc-400">
                <span className="h-2 w-2 rounded-full bg-violet-400" />
                Focused on learning and practical projects
              </div>
            </div>
          </article>
        </div>

        {/* Technical interests */}
        <div className="mt-16 scroll-reveal">
          <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-violet-300">
                What drives me
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-[-0.04em] sm:text-3xl">
                Areas I'm exploring.
              </h3>
            </div>

            <p className="max-w-sm text-xs leading-6 text-zinc-500">
              Three connected interests shaping the kind of developer I want to become.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {focusAreas.map(({ number, icon: Icon, title, description, tags }, index) => (
              <article
                key={number}
                className="about-focus-card scroll-reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6"
                style={{ "--reveal-delay": `${index * 100}ms` }}
              >
                <div className="about-focus-glow" aria-hidden="true" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-300/20 bg-violet-300/[0.06] text-violet-300 transition-colors duration-200 group-hover:bg-violet-300/[0.12]">
                      <Icon size={21} />
                    </span>

                    <span className="font-mono text-xs text-zinc-600">
                      /{number}
                    </span>
                  </div>

                  <h4 className="mt-6 text-lg font-bold text-zinc-100">
                    {title}
                  </h4>

                  <p className="mt-3 min-h-[84px] text-sm leading-7 text-zinc-400">
                    {description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/[0.08] px-2.5 py-1.5 font-mono text-[9px] text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <div className="about-bottom-line scroll-reveal mt-10 flex flex-col gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 text-violet-300">
              <BrainCircuit size={20} />
            </span>

            <div>
              <p className="text-sm font-semibold text-zinc-200">
                Always curious about what's possible.
              </p>
              <p className="mt-1 text-xs leading-5 text-zinc-500">
                Learning new tools, improving my approach, and building step by step.
              </p>
            </div>
          </div>

          <a
            href="#projects"
            className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-violet-300 transition-colors hover:text-violet-200"
          >
            Explore my projects <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}



function Skills() {
  const skillGroups = [
    {
      number: "01",
      icon: Code2,
      title: "Web Development",
      description: "Building responsive web applications and APIs.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "Express.js",
        "REST APIs",
      ],
    },
    {
      number: "02",
      icon: Database,
      title: "Data Analytics",
      description: "Preparing, exploring, and understanding data.",
      skills: [
        "Python",
        "SQL",
        "Pandas",
        "NumPy",
        "Data Cleaning",
        "Exploratory Data Analysis",
        "Matplotlib",
      ],
    },
    {
      number: "03",
      icon: BrainCircuit,
      title: "AI & Development Tools",
      description: "Integrating AI and using tools for development.",
      skills: [
        "AI Integration",
        "Prompt Design",
        "MongoDB",
        "Git & GitHub",
        "Postman",
        "Problem-Solving",
      ],
    },
  ];

  return (
    <section id="skills" className="skills-modern section-modern">
      <div className="skills-container">
        <div className="skills-heading scroll-reveal">
          <SectionLabel>MY TECHNICAL TOOLKIT</SectionLabel>

          <h2>
            Skills that turn
            <span className="skills-gradient-text"> ideas into reality.</span>
          </h2>

          <p>
            Technologies and tools I use to explore data, build applications,
            and work on AI-powered solutions.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <article
                key={group.number}
                className="skills-card scroll-reveal"
                style={{ "--skill-delay": `${index * 100}ms` }}
              >
                <div className="skills-card-top">
                  <div className="skills-icon">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <span className="skills-number">{group.number}</span>
                </div>

                <h3>{group.title}</h3>
                <p className="skills-description">{group.description}</p>

                <div className="skills-divider" />

                <div className="skills-tags">
                  {group.skills.map((skill) => (
                    <span className="skills-tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="skills-bottom-note scroll-reveal">
          <span className="skills-status-dot" />
          <p>
            Continuously learning, building, and improving through practical
            projects.
          </p>
        </div>
      </div>
    </section>
  );
}


/* Cinematic Projects section */

function Projects() {
  return (
    <section
      id="projects"
      className="projects-modern border-b border-white/[0.07]"
    >
      <div className="projects-container mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <SectionLabel number="03">Selected work</SectionLabel>

        <div className="projects-heading mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-sky-300">
              Projects & experiments
            </p>

            <h2 className="max-w-2xl text-4xl font-bold tracking-[-0.06em] sm:text-5xl lg:text-6xl">
              Ideas becoming{" "}
              <span className="projects-gradient-text">projects.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-zinc-400">
            A selection of my work across full-stack development, AI
            integration, and data analytics.
          </p>
        </div>

        <div className="projects-grid grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <article
                key={project.number}
                className="project-card group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#101317] p-6 sm:p-7"
                style={{ "--project-delay": `${index * 90}ms` }}
              >
                {/* Ambient background glow */}
                <div className="project-card-glow" aria-hidden="true" />

                {/* Project number and icon */}
                <div className="project-card-top relative flex items-center justify-between">
                  <span className="project-icon flex h-12 w-12 items-center justify-center rounded-xl">
                    <Icon size={23} strokeWidth={1.7} />
                  </span>

                  <span className="project-number font-mono text-xs">
                    PROJECT / {project.number}
                  </span>
                </div>

                <p className="project-category relative mt-7 font-mono text-[10px] uppercase tracking-[0.15em]">
                  {project.category}
                </p>

                <h3 className="project-title relative mt-3 text-xl font-bold tracking-[-0.035em] sm:text-2xl">
                  {project.title}
                </h3>

                <p className="project-tagline relative mt-2 text-sm font-medium">
                  {project.tagline}
                </p>

                <p className="project-description relative mt-4 flex-1 text-sm leading-7">
                  {project.description}
                </p>

                {/* Technology tags */}
                <div className="project-tech-list relative mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="project-tech-tag rounded-lg border px-2.5 py-2 text-[11px]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Status and available action */}
                <div className="project-card-footer relative mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] pt-5">
                  <span className="project-status inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.1em]">
                    <span
                      className={`project-status-dot ${
                        project.live ? "is-live" : "is-progress"
                      }`}
                    />
                    {project.status}
                  </span>

                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} live demo in a new tab`}
                      className="project-demo-link inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold"
                    >
                      View demo
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="project-progress-label inline-flex items-center gap-2 text-xs">
                      <Sparkles size={14} />
                      In progress
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div className="projects-bottom-note mt-8 flex items-start gap-3 rounded-xl border border-white/[0.07] px-4 py-4 sm:items-center sm:px-5">
          <Sparkles size={17} className="mt-0.5 shrink-0 text-sky-300 sm:mt-0" />

          <p className="text-xs leading-6">
            Each project represents an opportunity to learn, experiment, and
            improve my development and analytical skills.
          </p>
        </div>
      </div>
    </section>
  );
}



function Experience() {
  const internships = [
    {
      number: "01",
      company: "One Big Bit",
      category: "INTERNSHIP",
      focus: "MERN · AI · Team collaboration",
      description:
        "Gained exposure to MERN-stack development, AI integration, and collaborative software development practices.",
      icon: Code2,
      tags: ["MERN Stack", "AI Integration", "Collaboration"],
    },
    {
      number: "02",
      company: "E Train India",
      category: "INTERNSHIP",
      focus: "Data analysis · Retail forecasting",
      description:
        "Worked on a weather-based retail forecasting project, helping clean and prepare data and present information through visualizations to make it easier to understand.",
      icon: ChartNoAxesCombined,
      tags: ["Python", "Data Preparation", "Visualization"],
    },
  ];

  return (
    <section
      id="experience"
      className="experience-modern border-b border-white/[0.07]"
    >
      <div className="experience-container mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <SectionLabel number="04">Experience & education</SectionLabel>

        <div className="experience-heading mb-10 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-sky-300">
              My journey so far
            </p>

            <h2 className="text-4xl font-bold tracking-[-0.06em] sm:text-5xl">
              Learning by{" "}
              <span className="experience-gradient-text">doing.</span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-zinc-400 lg:ml-auto">
            My journey combines academic learning, internship exposure, and
            practical project work across software development, AI, and data.
          </p>
        </div>

        {/* Internship experience */}
        <div className="mb-12">
          <h3 className="mb-5 flex items-center gap-3 text-lg font-bold text-zinc-100">
            <span className="experience-heading-icon">
              <BriefcaseBusiness size={19} />
            </span>
            Internship experience
          </h3>

          <div className="experience-grid grid gap-5 md:grid-cols-2">
            {internships.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="experience-card group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#101317] p-6 sm:p-7"
                  style={{ "--experience-delay": `${index * 100}ms` }}
                >
                  <div
                    className="experience-card-glow"
                    aria-hidden="true"
                  />

                  <div className="relative flex items-start justify-between gap-3">
                    <span className="experience-icon">
                      <Icon size={22} strokeWidth={1.7} />
                    </span>

                    <span className="experience-number font-mono text-xs">
                      /{item.number}
                    </span>
                  </div>

                  <div className="relative mt-6 flex flex-wrap items-center justify-between gap-3">
                    <h4 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                      {item.company}
                    </h4>

                    <span className="experience-badge">
                      {item.category}
                    </span>
                  </div>

                  <p className="experience-focus relative mt-3 font-mono text-[10px] uppercase leading-5 tracking-[0.12em]">
                    {item.focus}
                  </p>

                  <p className="experience-description relative mt-4 flex-1 text-sm leading-7">
                    {item.description}
                  </p>

                  <div className="relative mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="experience-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Education timeline */}
        <div className="education-panel relative overflow-hidden rounded-2xl border border-white/10 p-6 sm:p-8">
          <div className="education-panel-glow" aria-hidden="true" />

          <div className="relative flex items-center gap-3">
            <span className="experience-heading-icon">
              <GraduationCap size={22} />
            </span>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-sky-300">
                Academic background
              </p>
              <h3 className="mt-1 text-xl font-bold text-white">
                Education
              </h3>
            </div>
          </div>

          <div className="education-timeline relative mt-7">
            <div className="education-timeline-line" />

            <article className="education-entry relative pl-8 sm:pl-10">
              <span className="education-timeline-dot" />

              <p className="font-mono text-[10px] uppercase tracking-[0.13em] text-sky-300">
                B.Tech · Final year
              </p>

              <h4 className="mt-2 text-lg font-bold leading-snug text-white sm:text-xl">
                Computer Science and Engineering
              </h4>

              <p className="mt-2 text-sm leading-6 text-zinc-300">
                Specialization in Data Science and Artificial Intelligence
              </p>

              <p className="mt-3 text-sm text-zinc-400">
                Integral University, Lucknow
              </p>
            </article>
          </div>
        </div>

        <div className="experience-bottom-note mt-7 flex items-start gap-3 sm:items-center">
          <Sparkles size={17} className="mt-1 shrink-0 text-sky-300 sm:mt-0" />
          <p className="text-xs leading-6">
            Focused on learning, building practical skills, and growing as a
            software and data professional.
          </p>
        </div>
      </div>
    </section>
  );
}


function Contact() {
  return (
    <section id="contact" className="contact-modern relative overflow-hidden">
      <div className="contact-glow contact-glow-one" aria-hidden="true" />
      <div className="contact-glow contact-glow-two" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <SectionLabel number="05">Get in touch</SectionLabel>

        <div className="contact-layout mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="min-w-0">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-sky-300">
              Have an idea? Let's connect.
            </p>

            <h2 className="max-w-3xl text-5xl font-extrabold leading-[1.04] tracking-[-0.065em] sm:text-6xl lg:text-7xl">
              Let's build something{" "}
              <span className="contact-gradient-text">meaningful.</span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-zinc-400 sm:text-base">
              I'm interested in internships, early-career opportunities, and
              collaborating on projects involving software development, data,
              and AI.
            </p>

            <a
  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    profile.email
  )}`}
  target="_blank"
  rel="noreferrer"
  className="contact-email-button mt-8 inline-flex max-w-full items-center justify-center gap-3 rounded-xl px-5 py-4 text-sm font-bold sm:px-6"
>
  <Mail size={18} />
  <span>Send me an email</span>
  <ArrowUpRight size={18} className="shrink-0" />
</a>

            <p className="mt-4 break-all font-mono text-xs text-zinc-500">
              {profile.email}
            </p>
          </div>

          <div className="contact-links-panel relative overflow-hidden rounded-2xl border border-white/10 p-5 sm:p-7">
            <div className="contact-panel-shine" aria-hidden="true" />

            <div className="relative">
              <div className="mb-6 flex items-center justify-between gap-3">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-sky-300">
                    Online presence
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-white">
                    Find me online
                  </h3>
                </div>

                <span className="contact-status-dot" title="Open to connecting" />
              </div>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="contact-social-card group"
              >
                <span className="contact-social-icon">
                  <Github size={21} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block font-semibold text-zinc-100">
                    GitHub
                  </span>
                  <span className="mt-1 block break-all text-xs text-zinc-500">
                    @amirkhushroo
                  </span>
                </span>

                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-zinc-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-300"
                />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="contact-social-card group"
              >
                <span className="contact-social-icon">
                  <Linkedin size={21} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block font-semibold text-zinc-100">
                    LinkedIn
                  </span>
                  <span className="mt-1 block text-xs text-zinc-500">
                    Professional network
                  </span>
                </span>

                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-zinc-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-300"
                />
              </a>

              <div className="contact-note mt-6 rounded-xl border border-white/[0.07] p-4">
                <p className="text-sm font-medium text-zinc-200">
                  Have an opportunity or project?
                </p>
                <p className="mt-2 text-xs leading-6 text-zinc-500">
                  Feel free to reach out. I'd be happy to connect and discuss
                  how we can work together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default function App() {
  useEffect(() => {
    document.title = "Amir Khushroo | Portfolio";

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Amir Khushroo — Computer Science student exploring software development, data analytics, and AI."
      );
    }

    const elements = document.querySelectorAll(".scroll-reveal");

    // Keep content visible by default. Reveal effects are progressive enhancement.
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "0px 0px 100px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#090b12] text-zinc-100">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-violet-300 focus:p-3 focus:text-black">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
<footer className="border-t border-white/[0.07] bg-[#080a10]">
  <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
    <a href="#home" className="flex items-center gap-2 text-xs font-bold tracking-wide">
      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-violet-400/40 text-[10px] text-violet-300">
        AR
      </span>
      Amir Khushroo
    </a>

    <p className="font-mono text-[10px] text-zinc-600">
      LEARN · BUILD · GROW · © {new Date().getFullYear()}
    </p>

    <a href="#home" className="text-xs text-zinc-500 transition hover:text-violet-300">
      Back to top ↑
    </a>
  </div>
</footer>

    </div>
  );
}
