import React, { useEffect, useMemo, useState } from "react";
import {
  Menu,
  X,
  Mail,
  Phone,
  ChevronRight,
  PenTool,
  Layout,
  MonitorSmartphone,
  CheckCircle2,
  Briefcase,
  Send,
  BarChart3,
  Users,
  TrendingUp,
  Sun,
  Moon,
  Linkedin,
  Globe,
  Download,
  Image as ImageIcon,
  Award,
  ExternalLink,
  Calendar,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "Funnels", id: "funnels" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Experience", id: "experience" },
  { label: "Certifications", id: "certifications" },
  { label: "Contact", id: "contact" },
];

const SERVICES = [
  {
    icon: Layout,
    title: "Funnel Design",
    description: "High-converting landing pages and lead generation funnels tailored to specific industries.",
    items: [
      "Landing Page Design",
      "Lead Capture Layouts",
      "Conversion-Focused CTA Structure",
      "Case Study Style Portfolio Mockups",
    ],
  },
  {
    icon: PenTool,
    title: "Brand & Graphic Design",
    description: "Transforming ideas into high-converting visual assets.",
    items: [
      "Social Media Graphics",
      "Marketing Collateral",
      "Brand Visual Identity",
      "Event & Promo Posters",
    ],
  },
  {
    icon: MonitorSmartphone,
    title: "Social Media Strategy",
    description: "Building engaged communities through consistent, data-driven content.",
    items: [
      "Content Calendar Planning",
      "Post Scheduling",
      "Copy & Caption Writing",
      "Engagement Analytics",
    ],
  },
];

const FUNNELS = [
  {
    title: "Gym Lead Generation Funnel",
    category: "Fitness Funnel",
    description: "Designed to convert visitors into trial gym members with a clear CTA and lead form structure.",
    metric: "Lead generation focused",
    image: "/funnels/gym.jpg",
  },
  {
    title: "Dental Appointment Funnel",
    category: "Dental Funnel",
    description: "A clean, trust-based landing page built to generate patient appointments for dental clinics.",
    metric: "Appointment booking ready",
    image: "/funnels/dental.jpg",
  },
  {
    title: "Real Estate Funnel",
    category: "Real Estate Funnel",
    description: "A high-converting property funnel created to capture qualified buyer and seller leads.",
    metric: "Qualified lead capture",
    image: "/funnels/realestate.jpg",
  },
  {
    title: "SF Legends Funnel",
    category: "Web3 Game Funnel",
    description: "A high-converting game funnel designed to drive player acquisition, engagement, and retention.",
    metric: "Player acquisition optimization",
    image: "/funnels/sfl.jpg",
  },
  {
    title: "Francesca Cafe Funnel",
    category: "Cafe Funnel",
    description: "A conversion-focused cafe funnel built to attract customers, promote menu items, and increase store visits.",
    metric: "Customer conversion optimization.",
    image: "/funnels/cafe.jpg",
  },
  {
    title: "Automation Website Funnel",
    category: "Automation Web Funnel",
    description: "A high-performance funnel designed to showcase automation solutions and convert businesses into clients.",
    metric: "Lead generation and client acquisition",
    image: "/funnels/automation.jpg",
  },
];

const PORTFOLIO = [
  {
    title: "Francesca Cafe Branding",
    category: "Brand Identity",
    description: '"Brewing Soon" promotional campaign establishing core brand visuals.',
    metric: "Successful launch with high local engagement",
    image: "/projects/Francesca.jpg",
  },
  {
    title: "Facebook DP Blast",
    category: "Social Media Campaign",
    description: "Dynamic event posters designed for university student organizations.",
    metric: "+40% increase in student participation",
    image: "/projects/mikha.jpg",
  },
  {
    title: "Conference Campaign",
    category: "Corporate Marketing",
    description: "Campaign posters for corporate events and professional conferences.",
    metric: "Streamlined event registration process",
    image: "/projects/BCC.jpg",
  },
  {
    title: "BSBA Days 2024",
    category: "Event Branding",
    description: "BINI-inspired design for BSBA students.",
    metric: "Boosted campus-wide visibility",
    image: "/projects/BSBA.jpg",
  },
  {
    title: "Your Face Looks Familiar",
    category: "Event Design",
    description: "Talent and impersonation showcase promotional assets.",
    metric: "Record-breaking event turnout",
    image: "/projects/Cma1.jpg",
  },
  {
    title: "Chick and Hunk 2024",
    category: "Event Design",
    description: "Highlighting the charm and stage presence of BSBA participants.",
    metric: "High social media interaction",
    image: "/projects/CH.jpg",
  },
  {
    title: "Rose Weapon Series Campaign",
    category: "Game Campaign",
    description: "A bold social media campaign showcasing the floral-themed Rose Weapon Series.",
    metric:
      "Increased engagement and improved click-through rates through visually distinctive design and targeted audience appeal.",
    image: "/projects/sfl.jpg",
  },
  {
    title: "Porcelain Weapon Series Campaign",
    category: "Game Campaign",
    description: "Elegant promotional materials for the classic ornate Porcelain series.",
    metric: "Boosted audience interest and content interaction by introducing a fresh, non-traditional design style.",
    image: "/projects/sfl2.jpg",
  },
  {
    title: "AK-74 Premium Weapon Campaign",
    category: "Game Campaign",
    description: "Luxurious promotional assets for a collector-grade weapon with intricate metal scrollwork.",
    metric:
      "Increased user curiosity and in-game engagement through premium positioning and detailed product presentation.",
    image: "/projects/sfl3.jpg",
  },
  {
    title: "24K PSG-1 Event Campaign",
    category: "Game Campaign",
    description:
      "High-converting event creative highlighting premium weapon rewards. Designed to drive urgency and increase in-game purchases.",
    metric:
      "Improved conversion intent and player participation through urgency-driven messaging and strong visual hierarchy.",
    image: "/projects/sfl4.jpg",
  },
  {
    title: "SF Legends Tournament Campaign",
    category: "Game Campaign",
    description: "Event-focused campaign designed to promote competitive gameplay and tournament participation.",
    metric: "Leveraged dynamic character composition and strong prize emphasis.",
    image: "/projects/sfl5.jfif",
  },
  {
    title: "Game Launch",
    category: "Game Campaign",
    description: "Launch visuals created to introduce the game and build anticipation across platforms.",
    metric: "Improved click-through rates and install intent through clear call-to-action and platform-focused design.",
    image: "/projects/sfl6.jpg",
  },
];

const GRAPHIC_DESIGNS = [
  { title: "Overall Champion Poster", image: "/design/Champs.jpg", metric: "High Engagement Visual" },
  { title: "JFINEX Poster", image: "/design/JFINEX1.jpg", metric: "Event Promotion" },
  { title: "Streat Cafe Menu", image: "/design/Streat.jpg", metric: "Improved Ordering Speed" },
];

const SKILL_CATEGORIES = [
  {
    name: "Design & Creative",
    skills: ["Funnel Design", "Brand Identity", "Social Media Graphics", "UI/Layout Design", "Video Editing"],
  },
  {
    name: "Marketing & Strategy",
    skills: ["Lead Generation", "Content Calendars", "Community Management", "Copywriting", "Analytics Reporting"],
  },
  {
    name: "Business & Admin",
    skills: ["Project Management", "Client Communication", "Financial Analysis", "Workflow Automation"],
  },
];

const CERTIFICATIONS = [
  {
    title: "Social Media Marketing II Certified",
    issuer: "HubSpot Academy",
    date: "May 2026 – Jun 2028",
    credential: "https://app-na2.hubspot.com/academy/achievements/b4gkfktl/en/1/cedrick-nuestro/social-media-marketing-certification-ii",
    description:
      "Certified in applying next-level inbound social media marketing strategies including strategic planning, storytelling, community-led growth, social commerce, cookieless advertising, and short-form video creation.",
    badge: "🏅",
  },
  {
    title: "Social Media Certified",
    issuer: "HubSpot Academy",
    date: "May 2026 – Jun 2028",
    credential: "https://app-na2.hubspot.com/academy/achievements/vdgqxrv7/en/1/cedrick-nuestro/social-media-marketing",
    description:
      "Certified in applying inbound social media strategy including social monitoring, content strategy, social engagement, creating social media policies, and demonstrating social ROI to stakeholders.",
    badge: "🏅",
  },
];

function SafeImg({ src, alt, className }) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className={className}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(14,165,233,0.15)",
          color: "#0EA5E9",
          fontWeight: 700,
          fontSize: 11,
          userSelect: "none",
        }}
      >
        {alt?.[0] ?? "?"}
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} loading="lazy" onError={() => setErrored(true)} />;
}

function Navbar({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-[var(--bg-primary)]/90 backdrop-blur-md shadow-sm border-b border-[var(--border-color)] py-4"
        : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <button
          type="button"
          className="text-2xl font-serif font-bold text-[var(--text-primary)] cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          Cedrick<span className="text-[var(--primary-blue)]">.</span>
        </button>

        <div className="hidden md:flex space-x-8 items-center">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary-blue)] transition-colors"
            >
              {link.label}
            </button>
          ))}

          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 text-[var(--text-secondary)] hover:text-[var(--primary-blue)] transition-colors rounded-full hover:bg-[var(--bg-tertiary)]"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="px-5 py-2.5 bg-[var(--primary-blue)] text-white text-sm font-bold rounded-full hover:bg-[var(--primary-blue-dark)] transition-all shadow-lg"
          >
            Hire Me
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 text-[var(--text-secondary)]"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            type="button"
            className="text-[var(--text-primary)]"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[var(--bg-secondary)] shadow-lg border-t border-[var(--border-color)] py-4 flex flex-col px-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              className="text-left text-lg font-medium text-[var(--text-secondary)] hover:text-[var(--primary-blue)]"
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="mt-2 px-5 py-3 bg-[var(--primary-blue)] text-white text-sm font-bold rounded-full hover:bg-[var(--primary-blue-dark)] transition-all"
          >
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
}

export default function App() {
  const [formStatus, setFormStatus] = useState(null);
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("portfolio-theme") || "dark";
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Funnel Design",
    details: "",
  });

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const dynamicLogos = useMemo(
    () => [
      {
        src: theme === "light" ? "/logo/francescab.png" : "/logo/francesca.png",
        alt: "Francesca Cafe Logo",
        label: "Francesca Cafe",
      },
      { src: "/logo/streatc.png", alt: "Streat Cafe Logo", label: "Streat Cafe" },
      {
        src: theme === "light" ? "/logo/mythb.png" : "/logo/mythw.png",
        alt: "Myth Games Logo",
        label: "Myth Games",
      },
      { src: "/logo/sflegends.png", alt: "SF Legends Logo", label: "SF Legends" },
      { src: "/logo/jfinex.png", alt: "JFINEX Logo", label: "JFINEX PAU" },
    ],
    [theme]
  );

  const dynamicTools = useMemo(
    () => [
      { name: "Adobe Photoshop", src: "/tech-icons/photoshop.png" },
      { name: "Canva Pro", src: "/tech-icons/canva.png" },
      { name: "CapCut", src: "/tech-icons/capcut.png" },
      { name: "Meta Business", src: "/tech-icons/meta.png" },
      { name: "Google Workspace", src: "/tech-icons/googlew.png" },
      { name: "Microsoft Office", src: "/tech-icons/microsoft.jpg" },
      { name: "Notion", src: "/tech-icons/notion.png" },
      { name: "Slack", src: "/tech-icons/slack.jpg" },
      { name: "n8n (Automation)", src: "/tech-icons/n8n.png" },
      { name: "ChatGPT / AI", src: "/tech-icons/chatgpt.png" },
      { name: "Gemini", src: "/tech-icons/gemini.png" },
      { name: "Claude", src: "/tech-icons/claude.png" },
      { name: "Grammarly", src: "/tech-icons/gram.png" },
      { name: "Hostinger", src: "/tech-icons/htgr.png" },
      { name: "Visual Studio", src: "/tech-icons/vsss.png" },
    ],
    []
  );

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setFormStatus("success");
    setTimeout(() => setFormStatus(null), 3000);
    setFormData({
      name: "",
      email: "",
      service: "Funnel Design",
      details: "",
    });
  };

  const openImage = (src, alt) => setSelectedImage({ src, alt });
  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const themeStyles = `
    .theme-wrapper {
      --primary-blue: #0ea5e9;
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
    .hover-card {
      transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
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
      <Navbar theme={theme} toggleTheme={toggleTheme} />

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
            I design visuals, funnels &amp; strategies that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-blue)] to-blue-400">
              drive growth.
            </span>
          </h1>

          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
            I’m Cedrick, a funnel designer, graphic designer, and social media marketer helping businesses,
            gaming communities, and personal brands create visuals and systems that attract attention,
            generate leads, and support real growth.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <button
              type="button"
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

      <section id="funnels" className="py-20 md:py-28 bg-[var(--bg-secondary)] border-y border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-[var(--text-primary)]">
              High-Converting Funnels
            </h2>
            <p className="text-[var(--text-secondary)] max-w-3xl mx-auto text-lg leading-relaxed">
              Funnels designed for different industries to generate leads, support conversions, and position brands more professionally online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FUNNELS.map((item) => (
              <button
                key={item.title}
                type="button"
                onClick={() => openImage(item.image, item.title)}
                className="group flex flex-col rounded-2xl overflow-hidden bg-[var(--bg-primary)] border border-[var(--border-color)] hover-card cursor-zoom-in text-left"
                aria-label={`View full image of ${item.title}`}
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <SafeImg
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[var(--bg-primary)]/90 backdrop-blur-sm px-3 py-1 rounded-full border border-[var(--border-color)]">
                    <span className="text-[var(--primary-blue)] text-xs font-bold uppercase tracking-wider">{item.category}</span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-sm font-semibold flex items-center gap-2">
                      <ImageIcon className="w-4 h-4" /> View Funnel
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-[var(--text-primary)] text-xl font-bold mb-2 group-hover:text-[var(--primary-blue)] transition-colors">
                    {item.title}
                  </h3>
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

      <section id="about" className="py-20 md:py-32 bg-[var(--bg-tertiary)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-[var(--text-primary)]">
                The perfect blend of <span className="text-[var(--primary-blue)]">Creative</span> &amp;{" "}
                <span className="text-[var(--primary-blue)]">Business.</span>
              </h2>
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-6">
                My background in Financial Management gives me a practical edge. I don’t just make things look good —
                I design with business goals, audience attention, and conversion in mind.
              </p>
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8">
                Whether you need a brand refresh, a lead generation funnel, or dependable creative support, I bring
                structure, speed, and visual consistency to every project.
              </p>
              <div className="flex gap-4 flex-wrap sm:flex-nowrap">
                {[["4+", "Years Experience"], ["50+", "Projects Delivered"]].map(([num, label]) => (
                  <div
                    key={label}
                    className="p-4 bg-[var(--bg-secondary)] rounded-xl border border-[var(--border-color)] flex-1 text-center min-w-[150px]"
                  >
                    <p className="text-3xl font-bold text-[var(--primary-blue)] mb-1">{num}</p>
                    <p className="text-xs font-medium text-[var(--text-secondary)] uppercase">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[var(--bg-secondary)] p-8 rounded-2xl border border-[var(--border-color)] hover-card">
                <Layout className="w-10 h-10 text-[var(--primary-blue)] mb-4" />
                <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)]">Funnel Design</h3>
                <p className="text-[var(--text-secondary)] text-sm">
                  Landing pages and conversion-focused funnel visuals built to generate more leads.
                </p>
              </div>
              <div className="bg-[var(--bg-secondary)] p-8 rounded-2xl border border-[var(--border-color)] hover-card transition-all duration-300 sm:translate-y-8">
                <BarChart3 className="w-10 h-10 text-[var(--primary-blue)] mb-4" />
                <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)]">ROI Focused</h3>
                <p className="text-[var(--text-secondary)] text-sm">
                  Every design choice supports visibility, engagement, and business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 md:py-32 bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-[var(--text-primary)]">How I can help you</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
              Comprehensive creative and digital support tailored to help your brand grow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl p-8 hover-card flex flex-col"
                >
                  <div className="w-14 h-14 bg-[var(--primary-blue)]/10 rounded-xl flex items-center justify-center text-[var(--primary-blue)] mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-[var(--text-primary)]">{service.title}</h3>
                  <p className="text-[var(--text-secondary)] mb-6 text-sm">{service.description}</p>
                  <ul className="mt-auto space-y-3">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start text-[var(--text-secondary)]">
                        <CheckCircle2 className="w-5 h-5 text-[var(--primary-blue)] mr-3 shrink-0 mt-0.5" />
                        <span className="text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 md:py-32 bg-[var(--bg-tertiary)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-[var(--text-primary)]">Selected Work</h2>
            <p className="text-[var(--text-secondary)] max-w-xl text-lg">
              A showcase of visual solutions designed to capture attention and deliver results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO.map((item) => (
              <button
                key={item.title}
                type="button"
                onClick={() => openImage(item.image, item.title)}
                className="group flex flex-col rounded-2xl overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-color)] hover-card cursor-zoom-in text-left"
                aria-label={`View full image of ${item.title}`}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <SafeImg
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
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
                  <h3 className="text-[var(--text-primary)] text-xl font-bold mb-2 group-hover:text-[var(--primary-blue)] transition-colors">
                    {item.title}
                  </h3>
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

      <section id="graphic-design" className="py-20 md:py-32 bg-[var(--bg-primary)] border-t border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-[var(--text-primary)]">Portrait Design</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">High-impact vertical layouts and event posters.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {GRAPHIC_DESIGNS.map((item) => (
              <button
                key={item.title}
                type="button"
                onClick={() => openImage(item.image, item.title)}
                className="group relative rounded-2xl overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-color)] hover-card cursor-zoom-in text-left"
                aria-label={`View full image of ${item.title}`}
              >
                <div className="aspect-[1/1.414] overflow-hidden relative">
                  <SafeImg
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
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

      <section id="experience" className="py-20 md:py-32 bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10 text-[var(--text-primary)] flex items-center gap-3">
              <Briefcase className="text-[var(--primary-blue)]" /> Professional Journey
            </h2>
            <div className="space-y-10 mb-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[var(--primary-blue)] before:to-transparent">
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[var(--bg-primary)] bg-[var(--primary-blue)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md" />
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[var(--bg-secondary)] p-6 rounded-2xl border border-[var(--border-color)] hover-card">
                  <div className="text-[var(--primary-blue)] font-bold text-sm mb-1 uppercase tracking-wider">2021 – Present</div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">Freelance Funnel Designer, Graphic Designer &amp; SMM</h3>
                  <div className="text-[var(--text-secondary)] text-sm space-y-2 mt-3">
                    <p>• Built brand identities, landing page concepts, and campaigns for cafés, student organizations, gaming communities, and lead generation use cases.</p>
                    <p>• Managed end-to-end design deliverables with consistent turnaround and client communication.</p>
                    <p>• Turned abstract client ideas into clear visuals, funnel structures, and practical content strategies.</p>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[var(--bg-primary)] bg-[var(--text-tertiary)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2" />
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[var(--bg-tertiary)] p-6 rounded-2xl border border-[var(--border-color)]">
                  <div className="text-[var(--text-tertiary)] font-bold text-sm mb-1 uppercase tracking-wider">June – Oct 2021</div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">Layout Artist</h3>
                  <p className="text-[var(--text-primary)] font-medium text-sm mb-2">One Stop Shop</p>
                  <p className="text-[var(--text-secondary)] text-sm">
                    Prepared commercial print files and improved layout workflows for smooth production output.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10 text-[var(--text-primary)] flex items-center gap-3">
              <Users className="text-[var(--primary-blue)]" /> Education
            </h2>
            <div className="bg-[var(--bg-secondary)] p-6 rounded-2xl border border-[var(--border-color)]">
              <span className="text-sm font-bold text-[var(--primary-blue)] uppercase tracking-wider">Expected Graduation: June 2026</span>
              <h3 className="text-xl font-bold mt-2 text-[var(--text-primary)]">BS in Business Administration</h3>
              <p className="text-[var(--text-secondary)] font-medium mb-2">
                PHINMA Araullo University — Major in Financial Management
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10 text-[var(--text-primary)]">Value Proposition</h2>
            <div className="space-y-8 mb-12">
              {SKILL_CATEGORIES.map((category) => (
                <div key={category.name}>
                  <h3 className="text-sm font-bold mb-4 uppercase tracking-wider text-[var(--text-secondary)] border-b border-[var(--border-color)] pb-2">
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
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
                {dynamicTools.map((tool) => (
                  <div
                    key={tool.name}
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

      <section id="certifications" className="py-20 md:py-32 bg-[var(--bg-tertiary)] border-t border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-color)] mb-6">
              <Award className="w-4 h-4 text-[var(--primary-blue)]" />
              <span className="text-[var(--primary-blue)] font-bold text-xs tracking-wider uppercase">Verified Credentials</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-[var(--text-primary)]">
              Certifications & Training
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg leading-relaxed">
              Continuous learning backed by industry-recognized certifications from leading platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.title}
                className="group bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl p-8 hover-card flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary-blue)]/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[var(--primary-blue)]/10 transition-colors duration-500" />

                <div className="flex items-start gap-4 mb-4 relative z-10">
                  <div className="w-14 h-14 bg-[var(--primary-blue)]/10 rounded-xl flex items-center justify-center text-2xl shrink-0 group-hover:bg-[var(--primary-blue)]/20 transition-colors duration-300">
                    {cert.badge}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--primary-blue)] transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-sm font-semibold text-[var(--primary-blue)]">{cert.issuer}</p>
                  </div>
                </div>

                <p className="text-[var(--text-secondary)] text-sm mb-5 flex-1 relative z-10 leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-[var(--border-color)] relative z-10">
                  <div className="flex items-center gap-2 text-[var(--text-tertiary)]">
                    <Calendar className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">{cert.date}</span>
                  </div>
                  {cert.credential && (
                    <a
                      href={cert.credential}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-bold text-[var(--primary-blue)] hover:underline uppercase tracking-wider"
                    >
                      Verify <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 md:py-32 bg-[var(--bg-tertiary)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 bg-[var(--bg-secondary)] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-[var(--border-color)] relative">
          <div
            className="flex-1 p-10 md:p-16 flex flex-col justify-between relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))" }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary-blue)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
              <span className="inline-block py-1 px-3 rounded-full bg-[var(--primary-blue)]/10 border border-[var(--primary-blue)]/20 text-[var(--primary-blue)] text-xs font-bold uppercase tracking-wider mb-6">
                Currently Accepting Projects
              </span>

              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-[var(--text-primary)]">
                Let&apos;s build something great.
              </h2>

              <p className="text-[var(--text-secondary)] mb-12 text-lg">
                Whether you need a funnel, social media support, or reliable creative execution, I’m ready to help you grow.
              </p>

              <div className="space-y-8">
                {[
                  {
                    icon: <Mail className="w-6 h-6" />,
                    label: "Drop me an email",
                    value: "nuestrocedrick@gmail.com",
                    href: "mailto:nuestrocedrick@gmail.com",
                  },
                  {
                    icon: <Phone className="w-6 h-6" />,
                    label: "Call or WhatsApp",
                    value: "+63 965 634 8665",
                    href: "tel:+639656348665",
                  },
                ].map(({ icon, label, value, href }) => (
                  <div key={href} className="flex items-center gap-5 group cursor-pointer">
                    <div className="w-14 h-14 bg-[var(--primary-blue)]/10 rounded-2xl flex items-center justify-center text-[var(--primary-blue)] backdrop-blur-sm group-hover:bg-[var(--primary-blue)] group-hover:text-white transition-colors">
                      {icon}
                    </div>
                    <div>
                      <p className="text-sm text-[var(--text-secondary)] mb-1">{label}</p>
                      <a href={href} className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--primary-blue)] transition-colors">
                        {value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 p-10 md:p-16 bg-[var(--bg-secondary)]">
            <h3 className="text-2xl font-bold mb-2 text-[var(--text-primary)]">Send a Proposal</h3>
            <p className="text-[var(--text-secondary)] mb-8 text-sm">
              Fill out the form below and I’ll get back to you within 24 hours.
            </p>
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] rounded-xl focus:outline-none focus:border-[var(--primary-blue)] focus:ring-1 focus:ring-[var(--primary-blue)] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] rounded-xl focus:outline-none focus:border-[var(--primary-blue)] focus:ring-1 focus:ring-[var(--primary-blue)] transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                  What do you need help with?
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] rounded-xl focus:outline-none focus:border-[var(--primary-blue)] focus:ring-1 focus:ring-[var(--primary-blue)] transition-all appearance-none"
                >
                  {[
                    "Funnel Design",
                    "Graphic Design",
                    "Social Media Management",
                    "Virtual Assistant Services",
                    "Other",
                  ].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="details" className="block text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                  Project Details
                </label>
                <textarea
                  id="details"
                  name="details"
                  required
                  rows="4"
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Tell me about your brand and what you are looking to achieve..."
                  className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] rounded-xl focus:outline-none focus:border-[var(--primary-blue)] focus:ring-1 focus:ring-[var(--primary-blue)] transition-all resize-none"
                />
              </div>

              {formStatus === "success" && (
                <div className="p-4 bg-green-500/10 border border-green-500/50 text-green-500 rounded-xl text-sm font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" /> Message sent! I’ll review this shortly.
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

      <footer className="bg-[var(--bg-primary)] py-12 border-t border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-serif font-bold text-[var(--text-primary)] mb-1">
              Cedrick<span className="text-[var(--primary-blue)]">.</span>
            </div>
            <p className="text-[var(--text-secondary)] text-sm">Strategic Design, Funnels &amp; Digital Management</p>
          </div>
          <div className="flex gap-4">
            {[
              { href: "mailto:nuestrocedrick@gmail.com", icon: <Mail className="w-5 h-5" />, label: "Email" },
              { href: "https://www.linkedin.com/in/cedricknuestro/", icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
              { href: "https://v2.onlinejobs.ph/jobseekers/info/4579627", icon: <Globe className="w-5 h-5" />, label: "OLJ" },
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

      {selectedImage && (
        <div
          className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
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
