import { motion } from 'framer-motion';
import { Settings, ShieldCheck, Heart, Star, CheckCircle, Award, Users, Clock, Zap } from 'lucide-react';

const Services = () => {
  const tools = [
    { name: 'Digital X-rays', desc: 'Minimal radiation, instant results.', image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=400', icon: <Settings /> },
    { name: 'Laser Dentistry', desc: 'Quiet, fast, and precise.', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400', icon: <ShieldCheck /> },
    { name: 'Intraoral Camera', desc: 'See what the dentist sees.', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=400', icon: <Heart /> },
    { name: 'Ortho Scanners', desc: 'No messy impressions.', image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=400', icon: <Settings /> }
  ];

  const servicesList = [
    {
      category: 'General Dentistry',
      items: ['Dental Check-ups', 'Professional Cleaning', 'Fluoride Treatment', 'Dental Sealants', 'Oral Cancer Screening']
    },
    {
      category: 'Cosmetic Dentistry',
      items: ['Teeth Whitening', 'Veneers', 'Smile Makeovers', 'Bonding', 'Gum Contouring']
    },
    {
      category: 'Restorative Dentistry',
      items: ['Dental Fillings', 'Root Canal Treatment', 'Crowns & Bridges', 'Inlays & Onlays', 'Dental Implants']
    },
    {
      category: 'Orthodontics',
      items: ['Metal Braces', 'Ceramic Braces', 'Invisible Aligners', 'Lingual Braces', 'Retainers']
    },
    {
      category: 'Pediatric Dentistry',
      items: ['Baby Teeth Care', 'Fluoride Treatments', 'Dental Sealants', 'Habit Breaking', 'Emergency Care']
    },
    {
      category: 'Emergency Care',
      items: ['Toothache Relief', 'Broken Tooth Repair', 'Knocked Out Tooth', 'Dental Abscess', 'Lost Filling/Crown']
    }
  ];

  const testimonials = [
    { name: "Amit S.", quote: "Had great experience there excellent treatment. The staff is very polite.", rating: 5 },
    { name: "Priya R.", quote: "Dr. Vijeta is a great dentist! Superb clinic with all facilities, must recommended.", rating: 5 },
    { name: "Rahul K.", quote: "The clinic has some of the best dentists. Very clean and professional environment.", rating: 4.8 }
  ];

  const features = [
    { icon: <ShieldCheck />, title: 'ISO Certified', desc: 'International standards of quality and safety' },
    { icon: <Clock />, title: 'Extended Hours', desc: 'Open till 8:30 PM for your convenience' },
    { icon: <Award />, title: 'Award Winning', desc: 'Best dental clinic in Raipur 2024' },
    { icon: <Users />, title: 'Expert Team', desc: '15+ specialized dentists under one roof' }
  ];

  return (
    <div className="services-page-wrapper">
      <section className="bg-blue text-white" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <h2 className="section-title text-center text-white">Our Premium Services</h2>
          <p className="vision-text text-center" style={{ opacity: 0.8, maxWidth: '700px', margin: '0 auto' }}>
            We leverage cutting-edge technology to ensure the highest standards of safety, precision, and comfort for every patient.
          </p>
        </div>
      </section>

      {/* Why Choose Us Banner */}
      <section className="features-banner bg-light-blue" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            {features.map((f, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                  <span className="text-teal">{f.icon}</span>
                </div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{f.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#4B5563' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="tools bg-blue text-white">
        <div className="container">
          <h2 className="section-title text-center text-white" style={{ marginBottom: '1rem' }}>Advanced Technology</h2>
          <p className="vision-text text-center text-white" style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>
            We invest in the latest dental technology to provide you with the best possible care.
          </p>
          <div className="tools-grid">
            {tools.map((tool, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="tool-item glass-morphism"
                style={{ overflow: 'hidden', padding: 0, background: 'rgba(255,255,255,0.05)' }}
              >
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img src={tool.image} alt={tool.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem' }}>
                    <span className="text-teal">{tool.icon}</span>
                    <h3 style={{ margin: 0, fontSize: '1.2rem' }}>{tool.name}</h3>
                  </div>
                  <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>{tool.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Overview */}
      <section className="services-detail container">
        <h2 className="section-title text-center">Comprehensive Care</h2>
        <div className="detailed-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginTop: '3rem' }}>
          <div className="detail-box">
             <h3>Preventative Care</h3>
             <p>Regular check-ups and cleanings are the foundation of a healthy smile. We use digital diagnostics to catch issues before they become problems.</p>
          </div>
          <div className="detail-box">
             <h3>Emergency Dentistry</h3>
             <p>Pain doesn't wait for business hours. We prioritize dental emergencies to get you back to comfort as quickly as possible.</p>
          </div>
        </div>
      </section>

      {/* All Services List */}
      <section className="all-services bg-light-blue" style={{ padding: '6rem 0' }}>
        <div className="container">
          <h2 className="section-title text-center">Complete Range of Dental Services</h2>
          <p className="vision-text text-center" style={{ maxWidth: '700px', margin: '0 auto 3rem' }}>
            From routine check-ups to complex surgeries, we have all your dental needs covered under one roof.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginTop: '3rem' }}>
            {servicesList.map((s, i) => (
              <div key={i} style={{ background: 'white', padding: '2rem', borderRadius: '1.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: 'var(--primary-teal)' }}>{s.category}</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {s.items.map((item, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem', fontSize: '0.95rem' }}>
                      <CheckCircle size={18} className="text-teal" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials bg-light-blue">
        <div className="container">
          <h2 className="section-title text-center">What Our Patients Say</h2>
          <div className="testimonial-row">
            {testimonials.map((t, i) => (
              <div key={i} className="test-card">
                <div className="stars">
                   {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#F97316" stroke="#F97316" />)}
                </div>
                <p className="quote">"{t.quote}"</p>
                <div className="user-info">
                  <div className="avatar">{t.name[0]}</div>
                  <div>
                    <h4>{t.name}</h4>
                    <p>Verified Patient</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Payment */}
      <section className="payment-section" style={{ padding: '6rem 0' }}>
        <div className="container">
          <h2 className="section-title text-center">Insurance & Payment Options</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginTop: '3rem' }}>
            <div style={{ textAlign: 'center', padding: '2rem', background: 'var(--bg-light-blue)', borderRadius: '1.5rem' }}>
              <Zap size={48} className="text-teal" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Insurance Accepted</h3>
              <p style={{ fontSize: '0.95rem', color: '#4B5563' }}>We accept most major dental insurance plans. Our team will help you understand your benefits.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '2rem', background: 'var(--bg-light-blue)', borderRadius: '1.5rem' }}>
              <Award size={48} className="text-teal" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Flexible Payments</h3>
              <p style={{ fontSize: '0.95rem', color: '#4B5563' }}>Easy payment plans and EMI options available. Quality dental care within your budget.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '2rem', background: 'var(--bg-light-blue)', borderRadius: '1.5rem' }}>
              <Heart size={48} className="text-teal" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Transparent Pricing</h3>
              <p style={{ fontSize: '0.95rem', color: '#4B5563' }}>No hidden costs. Detailed quotes before any treatment begins.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta bg-blue text-white" style={{ padding: '6rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title text-white">Experience Premium Dental Care</h2>
          <p className="vision-text text-white" style={{ opacity: 0.9, maxWidth: '600px', margin: '0 auto 2rem' }}>
            Book your appointment today and discover why we're Raipur's most trusted dental clinic.
          </p>
          <a href="/contact" className="btn btn-primary" style={{ background: 'white', color: 'var(--primary-teal)' }}>BOOK APPOINTMENT NOW</a>
        </div>
      </section>
    </div>
  );
};

export default Services;
