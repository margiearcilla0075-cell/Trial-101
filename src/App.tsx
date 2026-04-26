import { motion } from "motion/react";
import { 
  Menu, 
  Briefcase, 
  Calendar, 
  Network, 
  LayoutDashboard, 
  CheckCircle2,
  Linkedin,
  Mail
} from "lucide-react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const PROFILE_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuBer2ujTP38mSdi2vzNGNDLbQddFXP8hyur13IKJsGQVpexs0ShO57T11eyPUfHQhZkeG-juNkuc35l_0DbjlYjXrWLQIVlO8HzJTcKJT8nGi9U5yF_dQReiCT2UQyaI3_fKAnd7mrv32mkKKa45sEt1-ucd0OmH8Ipo7xJF2sJZGzK02MPXNIacsBLeohY-39zyNXtiGyEoyzYbi5Snfg3sBME0CQ53w_4GMvRihgBmWk-6OQ94QhrS6Pvv26QSI_MBCvSrCmfl_8";
const HERO_IMAGE = "https://lh3.googleusercontent.com/aida/ADBb0ujH339nCu9djfg22RyU4B3ItDBZd9a4YQoFhA7kEUHOEISPfRCVO6BTzfDyMzPkPdFpfyY9xVhvZ2dPTO6dnouWZsqAyfYLxOSDgv5-II_Jl3kWtbI47difmbP2zF4wAqgzghabTV0Cs87NZXMucfcTnFuwpJWjPyIR_p-R8Gf2J0Q8z1ulifiLs8gmbzrfG-W5qSkc_JZvjlyq7wotWUqeLaIXtBHksiGTijjDwI6kd50y28SEeVryuJ_5pHeR5eIwxvNUQklm5w";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 w-full z-50 bg-brand-background/80 backdrop-blur-md border-b border-brand-tertiary/20 shadow-brand">
        <nav className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Menu className="w-6 h-6 text-brand-primary cursor-pointer lg:hidden" id="mobile-menu-trigger" />
            <span className="text-lg font-bold font-serif text-brand-primary">Quiet Excellence VA</span>
          </div>
          <div className="hidden lg:flex items-center gap-8">
            <a href="#home" className="font-serif tracking-tight text-brand-primary font-semibold hover:text-brand-secondary transition-all">Home</a>
            <a href="#services" className="font-serif tracking-tight text-brand-on-surface-variant/60 hover:text-brand-primary transition-all">Services</a>
            <a href="#about" className="font-serif tracking-tight text-brand-on-surface-variant/60 hover:text-brand-primary transition-all">About</a>
            <a href="#contact" className="font-serif tracking-tight text-brand-on-surface-variant/60 hover:text-brand-primary transition-all">Contact</a>
          </div>
          <div className="flex items-center">
            <img 
              id="nav-profile-img"
              alt="Profile" 
              className="w-10 h-10 rounded-full object-cover border border-brand-tertiary/20" 
              src={PROFILE_IMAGE} 
            />
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="relative py-20 lg:py-32 overflow-hidden px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <span className="label-caps text-brand-secondary">Virtual Strategic Partnership</span>
              <h1 className="headline-xl text-brand-primary max-w-xl">
                Your Partner in Productivity
              </h1>
              <p className="body-lg text-brand-on-surface-variant max-w-lg">
                I provide sophisticated administrative and operational support to visionary leaders, allowing you to reclaim your time and focus on high-impact growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button id="view-services-btn" className="btn-primary">
                  VIEW SERVICES
                </button>
                <button id="book-consultation-btn" className="btn-secondary">
                  BOOK A CONSULTATION
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[4/5] bg-brand-tertiary/30 rounded-xl overflow-hidden shadow-2xl relative">
                <img 
                  id="hero-main-img"
                  alt="Professional Portrait" 
                  className="w-full h-full object-cover" 
                  src={HERO_IMAGE} 
                />
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-8 -left-8 bg-brand-surface/90 backdrop-blur-sm p-6 rounded-lg shadow-brand border border-brand-tertiary/20 hidden md:block"
                id="availability-badge"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-brand-tertiary/50 p-3 rounded-full">
                    <CheckCircle2 className="w-6 h-6 text-brand-secondary" />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] font-bold text-brand-secondary tracking-widest uppercase">AVAILABILITY</p>
                    <p className="body-md text-brand-primary font-bold">2 Slots Remaining</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Background Decorative Element */}
          <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-brand-secondary/5 rounded-l-full blur-3xl" />
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-[#f4f3f2] px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="label-caps text-brand-secondary">Core Offerings</span>
              <h2 className="headline-lg text-brand-primary mt-4">How I Can Help</h2>
              <div className="w-12 h-[1px] bg-brand-secondary mx-auto mt-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="services-grid">
              {SERVICES.map((service, index) => (
                <motion.div 
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-brand-surface p-8 rounded-brand shadow-brand border border-transparent hover:border-brand-secondary/10 hover:shadow-lg transition-all group"
                >
                  <div className={`w-12 h-12 ${service.bg} flex items-center justify-center rounded mb-6 group-hover:bg-brand-secondary group-hover:text-white transition-colors`}>
                    <service.icon className="w-6 h-6 text-brand-secondary group-hover:text-white" />
                  </div>
                  <h3 className="headline-md text-brand-primary mb-4">{service.title}</h3>
                  <p className="body-md text-brand-on-surface-variant">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-24 bg-brand-surface px-6">
          <div className="max-w-3xl mx-auto text-center" id="testimonial">
            <div className="w-12 h-[1px] bg-brand-secondary mx-auto mb-12" />
            <p className="headline-md text-brand-primary italic leading-relaxed">
              "Her attention to detail and proactive approach changed the way I work. I finally feel like I have a strategic partner who truly understands my vision."
            </p>
            <div className="mt-8">
              <p className="label-caps text-brand-primary">MARCUS CHEN</p>
              <p className="body-md text-brand-on-surface-variant">CEO, Altria Design Studio</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-brand-primary-container text-white px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="max-w-2xl text-center md:text-left space-y-4">
              <h2 className="headline-lg">Ready to elevate your operations?</h2>
              <p className="body-lg opacity-80 font-serif">Let's discuss how customized support can transform your professional life.</p>
            </div>
            <button id="cta-final-btn" className="bg-brand-surface text-brand-primary px-10 py-5 font-sans text-[14px] font-semibold tracking-[0.05em] uppercase rounded-brand hover:bg-brand-tertiary transition-colors shrink-0">
              GET STARTED TODAY
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-background w-full border-t border-brand-tertiary/40">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 px-6 py-12">
          <div className="flex flex-col items-center lg:items-start gap-2">
            <span className="font-serif font-bold text-brand-primary text-xl">Quiet Excellence</span>
            <p className="font-sans text-[10px] uppercase tracking-widest text-brand-tertiary mt-2">
              © {new Date().getFullYear()} QUIET EXCELLENCE. ALL RIGHTS RESERVED.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <FooterLink id="footer-linkedin" label="LinkedIn" icon={Linkedin} />
            <FooterLink id="footer-email" label="Email" icon={Mail} />
            <FooterLink id="footer-services" label="Services" />
            <FooterLink id="footer-contact" label="Contact" />
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterLink({ label, icon: Icon, id }: { label: string; icon?: any, id: string }) {
  return (
    <a 
      id={id}
      href="#" 
      className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-[#B4A08E] hover:text-brand-primary underline decoration-brand-tertiary underline-offset-4 cursor-pointer transition-colors duration-300"
    >
      {Icon && <Icon className="w-3 h-3" />}
      {label}
    </a>
  );
}

const SERVICES = [
  {
    title: "Administration",
    description: "Seamless email management, data entry, and document preparation handled with precision.",
    icon: Briefcase,
    bg: "bg-brand-tertiary/20",
  },
  {
    title: "Scheduling",
    description: "Intelligent calendar management and travel coordination to optimize your daily rhythm.",
    icon: Calendar,
    bg: "bg-brand-tertiary/20",
  },
  {
    title: "Management",
    description: "Strategic project oversight and vendor relations to keep your business moving forward.",
    icon: Network,
    bg: "bg-brand-tertiary/20",
  },
  {
    title: "Organization",
    description: "Digital file restructuring and process optimization for a clutter-free executive life.",
    icon: LayoutDashboard,
    bg: "bg-brand-tertiary/20",
  }
];

