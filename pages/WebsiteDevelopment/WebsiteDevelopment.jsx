import React from "react";
import "./WebsiteDevelopment.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/HomePage/Footer/Footer";

const techs = [
  "React",
  "Vue.js",
  "Angular",
  "Laravel",
  "Node.js",
  "Python",
  "AWS",
  "Docker",
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
  ["1", "Discovery & Planning", "Goals, roadmap, risks, and sprint plan with clear acceptance criteria."],
  ["2", "Design & Prototyping", "UX flows, UI system, and interactive prototypes validated early."],
  ["3", "Engineering & QA", "Agile sprints, code reviews, and automated test coverage practices."],
  ["4", "Release & Support", "Fastlane CI/CD, store submission, monitoring, and updates."],
];

export default function WebsiteDevelopment() {
  return (
    <>
      <Navbar />

      <main className="mobile-page">
        <section className="mobile-hero">
          <div className="pill">▯ Elevating Digital Experiences</div>
          <h1>Building Reliable, Future-Proof <br /> Website Solutions</h1>
          <p>
            We build scalable, secure, and lightning-fast websites that drive business growth and user engagement.
          </p>
          <div className="hero-actions">
            <a href="/projects">View Our Work</a>
            <a href="/contact">Start a Project</a>
          </div>
        </section>

        <section className="tech-strip">
          <div className="tech-track">
            {[...techs, ...techs].map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
        </section>

        <section className="mobile-section">
          <span className="section-kicker">OUR EXPERTISE</span>
          <h2>Complete Mobile Development Services</h2>
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
          <h2>Automation</h2>
          <p className="sub">A predictable process with clean handoffs, automation, and visibility.</p>

          <div className="steps-grid">
            {steps.map((s) => (
              <div className="step-card" key={s[0]}>
                <span>{s[0]}</span>
                <h3>{s[1]}</h3>
                <p>{s[2]}</p>
              </div>
            ))}
          </div>

          <div className="automation-grid">
            <div className="info-box">
              <h3>Fastlane Deployment Automation</h3>
              <ul>
                <li>Automated versioning, build numbers, and changelogs</li>
                <li>Code signing & certificates managed securely</li>
                <li>One-click uploads to TestFlight and Google Play Internal Testing</li>
                <li>Phased rollouts, release tracks, and rollback support</li>
              </ul>
            </div>

            <div className="info-box">
              <h3>CI/CD & Release Governance</h3>
              <div className="rows">
                <p><span>Build pipelines</span><b>GitHub Actions / Bitrise / Jenkins</b></p>
                <p><span>Release controls</span><b>Approvals, tags, and audit logs</b></p>
                <p><span>Monitoring</span><b>Crashlytics, Sentry, Analytics</b></p>
              </div>
            </div>
          </div>
        </section>

        <section className="mobile-section publish">
          <h2>Publishing to App Store & Play Store</h2>
          <p className="sub">Clear checklists to pass review quickly and confidently.</p>

          <div className="publish-grid">
            <div className="info-box">
              <h3> App Store (iOS)</h3>
              <ul>
                <li>Bundle ID, provisioning, and App Store Connect setup</li>
                <li>Compliance: privacy details, tracking prompts, and data use</li>
                <li>Localized metadata, screenshots, and preview videos</li>
                <li>TestFlight distribution and phased release</li>
              </ul>
            </div>

            <div className="info-box">
              <h3>▷ Google Play (Android)</h3>
              <ul>
                <li>Play Console setup, signing key, and app integrity</li>
                <li>Data safety form and permission declarations</li>
                <li>Store listing assets, feature graphics, and localization</li>
                <li>Tracks for internal, closed, open, and production releases</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mobile-section why">
          <span className="section-kicker purple">Core Advantages</span>
          <h2>Why Choose Us?</h2>
          <p className="sub">We deliver more than just code; we deliver value, security, and engagement.</p>

          <div className="why-grid">
            <div className="why-card">
              <div className="big-icon yellow">⌁</div>
              <h3>Improve Stability</h3>
              <p>Unwavering stability guarantees a crash-free experience. We handle high user loads efficiently without compromising speed.</p>
              <b>99.9% Uptime Guarantee</b>
            </div>
            <div className="why-card">
              <div className="big-icon red">盾</div>
              <h3>Resilience</h3>
              <p>Top-tier security with advanced encryption and multi-factor authentication to protect user-sensitive information.</p>
              <b className="red-text">Bank-Grade Security</b>
            </div>
            <div className="why-card">
              <div className="big-icon cyan">👥</div>
              <h3>Socialization</h3>
              <p>Effortless social integration allows users to log in, share content, and connect, boosting community engagement.</p>
              <b className="cyan-text">Seamless Integration</b>
            </div>
          </div>
        </section>

        <section className="mobile-cta">
          <h2>Ready to Build Your App?</h2>
          <p>Let's discuss your mobile strategy and bring your vision to life on iOS and Android.</p>
          <a href="/quote">Get a Free Quote</a>
        </section>
      </main>

      <Footer />
    </>
  );
}