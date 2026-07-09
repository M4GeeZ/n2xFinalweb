import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Users,
  Send,
  UserCheck,
  Code2,
  Handshake,
  ArrowRight,
  Sparkles,
  Briefcase,
  MapPin,
  Clock,
} from "lucide-react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./CareersPage.css";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: Send,
    title: "Apply Online",
    desc: "Submit your resume and portfolio with a short introduction.",
    time: "5 Minutes",
  },
  {
    icon: UserCheck,
    title: "Profile Review",
    desc: "We review your skills, projects, and technical experience.",
    time: "2-3 Days",
  },
  {
    icon: Code2,
    title: "Technical Round",
    desc: "Showcase your practical skills through tasks or interviews.",
    time: "1-2 Hours",
  },
  {
    icon: Handshake,
    title: "Final Interview",
    desc: "Meet the team, discuss culture, and receive your offer.",
    time: "Final Step",
  },
];

const jobs = [
  {
    title: "Frontend Developer Intern",
    type: "Internship",
    location: "Lahore / Remote",
    duration: "3 Months",
    tags: ["React", "JavaScript", "CSS", "GSAP"],
  },
  {
    title: "MERN Stack Developer",
    type: "Full Time",
    location: "Lahore",
    duration: "Onsite",
    tags: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "UI/UX Designer",
    type: "Internship",
    location: "Remote",
    duration: "2-3 Months",
    tags: ["Figma", "Wireframes", "Prototyping"],
  },
];

export default function Careers() {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".careers-hero > *", {
        y: 70,
        opacity: 0,
        filter: "blur(10px)",
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.utils.toArray("[data-career]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 85, opacity: 0, scale: 0.96, filter: "blur(10px)" },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      gsap.to(".career-orb", {
        y: 35,
        x: 18,
        duration: 6,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: 0.4,
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />

      <main className="careers-page" ref={pageRef}>
        <section className="careers-hero">
          <div className="career-orb orb-one"></div>
          <div className="career-orb orb-two"></div>

          <span className="career-pill">
            <Users size={16} /> Careers at n2x System
          </span>

          <h1>
            Join Our Team <br />
            Shape the Future of <span>Tech</span>
          </h1>

          <p>
            Build your career in AI, web, mobile and modern software engineering.
            Join a passionate team where creativity, learning and execution matter.
          </p>

          <a href="#open-roles" className="career-hero-btn">
            View Open Roles <ArrowRight size={18} />
          </a>
        </section>

        <section className="career-process" data-career>
          <span className="section-badge">HOW WE HIRE</span>

          <h2>
            Your Journey to <span>n2xSystem</span>
          </h2>

          <p>
            Our hiring process is transparent, fast, and focused on helping
            talented people succeed.
          </p>

          <div className="process-grid">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article className="process-card" key={index}>
                  <div className="process-icon">
                    <Icon size={30} />
                  </div>

                  <strong>0{index + 1}</strong>

                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>

                  <span>{step.time}</span>
                </article>
              );
            })}
          </div>
        </section>

        <section className="open-roles" id="open-roles" data-career>
          <span className="section-badge">
            <Briefcase size={15} /> OPEN POSITIONS
          </span>

          <h2>
            Explore Career <span>Opportunities</span>
          </h2>

          <div className="jobs-grid">
            {jobs.map((job, index) => (
              <article className="job-card" key={index}>
                <div className="job-top">
                  <span>{job.type}</span>
                  <Briefcase size={26} />
                </div>

                <h3>{job.title}</h3>

                <div className="job-meta">
                  <p>
                    <MapPin size={16} /> {job.location}
                  </p>
                  <p>
                    <Clock size={16} /> {job.duration}
                  </p>
                </div>

                <div className="job-tags">
                  {job.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <button>
                  Apply Now <ArrowRight size={17} />
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="career-culture" data-career>
          <div>
            <span className="section-badge">
              <Sparkles size={15} /> OUR CULTURE
            </span>

            <h2>
              Grow with people who build, learn and move fast.
            </h2>

            <p>
              At n2x System, we believe in ownership, clean execution,
              continuous learning and building products that create real value.
              Whether you are an intern or an experienced developer, you will
              work on meaningful projects with modern tools and real clients.
            </p>
          </div>

          <div className="culture-points">
            <div>Real client projects</div>
            <div>Mentorship & reviews</div>
            <div>Modern tech stack</div>
            <div>Growth-focused environment</div>
          </div>
        </section>

        <section className="career-cta" data-career>
          <h2>
            Ready to start your journey with <span>n2xSystem?</span>
          </h2>

          <p>
            Send your resume, portfolio or GitHub profile and let’s see how you
            can grow with our team.
          </p>

          <a href="/contact">
            Get in Touch <ArrowRight size={18} />
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}