import { useState } from "react";
import { Menu, X, Settings, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/n2xlogo.png";
import "./Navbar.css";

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const isHome = pathname === "/";
  const isServices = pathname.startsWith("/services");
  const isProjects = pathname.startsWith("/projects");
  const isAbout = pathname.startsWith("/about");
  const isCareers = pathname.startsWith("/careers");
  const isContact = pathname.startsWith("/contact");

  const closeMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  const toggleServices = () => {
    setServicesOpen((prev) => !prev);
  };

  return (
    <header className={open ? "navbar menu-active" : "navbar"}>
      <Link className="brand" to="/" onClick={closeMenu}>
        <img src={logo} alt="n2xSystem Logo" className="logo" />
      </Link>

      <nav className={open ? "nav open" : "nav"}>
        <Link className={isHome ? "active" : ""} to="/" onClick={closeMenu}>
          Home
        </Link>

        <div className={servicesOpen ? "nav-dropdown submenu-open" : "nav-dropdown"}>
          <button
            type="button"
            className={`dropdown-btn ${isServices ? "active" : ""}`}
            aria-expanded={servicesOpen}
            onClick={toggleServices}
          >
            Services <ChevronDown size={16} />
          </button>

          <div className="dropdown-menu">
            <Link to="/services/app-development" onClick={closeMenu}>📱 Mobile App Development</Link>
            <Link to="/services/website-development" onClick={closeMenu}>💻 Website Development</Link>
            <Link to="/services/ui-design" onClick={closeMenu}>🎨 UI/UX Design</Link>
            <Link to="/services/ai-development" onClick={closeMenu}>🧠 AI Development</Link>
            <Link to="/services/ai-integrations" onClick={closeMenu}>🤖 AI Integrations</Link>
            <Link to="/services/digital-marketing" onClick={closeMenu}>📈 Digital Marketing</Link>
            <Link className="viewAll" to="/services" onClick={closeMenu}>View All Services</Link>
          </div>
        </div>

        <Link className={isProjects ? "active" : ""} to="/projects" onClick={closeMenu}>
          Projects
        </Link>

        <Link className={isAbout ? "active" : ""} to="/about" onClick={closeMenu}>
          About
        </Link>

        <Link className={isCareers ? "active" : ""} to="/careers" onClick={closeMenu}>
          Careers
        </Link>

        <Link className={isContact ? "active" : ""} to="/contact" onClick={closeMenu}>
          Contact
        </Link>

        <Link className="quote" to="/contact" onClick={closeMenu}>
          Get a Quote
        </Link>
      </nav>

      <div className="mobileActions">
        <Link className="mobileServicePill" to="/services" onClick={closeMenu}>
          <Settings size={18} />
          <span>Services</span>
        </Link>

        <button
          className="mobileBtn"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={30} />}
        </button>
      </div>
    </header>
  );
}