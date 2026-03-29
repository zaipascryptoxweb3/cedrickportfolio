import photoshopLogo from "./assets/tools/ps.png"
import googleLogo from "./assets/tools/GoogleW.png"
import microsoftLogo from "./assets/tools/microsoft.jpg"
import canvaLogo from "./assets/tools/canva.png"
import claudeLogo from "./assets/tools/claude.png"
import geminiLogo from "./assets/tools/gemini.png"
import chatgptLogo from "./assets/tools/chatgpt.png"
import capcutLogo from "./assets/tools/capcut.png"
import slackLogo from "./assets/tools/slack.jpg"
import grammarlyLogo from "./assets/tools/grammarly.png"
import n8nLogo from "./assets/tools/n8n.png"
import metaLogo from "./assets/tools/meta.png"
import hostingerLogo from "./assets/tools/hostinger.png"
import vsLogo from "./assets/tools/vs.png"
import notionLogo from "./assets/tools/notion.png"
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Mail, Phone, MapPin, ChevronRight, 
  PenTool, Layout, MonitorSmartphone, Calendar, 
  MessageSquare, CheckCircle2, Star, Briefcase, 
  Send, Target, BarChart3, Users, Image as ImageIcon, 
  Edit3, TrendingUp, Sun, Moon, Linkedin, Globe
} from 'lucide-react';


// --- DATA ---

const NAV_LINKS = ['Home', 'About', 'Services', 'Portfolio', 'Experience', 'Testimonials', 'Contact'];

const SERVICES = [
  {
    icon: <PenTool className="w-6 h-6" />,
    title: 'Graphic Design',
    items: ['Social Media Graphics', 'Posters & Marketing Materials', 'Event Posters', 'Menu Designs', 'Brand Visual Assets', 'Promotional Campaign Designs']
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: 'Social Media Management',
    items: ['Content Calendar Planning', 'Post Scheduling', 'Caption Writing', 'Brand Visual Strategy', 'Engagement Monitoring']
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6" />,
    title: 'Digital Marketing Support',
    items: ['Email Management', 'Research and Reporting', 'Customer Support', 'Content Creation', 'Video Editing', 'YouTube Shorts Creation']
  }
];

const PORTFOLIO = [
  {
    title: 'Facebook DP Blast',
    category: 'FB Profile Design',
    description: 'Dynamic event posters designed for university student organizations.',
    image: "/projects/mikha.jpg"
  },
  {
    title: 'Conference Campaign',
    category: 'Social Media',
    description: 'Campaign posters for corporate events and professional conferences.',
    image: "/projects/BCC.jpg"
  },
  {
    title: 'BSBA DAYS 2024',
    category: 'Event Design',
    description: 'BSBA Day BINI Inspired Design for BSBA Students.',
    image: "/projects/BSBA.jpg"
  },
  {
    title: 'Your Face Looks Familiar',
    category: 'CMA Days',
    description: 'Your Face Looks Familiar – Talent & Impersonation Showcase',
    image: "/projects/Cma1.jpg"
  },
  {
    title: 'Chick and Hunk 2024',
    category: 'BSBA Days Chick and Hunk',
    description: 'An event highlighting the charm, talent, and stage presence of BSBA participants.',
    image: "/projects/CH.jpg"
  },
  {
    title: 'Francesca Cafe Branding',
    category: 'Branding',
    description: '"Brewing Soon" promotional campaign and core branding visuals.',
    image: "/projects/Francesca.jpg"
  }
];

const GRAPHIC_DESIGNS = [
{
title: "Overall Champion Poster",
image: "/design/Champs.jpg"
},
{
title: "JFINEX Poster",
image: "/design/JFINEX1.jpg"
},
{
title: "Streat Cafe Menu",
image: "/design/Streat.jpg"
}
];

const SKILLS = [
  'Graphic Design', 'Branding Design', 'Content Calendar Planning', 
  'Social Media Management', 'Marketing Visual Design', 'Client Collaboration', 
  'Project Management', 'Customer Support', 'Administrative Support'
];

const TOOLS = [
  { name: 'Adobe Photoshop', icon: <img src={photoshopLogo} className="w-5 h-5" /> },
  { name: 'Canva', icon: <img src={canvaLogo} className="w-5 h-5" /> },
  { name: 'Google Workspace', icon: <img src={googleLogo} className="w-5 h-5" /> },
  { name: 'Microsoft Office', icon: <img src={microsoftLogo} className="w-5 h-5" /> },
  { name: 'Capcut', icon: <img src={capcutLogo} className="w-5 h-5" /> },
  { name: 'Slack', icon: <img src={slackLogo} className="w-5 h-5" /> },
  { name: 'Grammarly', icon: <img src={grammarlyLogo} className="w-5 h-5" /> },
  { name: 'n8n', icon: <img src={n8nLogo} className="w-5 h-5" /> },
  { name: 'Hostinger', icon: <img src={hostingerLogo} className="w-5 h-5" /> },  
  { name: 'Visual Studio', icon:  <img src={vsLogo} className="w-5 h-5" /> },
  { name: 'Notion', icon: <img src={notionLogo} className="w-5 h-5" /> },
  { name: 'Meta Business', icon: <img src={metaLogo} className="w-5 h-5" /> }, 
  { name: 'ChatGPT', icon: <img src={chatgptLogo} className="w-5 h-5" /> },
  { name: 'Gemini', icon: <img src={geminiLogo} className="w-5 h-5" /> },
  { name: 'Claude', icon: <img src={claudeLogo} className="w-5 h-5" /> },
];

const TESTIMONIALS = [
  { name: 'Myth Games', text: 'Cedrick provided outstanding premium assets and weapon skins for SF Legends. His attention to detail is unmatched.' },
  { name: 'Francesca Cafe', text: 'The "Brewing Soon" campaign visuals were exactly what we needed to build hype. Clean, professional, and on-brand.' },
  { name: 'Streat Cafe', text: 'Our menu redesign improved readability instantly. Customers love the new look, and it was a breeze to work with him.' },
  { name: 'JFINEX Adviser', text: 'Highly organized and incredibly creative. Cedrick elevated our digital presence significantly.' },
  { name: 'Blockchain Campus Conference', text: 'The promotional posters captured the essence of our event perfectly. Delivered on time and exceeded expectations.' }
];

const PACKAGES = [
  {
    name: 'Starter Package',
    description: 'Basic graphic design support and social media content creation.',
    features: ['Custom Graphic Designs', 'Basic Content Creation', '1 Revision per design', 'Email Support']
  },
  {
    name: 'Growth Package',
    description: 'Content calendar management, post designs, and social media scheduling.',
    features: ['Content Calendar Planning', 'Post Scheduling', 'Caption Writing', '3 Revisions per design', 'Priority Support']
  },
  {
    name: 'Premium Package',
    description: 'Full social media management including design, strategy, and engagement support.',
    features: ['Full Brand Visual Strategy', 'Engagement Monitoring', 'Video & Shorts Creation', 'Unlimited Revisions', '24/7 Priority Support']
  }
];

// --- COMPONENTS ---

const Navbar = ({ theme, setTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[var(--bg-primary)] shadow-sm border-b border-[var(--border-color)] py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="text-2xl font-serif font-bold text-[var(--text-primary)] cursor-pointer" onClick={() => scrollTo('home')}>
          Cedrick<span className="text-[var(--primary-blue)]">.</span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {NAV_LINKS.map((link) => (
            <button key={link} onClick={() => scrollTo(link)} className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary-blue)] transition-colors">
              {link}
            </button>
          ))}
          
          <button onClick={toggleTheme} className="p-2 text-[var(--text-secondary)] hover:text-[var(--primary-blue)] transition-colors rounded-full hover:bg-[var(--bg-tertiary)]">
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button onClick={() => scrollTo('contact')} className="px-5 py-2.5 bg-[var(--primary-blue)] text-[#ffffff] text-sm font-medium rounded-full hover:bg-[var(--primary-blue-dark)] transition-all">
            Work With Me
          </button>
        </div>

        {/* Mobile Menu Toggle & Theme */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 text-[var(--text-secondary)]">
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button className="text-[var(--text-primary)]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[var(--bg-secondary)] shadow-lg border-t border-[var(--border-color)] py-4 flex flex-col px-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <button key={link} onClick={() => scrollTo(link)} className="text-left text-lg font-medium text-[var(--text-secondary)] hover:text-[var(--primary-blue)]">
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default function App() {
  const [formStatus, setFormStatus] = useState(null);
  const [theme, setTheme] = useState('dark'); // Default theme from your CSS

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus(null), 3000);
    e.target.reset();
  };

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  // CSS Theme Style
  const themeStyles = `
    .theme-wrapper {
      /* Dark Theme (Default) */
      --primary-blue: #0EA5E9;
      --primary-blue-dark: #0284c7;
      --bg-primary: #0a0e1a;
      --bg-secondary: #111827;
      --bg-tertiary: #1a2332;
      --text-primary: #ffffff;
      --text-secondary: #9ca3af;
      --text-tertiary: #6b7280;
      --border-color: rgba(255, 255, 255, 0.05);
      --gradient-start: #1e3a8a;
      --gradient-end: #0a0e1a;
      --shadow-color: rgba(0, 0, 0, 0.3);
      --card-hover-shadow: rgba(14, 165, 233, 0.2);

      background-color: var(--bg-primary);
      color: var(--text-primary);
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    .theme-wrapper[data-theme="light"] {
      /* Light Theme */
      --primary-blue: #0EA5E9;
      --primary-blue-dark: #0284c7;
      --bg-primary: #f8fafc;
      --bg-secondary: #ffffff;
      --bg-tertiary: #f1f5f9;
      --text-primary: #0f172a;
      --text-secondary: #475569;
      --text-tertiary: #64748b;
      --border-color: rgba(0, 0, 0, 0.1);
      --gradient-start: #e0f2fe;
      --gradient-end: #f8fafc;
      --shadow-color: rgba(0, 0, 0, 0.1);
      --card-hover-shadow: rgba(14, 165, 233, 0.3);
    }

    .hover-card-shadow:hover {
      box-shadow: 0 10px 25px -5px var(--card-hover-shadow), 0 8px 10px -6px var(--card-hover-shadow);
    }

    /* Ensuring inputs adapt perfectly */
    input::placeholder, textarea::placeholder {
      color: var(--text-tertiary);
    }
  `;

  return (
    <div className="theme-wrapper min-h-screen font-sans selection:bg-[var(--primary-blue)] selection:text-[#ffffff]" data-theme={theme}>
      <style>{themeStyles}</style>
      
      <Navbar theme={theme} setTheme={setTheme} />

      {/* HERO SECTION */}
      <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <p className="text-[var(--primary-blue)] font-medium tracking-wider uppercase text-sm">Graphic Designer | Social Media Manager</p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight text-[var(--text-primary)]">
            I design visuals and manage social media strategies that help brands attract attention.
          </h1>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
            Helping businesses create professional branding, engaging social media content, and visually compelling marketing materials.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <button onClick={scrollToContact} className="px-8 py-3.5 bg-[var(--primary-blue)] text-[#ffffff] font-medium rounded-full hover:bg-[var(--primary-blue-dark)] transition-all flex items-center gap-2">
              Work With Me <ChevronRight className="w-4 h-4" />
            </button>
            <button onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3.5 border border-[var(--border-color)] text-[var(--text-primary)] font-medium rounded-full hover:bg-[var(--bg-tertiary)] transition-all">
              View Portfolio
            </button>
          </div>
        </div>
        <div className="flex-1 w-full max-w-md relative">
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative">
            <img 
              src="src/assets/zaipas.jpg" 
              alt="Cedrick - Graphic Designer" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 border border-black/10 rounded-[2rem]"></div>
          </div>
          {/* Decorative element updated to theme */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[var(--bg-tertiary)] rounded-full -z-10"></div>
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-[var(--bg-secondary)] rounded-full -z-10"></div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 bg-[var(--bg-tertiary)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-12 text-center md:text-left max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[var(--text-primary)]">About Me</h2>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              I am a creative designer and organized digital marketing support professional with experience in branding, social media visuals, and administrative coordination.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[var(--bg-secondary)] p-8 rounded-2xl border border-[var(--border-color)] hover-card-shadow transition-all duration-300">
              <div className="w-12 h-12 bg-[var(--bg-primary)] rounded-full flex items-center justify-center text-[var(--primary-blue)] mb-6">
                <PenTool />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">Designer</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                Former Layout Artist and award-winning digital poster designer creating marketing visuals, posters, and social media graphics.
              </p>
            </div>
            <div className="bg-[var(--bg-secondary)] p-8 rounded-2xl border border-[var(--border-color)] hover-card-shadow transition-all duration-300">
              <div className="w-12 h-12 bg-[var(--bg-primary)] rounded-full flex items-center justify-center text-[var(--primary-blue)] mb-6">
                <MonitorSmartphone />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">Social Media Manager</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                Experienced in content planning, scheduling, and brand visual strategy for businesses and organizations.
              </p>
            </div>
            <div className="bg-[var(--bg-secondary)] p-8 rounded-2xl border border-[var(--border-color)] hover-card-shadow transition-all duration-300">
              <div className="w-12 h-12 bg-[var(--bg-primary)] rounded-full flex items-center justify-center text-[var(--primary-blue)] mb-6">
                <BarChart3 />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">Business-Oriented</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                Background in Financial Management, providing strong attention to detail, organization, and analytics-based thinking.
              </p>
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto border-t border-[var(--border-color)] pt-12 mt-12">
            <p className="text-2xl md:text-3xl font-serif italic text-[var(--primary-blue)] leading-relaxed">
              “I combine creative design with strategic organization to help brands build a strong and consistent online presence.”
            </p>
            <p className="mt-4 font-medium text-[var(--text-primary)]">— Cedrick Nuestro</p>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 md:py-32 bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-[var(--text-primary)]">My Services</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">Comprehensive design and digital support tailored to your brand's growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div key={index} className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl p-8 hover:-translate-y-2 hover-card-shadow transition-all duration-300">
                <div className="w-14 h-14 bg-[var(--bg-tertiary)] rounded-xl flex items-center justify-center text-[var(--primary-blue)] mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-6 text-[var(--text-primary)]">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start text-[var(--text-secondary)]">
                      <CheckCircle2 className="w-5 h-5 text-[var(--primary-blue)] mr-3 shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="py-20 md:py-32 bg-[var(--bg-tertiary)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-[var(--text-primary)]">Projects</h2>
              <p className="text-[var(--text-secondary)] max-w-xl">A visual gallery showcasing my latest design projects, branding assets, and social media campaigns.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO.map((item, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-color)] aspect-square cursor-pointer">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-[var(--primary-blue)] text-xs font-bold tracking-wider uppercase mb-2 block">{item.category}</span>
                  <h3 className="text-[#ffffff] text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-[#e2e8f0] text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* GRAPHIC DESIGN / POSTER SECTION */}
<section id="graphic-design" className="py-28 bg-[var(--bg-tertiary)]">

  <div className="max-w-[1600px] mx-auto px-8 md:px-12">

    <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-24 text-[var(--text-primary)]">
      Portrait Design
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">

      {GRAPHIC_DESIGNS.map((item, index) => (

        <div
          key={index}
          className="group relative rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
        >

          <img
            src={item.image}
            alt={item.title}
            className="w-full aspect-[1/1.414] object-cover"
          />

          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <h3 className="text-white font-semibold text-lg">
              {item.title}
            </h3>
          </div>

        </div>

      ))}

    </div>

  </div>

</section>

{/* CONCEPT PROJECTS SECTION */}
<section id="concept-projects" className="py-28 bg-[var(--bg-primary)]">
  <div className="max-w-[1600px] mx-auto px-8 md:px-12">

    <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-[var(--text-primary)]">
      Concept Projects
    </h2>

    <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-20">
      Non-client exploratory work focused on UI/UX, branding systems, and web concepts.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

      {/* CARD */}
      <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl overflow-hidden hover-card-shadow transition-all duration-300">

        <div className="relative">
          <img src="/projects/concept1.jpg" className="w-full h-52 object-cover" />
          <span className="absolute top-3 right-3 text-xs bg-[var(--primary-blue)] text-white px-3 py-1 rounded-full">
            Concept
          </span>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-bold text-[var(--text-primary)]">
            Social Media Agency Website
          </h3>

          <p className="text-sm text-[var(--text-secondary)] mt-2">
            Conversion-focused UI/UX layout for a digital marketing agency.
          </p>

          <div className="mt-4 text-xs text-[var(--text-tertiary)]">
            Tools: Figma, Photoshop
          </div>
        </div>

      </div>

      {/* Duplicate cards and change content */}
      
    </div>
  </div>
</section>
            
{/* EXPERIENCE & SKILLS SECTION */}
<section id="experience" className="py-20 md:py-32 bg-[var(--bg-primary)]">
  <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
    
    {/* LEFT COLUMN */}
    <div>

      {/* EXPERIENCE */}
      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10 text-[var(--text-primary)]">
        Experience
      </h2>

      <div className="space-y-12 mb-16">

        <div className="relative pl-8 md:pl-0">
          <div className="hidden md:block absolute left-[-29px] top-2 w-4 h-4 rounded-full bg-[var(--primary-blue)] border-4 border-[var(--bg-primary)]"></div>

          <div className="md:border-l-2 md:border-[var(--border-color)] md:pl-10 relative">
            <span className="text-sm font-bold text-[var(--primary-blue)] uppercase tracking-wider">
              2021 – Present
            </span>

            <h3 className="text-2xl font-bold mt-2 text-[var(--text-primary)]">
              Freelance Graphic Designer
            </h3>

            <div className="mt-4 space-y-2 text-[var(--text-secondary)] text-sm">
              <p>• Created marketing materials such as posters, banners, and social media assets</p>
              <p>• Collaborated directly with clients to translate creative briefs into visual designs</p>
              <p>• Delivered high-quality designs within strict deadlines</p>
              <p>• Created the "Brewing Soon" promotional campaign for Francesca Cafe</p>
              <p>• Redesigned Streat Cafe menu layout for improved readability and presentation</p>
            </div>
          </div>
        </div>

        <div className="relative pl-8 md:pl-0">
          <div className="hidden md:block absolute left-[-29px] top-2 w-4 h-4 rounded-full bg-[var(--text-tertiary)] border-4 border-[var(--bg-primary)]"></div>

          <div className="md:border-l-2 md:border-[var(--border-color)] md:pl-10 relative">
            <span className="text-sm font-bold text-[var(--primary-blue)] uppercase tracking-wider">
              June – October 2021
            </span>

            <h3 className="text-2xl font-bold mt-2 text-[var(--text-primary)]">
              Layout Artist
            </h3>

            <p className="text-lg text-[var(--text-primary)] font-medium mb-2">
              One Stop Shop
            </p>

            <p className="text-[var(--text-secondary)] text-sm">
              Responsible for preparing graphic files for print, ensuring accurate layouts and visually appealing marketing collateral.
            </p>
          </div>
        </div>

      </div>


      {/* EDUCATION */}
      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10 text-[var(--text-primary)]">
        Education
      </h2>

      <div className="space-y-12">

        <div className="relative pl-8 md:pl-0">
          <div className="hidden md:block absolute left-[-29px] top-2 w-4 h-4 rounded-full bg-[var(--primary-blue)] border-4 border-[var(--bg-primary)]"></div>

          <div className="md:border-l-2 md:border-[var(--border-color)] md:pl-10 relative">

            <span className="text-sm font-bold text-[var(--primary-blue)] uppercase tracking-wider">
              August 2022 – June 2026
            </span>

            <h3 className="text-2xl font-bold mt-2 text-[var(--text-primary)]">
              Bachelor of Science in Business Administration
            </h3>

            <p className="text-lg text-[var(--text-primary)] font-medium mb-2">
              PHINMA Araullo University
            </p>

            <p className="text-[var(--text-secondary)] text-sm">
              Major in Financial Management
            </p>

          </div>
        </div>

      </div>

    </div>


    {/* RIGHT COLUMN */}
    <div>
      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10 text-[var(--text-primary)]">
        Skills & Tools
      </h2>

      <div className="mb-10">
        <h3 className="text-lg font-bold mb-4 uppercase tracking-wider text-[var(--text-secondary)]">
          Core Skills
        </h3>

        <div className="flex flex-wrap gap-3">
          {SKILLS.map((skill, index) => (
            <span key={index} className="px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-full text-sm font-medium text-[var(--text-primary)]">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4 uppercase tracking-wider text-[var(--text-secondary)]">
          Software & Platforms
        </h3>

         <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
           {TOOLS.map((tool, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl">
               <div className="w-8 h-8 rounded-xl overflow-hidden flex items-center justify-center bg-[var(--bg-tertiary)]">
                {tool.icon}
             </div>
          <span className="text-sm font-medium text-[var(--text-primary)]">{tool.name}</span>
         </div>
            ))}
        </div>
      </div>

    </div>

  </div>
</section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-20 md:py-32 bg-[var(--bg-tertiary)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-[var(--text-primary)]">Client Testimonials</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">Feedback from brands and organizations I've collaborated with.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <div key={index} className="bg-[var(--bg-secondary)] border border-[var(--border-color)] p-8 rounded-2xl hover-card-shadow transition-all duration-300">
                <div className="flex text-[var(--primary-blue)] mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-[var(--text-secondary)] italic mb-6">"{testimonial.text}"</p>
                <div className="font-bold border-t border-[var(--border-color)] pt-4 text-[var(--text-primary)]">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES SECTION */}
      <section className="py-20 md:py-32 bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-[var(--text-primary)]">Service Packages</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">Structured support plans to fit your brand's specific digital needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PACKAGES.map((pkg, index) => (
              <div key={index} className={`rounded-2xl p-8 border hover-card-shadow transition-all duration-300 ${index === 1 ? 'border-[var(--primary-blue)] relative scale-105 bg-[var(--bg-secondary)]' : 'border-[var(--border-color)] bg-[var(--bg-tertiary)]'}`}>
                {index === 1 && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[var(--primary-blue)] text-[#ffffff] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">{pkg.name}</h3>
                <p className="text-[var(--text-secondary)] text-sm mb-8 min-h-[40px]">{pkg.description}</p>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className={`w-5 h-5 mr-3 shrink-0 ${index === 1 ? 'text-[var(--primary-blue)]' : 'text-[var(--text-secondary)]'}`} />
                      <span className="text-sm font-medium text-[var(--text-primary)]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button onClick={scrollToContact} className={`w-full py-3 rounded-full font-bold transition-all ${index === 1 ? 'bg-[var(--primary-blue)] text-[#ffffff] hover:bg-[var(--primary-blue-dark)]' : 'bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--primary-blue)]'}`}>
                  Choose Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 md:py-32 bg-[var(--bg-tertiary)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 bg-[var(--bg-secondary)] rounded-3xl overflow-hidden shadow-sm flex flex-col md:flex-row border border-[var(--border-color)]">
          
          {/* Contact Info (Using Theme Gradient) */}
          <div className="flex-1 p-10 md:p-16 flex flex-col justify-between" style={{ background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))' }}>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-[#ffffff]">Let's Work Together</h2>
              <p className="text-[#e2e8f0] mb-12">I'm currently available for freelance projects and new opportunities. Send me a message, and I'll get back to you shortly.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#ffffff]/10 rounded-full flex items-center justify-center text-[var(--primary-blue)] backdrop-blur-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[#cbd5e1]">Email</p>
                    <a href="mailto:nuestrocedrick@gmail.com" className="font-medium text-[#ffffff] hover:text-[var(--primary-blue)] transition-colors">nuestrocedrick@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#ffffff]/10 rounded-full flex items-center justify-center text-[var(--primary-blue)] backdrop-blur-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[#cbd5e1]">Phone</p>
                    <a href="tel:+639656348665" className="font-medium text-[#ffffff] hover:text-[var(--primary-blue)] transition-colors">+63 965 634 8665</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#ffffff]/10 rounded-full flex items-center justify-center text-[var(--primary-blue)] backdrop-blur-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[#cbd5e1]">Location</p>
                    <p className="font-medium text-[#ffffff]">San Pablo City, Laguna Philippines</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 p-10 md:p-16">
            <h3 className="text-2xl font-bold mb-8 text-[var(--text-primary)]">Send a Message</h3>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Name</label>
                  <input required type="text" className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] rounded-xl focus:outline-none focus:border-[var(--primary-blue)] focus:ring-1 focus:ring-[var(--primary-blue)] transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Email</label>
                  <input required type="email" className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] rounded-xl focus:outline-none focus:border-[var(--primary-blue)] focus:ring-1 focus:ring-[var(--primary-blue)] transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Subject</label>
                <input required type="text" className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] rounded-xl focus:outline-none focus:border-[var(--primary-blue)] focus:ring-1 focus:ring-[var(--primary-blue)] transition-colors" placeholder="Project Inquiry" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Message</label>
                <textarea required rows="4" className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] rounded-xl focus:outline-none focus:border-[var(--primary-blue)] focus:ring-1 focus:ring-[var(--primary-blue)] transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
              </div>
              
              {formStatus === 'success' && (
                <div className="p-4 bg-[var(--bg-tertiary)] border border-[var(--primary-blue)] text-[var(--primary-blue)] rounded-xl text-sm font-medium flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" /> Message sent successfully! I'll be in touch soon.
                </div>
              )}

              <button type="submit" className="w-full py-4 bg-[var(--primary-blue)] text-[#ffffff] font-bold rounded-xl hover:bg-[var(--primary-blue-dark)] transition-all flex justify-center items-center gap-2">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

{/* FOOTER */}
<footer className="bg-[var(--bg-primary)] py-10 border-t border-[var(--border-color)] text-center">
  <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center">

    <div className="text-2xl font-serif font-bold text-[var(--text-primary)] mb-4">
      Cedrick<span className="text-[var(--primary-blue)]">.</span> Virtual Assistant
    </div>

    <p className="text-[var(--text-secondary)] text-sm mb-6">
      Graphic Designer | Social Media Manager
    </p>

    <div className="flex gap-4 mb-8">

      <a
        href="mailto:nuestrocedrick@gmail.com"
        className="w-10 h-10 rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[#ffffff] hover:bg-[var(--primary-blue)] transition-all"
      >
        <Mail className="w-4 h-4" />
      </a>

      <a
        href="https://www.linkedin.com/in/cedricknuestro/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[#ffffff] hover:bg-[var(--primary-blue)] transition-all"
        >
          <Linkedin className="w-4 h-4" />
      </a>

      <a
        href="https://v2.onlinejobs.ph/jobseekers/info/4579627"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[#ffffff] hover:bg-[var(--primary-blue)] transition-all"
      >
        <Globe className="w-4 h-4" />
      </a>

    </div>

    <p className="text-[var(--text-tertiary)] text-xs">
      © {new Date().getFullYear()} Cedrick Nuestro. All rights reserved.
    </p>
  </div>
  </footer>
  </div>
);
}