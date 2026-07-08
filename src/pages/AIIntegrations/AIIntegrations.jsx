import React from "react";
import "./AIIntegrations.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {
  FaAws,
  FaSlack,
  FaWhatsapp,
  FaRobot,
  FaBrain,
  FaLink,
  FaCloud,
  FaUsers,
  FaSitemap,
  FaPen,
  FaPaintBrush,
  FaMobileAlt,
  FaUniversalAccess,
  FaLayerGroup,
  FaComments,
  FaMousePointer,
  FaCubes,
  FaFigma,
  FaSketch,
} from "react-icons/fa";

import { SiZapier } from "react-icons/si";

const techs = [
  { name: "WhatsApp API", icon: <FaWhatsapp /> },
  { name: "LangChain", icon: <FaLink /> },
  { name: "Zapier", icon: <SiZapier /> },
  { name: "OpenAI GPT-4", icon: <FaRobot /> },
  { name: "Azure OpenAI", icon: <FaCloud /> },
  { name: "Google Gemini", icon: <FaBrain /> },
  { name: "AWS Bedrock", icon: <FaAws /> },
  { name: "Slack Bot", icon: <FaSlack /> },
];
const services = [
  {
    title: "Custom Chatbots",
    desc: "Conversational AI for websites, apps, and support.",
    icon: <FaUsers />,
  },
  {
    title: "API Integrations",
    desc: "Connect ChatGPT to your backend, CRM, or SaaS tools.",
    icon: <FaSitemap />,
  },
  {
    title: "Automation",
    desc: "Automate workflows, lead capture, and notifications.",
    icon: <FaPen />,
  },
  {
    title: "Multilingual",
    desc: "Serve users in 90+ languages with AI translation.",
    icon: <FaPaintBrush />,
  },
  {
    title: "Analytics",
    desc: "Conversation analytics and reporting dashboards.",
    icon: <FaMobileAlt />,
  },
  {
    title: "Security",
    desc: "Data privacy, compliance, and secure deployments.",
    icon: <FaUniversalAccess />,
  },
];

const steps = [
  ["1", "Discovery", "Requirements, use cases, and API selection."],
  ["2", "Prototyping", "Rapid prototyping and proof-of-concept builds."],
  ["3", "Integration", "Secure, scalable integration with your stack."],
  ["4", "Launch", "Go live, monitor, and optimize for results."],
];

export default function UIDesign() {
  return (
    <>
      <Navbar />

      <main className="mobile-page">
        <section className="mobile-hero">
          <div className="pill">🛠 Elevating User Experiences</div>

          <h1>
            Seamless AI <br /> Integration
          </h1>

          <p>
            Supercharge your apps and websites with conversational AI,
            automation, and smart workflows.
          </p>

          <div className="hero-actions">
            <a href="/projects">View Services</a>
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
          <h2>AI Integration Services</h2>
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
          <h2 className="white-title">Integration Workflow</h2>
          <p className="sub">
            From API keys to production, a seamless process for every integration.
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
          <h2>Ready to Add AI to Your Product?</h2>
          <p>
            Let's build smarter, more engaging experiences for your users.
          </p>
          <a href="/quote">Get a Free AI Consultation</a>
        </section>
      </main>

      <Footer />
    </>
  );
}
