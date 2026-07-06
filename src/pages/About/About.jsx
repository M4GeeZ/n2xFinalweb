import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Eye, Users, Target, Sparkles } from "lucide-react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

const team = [
  { name: "Muhammad Arslan", role: "CTO", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=900" },
  { name: "Alyana Tariq", role: "Lead Mobile App Developer", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=900" },
  { name: "Ali", role: "Project Manager", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=900" },
  { name: "Faiza", role: "Full Stack Development Lead", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=900" },
];

export default function About() {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-hero > *", {
        y: 70,
        opacity: 0,
        filter: "blur(10px)",
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.utils.toArray("[data-about]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 90, opacity: 0, filter: "blur(10px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 84%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      gsap.to(".ceo-ring", {
        rotate: 360,
        duration: 22,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".about-orb", {
        y: 30,
        x: 20,
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

      <main className="about-page" ref={pageRef}>
        <section className="about-hero">
          <div className="about-orb orb-a"></div>
          <div className="about-orb orb-b"></div>

          <span className="about-pill">
            <Sparkles size={16} /> About n2x System
          </span>

          <h1>
            Building smarter digital systems with <span>engineering excellence.</span>
          </h1>

          <p>
            n2x System builds modern web, mobile, AI and cloud-based software
            solutions for businesses that need reliability, performance and
            premium user experience.
          </p>
        </section>

        <section className="life-section" data-about>
          <h2>Life at n2x System</h2>
          <div className="title-line"></div>

          <h3>
            Work Hard, <span>Play Harder</span>: Experience the <span>Fun</span> Side of n2x System!
          </h3>

          <p>
            Life at n2x System is not just about work; it is about building lasting
            friendships, enjoying memorable moments together, and creating a vibrant
            workplace culture where creativity and collaboration thrive.
          </p>

          <button>Explore Gallery</button>
        </section>

        <section className="achievement-section" data-about>
          <div className="achievement-card">
            <Target size={34} />
            <h3>Our Mission</h3>
            <p>
              Deliver scalable, secure and intelligent software solutions that help
              businesses grow faster with modern technology.
            </p>
          </div>

          <div className="achievement-card">
            <Users size={34} />
            <h3>Our Team</h3>
            <p>
              A focused team of designers, engineers and strategists working together
              to build premium digital products.
            </p>
          </div>

          <div className="achievement-card">
            <Sparkles size={34} />
            <h3>Our Promise</h3>
            <p>
              Clean UI, smooth animation, reliable development and consistent delivery
              from idea to production.
            </p>
          </div>
        </section>

        <section className="ceo-section" data-about>
          <div className="ceo-content">
            <h2>Let's hear from the CEO</h2>
            <div className="title-line left"></div>

            <div className="vision-box">
              <div className="vision-icon">
                <Eye size={28} />
              </div>

              <div>
                <h3>Vision</h3>
                <p>
                  “Thank you for your interest in n2x System. We are much more
                  than just another outsourced software house. Our promise is to
                  provide high-quality software services with strong focus on
                  client satisfaction, innovation and long-term business value.”
                </p>

                <strong>- Tariq Waseem (Founder & CEO)</strong>
              </div>
            </div>
          </div>

          <div className="ceo-image-wrap">
            <div className="ceo-ring"></div>
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=900"
              alt="CEO"
            />
          </div>
        </section>

        <section className="team-section" data-about>
          <h2>Meet Our Team</h2>
          <div className="title-line"></div>

          <div className="team-grid">
            {team.map((member, index) => (
              <article className="team-card" key={index}>
                <img src={member.img} alt={member.name} />
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <span>{member.role}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-cta" data-about>
          <h2>
            Schedule your free <span>consultancy</span> today.
          </h2>
          <a href="/#contact">LET'S TALK</a>
        </section>
      </main>

      <Footer />
    </>
  );
}