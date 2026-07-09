import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/n2xlogo.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerGlow"></div>

      <div className="footerContent">
        <div className="footerBrand">
          <Link to="/" className="footerLogo">
            <img src={logo} alt="n2xSystem Logo" />
          </Link>

          <p>
            Innovating the future with AI & Agentic Systems. We build scalable,
            modern, and intelligent software solutions for businesses worldwide.
          </p>
        </div>

        <div className="footerCol">
          <h3>Services</h3>
          <Link to="/services/ai-development">AI Development</Link>
          <Link to="/services/app-development">Mobile App Development</Link>
          <Link to="/services/website-development">Website Development</Link>
          <Link to="/services/ui-design">UI/UX Design</Link>
          <Link to="/services/ai-integrations">ChatGPT Integrations</Link>
          <Link to="/services/digital-marketing">Digital Marketing</Link>
        </div>

        <div className="footerCol">
          <h3>Contacts</h3>
          <p className="footerEmail">
  <strong>Email:</strong>
  <br />
  <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@n2xsystem.com"
  target="_blank"
  rel="noopener noreferrer"
  className="footerEmailLink"
>
  info@n2xsystem.com
</a>
</p>

          <div className="footerSocials">
            <a href="#" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebookF size={20} />
            </a>
          </div>
        </div>

        <div className="footerCol">
          <h3>Address</h3>

          <div className="footerAddress">
            <strong>LAHORE</strong>
            <p>Plot C 12, Street 195, Sector P, Dha Phase 1, Lahore, 54000 • 6.1, Pakistan</p>
          </div>

          <div className="footerAddress">
            <strong>LONDON</strong>
            <p>90-92 Angel Road, London SW9 7HP, United Kingdom</p>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <p>© 2026 n2x System. All rights reserved.</p>

        <div>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}