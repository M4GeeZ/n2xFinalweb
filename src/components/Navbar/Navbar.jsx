import { Rocket, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/n2xlogo.png";
import "./Navbar.css";

export default function Navbar() {
  const { pathname } = useLocation();

  const isHome = pathname === "/";
  const isServices = pathname.startsWith("/services");
  const isProjects = pathname.startsWith("/projects");

  return (
    <header className="navbar">
      <Link className="brand" to="/">
        <img src={logo} alt="n2xSystem Logo" className="logo" />
      </Link>

      <nav>
        <Link className={isHome ? "active" : ""} to="/">
          Home
        </Link>

        <div className="nav-dropdown">
          <Link
            to="/services"
            className={`dropdown-btn ${isServices ? "active" : ""}`}
          >
            Services <ChevronDown size={16} />
          </Link>

          <div className="dropdown-menu">
            <Link to="/services/app-development">📱 Mobile App Development</Link>
            <Link to="/services/website-development">💻 Website Development</Link>
            <Link to="/services/ui-design">🎨 UI/UX Design</Link>
            <Link to="/services/ai-development">🧠 AI Development</Link>
            <Link to="/services/ai-integrations">🤖 AI Integrations</Link>
            <Link to="/services/digital-marketing">📈 Digital Marketing</Link>
            <Link className="viewAll" to="/services">
              View All Services
            </Link>
          </div>
        </div>

        <Link className={isProjects ? "active" : ""} to="/projects">
          Projects
        </Link>

        <Link className={pathname.startsWith("/about") ? "active" : ""} to="/about">
  About
</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/contact">Contact</Link>

        <Link className="quote" to="/#contact">
          Get a Quote
        </Link>
      </nav>

      <button className="mobileBtn">
        <Rocket size={20} />
      </button>
    </header>
  );
}