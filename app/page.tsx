"use client";

import { useState } from "react";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X } from "lucide-react";

type Category = "All" | "Full-stack" | "Systems";

const projects = [
  {
    number: "01",
    name: "AquaFlow",
    category: "Full-stack",
    kind: "Delivery platform",
    description: "A delivery platform with independent microservices, an API gateway that routes requests, and JWT authentication.",
    tags: ["React", "Redux", "Node.js", "MySQL"],
    mark: "AF",
    tone: "pink",
    source: "https://github.com/themud2001/Graduation-Project",
  },
  {
    number: "02",
    name: "NextCart",
    category: "Full-stack",
    kind: "E-commerce application",
    description: "An e-commerce app with a product catalogue, cart, and order flow backed by a MongoDB document model.",
    tags: ["React", "Redux", "Express", "MongoDB"],
    mark: "NC",
    tone: "plum",
    source: "https://github.com/themud2001/eCommerce",
  },
  {
    number: "03",
    name: "Text Editor",
    category: "Systems",
    kind: "Desktop software",
    description: "A text editor written from scratch against the Win32 API, with full UTF-8 support and custom buffer handling.",
    tags: ["C++", "Win32 API", "UTF-8"],
    mark: "TE",
    tone: "graphite",
    source: "https://github.com/themud2001/TextEditor",
  },
  {
    number: "04",
    name: "Blog System",
    category: "Full-stack",
    kind: "Publishing application",
    description: "A multi-user blogging system with post authoring and management, built without frameworks.",
    tags: ["PHP", "MySQL", "HTML", "CSS"],
    mark: "BS",
    tone: "plum",
    source: "",
  },
  {
    number: "05",
    name: "MAMKWIC",
    category: "Full-stack",
    kind: "E-learning platform",
    description: "An e-learning platform for uploading, managing, and delivering courses.",
    tags: ["Django", "Python", "MySQL"],
    mark: "MK",
    tone: "graphite",
    source: "",
  },
  {
    number: "06",
    name: "Ticket System",
    category: "Systems",
    kind: "MVC application",
    description: "A traffic-violation system for issuing, amending, and revoking citations, structured with the MVC pattern.",
    tags: ["Java", "Servlets", "MVC", "MySQL"],
    mark: "TS",
    tone: "pink",
    source: "",
  },
] as const;

const experience = [
  {
    role: "Backend Engineer",
    company: "SeveralBrands",
    period: "Jan 2025 — Present",
    description: [
      "Build and maintain Node.js / Express.js microservices that ingest, validate, and route high-volume lead submissions on an engineering team of 15+.",
      "Designed a standardized Redis cache-key generator producing deterministic, namespace-scoped keys, making invalidation predictable and cutting the computational cost of bulk key removal.",
      "Introduced BullMQ message queues to move heavy processing off the request path, improving throughput and reducing response times.",
      "Modeled and optimized PostgreSQL access with Knex and Objection.js query builders, and MongoDB collections with Mongoose.",
      "Migrated auto-generated PostGraphile GraphQL queries to Platformatic, tightening query-level security and reducing over-fetching.",
      "Synchronized core datasets into OpenSearch, cutting search and lookup latency for user-facing queries.",
      "Integrated Stripe for payments, Slack and Novu for notifications, and Sentry for error tracking.",
    ],
    tags: ["Node.js", "BullMQ", "Redis", "PostgreSQL", "GraphQL", "OpenSearch"],
  },
  {
    role: "C++ Network Engineer",
    company: "OT Masters",
    period: "Jun 2024 — Jan 2025",
    description: [
      "Reverse-engineered network protocols by analyzing RFC specifications alongside live packet captures taken in Wireshark via the Npcap driver.",
      "Implemented protocol handling in C++ with libtins, writing custom data structures from scratch where standard containers could not meet performance requirements.",
      "Parallelized the processing pipeline using POSIX threads (pthread), increasing sustained packet throughput.",
      "Engineered a heartbeat-based failure-detection and self-healing supervisor that spawns child processes to restart the system automatically, removing manual recovery.",
    ],
    tags: ["C++", "TCP/IP", "libtins", "pthread"],
  },
  {
    role: "Full-Stack Developer",
    company: "Envent Australia Pty Ltd",
    period: "Sep 2021 — Jan 2022",
    description: [
      "Built an interactive hospital navigation system deployed across kiosks in multiple zones of the facility.",
      "Implemented the underlying graph model and route-finding logic in Node.js, persisting nodes, edges, and coordinate data in MongoDB.",
      "Developed the touch-optimized kiosk interface in React.",
    ],
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    role: "Programming Instructor",
    company: "Udemy",
    period: "Apr 2018 — Present",
    description: [
      "Authored and published 5+ programming courses reaching an audience of 24,000+ students worldwide.",
      "Created a curriculum spanning Node.js, React, Python, PHP, C++, and core web technologies including HTML, CSS, and JavaScript.",
      "Distill complex engineering concepts into structured, practical material, applying the same clarity to technical documentation and code review at work.",
    ],
    tags: ["Teaching", "24,000+ students", "Web development"],
  },
];

const skills = [
  { title: "Backend & APIs", items: ["Node.js", "Express", "Fastify", "Java / Spring", "Django", "REST", "GraphQL", "Microservices"] },
  { title: "Frontend", items: ["React", "Redux", "JavaScript", "HTML / CSS", "SASS / SCSS", "Responsive UI"] },
  { title: "Data & infrastructure", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "BullMQ", "OpenSearch", "AWS", "Docker"] },
  { title: "Systems & tools", items: ["C++", "TCP/IP", "libtins", "pthread", "Nginx", "Git", "Mocha / Chai"] },
];

const nav = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
];

export default function Home() {
  const [filter, setFilter] = useState<Category>("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleProjects = projects.filter((project) => filter === "All" || project.category === filter);

  return (
    <main>
      <a className="skip-link" href="#content">Skip to content</a>
      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#top" aria-label="Moath Zayadneh, back to top">M<span>.</span>Z</a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <a className="header-email" href="mailto:moathzayadneh@gmail.com"><Mail size={16} strokeWidth={1.8} /> moathzayadneh@gmail.com</a>
          <button className="menu-button" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{nav.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}<ArrowUpRight size={16} /></a>)}<a href="mailto:moathzayadneh@gmail.com" onClick={() => setMenuOpen(false)}>Contact<ArrowUpRight size={16} /></a></nav>}
      </header>

      <div id="content">
        <section className="hero shell" id="top" aria-labelledby="hero-title">
          <div className="hero-content">
            <div className="eyebrow"><span className="eyebrow-line" /> MOATH ZAYADNEH</div>
            <h1 id="hero-title">Software Engineer</h1>
            <p className="hero-lead">As a <strong>backend engineer with 3+ years of professional experience</strong>, I build distributed Node.js services and high-performance C++ network systems. My work spans microservices, message-driven processing, caching, and query optimization—from React interfaces down to hand-rolled TCP/IP implementations.</p>
            <a className="hero-email" href="mailto:moathzayadneh@gmail.com"><Mail size={18} strokeWidth={1.8} /> moathzayadneh@gmail.com <ArrowUpRight size={18} strokeWidth={1.8} /></a>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={18} strokeWidth={1.8} /></a>
              <a className="text-link" href="#experience">View experience <ArrowRight size={17} strokeWidth={1.8} /></a>
            </div>
          </div>
          <div className="hero-aside" aria-hidden="true">
            <div className="hero-art"><div className="art-ring art-ring-one" /><div className="art-ring art-ring-two" /><div className="art-core">M<span>Z</span></div><span className="art-cross art-cross-one">+</span><span className="art-cross art-cross-two">+</span></div>
            <div className="hero-art-caption"><span>01 / ENGINEER & CREATOR</span><span>AMMAN, JORDAN</span></div>
          </div>
          <div className="hero-bottom"><span>FULL-STACK · BACKEND · SYSTEMS</span><span>SCROLL TO EXPLORE <ArrowDownRight size={14} /></span></div>
        </section>

        <section className="section section-projects" id="projects" aria-labelledby="projects-title">
          <div className="shell">
            <div className="section-heading"><div><p className="section-kicker"><span>01</span> / SELECTED WORK</p><h2 id="projects-title">Projects<span className="accent-dot">.</span></h2></div><p className="section-intro">A selection of things I&apos;ve built, from full-stack applications to software closer to the metal.</p></div>
            <div className="project-toolbar"><div className="filters" role="group" aria-label="Filter projects">{(["All", "Full-stack", "Systems"] as Category[]).map((item) => <button key={item} type="button" className={filter === item ? "filter active" : "filter"} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}<span>{item === "All" ? projects.length : projects.filter((project) => project.category === item).length}</span></button>)}</div><span className="results-count">SHOWING {String(visibleProjects.length).padStart(2, "0")} PROJECTS</span></div>
            <div className="project-grid">{visibleProjects.map((project) => <article className="project-card" key={project.name}><div className={`project-visual tone-${project.tone}`}><span className="visual-index">PROJECT / {project.number}</span><div className="project-glyph"><span>{project.mark}</span><i /></div><span className="visual-kind">{project.kind}</span></div><div className="project-meta"><span>{project.category.toUpperCase()}</span><span>{project.number} / 0{projects.length}</span></div><h3>{project.name}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>{project.source && <a className="project-source" href={project.source} target="_blank" rel="noopener noreferrer">View source <ArrowUpRight size={15} /></a>}</article>)}</div>
          </div>
        </section>

        <section className="section section-experience" id="experience" aria-labelledby="experience-title"><div className="shell"><div className="section-heading"><div><p className="section-kicker"><span>02</span> / WHERE I&apos;VE WORKED</p><h2 id="experience-title">Experience<span className="accent-dot">.</span></h2></div><p className="section-intro">Backend platforms, high-throughput networking, hospital wayfinding, and teaching at scale.</p></div><div className="experience-list">{experience.map((item, index) => <article className="experience-item" key={item.company}><div className="experience-index">0{index + 1}</div><div className="experience-main"><div className="experience-title-row"><div><p className="experience-company">{item.company}</p><h3>{item.role}</h3></div><span className="experience-period">{item.period}</span></div><ul className="experience-description">{item.description.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul><div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><ArrowUpRight className="experience-arrow" size={21} strokeWidth={1.5} /></article>)}</div></div></section>

        <section className="section section-skills" id="skills" aria-labelledby="skills-title"><div className="shell"><div className="section-heading"><div><p className="section-kicker"><span>03</span> / MY TOOLKIT</p><h2 id="skills-title">Skills<span className="accent-dot">.</span></h2></div><p className="section-intro">Tools and technologies I use to design, build, and maintain dependable software.</p></div><div className="skills-grid">{skills.map((group, index) => <div className="skill-group" key={group.title}><div className="skill-group-head"><span>0{index + 1}</span><h3>{group.title}</h3></div><div className="skill-items">{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div></div></section>

        <section className="about-section" id="about" aria-labelledby="about-title"><div className="shell about-grid"><div><p className="section-kicker"><span>04</span> / A LITTLE ABOUT ME</p><h2 id="about-title">Curiosity drives<br /><em>the work.</em></h2></div><div className="about-copy"><p>I&apos;m a software engineer who enjoys working across layers—from responsive React interfaces to distributed backend services and low-level C++ networking. I focus on clear architecture, performance, and making complex systems easier to use.</p><p>I&apos;ve taught more than 24,000 students through programming courses on Udemy. I hold a B.Sc. in Computer Engineering from Jordan University of Science and Technology.</p><a className="text-link" href="https://github.com/themud2001" target="_blank" rel="noopener noreferrer">Explore my GitHub <ArrowUpRight size={17} /></a></div></div></section>

        <footer className="footer" id="contact"><div className="shell"><p className="section-kicker"><span>05</span> / GET IN TOUCH</p><div className="footer-main"><div><h2>Have something<br /><em>in mind?</em></h2><p>Let&apos;s make it happen.</p></div><a className="footer-mail" href="mailto:moathzayadneh@gmail.com" aria-label="Email Moath Zayadneh"><ArrowUpRight size={38} strokeWidth={1.4} /></a></div><a className="email-link" href="mailto:moathzayadneh@gmail.com">moathzayadneh@gmail.com</a><div className="footer-bottom"><span>© {new Date().getFullYear()} MOATH ZAYADNEH</span><div><a href="https://github.com/themud2001" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={19} /></a><a href="https://www.linkedin.com/in/moath-zayadneh" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a><a href="mailto:moathzayadneh@gmail.com" aria-label="Email"><Mail size={19} /></a></div><a href="#top">BACK TO TOP ↑</a></div></div></footer>
      </div>
    </main>
  );
}
