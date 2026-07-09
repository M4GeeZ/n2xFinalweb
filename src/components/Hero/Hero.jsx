import { Rocket, ArrowRight, Brain, Globe2, Smartphone } from "lucide-react";
import "./Hero.css";
export default function Hero() {
  return (
    <section id="home" className="hero">
      <span className="orb o1"></span>
      <span className="orb o2"></span>
      <div className="hero-bg"></div>
      <div className="hero-content">
        <div data-reveal>
          <div className="pill">
            <Rocket size={16} />
            Elevating Digital Experiences
          </div>
          <h1>
            Building Reliable,
            <br />
            Future-Proof{" "}
            <span>
              Web,
              <br />
              Mobile & AI Solutions
            </span>
          </h1>
          <p>
            We craft premium web and mobile applications, AI-driven systems, and
            scalable software ecosystems designed for performance, security, and
            intelligent growth.
          </p>
          <div className="hero-actions">
            <a className="btn btn-light" href="/projects">
              <Rocket size={20} />
              View Our Work
            </a>
            <a className="btn btn-outline" href="/contact">
              Start a Project <ArrowRight size={22} />
            </a>
          </div>
        </div>
        <div className="hero-visual" data-reveal>
          <div className="float-chip ai">
            <Brain size={17} />
            AI Solutions
          </div>
          <div className="float-chip web">
            <Globe2 size={17} />
            Web Platforms
          </div>
          <div className="float-chip mobile">
            <Smartphone size={17} />
            Mobile Apps
          </div>
          <div className="hero-card">
            <h3>n2xSystem</h3>
            <p>AI Dashboard</p>
            <div className="bars">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
            <div className="metrics">
              <b>
                98%<small>Performance</small>
              </b>
              <b>
                AI<small>Automation</small>
              </b>
              <b>
                Cloud<small>Scalable</small>
              </b>
            </div>
            <span className="dot"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
