import React from "react";
import "./DigitalMarketing.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaTiktok,
  FaEnvelope,
  FaGoogle,
  FaChartLine,
  FaSearch,
  FaBullhorn,
  FaUsers,
  FaPaintBrush,
} from "react-icons/fa";

const techs = [
  { name: "Email Marketing", icon: <FaEnvelope /> },
  { name: "SEO Analytics", icon: <FaChartLine /> },
  { name: "Google Ads", icon: <FaGoogle /> },
  { name: "Facebook Ads", icon: <FaFacebook /> },
  { name: "Instagram", icon: <FaInstagram /> },
  { name: "LinkedIn Ads", icon: <FaLinkedin /> },
  { name: "Twitter/X", icon: <FaTwitter /> },
  { name: "TikTok Ads", icon: <FaTiktok /> },
];

const services = [
  {
    title: "SEO",
    desc: "Boost your search rankings and organic traffic.",
    icon: <FaSearch />,
  },
  {
    title: "PPC Advertising",
    desc: "Targeted ads on Google, Facebook, and more.",
    icon: <FaBullhorn />,
  },
  {
    title: "Email Marketing",
    desc: "Personalized campaigns that nurture leads.",
    icon: <FaEnvelope />,
  },
  {
    title: "Social Media",
    desc: "Grow your brand on all major platforms.",
    icon: <FaUsers />,
  },
  {
    title: "Analytics",
    desc: "Data-driven insights and reporting.",
    icon: <FaChartLine />,
  },
  {
    title: "Content Creation",
    desc: "Copywriting, graphics, and video production.",
    icon: <FaPaintBrush />,
  },
];

const steps = [
  ["1", "Discovery", "Market research, goals, and audience analysis."],
  ["2", "Strategy", "Channel selection, messaging, and creative planning."],
  ["3", "Execution", "Campaign launch, monitoring, and optimization."],
  ["4", "Reporting", "Analytics, insights, and continuous improvement."],
];

export default function DigitalMarketing() {
  return (
    <>
      <Navbar />

      <main className="mobile-page">
        <section className="mobile-hero">
          <div className="pill">📈 Growth-Focused Marketing</div>

          <h1>Grow with Digital Marketing</h1>

          <p>
            Data-driven strategies, creative campaigns, and measurable results
            for your brand.
          </p>

          <div className="hero-actions">
            <a href="/projects">See Services</a>
            <a href="/contact">Start a Project</a>
          </div>
        </section>

        <section className="tech-strip">
          <div className="tech-track">
            {[...techs, ...techs].map((item, i) => (
              <span key={i}>
                {item.icon}
                <strong>{item.name}</strong>
              </span>
            ))}
          </div>
        </section>

        <section className="mobile-section">
          <span className="section-kicker">OUR EXPERTISE</span>
          <h2>Digital Marketing Services</h2>
          <div className="blue-line"></div>

          <div className="services-grid">
            {services.map((item, i) => (
              <div className="service-card" key={item.title}>
                <div className={`circle c${i}`}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mobile-section automation">
          <h2 className="white-title">Marketing Workflow</h2>
          <p className="sub">
            From strategy to execution, we deliver results.
          </p>

          <div className="steps-grid">
            {steps.map((s) => (
              <div className="step-card" key={s[0]}>
                <span>{s[0]}</span>
                <h3>{s[1]}</h3>
                <p>{s[2]}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mobile-cta">
          <h2>Ready to Grow Your Brand?</h2>
          <p>Let's create campaigns that deliver real results.</p>
          <a href="/quote">Get a Free Marketing Audit</a>
        </section>
      </main>

      <Footer />
    </>
  );
}