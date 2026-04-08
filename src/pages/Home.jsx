import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronRight, MapPin, ShieldCheck, Clock, Activity, Smile, Star, Plus, Minus, CheckCircle, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="faq-item" style={{ marginBottom: '1rem', background: 'white', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{ width: '100%', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
      >
        <span style={{ fontWeight: '600', fontSize: '1.1rem', color: 'var(--primary-blue)' }}>{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown size={20} className="text-teal" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '0 1.5rem 1.5rem', color: '#4B5563', lineHeight: '1.6' }}>
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Home = () => {
  const { scrollYProgress } = useScroll();
  const toothRotate = useTransform(scrollYProgress, [0, 0.5], [0, 180]);

  const services = [
    'Root Canals', 'Implants', 'Braces', 'Cosmetic Care', 'Dentures', 'Routine Check-ups'
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000" 
              alt="Mahima Dental Hub" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15, display: 'block', minHeight: '400px' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, white 40%, transparent 100%)' }}></div>
        </div>
        
        <div className="container hero-grid" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-left"
          >
            <span className="banner-text">EXCELLENCE IN DENTISTRY</span>
            <h2 className="hero-title">Your Smile, <br/><span className="text-teal">Our Passion.</span></h2>
            <p className="hero-description">
              Mahima Dental Care combines 20+ years of experience with state-of-the-art technology to give you the perfect smile in Raipur.
            </p>
            <div className="hero-quick-links" style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-blue)', fontSize: '0.9rem', fontWeight: '700' }}>
                <CheckCircle size={16} className="text-teal" /> ISO Certified
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-blue)', fontSize: '0.9rem', fontWeight: '700' }}>
                <CheckCircle size={16} className="text-teal" /> 10k+ Patients
              </div>
            </div>
            <Link to="/contact" className="btn btn-primary hero-btn">
              COMMENCE YOUR JOURNEY <ChevronRight size={18} />
            </Link>
          </motion.div>
 
          <div className="hero-center" style={{ flex: '1.2' }}>
            <motion.div 
              style={{ rotate: toothRotate }}
              className="tooth-visual-container"
            >
              <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '2.5rem', overflow: 'hidden', boxShadow: '0 30px 70px rgba(0,0,0,0.2)', border: '10px solid white' }}>
                <img 
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=1000" 
                  alt="Modern Dental Care" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, rgba(30, 58, 138, 0.4))' }}></div>
              </div>
              <div className="water-splash"></div>
            </motion.div>
          </div>
 
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-right"
          >
            <div className="stats-card glass-morphism" style={{ background: 'white' }}>
              <div className="stat-item">
                <h3 className="text-teal">20+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h3 className="text-teal">15+</h3>
                <p>Specialists</p>
              </div>
              <div className="stat-item">
                <h3 className="text-teal">100%</h3>
                <p>Sterilization</p>
              </div>
            </div>
            <div className="address-box glass-morphism" style={{ padding: '1.5rem', borderRadius: '1.5rem', background: 'white' }}>
              <MapPin size={24} className="text-teal" />
              <p style={{ margin: 0, fontSize: '0.85rem' }}>1st Floor, Anand Plaza,<br/>Raipur, CG 492004</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Band */}
      <div className="services-band bg-blue">
        <div className="band-content">
          {Array(4).fill(services).flat().map((service, i) => (
            <span key={i} className="service-tag">{service} + </span>
          ))}
        </div>
      </div>

      {/* Call to Action for About */}
      <section className="home-about-teaser container">
        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-title">Rooted in Raipur, <br/>Expertly Skilled.</h2>
            <p className="vision-text">
              We bring decades of experience and the latest dental innovations to the heart of Chhattisgarh.
            </p>
            <Link to="/about" className="learn-more">Learn more about our vision <ChevronRight size={18} /></Link>
          </div>
          <div className="teaser-visual" style={{ borderRadius: '2rem', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', height: '350px' }}>
             <img 
               src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800" 
               alt="Our Modern Clinic Facility" 
               className="grid-img"
               style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
             />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="home-why-choose" style={{ padding: '6rem 0' }}>
        <div className="container">
          <h2 className="section-title text-center">Why Choose Mahima Dental Care</h2>
          <p className="vision-text text-center" style={{ maxWidth: '700px', margin: '0 auto 3rem' }}>
            We combine expertise, technology, and compassionate care to deliver exceptional dental experiences for every patient.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', marginTop: '3rem' }}>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--bg-light-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <ShieldCheck size={40} className="text-teal" />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>100% Sterile Environment</h3>
              <p style={{ fontSize: '0.9rem', color: '#4B5563' }}>We maintain the highest standards of hygiene and sterilization for your complete safety.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--bg-light-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <Clock size={40} className="text-teal" />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Zero Waiting Time</h3>
              <p style={{ fontSize: '0.9rem', color: '#4B5563' }}>We value your time. Appointments are scheduled efficiently to minimize wait times.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--bg-light-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <Activity size={40} className="text-teal" />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Advanced Technology</h3>
              <p style={{ fontSize: '0.9rem', color: '#4B5563' }}>State-of-the-art equipment ensures precise diagnostics and comfortable treatments.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--bg-light-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <Smile size={40} className="text-teal" />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Personalized Care</h3>
              <p style={{ fontSize: '0.9rem', color: '#4B5563' }}>Every patient receives customized treatment plans tailored to their unique needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Preview */}
      <section className="home-team bg-light-blue" style={{ padding: '6rem 0' }}>
        <div className="container">
          <h2 className="section-title text-center">Meet Our Expert Team</h2>
          <p className="vision-text text-center" style={{ maxWidth: '700px', margin: '0 auto 3rem' }}>
            Our team of highly qualified dentists and support staff are dedicated to providing you with the best dental care in Raipur.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginTop: '3rem' }}>
            <div className="glass-morphism" style={{ padding: '2rem', borderRadius: '1.5rem', textAlign: 'center' }}>
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300" alt="Dr. Priya Sharma" style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1.5rem', marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
              <h3 style={{ fontSize: '1.3rem' }}>Dr. Priya Sharma</h3>
              <p className="text-teal" style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Principal Dentist</p>
              <p style={{ fontSize: '0.9rem', color: '#4B5563' }}>15+ years experience in restorative and cosmetic dentistry</p>
            </div>
            <div className="glass-morphism" style={{ padding: '2rem', borderRadius: '1.5rem', textAlign: 'center' }}>
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300" alt="Dr. Amit Patel" style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1.5rem', marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
              <h3 style={{ fontSize: '1.3rem' }}>Dr. Amit Patel</h3>
              <p className="text-teal" style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Orthodontist</p>
              <p style={{ fontSize: '0.9rem', color: '#4B5563' }}>Specialist in braces, aligners, and jaw correction</p>
            </div>
            <div className="glass-morphism" style={{ padding: '2rem', borderRadius: '1.5rem', textAlign: 'center' }}>
              <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300" alt="Dr. Sneha Reddy" style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1.5rem', marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
              <h3 style={{ fontSize: '1.3rem' }}>Dr. Sneha Reddy</h3>
              <p className="text-teal" style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Oral Surgeon</p>
              <p style={{ fontSize: '0.9rem', color: '#4B5563' }}>Expert in dental implants and surgical procedures</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/about" className="btn btn-primary">VIEW FULL TEAM</Link>
          </div>
        </div>
      </section>

      {/* Patient Testimonials Home */}
      <section className="home-testimonials" style={{ padding: '6rem 0' }}>
        <div className="container">
          <h2 className="section-title text-center">What Our Patients Say</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginTop: '3rem' }}>
            <div className="glass-morphism" style={{ padding: '2rem', borderRadius: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}><Star size={16} fill="#F97316" stroke="#F97316" /><Star size={16} fill="#F97316" stroke="#F97316" /><Star size={16} fill="#F97316" stroke="#F97316" /><Star size={16} fill="#F97316" stroke="#F97316" /><Star size={16} fill="#F97316" stroke="#F97316" /></div>
              <p style={{ fontSize: '1rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>"Excellent treatment! The staff was very polite and caring. Dr. Priya made me feel comfortable throughout my root canal treatment. Highly recommended!"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden' }}>
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="Amit शर्मा" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div><h4 style={{ fontSize: '1rem' }}>Amit Sharma</h4><p style={{ fontSize: '0.8rem', color: '#6B7280' }}>Root Canal Patient</p></div>
              </div>
            </div>
            <div className="glass-morphism" style={{ padding: '2rem', borderRadius: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}><Star size={16} fill="#F97316" stroke="#F97316" /><Star size={16} fill="#F97316" stroke="#F97316" /><Star size={16} fill="#F97316" stroke="#F97316" /><Star size={16} fill="#F97316" stroke="#F97316" /><Star size={16} fill="#F97316" stroke="#F97316" /></div>
              <p style={{ fontSize: '1rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>"Superb clinic with all modern facilities. Got my dental implants done here and the results are amazing. The team is professional and caring."</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden' }}>
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" alt="Priya Reddy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div><h4 style={{ fontSize: '1rem' }}>Priya Reddy</h4><p style={{ fontSize: '0.8rem', color: '#6B7280' }}>Implant Patient</p></div>
              </div>
            </div>
            <div className="glass-morphism" style={{ padding: '2rem', borderRadius: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}><Star size={16} fill="#F97316" stroke="#F97316" /><Star size={16} fill="#F97316" stroke="#F97316" /><Star size={16} fill="#F97316" stroke="#F97316" /><Star size={16} fill="#F97316" stroke="#F97316" /><Star size={16} fill="#F97316" stroke="#F97316" /></div>
              <p style={{ fontSize: '1rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>"My daughter got her braces from Dr. Amit and the transformation is incredible. Great orthodontist and very patient with kids. Thank you Mahima Dental!"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden' }}>
                    <img src="https://images.unsplash.com/photo-1600180758830-6e85ab75374c?auto=format&fit=crop&q=80&w=100" alt="Rahul Verma" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div><h4 style={{ fontSize: '1rem' }}>Rahul Verma</h4><p style={{ fontSize: '0.8rem', color: '#6B7280' }}>Parent of Braces Patient</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta bg-blue text-white" style={{ padding: '6rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title text-white">Ready to Transform Your Smile?</h2>
          <p className="vision-text text-white" style={{ opacity: 0.9, maxWidth: '600px', margin: '0 auto 2rem' }}>
            Book your appointment today and experience the difference of world-class dental care right here in Raipur.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ background: 'white', color: 'var(--primary-teal)' }}>BOOK YOUR APPOINTMENT NOW</Link>
        </div>
      </section>

      {/* Featured Treatments Grid - Deep Dive */}
      <section className="home-featured-treatments" style={{ padding: '6rem 0' }}>
        <div className="container">
          <h2 className="section-title text-center">Comprehensive Oral Solutions</h2>
          <p className="vision-text text-center" style={{ maxWidth: '700px', margin: '0 auto 4rem' }}>
            Beyond routine care, we specialize in advanced procedures that restore function and aesthetics.
          </p>
          <div className="treatment-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem' }}>
            <motion.div 
              whileHover={{ y: -10 }}
              className="glass-morphism" 
              style={{ padding: '0', borderRadius: '2rem', background: 'white', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
            >
              <div style={{ height: '220px', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1629161245041-8f64db7b8783?q=80&w=800" alt="Dental Implants" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem' }}>
                   <Activity className="text-teal" size={24} />
                   <h3 style={{ marginBottom: 0 }}>Dental Implants</h3>
                </div>
                <p style={{ color: '#4B5563', marginBottom: '1.5rem', fontSize: '0.95rem' }}>The permanent solution for missing teeth. We use high-grade titanium implants that look and feel completely natural.</p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem', fontSize: '0.85rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><CheckCircle size={14} className="text-teal" /> German Quality Implants</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={14} className="text-teal" /> Lifetime Durability</li>
                </ul>
                <Link to="/treatments" className="learn-more">Learn about Implants <ChevronRight size={14} /></Link>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="glass-morphism" 
              style={{ padding: '0', borderRadius: '2rem', background: 'white', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
            >
              <div style={{ height: '220px', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800" alt="Cosmetic Dentistry" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem' }}>
                   <Smile className="text-teal" size={24} />
                   <h3 style={{ marginBottom: 0 }}>Cosmetic Dentistry</h3>
                </div>
                <p style={{ color: '#4B5563', marginBottom: '1.5rem', fontSize: '0.95rem' }}>Designing the smile you've always dreamed of through veneers, whitening, and precision contouring.</p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem', fontSize: '0.85rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><CheckCircle size={14} className="text-teal" /> Custom Smile Design</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={14} className="text-teal" /> Digital Smile Preview</li>
                </ul>
                <Link to="/treatments" className="learn-more">Explore Cosmetics <ChevronRight size={14} /></Link>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="glass-morphism" 
              style={{ padding: '0', borderRadius: '2rem', background: 'white', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
            >
              <div style={{ height: '220px', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800" alt="Root Canal Treatment" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem' }}>
                   <ShieldCheck className="text-teal" size={24} />
                   <h3 style={{ marginBottom: 0 }}>Root Canal</h3>
                </div>
                <p style={{ color: '#4B5563', marginBottom: '1.5rem', fontSize: '0.95rem' }}>Save your natural teeth with our advanced rotary endodontic treatments. Fast, precise, and sterile.</p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem', fontSize: '0.85rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><CheckCircle size={14} className="text-teal" /> Single Visit Option</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={14} className="text-teal" /> High Success Rate</li>
                </ul>
                <Link to="/treatments" className="learn-more">About Root Canals <ChevronRight size={14} /></Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Smile Gallery Section */}
      <section className="home-gallery bg-light-blue" style={{ padding: '6rem 0' }}>
        <div className="container">
          <h2 className="section-title text-center">Real Results, Real Smiles</h2>
          <p className="vision-text text-center" style={{ maxWidth: '700px', margin: '0 auto 4rem' }}>
            A glimpse into the transformations we achieve every day at Mahima Dental Care.
          </p>
          <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {[
              { url: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=400', alt: 'Beautiful Smile After Treatment' },
              { url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400', alt: 'Happy Patient Portrait' },
              { url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=400', alt: 'Professional Dentist Consultation' },
              { url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400', alt: 'Confident Smile Transformation' }
            ].map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                style={{ borderRadius: '1.5rem', overflow: 'hidden', height: '300px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              >
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
             <p style={{ fontSize: '1.1rem', color: 'var(--primary-blue)', fontWeight: '600' }}>Interested in a smile makeover? Call us at +91 91791 22444</p>
          </div>
        </div>
      </section>

      {/* Home FAQ Section */}
      <section className="home-faq" style={{ padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 className="section-title text-center">Your Questions Answered</h2>
          <div className="faq-container" style={{ marginTop: '3rem' }}>
            <FAQItem 
              question="What sets Mahima Dental Care apart?" 
              answer="We combine clinical excellence with a patient-first approach. Our clinic features advanced laser diagnostics, specialized orthodontics, and a strictly sterile environment that exceeds ISO standards."
            />
            <FAQItem 
              question="How do I book an emergency appointment?" 
              answer="For emergencies like acute toothache or trauma, please call us directly at our Raipur clinic or WhatsApp us. We prioritize emergency cases for same-day treatment."
            /