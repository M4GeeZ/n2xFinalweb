import React from "react";
import "./UI-Design.css";
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
    title: "User Research",
    desc: "Persona creation, interviews, and usability testing to understand your audience.",
    icon: <FaUsers />,
  },
  {
    title: "Information Architecture",
    desc: "Clear navigation and structure for effortless discovery.",
    icon: <FaSitemap />,
  },
  {
    title: "Wireframing",
    desc: "Low-fidelity wireframes to validate ideas quickly.",
    icon: <FaPen />,
  },
  {
    title: "Visual Design",
    desc: "High-fidelity mockups and design systems for consistency.",
    icon: <FaPaintBrush />,
  },
  {
    title: "Prototyping",
    desc: "Interactive prototypes to test flows and micro-interactions.",
    icon: <FaMobileAlt />,
  },
  {
    title: "Accessibility",
    desc: "WCAG-compliant, inclusive design for all users.",
    icon: <FaUniversalAccess />,
  },
];

const steps = [
  ["1", "Discovery", "Stakeholder interviews, user research, and competitor analysis."],
  ["2", "Wireframing", "Low-fidelity wireframes to validate structure and flow."],
  ["3", "Visual Design", "High-fidelity mockups, design systems, and micro-interactions."],
  ["4", "Handoff", "Developer-ready assets, specs, and design tokens."],
];

export default function UIDesign() {
  return (
    <>
      <Navbar />

      <main className="mobile-page">
        <section className="mobile-hero">
          <div className="pill">🛠 Elevating User Experiences</div>

          <h1>
            Crafting Intelligent <br /> User Experiences
          </h1>

          <p>
            We design beautiful, intuitive interfaces that drive engagement and
            delight users across all platforms.
          </p>

          <div className="hero-actions">
            <a href="/projects">View Our Work</a>
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
          <h2>Our Design Services</h2>
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
          <h2 className="white-title">Design Delivery Workflow</h2>
          <p className="sub">
            From research to handoff, a seamless process for world-class results.
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
          <h2>Ready for Premium Design?</h2>
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