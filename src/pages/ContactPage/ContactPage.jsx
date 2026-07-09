import { useEffect, useRef, useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  User,
  Building2,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ContactPage.css";

gsap.registerPlugin(ScrollTrigger);

const services = [
  "AI Development",
  "Mobile App Development",
  "Website Development",
  "UI/UX Design",
  "ChatGPT Integrations",
  "Digital Marketing",
];

export default function ContactPage() {
  const rootRef = useRef(null);
  const [step, setStep] = useState(1);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-nav", {
        y: -40,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out",
      });
      gsap.from(".contact-left > *", {
        x: -70,
        opacity: 0,
        duration: 0.9,
        stagger: 0.13,
        ease: "power3.out",
      });
      gsap.from(".journey-card", {
        x: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.utils.toArray(".gsap-reveal").forEach((el) => {
        gsap.from(el, {
          y: 70,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 84%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.from(".area-info > *", {
        x: -60,
        opacity: 0,
        stagger: 0.16,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: { trigger: ".areas-section", start: "top 65%" },
      });

      gsap.from(".map-shell", {
        x: 90,
        rotate: 1.5,
        opacity: 0,
        duration: 0.95,
        ease: "power3.out",
        scrollTrigger: { trigger: ".areas-section", start: "top 62%" },
      });

      gsap.from(".footer-col", {
        y: 50,
        opacity: 0,
        stagger: 0.16,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".contact-footer", start: "top 80%" },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="contact-page" ref={rootRef}>
      <Navbar />
      <section className="contact-hero">
        <div className="hero-glow hero-glow-a" />
        <div className="hero-glow hero-glow-b" />
        <div className="contact-left">
          <span className="pill">
            <Send size={15} /> Get in Touch
          </span>
          <h1>
            Let's Build
            <br />
            Something Great
            <br />
            Together
          </h1>
          <p>
            Have a groundbreaking project in mind? We're ready to engineer it.
            Reach out today and let's start shaping the future of your business.
          </p>
          <div className="mini-contact">
            <span>
              <Mail size={24} />
            </span>
            <div>
              <b>Email Us</b>
              <small>info@n2xsystem.com</small>
            </div>
          </div>
          <div className="mini-contact">
            <span>
              <MapPin size={24} />
            </span>
            <div>
              <b>Our Headquarters</b>
              <small>London, United Kingdom</small>
            </div>
          </div>
        </div>

        <div className="journey-card">
          <h2>Start Your Journey</h2>
          <p>Fill out the form and we'll respond within 24 hours</p>
          <div className="steps-line">
            <i />
            <button
              className={step === 1 ? "on" : ""}
              onClick={() => setStep(1)}
            >
              1
            </button>
            <button
              className={step === 2 ? "on" : ""}
              onClick={() => setStep(2)}
            >
              2
            </button>
            <button
              className={step === 3 ? "on" : ""}
              onClick={() => setStep(3)}
            >
              3
            </button>
          </div>
          <div className="step-labels">
            <span className={step === 1 ? "on" : ""}>Personal</span>
            <span className={step === 2 ? "on" : ""}>Project</span>
            <span className={step === 3 ? "on" : ""}>Details</span>
          </div>

          {step === 1 && (
            <div className="form-panel">
              <label>
                <User size={22} />
                <input placeholder="Full Name" />
              </label>
              <label>
                <Mail size={22} />
                <input placeholder="Email Address" />
              </label>
              <label>
                <Phone size={22} />
                <input placeholder="Phone Number" />
              </label>
              <label>
                <MapPin size={22} />
                <input placeholder="Address (Optional)" />
              </label>
            </div>
          )}
          {step === 2 && (
            <div className="form-panel">
              <label>
                <Building2 size={22} />
                <input placeholder="Company / Brand Name" />
              </label>
              <label>
                <Sparkles size={22} />
                <select>
                  <option>Website Development</option>
                  <option>AI Development</option>
                  <option>Mobile App Development</option>
                  <option>UI/UX Design</option>
                </select>
              </label>
              <label className="wide">
                <input placeholder="Estimated Budget" />
              </label>
            </div>
          )}
          {step === 3 && (
            <div className="form-panel">
              <label className="textarea">
                <textarea placeholder="Tell us about your project" />
              </label>
              <label>
                <CheckCircle2 size={22} />
                <input placeholder="Preferred timeline" />
              </label>
            </div>
          )}
          <button
            className="continue-btn"
            onClick={() => setStep(step < 3 ? step + 1 : 1)}
          >
            Continue <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <section className="areas-section gsap-reveal">
        <h2>Areas We Serve.</h2>
        <div className="area-actions">
          <button>
            <ChevronLeft />
          </button>
          <button>
            <ChevronRight />
          </button>
        </div>
        <div className="area-grid">
          <div className="area-info">
            <div className="blue-line" />
            <h3>
              <MapPin /> Lahore
            </h3>
            <p>
              Plot C 12, Street 195, Sector P,
              <br />
              Dha Phase 1, Lahore, 54000,
              <br />
              Pakistan
            </p>
            <a href="/contact">
              LET'S TALK <ArrowRight size={18} />
            </a>
          </div>
          <div className="map-shell">
            <iframe
              title="N2X Lahore Map"
              loading="lazy"
              src="https://maps.google.com/maps?q=Plot%20C%2012%20Street%20195%20Sector%20P%20DHA%20Phase%201%20Lahore&t=&z=16&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>
        <div className="slider-dots">
          <span />
          <span />
        </div>
      </section>

      <Footer />
    </main>
  );
}
