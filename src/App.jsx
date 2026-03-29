import React, { useEffect, useState } from "react";
import {
  Menu, X, Mail, Phone, ChevronRight, PenTool, Layout,
  MonitorSmartphone, CheckCircle2, Briefcase, Send, BarChart3,
  Users, TrendingUp, Sun, Moon, Linkedin, Globe, Download,
  Image as ImageIcon,
} from "lucide-react";

// ─── All images served from /public — zero build-time import errors ───────────

const NAV_LINKS = ["Home", "About", "Services", "Portfolio", "Experience", "Contact"];

const SERVICES = [
  {
    icon: <PenTool className="w-6 h-6" />,
    title: "Brand & Graphic Design",
    description: "Transforming ideas into high-converting visual assets.",
    items: ["Social Media Graphics", "Marketing Collateral", "Brand Visual Identity", "Event & Promo Posters"],
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: "Social Media Strategy",
    description: "Building engaged communities through consistent, data-driven content.",
    items: ["Content Calendar Planning", "Post Scheduling", "Copy & Caption Writing", "Engagement Analytics"],
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6" />,
    title: "Digital Marketing Support",
    description: "Streamlining your digital operations so you can focus on scaling.",
    items: ["Video & Shorts Editing", "Email Management", "Market Research", "Customer Support Setup"],
  },
];

const PORTFOLIO = [
  { title: "Francesca Cafe Branding",  category: "Brand Identity",       description: '"Brewing Soon" promotional campaign establishing core brand visuals.',                                  metric: "Successful launch with high local engagement",            image: "/projects/Francesca.jpg" },
  { title: "Facebook DP Blast",        category: "Social Media Campaign", description: "Dynamic event posters designed for university student organizations.",                                  metric: "+40% increase in student participation",                  image: "/projects/mikha.jpg"     },
  { title: "Conference Campaign",      category: "Corporate Marketing",   description: "Campaign posters for corporate events and professional conferences.",                                   metric: "Streamlined event registration process",                  image: "/projects/BCC.jpg"       },
  { title: "BSBA DAYS 2024",           category: "Event Branding",        description: "BINI Inspired Design for BSBA Students.",                                                             metric: "Boosted campus-wide visibility",                          image: "/projects/BSBA.jpg"      },
  { title: "Your Face Looks Familiar", category: "Event Design",          description: "Talent & Impersonation Showcase promotional assets.",                                                   metric: "Record-breaking event turnout",                           image: "/projects/Cma1.jpg"      },
  { title: "Chick and Hunk 2024",      category: "Event Design",          description: "Highlighting the charm and stage presence of BSBA participants.",                                       metric: "High social media interaction",                           image: "/projects/CH.jpg"        },
  { title: "SF Legends",               category: "Event Design",          description: "A bold social media campaign showcasing the elegant, floral-themed Rose Weapon Series.",                metric: "35% increase in direct-to-store purchases",               image: "/projects/sfl.jpg"       },
  { title: "SF Legends 2",             category: "Event Design",          description: "Elegant promotional materials for the classic, ornate Porcelain series.",                               metric: "Drove a 25% increase in overall daily revenue",           image: "/projects/sfl2.jpg"      },
  { title: "SF Legends 3",             category: "Event Design",          description: "Luxurious promotional assets for a collector-grade weapon with intricate metal scrollwork.",            metric: "Sold over 50,000 lotto spins within the first 48 hours", image: "/projects/sfl3.jpg"      },
];

const GRAPHIC_DESIGNS = [
  { title: "Overall Champion Poster", image: "/design/Champs.jpg",  metric: "High Engagement Visual"  },
  { title: "JFINEX Poster",           image: "/design/JFINEX1.jpg", metric: "Event Promotion"          },
  { title: "Streat Cafe Menu",        image: "/design/Streat.jpg",  metric: "Improved Ordering Speed"  },
];

const SKILL_CATEGORIES = [
  { name: "Design & Creative",    skills: ["Brand Identity", "Social Media Graphics", "UI/Layout Design", "Video Editing"]            },
  { name: "Marketing & Strategy", skills: ["Content Calendars", "Community Management", "Copywriting", "Analytics Reporting"]         },
  { name: "Business & Admin",     skills: ["Project Management", "Client Communication", "Financial Analysis", "Workflow Automation"] },
];

// ─── SafeImg: shows a coloured initial if the image fails to load ─────────────
const SafeImg = ({ src, alt, className }) => {
  const [errored, setErrored] = useState(false);
  if (errored) {
    return (
      <div
        className={className}
        style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          background: "rgba(14,165,233,0.15)", color: "#0EA5E9",
          fontWeight: 700, fontSize: 11, userSelect: "none",
        }}
      >
        {alt?.[0] ?? "?"}
      </div>
    );
  }
  return <img src={src} alt={alt} className={className} onError={() => setErrored(true)} />;
};

// ─── Navbar ──────────────────────────────────────────────────────────────────
const Navbar = ({ theme, setTheme }) => {
  const [isScrolled,     setIsScrolled]     = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handle = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--bg-primary)]/90 backdrop-blur-md shadow-sm border-b border-[var(--border-color)] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div
          className="text-2xl font-serif font-bold text-[var(--text-primary)] cursor-pointer"
          onClick={() => scrollTo("home")}
        >
          Cedrick<span className="text-[var(--primary-blue)]">.</span>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex space-x-8 items-center">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary-blue)] transition-colors"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 text-[var(--text-secondary)] hover:text-[var(--primary-blue)] transition-colors rounded-full hover:bg-[var(--bg-tertiary)]"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="px-5 py-2.5 bg-[var(--primary-blue)] text-white text-sm font-bold rounded-full hover:bg-[var(--primary-blue-dark)] transition-all shadow-lg"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 text-[var(--text-secondary)]"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button className="text-[var(--text-primary)]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[var(--bg-secondary)] shadow-lg border-t border-[var(--border-color)] py-4 flex flex-col px-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-left text-lg font-medium text-[var(--text-secondary)] hover:text-[var(--primary-blue)]"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

// ─── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [formStatus,    setFormStatus]    = useState(null);
  const [theme,         setTheme]         = useState("dark");
  const [selectedImage, setSelectedImage] = useState(null);

  // ─── DYNAMIC LOGOS (Switches based on Theme) ──────────────
  const dynamicLogos = [
    { src: theme === "light" ? "/logo/francescab.png" : "/logo/francesca.png", alt: "Francesca Cafe Logo", label: "Francesca Cafe" },
    { src: "/logo/streatc.png",   alt: "Streat Cafe Logo",    label: "Streat Cafe"    },
    { src: theme === "light" ? "/logo/mythb.png" : "/logo/mythw.png",     alt: "Myth Games Logo",     label: "Myth Games"     },
    { src: "/logo/sflegends.png", alt: "SF Legends Logo",     label: "SF Legends"     },
    { src: "/logo/jfinex.png",    alt: "JFINEX Logo",         label: "JFINEX PAU"     },
  ];

  // ─── DYNAMIC TOOLS (Switches based on Theme) ──────────────
  const dynamicTools = [
    { name: "Adobe Photoshop",  src: "/tech-icons/photoshop.png" },
    { name: "Canva Pro",        src: "/tech-icons/canva.png"     },
    { name: "Capcut",           src: "/tech-icons/capcut.png"    },
    { name: "Meta Business",    src: "/tech-icons/meta.png"      },
    // Example: If you upload a colored Google logo named "googleb.png" to your public/tech-icons folder, this will swap it!
    { name: "Google Workspace", src: theme === "light" ? "/tech-icons/googleb.png" : "/tech-icons/googlew.png" },
    { name: "Microsoft Office", src: "/tech-icons/microsoft.jpg" },
    { name: "Notion",           src: "/tech-icons/notion.png"    },
    { name: "Slack",            src: "/tech-icons/slack.jpg"     },
    { name: "n8n (Automation)", src: "/tech-icons/n8n.png"       },
    { name: "ChatGPT / AI",     src: "/tech-icons/chatgpt.png"   },
    { name: "Gemini",           src: "/tech-icons/gemini.png"    },
    { name: "Claude",           src: "/tech-icons/claude.png"    },
    { name: "Grammarly",        src: "/tech-icons/gram.png"      },
    { name: "Hostinger",        src: "/tech-icons/htgr.png"      },
    { name: "Visual Studio",    src: "/tech-icons/vsss.png"      },
  ];

  useEffect(() => {
    const handle = (e) => { if (e.key === "Escape") setSelectedImage(null); };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedImage]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus("success");
    setTimeout(() => setFormStatus(null), 3000);
    e.target.reset();
  };

  const openImage = (src, alt) => setSelectedImage({ src, alt });

  const themeStyles = `
    .theme-wrapper {
      --primary-blue: #0EA5E9;
      --primary-blue-dark: #0284c7;
      --bg-primary: #0a0e1a;
      --bg-secondary: #111827;
      --bg-tertiary: #1a2332;
      --text-primary: #ffffff;
      --text-secondary: #9ca3af;
      --text-tertiary: #6b7280;
      --border-color: rgba(255,255,255,0.05);
      --gradient-start: #1e3a8a;
      --gradient-end: #0a0e1a;
      --card-hover-shadow: rgba(14,165,233,0.15);
      background-color: var(--bg-primary);
      color: var(--text-primary);
      transition: background-color .3s ease, color .3s ease;
    }
    .theme-wrapper[data-theme="light"] {
      --primary-blue: #0284c7;
      --primary-blue-dark: #0369a1;
      --bg-primary: #f8fafc;
      --bg-secondary: #ffffff;
      --bg-tertiary: #f1f5f9;
      --text-primary: #0f172a;
      --text-secondary: #475569;
      --text-tertiary: #64748b;
      --border-color: rgba(0,0,0,0.08);
      --gradient-start: #e0f2fe;
      --gradient-end: #f8fafc;
      --card-hover-shadow: rgba(2,132,199,0.12);
    }
    .hover-card:hover {
      box-shadow: 0 10px 30px -5px var(--card-hover-shadow), 0 8px 10px -6px var(--card-hover-shadow);
      transform: translateY(-4px);
    }
  `;

  return (
    <div
      className="theme-wrapper min-h-screen font-sans selection:bg-[var(--primary-blue)] selection:text-white"
      data-theme={theme}
    >
      <style>{themeStyles}</style>
      <Navbar theme={theme} setTheme={setTheme} />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        id="home"
        className="pt-32 pb-16 md:pt-48 md:pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20"
      >
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-color)]">
            <span className="text-[var(--primary-blue)] font-bold text-xs tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for Freelance &amp; Full-time
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl md:leading-[1.1] font-serif font-bold text-[var(--text-primary)]">
            I design visuals &amp; strategies that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-blue)] to-blue-400">
              drive growth.
            </span>
          </h1>

          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
            I am a multifaceted Virtual Assistant specialising in Graphic Design and Social Media Management. I help
            businesses scale by taking creative and digital operations off their plate.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto px-8 py-3.5 bg-[var(--primary-blue)] text-white font-bold rounded-full hover:bg-[var(--primary-blue-dark)] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[var(--primary-blue)]/20"
            >
              Book a Discovery Call <ChevronRight className="w-4 h-4" />
            </button>
            <a
              href="/cv/SMM_Cedrick_Nuestro.pdf"
              download
              className="w-full sm:w-auto px-8 py-3.5 border-2 border-[var(--border-color)] text-[var(--text-primary)] font-bold rounded-full hover:bg-[var(--bg-tertiary)] hover:border-[var(--primary-blue)] transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" /> Download CV
            </a>
          </div>
        </div>

        <div className="flex-1 w-full max-w-md relative">
          <button
            type="button"
            onClick={() => openImage("/zaipas.jpg", "Cedrick - Creative Professional")}
            className="aspect-[4/5] w-full rounded-[2rem] overflow-hidden shadow-2xl relative border border-[var(--border-color)] group cursor-zoom-in block"
            aria-label="View full photo"
          >
            <SafeImg
              src="/zaipas.jpg"
              alt="Cedrick - Creative Professional"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-sm font-semibold flex items-center gap-2">
                <ImageIcon className="w-4 h-4" /> View Photo
              </div>
            </div>
          </button>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[var(--primary-blue)]/10 rounded-full blur-2xl -z-10" />
          <div className="absolute top-10 -right-10 w-24 h-24 bg-[var(--primary-blue)]/20 rounded-full blur-xl -z-10" />
        </div>
      </section>

      {/* ── Trusted By ────────────────────────────────────────────────────── */}
      <div className="border-y border-[var(--border-color)] bg-[var(--bg-primary)] py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-bold text-[var(--text-tertiary)] uppercase tracking-wider mb-8">
            Trusted by organisations &amp; brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20">
            {dynamicLogos.map(({ src, alt, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 group opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 cursor-default"
              >
                <SafeImg src={src} alt={alt} className="h-12 md:h-14 w-auto object-contain" />
                <span className="font-serif font-bold text-sm text-[var(--text-primary)] tracking-wide">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── About ─────────────────────────────────────────────────────────── */}
      <section id="about" className="py-20 md:py-32 bg-[var(--bg-tertiary)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-[var(--text-primary)]">
                The perfect blend of <span className="text-[var(--primary-blue)]">Creative</span> &amp;{" "}
                <span className="text-[var(--primary-blue)]">Business.</span>
              </h2>
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-6">
                Unlike traditional designers, my background in Financial Management gives me a unique perspective. I
                don&apos;t just make things look pretty—I design with a business objective in mind.
              </p>
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8">
                Whether you need a brand overhaul, a content calendar that actually converts, or an organised virtual
                assistant to manage the creative chaos, I bring efficiency and aesthetic excellence to your team.
              </p>
              <div className="flex gap-4">
                {[["4+", "Years Experience"], ["50+", "Projects Delivered"]].map(([num, label]) => (
                  <div key={label} className="p-4 bg-[var(--bg-secondary)] rounded-xl border border-[var(--border-color)] flex-1 text-center">
                    <p className="text-3xl font-bold text-[var(--primary-blue)] mb-1">{num}</p>
                    <p className="text-xs font-medium text-[var(--text-secondary)] uppercase">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[var(--bg-secondary)] p-8 rounded-2xl border border-[var(--border-color)] hover-card transition-all duration-300">
                <PenTool className="w-10 h-10 text-[var(--primary-blue)] mb-4" />
                <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)]">Visual Design</h3>
                <p className="text-[var(--text-secondary)] text-sm">Award-winning layouts, branding, and marketing collateral.</p>
              </div>
              <div className="bg-[var(--bg-secondary)] p-8 rounded-2xl border border-[var(--border-color)] hover-card transition-all duration-300 sm:translate-y-8">
                <BarChart3 className="w-10 h-10 text-[var(--primary-blue)] mb-4" />
                <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)]">ROI Focused</h3>
                <p className="text-[var(--text-secondary)] text-sm">Every post and design is crafted to drive engagement and sales.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────────────────── */}
      <section id="services" className="py-20 md:py-32 bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-[var(--text-primary)]">How I can help you</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">Comprehensive digital support tailored to scale your brand efficiently.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div key={index} className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl p-8 hover-card transition-all duration-300 flex flex-col">
                <div className="w-14 h-14 bg-[var(--primary-blue)]/10 rounded-xl flex items-center justify-center text-[var(--primary-blue)] mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[var(--text-primary)]">{service.title}</h3>
                <p className="text-[var(--text-secondary)] mb-6 text-sm">{service.description}</p>
                <ul className="mt-auto space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start text-[var(--text-secondary)]">
                      <CheckCircle2 className="w-5 h-5 text-[var(--primary-blue)] mr-3 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio ─────────────────────────────────────────────────────── */}
      <section id="portfolio" className="py-20 md:py-32 bg-[var(--bg-tertiary)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-[var(--text-primary)]">Selected Work</h2>
            <p className="text-[var(--text-secondary)] max-w-xl text-lg">A showcase of visual solutions designed to capture attention and deliver results.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO.map((item, index) => (
              <button
                key={index}
                type="button"
                onClick={() => openImage(item.image, item.title)}
                className="group flex flex-col rounded-2xl overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-color)] hover-card transition-all duration-300 cursor-zoom-in text-left"
                aria-label={`View full image of ${item.title}`}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <SafeImg src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-[var(--bg-primary)]/90 backdrop-blur-sm px-3 py-1 rounded-full border border-[var(--border-color)]">
                    <span className="text-[var(--primary-blue)] text-xs font-bold uppercase tracking-wider">{item.category}</span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-sm font-semibold flex items-center gap-2">
                      <ImageIcon className="w-4 h-4" /> View Full Photo
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-[var(--text-primary)] text-xl font-bold mb-2 group-hover:text-[var(--primary-blue)] transition-colors">{item.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm mb-4 flex-1">{item.description}</p>
                  <div className="flex items-center gap-2 pt-4 border-t border-[var(--border-color)] mt-auto">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-xs font-medium text-[var(--text-primary)]">{item.metric}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portrait Design ───────────────────────────────────────────────── */}
      <section id="graphic-design" className="py-20 md:py-32 bg-[var(--bg-primary)] border-t border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-[var(--text-primary)]">Portrait Design</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">High-impact vertical layouts and event posters.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {GRAPHIC_DESIGNS.map((item, index) => (
              <button
                key={index}
                type="button"
                onClick={() => openImage(item.image, item.title)}
                className="group relative rounded-2xl overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-color)] hover-card transition-all duration-300 cursor-zoom-in text-left"
                aria-label={`View full image of ${item.title}`}
              >
                <div className="aspect-[1/1.414] overflow-hidden relative">
                  <SafeImg src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-[var(--text-primary)] text-xl font-bold mb-2">{item.title}</h3>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-xs font-medium text-slate-200">{item.metric}</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="px-3 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-white text-xs font-semibold flex items-center gap-2">
                      <ImageIcon className="w-4 h-4" /> Full View
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience ────────────────────────────────────────────────────── */}
      <section id="experience" className="py-20 md:py-32 bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10 text-[var(--text-primary)] flex items-center gap-3">
              <Briefcase className="text-[var(--primary-blue)]" /> Professional Journey
            </h2>
            <div className="space-y-10 mb-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[var(--primary-blue)] before:to-transparent">
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[var(--bg-primary)] bg-[var(--primary-blue)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md" />
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[var(--bg-secondary)] p-6 rounded-2xl border border-[var(--border-color)] hover-card transition-all">
                  <div className="text-[var(--primary-blue)] font-bold text-sm mb-1 uppercase tracking-wider">2021 – Present</div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">Freelance Graphic Designer &amp; SMM</h3>
                  <div className="text-[var(--text-secondary)] text-sm space-y-2 mt-3">
                    <p>• Engineered brand identities and campaigns for clients like Francesca Cafe &amp; Streat Cafe.</p>
                    <p>• Managed end-to-end design deliverables, maintaining a 100% on-time delivery rate.</p>
                    <p>• Acted as primary client liaison, translating abstract ideas into concrete visual strategies.</p>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[var(--bg-primary)] bg-[var(--text-tertiary)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2" />
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[var(--bg-tertiary)] p-6 rounded-2xl border border-[var(--border-color)]">
                  <div className="text-[var(--text-tertiary)] font-bold text-sm mb-1 uppercase tracking-wider">June – Oct 2021</div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">Layout Artist</h3>
                  <p className="text-[var(--text-primary)] font-medium text-sm mb-2">One Stop Shop</p>
                  <p className="text-[var(--text-secondary)] text-sm">Prepared commercial print files and optimised layout workflows, ensuring zero-defect production runs.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10 text-[var(--text-primary)] flex items-center gap-3">
              <Users className="text-[var(--primary-blue)]" /> Education
            </h2>
            <div className="bg-[var(--bg-secondary)] p-6 rounded-2xl border border-[var(--border-color)]">
              <span className="text-sm font-bold text-[var(--primary-blue)] uppercase tracking-wider">Expected Grad: June 2026</span>
              <h3 className="text-xl font-bold mt-2 text-[var(--text-primary)]">BS in Business Administration</h3>
              <p className="text-[var(--text-secondary)] font-medium mb-2">PHINMA Araullo University — Major in Financial Management</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10 text-[var(--text-primary)]">Value Proposition</h2>
            <div className="space-y-8 mb-12">
              {SKILL_CATEGORIES.map((category, idx) => (
                <div key={idx}>
                  <h3 className="text-sm font-bold mb-4 uppercase tracking-wider text-[var(--text-secondary)] border-b border-[var(--border-color)] pb-2">
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-[var(--primary-blue)]/5 border border-[var(--primary-blue)]/20 rounded-lg text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--primary-blue)]/10 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-sm font-bold mb-4 uppercase tracking-wider text-[var(--text-secondary)] border-b border-[var(--border-color)] pb-2">
                Tech Stack &amp; Tools
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {dynamicTools.map((tool, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl hover:border-[var(--primary-blue)]/50 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-[var(--bg-tertiary)] shrink-0">
                      <SafeImg src={tool.src} alt={tool.name} className="w-5 h-5 object-contain" />
                    </div>
                    <span className="text-xs font-bold text-[var(--text-primary)] truncate">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ───────────────────────────────────────────────────────── */}
      <section id="contact" className="py-20 md:py-32 bg-[var(--bg-tertiary)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 bg-[var(--bg-secondary)] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-[var(--border-color)]">
          <div
            className="flex-1 p-10 md:p-16 flex flex-col justify-between relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))" }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6">
                Currently Accepting Projects
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">Let&apos;s build something great.</h2>
              <p className="text-slate-200 mb-12 text-lg">
                Whether you need a full rebrand, social media management, or a reliable VA, I&apos;m ready to help you scale.
              </p>
              <div className="space-y-8">
                {[
                  { icon: <Mail className="w-6 h-6" />,  label: "Drop me an email",  value: "nuestrocedrick@gmail.com", href: "mailto:nuestrocedrick@gmail.com" },
                  { icon: <Phone className="w-6 h-6" />, label: "Call or WhatsApp",  value: "+63 965 634 8665",         href: "tel:+639656348665"               },
                ].map(({ icon, label, value, href }) => (
                  <div key={href} className="flex items-center gap-5 group cursor-pointer">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-[var(--primary-blue)] transition-colors">
                      {icon}
                    </div>
                    <div>
                      <p className="text-sm text-slate-300 mb-1">{label}</p>
                      <a href={href} className="text-lg font-bold text-white group-hover:text-[var(--primary-blue)] transition-colors">{value}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 p-10 md:p-16 bg-[var(--bg-secondary)]">
            <h3 className="text-2xl font-bold mb-2 text-[var(--text-primary)]">Send a Proposal</h3>
            <p className="text-[var(--text-secondary)] mb-8 text-sm">Fill out the form below and I&apos;ll get back to you within 24 hours.</p>
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { label: "Your Name",     type: "text",  placeholder: "John Doe"        },
                  { label: "Email Address", type: "email", placeholder: "john@company.com" },
                ].map(({ label, type, placeholder }) => (
                  <div key={label}>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-2">{label}</label>
                    <input
                      required
                      type={type}
                      placeholder={placeholder}
                      className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] rounded-xl focus:outline-none focus:border-[var(--primary-blue)] focus:ring-1 focus:ring-[var(--primary-blue)] transition-all"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-2">What do you need help with?</label>
                <select className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] rounded-xl focus:outline-none focus:border-[var(--primary-blue)] focus:ring-1 focus:ring-[var(--primary-blue)] transition-all appearance-none">
                  {["Graphic Design", "Social Media Management", "Virtual Assistant Services", "Other"].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-2">Project Details</label>
                <textarea
                  required
                  rows="4"
                  placeholder="Tell me about your brand and what you are looking to achieve..."
                  className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] rounded-xl focus:outline-none focus:border-[var(--primary-blue)] focus:ring-1 focus:ring-[var(--primary-blue)] transition-all resize-none"
                />
              </div>

              {formStatus === "success" && (
                <div className="p-4 bg-green-500/10 border border-green-500/50 text-green-500 rounded-xl text-sm font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" /> Message sent! I&apos;ll review this shortly.
                </div>
              )}

              <button
                type="submit"
                className="w-full py-4 bg-[var(--text-primary)] text-[var(--bg-primary)] font-bold rounded-xl hover:bg-[var(--primary-blue)] hover:text-white transition-all duration-300 flex justify-center items-center gap-2 mt-4"
              >
                Submit Inquiry <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer className="bg-[var(--bg-primary)] py-12 border-t border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-serif font-bold text-[var(--text-primary)] mb-1">
              Cedrick<span className="text-[var(--primary-blue)]">.</span>
            </div>
            <p className="text-[var(--text-secondary)] text-sm">Strategic Design &amp; Digital Management</p>
          </div>
          <div className="flex gap-4">
            {[
              { href: "mailto:nuestrocedrick@gmail.com",                  icon: <Mail className="w-5 h-5" />,     label: "Email"    },
              { href: "https://www.linkedin.com/in/cedricknuestro/",      icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
              { href: "https://v2.onlinejobs.ph/jobseekers/info/4579627", icon: <Globe className="w-5 h-5" />,    label: "OLJ"      },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:bg-[var(--primary-blue)] hover:border-[var(--primary-blue)] transition-all"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 pt-8 border-t border-[var(--border-color)] flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-[var(--text-tertiary)] uppercase tracking-wider">
          <p>© {new Date().getFullYear()} Cedrick Nuestro.</p>
          <p>Available for global remote work.</p>
        </div>
      </footer>

      {/* ── Lightbox ──────────────────────────────────────────────────────── */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative flex items-center justify-center max-w-[95vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 z-[1001] text-white bg-black/50 hover:bg-black/70 rounded-full p-3 transition-colors"
              aria-label="Close image preview"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-[95vw] max-h-[90vh] object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}