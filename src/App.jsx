import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HomePage from "./components/HomePage/HomePage";

import AIDevelopment from "./pages/AIDevelopment/AIDevelopment";
import AIIntegrations from "./pages/AIIntegrations/AIIntegrations";
import DigitalMarketing from "./pages/DigitalMarketing/DigitalMarketing";
import UIDesign from "./pages/UIDesign/UI-Design";
import WebsiteDevelopment from "./pages/WebsiteDevelopment/WebsiteDevelopment";
import AppDevelopment from "./pages/AppDevelopment/AppDevelopment";

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 70, opacity: 0, filter: "blur(8px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 84%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      gsap.utils.toArray("[data-card]").forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 85, opacity: 0, scale: 0.94 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            delay: (i % 3) * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      gsap.to(".tech-track", {
        xPercent: -50,
        duration: 24,
        ease: "none",
        repeat: -1,
      });

      gsap.to(".hero-card", {
        y: -16,
        rotate: -4,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });

      gsap.to(".orb", {
        y: 35,
        x: 20,
        duration: 6,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: 0.5,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/services/ai-development" element={<AIDevelopment />} />
        <Route path="/services/ai-integrations" element={<AIIntegrations />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/ui-design" element={<UIDesign />} />
        <Route
          path="/services/website-development"
          element={<WebsiteDevelopment />}
        />
        <Route path="/services/app-development" element={<AppDevelopment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;