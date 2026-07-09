import { Layers, ShieldCheck, Zap, Cloud, Cpu } from "lucide-react";
import "./WhyChoose.css";

export default function WhyChoose() {
  return (
    <section id="about" className="section why">
      <div className="container whyGrid">

        {/* Left Card */}
        <div className="whyBox" data-reveal>
          <div className="stackIcon">
            <Layers size={78} />
          </div>

          <h3 className="whyCardTitle">
            Full-Cycle Development
          </h3>

          <p className="whyCardDesc">
            From concept to deployment, we handle it all.
          </p>

          <span></span>
        </div>

        {/* Right Content */}
        <div data-reveal>
          <div className="eyebrow">
            <ShieldCheck size={15} />
            Why n2x System?
          </div>

          <h2 className="title">
            Engineering Excellence.
            <br />
            <span className="grad">Delivered consistently.</span>
          </h2>

          <p className="muted">
            We don't just build websites; we build digital assets that drive
            business value. Our focus is on creating robust, scalable, and
            maintainable solutions using the latest reliable technologies.
          </p>

          <div className="whyList">

            <p>
              <Zap />
              <span>
                <strong>Modern Tech Stack</strong>
                <br />
                React, Node.js, PHP, Python.
              </span>
            </p>

            <p>
              <Cloud />
              <span>
                <strong>Cloud Native</strong>
                <br />
                AWS, Azure, Google Cloud ready.
              </span>
            </p>

            <p>
              <Layers />
              <span>
                <strong>Agile Workflow</strong>
                <br />
                Rapid iterations & transparent progress.
              </span>
            </p>

            <p>
              <ShieldCheck />
              <span>
                <strong>Security First</strong>
                <br />
                Enterprise-grade protection.
              </span>
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}