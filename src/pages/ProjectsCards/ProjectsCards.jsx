import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./ProjectsCards.css";
import carshare from "../../assets/carshare.png";
import HoverCarShare from "../../assets/HoverCarShare.png";
import EagleChat from "../../assets/EagleChat.png";
import Eaglechathover from "../../assets/Eaglechathover.png";
import GMS from "../../assets/GMS.png";
import LMSAPP from "../../assets/LMSAPP.png";
import hmb from "../../assets/hmb.png";
import pos from "../../assets/pos.jpg";
import ttb from "../../assets/ttb.png";
import TMS from "../../assets/TMS.png";
import PizzaMama from "../../assets/PizzaMama.png";
import Mindora from "../../assets/Mindora.png";
import Jabulani from "../../assets/Jabulani.png";

gsap.registerPlugin(ScrollTrigger);

const topCards = [
  {
    title: "Carshare",
    desc: "Smart admin dashboard to manage drivers, routes, bookings, payments, and live ride analytics—all in one place.",
    img: HoverCarShare,
    hoverImg: carshare,
  },
  {
    title: "Gaming Arcade - Play & Earn",
    desc: "An all-in-one gaming platform featuring mini-games, live chat, coin rewards, and a secure digital wallet.",
    img: Eaglechathover,
    hoverImg: EagleChat,
  },
];

const movingCards = [
  { title: "PizzaMama", img: PizzaMama },
  { title: "Jabulani", img: Jabulani },
  { title: "Mindora", img: Mindora },
  { title: "TMS", img: TMS },
  { title: "TrueTrucker", img: ttb },
  { title: "POS", img: pos },
  { title: "Resturent System", img: hmb },
  { title: "L M S", img: LMSAPP },
  { title: "Garage Management System", img: GMS },
];

export default function ProjectsCards() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects-hero-content > *", {
        y: 70,
        opacity: 0,
        filter: "blur(10px)",
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.utils.toArray("[data-project-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 80, opacity: 0, filter: "blur(8px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      const orbitCards = gsap.utils.toArray(".orbit-card");
      const finalCards = gsap.utils.toArray(".primary-set .moving-card");
      const duplicateCards = gsap.utils.toArray(".clone-set .moving-card");

      gsap.set(".orbit-wrap", { autoAlpha: 1, scale: 1 });
      gsap.set([...finalCards, ...duplicateCards], {
        autoAlpha: 0,
        y: 120,
        scale: 0.85,
      });

      gsap.to(".orbit-ring", {
        rotate: 360,
        duration: 18,
        repeat: -1,
        ease: "none",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".moving-wrapper",
          start: "top top",
          end: "+=1800",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      movingCards.forEach((_, index) => {
        tl.to(
          orbitCards[index],
          {
            autoAlpha: 0,
            scale: 0.2,
            duration: 0.4,
            ease: "power2.inOut",
          },
          index * 0.16,
        );

        tl.to(
          [finalCards[index], duplicateCards[index]],
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.55,
            ease: "power3.out",
          },
          index * 0.16 + 0.08,
        );
      });

      tl.to(".orbit-wrap", {
        autoAlpha: 0,
        scale: 0.65,
        duration: 0.5,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />

      <main className="projects-page" ref={sectionRef}>
        <section className="projects-hero">
          <div className="projects-hero-glow glow-one"></div>
          <div className="projects-hero-glow glow-two"></div>

          <div className="projects-hero-content">
            <span className="hero-pill">🚀 n2xSystem Project Showcase</span>

            <h1>We Build Digital Products That Look Premium & Perform Fast.</h1>

            <p>
              From high-end websites and mobile apps to dashboards, APIs, cloud
              workflows and product design — our projects are engineered for
              speed, scalability and business impact.
            </p>

            <div className="hero-stats">
              <div>
                <strong>200+</strong>
                <span>Projects Delivered</span>
              </div>
              <div>
                <strong>99.9%</strong>
                <span>Reliable Delivery</span>
              </div>
              <div>
                <strong>24/7</strong>
                <span>Client Support</span>
              </div>
            </div>
          </div>
        </section>

        <section className="n2x-section">
          <div className="n2x-title" data-project-reveal>
            <span>N2X</span> Digital Experiences
            <p>
              Premium digital solutions crafted with modern design, clean
              animation, and smooth user interaction.
            </p>
          </div>

          <div className="top-cards">
            {topCards.map((card, index) => (
              <div
                className="premium-card top-card"
                key={index}
                data-project-reveal
              >
                <div className="card-inner">
                  <img className="base-img" src={card.img} alt={card.title} />

                  <div className="hover-image-layer">
                    <img src={card.hoverImg || card.img} alt="" />
                  </div>

                  <div className="card-overlay"></div>

                  <div className="card-content">
                    <h2>{card.title}</h2>
                    <p>{card.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="moving-wrapper">
            <div className="orbit-wrap">
              <div className="orbit-ring">
                {movingCards.map((card, index) => (
                  <div
                    className="orbit-card"
                    key={index}
                    style={{
                      "--i": index,
                      "--total": movingCards.length,
                    }}
                  >
                    <img src={card.img} alt={card.title} />
                    <span>{card.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="moving-row">
              <div className="moving-set primary-set">
                {movingCards.map((card, index) => (
                  <div className="premium-card moving-card" key={index}>
                    <div className="card-inner">
                      <img
                        className="base-img"
                        src={card.img}
                        alt={card.title}
                      />
                      <div className="card-overlay"></div>

                      <div className="card-content small">
                        <h2>{card.title}</h2>
                        <p>
                          Creative, clean and conversion-focused digital
                          solution.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="moving-set clone-set" aria-hidden="true">
                {movingCards.map((card, index) => (
                  <div className="premium-card moving-card" key={index}>
                    <div className="card-inner">
                      <img
                        className="base-img"
                        src={card.img}
                        alt={card.title}
                      />
                      <div className="card-overlay"></div>

                      <div className="card-content small">
                        <h2>{card.title}</h2>
                        <p>
                          Creative, clean and conversion-focused digital
                          solution.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="projects-bottom" data-project-reveal>
          <span>Ready to build?</span>
          <h2>Your next project deserves a premium digital experience.</h2>
          <p>
            Let’s turn your idea into a polished web, mobile or AI-powered
            product with strong UI, smooth animations and scalable engineering.
          </p>
          <a href="/contact">Start a Project →</a>
        </section>
      </main>

      <Footer />
    </>
  );
}
