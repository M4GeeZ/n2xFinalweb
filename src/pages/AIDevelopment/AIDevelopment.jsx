import React from "react";
import "./AIDevelopment.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {
  FaFigma,
  FaSketch,
  FaPaintBrush,
  FaPen,
  FaSitemap,
  FaUsers,
  FaMobileAlt,
  FaUniversalAccess,
  FaLayerGroup,
  FaComments,
  FaMousePointer,
  FaCubes,
} from "react-icons/fa";

const techs = [
  { name: "Framer", icon: <FaCubes /> },
  { name: "InVision", icon: <FaMousePointer /> },
  { name: "UXPin", icon: <FaPen /> },
  { name: "Zeplin", icon: <FaComments /> },
  { name: "Abstract", icon: <FaLayerGroup /> },
  { name: "Figma", icon: <FaFigma /> },
  { name: "Sketch", icon: <FaSketch /> },
  { name: "Adobe XD", icon: <FaPaintBrush /> },
];
const services = [
  {
    title: "Custom AI Models",
    desc: "Tailored machine learning and deep learning solutions.",
    icon: <FaUsers />,
  },
  {
    title: "Conversational AI",
    desc: "Chatbots, voice assistants, and NLP systems.",
    icon: <FaSitemap />,
  },
  {
    title: "Predictive Analytics",
    desc: "Forecasting, anomaly detection, and data mining.",
    icon: <FaPen />,
  },
  {
    title: "Cloud AI",
    desc: "Deploy AI on AWS, Azure, or GCP.",
    icon: <FaPaintBrush />,
  },
  {
    title: "AI Security",
    desc: "Fraud detection, threat analysis, and compliance.",
    icon: <FaMobileAlt />,
  },
  {
    title: "Process Automation",
    desc: "RPA and intelligent automation for business.",
    icon: <FaUniversalAccess />,
  },
];

const steps = [
  ["1", "Discovery", "Business goals, data audit, and feasibility."],
  ["2", "Modeling", "Data prep, model selection, and training."],
  ["3", "Deployment", "Cloud, on-prem, or edge deployment."],
  ["4", "Monitoring", "Performance, drift, and retraining."],
];

export default function UIDesign() {
  return (
    <>
      <Navbar />

      <main className="mobile-page">
        <section className="mobile-hero">
          <div className="pill">🛠 Elevating User Experiences</div>

          <h1>
            Custom, Scalable <br /> AI Solutions
          </h1>

          <p>
            Build, deploy, and scale intelligent systems for automation, analytics, and innovation.
          </p>

          <div className="hero-actions">
            <a href="/projects">See Solutions</a>
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
          <h2>AI Development Services</h2>
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
          <h2 className="white-title">AI Project Workflow</h2>
          <p className="sub">
            From ideation to deployment, we deliver end-to-end AI solutions.
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
          <h2>Ready to Build with AI?</h2>
          <p>
            Let's create a beautiful, user-centered experience for your next big
            idea.
          </p>
          <a href="/quote">Get a Free Design Audit</a>
        </section>
      </main>

      <Footer />
    </>
  );
}