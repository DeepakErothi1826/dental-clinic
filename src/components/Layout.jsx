import { motion, useScroll, useScroll as useScrollRef } from 'framer-motion';
import { 
  Star, 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  Facebook, 
  Twitter,
  ChevronRight
} from 'lucide-react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import '../App.css';

const Layout = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="app-wrapper">
      {/* Scroll Progress Indicator */}
      <motion.div className="scroll-progress-container">
        <motion.div 
          className="scroll-progress-bar" 
          style={{ scaleY: scrollYProgress }} 
        />
        <div className="scroll-icon">
          <ChevronRight size={14} className="rotate-90" />
        </div>
      </motion.div>

      {/* Floating Geometric Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="floating-shape shape-1"
      />
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="floating-shape shape-2"
      />

      {/* Header */}
      <header className="header glass-morphism">
        <div className="container header-content">
          <Link to="/" className="logo-link">
            <div className="logo-section">
              <div className="logo-icon-wrapper" style={{ width: '60px', height: '60px' }}>
                <img src="/MAHIMA-DENTAL/logo.png" alt="Mahima Dental Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div className="logo-text">
                <h1 className="logo-title" style={{ fontSize: '1.8rem' }}>MAHIMA <span className="text-teal">DENTAL</span></h1>
                <span className="logo-subtitle">PREMIUM CARE CENTER</span>
              </div>
            </div>
          </Link>
          
          <nav className="nav-desktop">
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About Us</NavLink>
            <NavLink to="/treatments" className={({ isActive }) => isActive ? "active" : ""}>Treatments</NavLink>
            <NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>Our Services</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact Us</NavLink>
          </nav>

          <Link to="/contact" className="btn btn-primary">BOOK APPOINTMENT</Link>
        </div>
      </header>

      {/* Page Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="container footer-grid">
          <div className="footer-info">
            <div className="logo-section footer-logo-section" style={{ marginBottom: '1.5rem', gap: '1rem' }}>
              <div className="logo-icon-wrapper" style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem', width: '50px', height: '50px' }}>
                <img src="/MAHIMA-DENTAL/logo.png" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
              </div>
              <h2 className="footer-logo" style={{ marginBottom: 0, fontSize: '1.5rem' }}>MAHIMA DENTAL CARE</h2>
            </div>
            <p>Providing premium dental excellence in Raipur for over 20 years.</p>
            <div className="social-links">
              <Facebook /> <Instagram /> <Twitter />
            </div>
          </div>
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p><MapPin size={16} /> 1st Floor, Anand Plaza, Raipur</p>
            <p><Phone size={16} /> +91 98765 43210</p>
          </div>
          <div className="footer-hours">
            <h3>Clinic Hours</h3>
            <p><Clock size={16} /> Morning: 10:00 AM - 1:00 PM</p>
            <p><Clock size={16} /> Evening: 5:00 PM - 8:30 PM</p>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>&copy; 2024 Mahima Dental Care. All Rights Reserved.</p>
            <button className="btn btn-primary btn-sm">VISIT SITE</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
