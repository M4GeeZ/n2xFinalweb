import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Code2,
  LineChart,
  Palette,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Store,
  Zap,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import heroImage from "../assets/hero.png";
import "./ServicesPage.css";

const serviceBlocks = [
  {
    title: "Mobile Apps & Solutions",
    copy: "Native and cross-platform mobile experiences engineered for performance, clean UX, secure APIs, and long-term maintainability.",
    icon: Smartphone,
    link: "/services/app-development",
    points: ["iOS & Android apps", "React Native architecture", "Booking, delivery & LMS apps", "Store publishing support"],
  },
  {
    title: "UI & UX Design",
    copy: "Research-led, pixel-perfect interfaces and prototypes that reduce friction, improve trust, and convert visitors into customers.",
    icon: Palette,
    link: "/services/ui-design",
    points: ["Wireframes & prototypes", "Design systems", "Landing page UI", "Mobile app experiences"],
  },
  {
    title: "Website & Web Applications",
    copy: "High-speed websites and scalable web apps built with modern frontend, backend, integrations, and deployment best practices.",
    icon: Code2,
    link: "/services/website-development",
    points: ["React / Laravel / MERN", "CMS & admin dashboards", "E-commerce platforms", "API integrations"],
  },
  {
    title: "AI Platform Integrations",
    copy: "Practical AI and LLM workflows that automate support, generate content, summarize data, and improve business operations.",
    icon: Bot,
    link: "/services/ai-integrations",
    points: ["ChatGPT integrations", "Support bots", "Content automation", "Workflow copilots"],
  },
  {
    title: "Digital Marketing & Growth",
    copy: "Conversion-focused SEO, content, analytics, and campaign strategy designed to scale traffic, leads, and brand visibility.",
    icon: LineChart,
    link: "/services/digital-marketing",
    points: ["SEO optimization", "Paid campaigns", "Social growth", "Analytics tracking"],
  },
  {
    title: "AI & ML Development",
    copy: "Production-oriented AI models, prediction pipelines, computer vision, and NLP solutions delivered with reliability in mind.",
    icon: BrainCircuit,
    link: "/services/ai-development",
    points: ["Machine learning models", "Computer vision", "Predictive analytics", "NLP solutions"],
  },
];

const miniServices = [
  [Store, "E-Commerce", "Secure stores, checkout flows, inventory and order management."],
  [ShieldCheck, "Cybersecurity", "Security hardening, audits, and best-practice implementation."],
  [Zap, "Cloud & DevOps", "Fast deployments, CI/CD, monitoring, and scalable hosting."],
];

export default function ServicesPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".services-hero-badge", { y: 18, opacity: 0, duration: 0.7, ease: "power3.out" });
      gsap.from(".services-hero-title", { y: 35, opacity: 0, duration: 0.9, delay: 0.08, ease: "power3.out" });
      gsap.from(".services-hero-copy", { y: 25, opacity: 0, duration: 0.8, delay: 0.18, ease: "power3.out" });
      gsap.from(".services-hero-stat", { y: 22, opacity: 0, stagger: 0.08, duration: 0.75, delay: 0.25, ease: "power3.out" });

      gsap.utils.toArray(".service-showcase").forEach((block) => {
        const image = block.querySelector(".showcase-image-wrap");
        const content = block.querySelector(".showcase-content");
        const chips = block.querySelectorAll(".showcase-point");

        gsap.from(image, {
          x: block.classList.contains("reverse") ? 90 : -90,
          y: 35,
          opacity: 0,
          scale: 0.92,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: block, start: "top 78%", toggleActions: "play none none reverse" },
        });

        gsap.from(content, {
          x: block.classList.contains("reverse") ? -70 : 70,
          opacity: 0,
          duration: 0.95,
          ease: "power3.out",
          scrollTrigger: { trigger: block, start: "top 78%", toggleActions: "play none none reverse" },
        });

        gsap.from(chips, {
          y: 18,
          opacity: 0,
          stagger: 0.06,
          duration: 0.55,
          ease: "power3.out",
          scrollTrigger: { trigger: block, start: "top 70%", toggleActions: "play none none reverse" },
        });
      });

      gsap.from(".mini-service-card", {
        y: 60,
        opacity: 0,
        scale: 0.94,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".mini-services-grid", start: "top 82%", toggleActions: "play none none reverse" },
      });

      gsap.to(".services-orb", {
        y: 28,
        x: 18,
        repeat: -1,
        yoyo: true,
        duration: 5.5,
        ease: "sine.inOut",
        stagger: 0.4,
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="services-page" ref={pageRef}>
      <Navbar />

      <main>
        <section className="services-hero-premium">
          <div className="services-orb orb-one" />
          <div className="services-orb orb-two" />
          <div className="services-grid-bg" />

          <div className="services-hero-inner">
            <span className="services-hero-badge"><Sparkles size={16} /> Our Services</span>
            <h1 className="services-hero-title">
              End-to-End Technology <span>Solutions for Your Business.</span>
            </h1>
            <p className="services-hero-copy">
              Premium digital products for startups, SMEs, and enterprise teams — from strategy and UI/UX to engineering, AI automation, cloud deployment, and growth.
            </p>

            <div className="services-hero-stats">
              <div className="services-hero-stat"><b>200+</b><span>Projects Delivered</span></div>
              <div className="services-hero-stat"><b>99.9%</b><span>Reliability Focus</span></div>
              <div className="services-hero-stat"><b>24/7</b><span>Support Ready</span></div>
            </div>
          </div>
        </section>

        <section className="services-showcase-section">
          {serviceBlocks.map((service, index) => {
            const Icon = service.icon;
            const isReverse = index % 2 !== 0;

            return (
              <article className={`service-showcase ${isReverse ? "reverse" : ""}`} key={service.title}>
                <div className="showcase-image-wrap">
                  <img src={heroImage} alt={service.title} />
                  <div className="image-glow" />
                  <div className="floating-label"><Icon size={18} /> {service.title.split(" ")[0]} Solutions</div>
                </div>

                <div className="showcase-content">
                  <div className="showcase-icon"><Icon size={30} /></div>
                  <h2>{service.title}</h2>
                  <p>{service.copy}</p>

                  <div className="showcase-points">
                    {service.points.map((point) => (
                      <span className="showcase-point" key={point}><CheckCircle2 size={18} /> {point}</span>
                    ))}
                  </div>

                  <Link className="showcase-link" to={service.link}>Learn More <ArrowRight size={18} /></Link>
                </div>
              </article>
            );
          })}
        </section>

        <section className="mini-services-section">
          <div className="mini-services-head">
            <span className="services-hero-badge"><Rocket size={16} /> More Capabilities</span>
            <h2>Built for performance, security, and scale.</h2>
            <p>Everything your business needs to launch, maintain, and grow a serious digital product.</p>
          </div>

          <div className="mini-services-grid">
            {miniServices.map(([Icon, title, copy]) => (
              <div className="mini-service-card" key={title}>
                <Icon size={34} />
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="services-cta-premium">
          <div>
            <span>Ready to Start?</span>
            <h2>Let’s build something clients remember.</h2>
            <p>Move from idea to high-quality product with a team focused on design, engineering, automation, and growth.</p>
          </div>
          <Link to="/contact">Get in Touch <ArrowRight size={18} /></Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
