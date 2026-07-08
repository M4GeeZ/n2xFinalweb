import React from "react";
import "./WebsiteDevelopment.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaReact,
  FaVuejs,
  FaAngular,
  FaLaravel,
} from "react-icons/fa";

const techs = [
  { name: "Node.js", icon: <FaNodeJs size={20} /> },
  { name: "Python", icon: <FaPython size={20} /> },
  { name: "AWS", icon: <FaAws size={20} /> },
  { name: "Docker", icon: <FaDocker size={20} /> },
  { name: "React", icon: <FaReact size={20} /> },
  { name: "Vue.js", icon: <FaVuejs size={20} /> },
  { name: "Angular", icon: <FaAngular size={20} /> },
  { name: "Laravel", icon: <FaLaravel size={20} /> },
];
const services = [
  ["Custom Websites", "Unique, branded websites tailored to your business goals."],
  ["E-Commerce", "Robust online stores with secure payments and inventory."],
  ["Backend APIs", "Powerful, scalable APIs for any web or mobile app."],
  ["Cloud Hosting", "Managed cloud deployments for speed and reliability."],
  ["SEO Optimization", "On-page SEO, analytics, and performance tuning."],
  ["Security Audits", "Penetration testing and vulnerability assessments."],
];

const steps = [
  ["1", "Discovery", "Requirements, user stories, and technical planning."],
  ["2", "Design", "Wireframes, mockups, and design system creation."],
  ["3", "Development", "Agile sprints, code reviews, and QA testing."],
  ["4", "Launch", "Deployment, monitoring, and ongoing support."],
];

export default function WebsiteDevelopment() {
  return (
    <>
      <Navbar />

      <main className="mobile-page">
        <section className="mobile-hero">
  <div className="pill">🌐 Elevating Web Experiences</div>

  <h1>
    Building Enterprise-Grade <br /> Web Applications
  </h1>

  <p>
    We build scalable, secure, and lightning-fast websites that drive business
    growth and user engagement.
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
<h2>Web Development Solutions</h2>
<div className="blue-line"></div>

          <div className="services-grid">
            {services.map((item, i) => (
              <div className="service-card" key={i}>
                <div className={`circle c${i}`}>{i === 0 ? "☁" : i === 1 ? "✎" : i === 2 ? "</>" : i === 3 ? "⚒" : i === 4 ? "▰" : "☷"}</div>
                <h3>{item[0]}</h3>
                <p>{item[1]}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mobile-section automation">
  <h2>Web Delivery Workflow</h2>
  <p className="sub">From planning to launch, a proven process for success.</p>

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
  <h2>Ready to Build Future?</h2>
  <p>Let's build a high-performance web presence for your business.</p>
  <a href="/quote">Get a Free Web Audit</a>
</section>
      </main>

      <Footer />
    </>
  );
}