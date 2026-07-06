import { Rocket, ChevronDown } from "lucide-react";
import "./Navbar.css";
import logo from "../../assets/n2xlogo.png";

export default function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="/">
  <img src={logo} alt="n2xSystem Logo" className="logo" />
</a>

      <nav>

        <a className="active" href="#home">
          Home
        </a>

        {/* Services Dropdown */}
        <div className="nav-dropdown">

          <a href="#services" className="dropdown-btn">
            Services
            <ChevronDown size={16} />
          </a>

          <div className="dropdown-menu">

            <a href="/services/app-development">
              📱 Mobile App Development
            </a>

            <a href="/services/website-development">
              💻 Website Development
            </a>

            <a href="/services/ui-design">
              🎨 UI/UX Design
            </a>

            <a href="/services/ai-development">
              🧠 AI Development
            </a>

            <a href="/services/ai-integrations">
              🤖 AI Integrations
            </a>

            <a href="/services/digital-marketing">
              📈 Digital Marketing
            </a>

            <a className="viewAll" href="#">
              View All Services
            </a>

          </div>

        </div>

        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#careers">Careers</a>
        <a href="#contact">Contact</a>

        <a className="quote" href="#contact">
          Get a Quote
        </a>

      </nav>

      <button className="mobileBtn">
        <Rocket size={20} />
      </button>

    </header>
  );
}