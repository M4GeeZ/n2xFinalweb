import { useState } from "react";
import { ArrowRight, CheckCircle2, Clock, FileText, Lock, Sparkles, Star } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./QuotePage.css";

export default function QuotePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="quotePage">
      <Navbar />

      <main>
        <section className="quoteHero">
          <div className="quoteOrb quoteOrbOne" />
          <div className="quoteOrb quoteOrbTwo" />

          <div className="quoteHeroInner">
            <div className="quoteLeft">
              <span className="quoteBadge">
                <Sparkles size={16} /> Get a Quote
              </span>

              <h1>
                Tell us about your <span>next big project.</span>
              </h1>

              <p>
                Share your idea, requirements, and goals. Our team will review
                everything and send you a clear project estimate within 24 hours.
              </p>

              <div className="quoteFeatures">
                <div>
                  <Clock size={24} />
                  <span>
                    <b>Quick Response</b>
                    24 hour turnaround time
                  </span>
                </div>

                <div>
                  <FileText size={24} />
                  <span>
                    <b>Detailed Breakdown</b>
                    Transparent scope & cost
                  </span>
                </div>

                <div>
                  <Lock size={24} />
                  <span>
                    <b>100% Confidential</b>
                    Your idea stays protected
                  </span>
                </div>
              </div>
            </div>

            <form className="quoteForm">
              <div className="quoteFormHead">
                <span>Request a Quote</span>
                <h2>Start your project with us</h2>
                <p>Fill the form and we’ll get back to you shortly.</p>
              </div>

              <div className="quoteGrid">
                <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
                <input name="email" placeholder="Email Address" value={form.email} onChange={handleChange} />
                <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
                <input name="company" placeholder="Company Name (Optional)" value={form.company} onChange={handleChange} />

                <select name="service" value={form.service} onChange={handleChange}>
                  <option value="">Select Service</option>
                  <option>AI Development</option>
                  <option>Mobile App Development</option>
                  <option>Website Development</option>
                  <option>UI/UX Design</option>
                  <option>ChatGPT Integrations</option>
                  <option>Digital Marketing</option>
                </select>

                <select name="budget" value={form.budget} onChange={handleChange}>
                  <option value="">Project Budget</option>
                  <option>PKR 50k - 100k</option>
                  <option>PKR 100k - 250k</option>
                  <option>PKR 250k - 500k</option>
                  <option>PKR 500k+</option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={handleChange}
              />

              <button type="button">
                Submit Request <ArrowRight size={18} />
              </button>

              <div className="quoteTrust">
                <span><CheckCircle2 size={15} /> 100% Confidential</span>
                <span><Star size={15} /> 200+ Projects</span>
                <span><Clock size={15} /> 24h Response</span>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}