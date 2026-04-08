import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  Zap, 
  Activity, 
  Award, 
  Smile, 
  ShieldCheck, 
  Users,
  Star,
  Clock,
  Heart,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Treatments = () => {
  const treatments = [
    { title: 'Root Canal', icon: <Zap size={32} />, image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600', desc: 'Painless treatment for deep decay and infection saving your natural tooth.', duration: '45-60 min', patients: '2000+' },
    { title: 'Implant', icon: <Activity size={32} />, image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600', desc: 'Permanent solution for missing teeth with advanced titanium replacements.', duration: '60-90 min', patients: '1500+' },
    { title: 'Braces', icon: <Award size={32} />, image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600', desc: 'Modern orthodontic solutions including invisible aligners and classic braces.', duration: '30-45 min', patients: '3000+' },
    { title: 'Whitening', icon: <Smile size={32} />, image: 'https://images.unsplash.com/photo-1445583939503-55e0acae237c?auto=format&fit=crop&q=80&w=600', desc: 'Professional brightening for a radiant, long-lasting confidence boost.', duration: '45-60 min', patients: '2500+' },
    { title: 'Check-up', icon: <ShieldCheck size={32} />, image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600', desc: 'Comprehensive diagnostics and preventative care for lifelong health.', duration: '20-30 min', patients: '8000+' },
    { title: 'Denture', icon: <Users size={32} />, image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600', desc: 'Full and partial dentures crafted for comfort and natural appearance.', duration: '45-60 min', patients: '1200+' }
  ];

  const detailedTreatments = [
    {
      title: 'Root Canal Treatment',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800',
      content: 'Our root canal treatment is completely painless using advanced rotary endodontics. We save your natural tooth from extraction by removing infected pulp, cleaning the canal, and sealing it. With modern anesthesia techniques, you won\'t feel any discomfort during the procedure.',
      points: ['Painless procedure with rotary tools', 'Single visit treatment available', 'Long-lasting results', 'Protects natural tooth structure']
    },
    {
      title: 'Dental Implants',
      image: 'https://images.unsplash.com/photo-1629161245041-8f64db7b8783?q=80&w=800',
      content: 'Dental implants are the gold standard for tooth replacement. Our implantologists use advanced 3D imaging and guided surgery for precise placement. We offer immediate loading implants and full-mouth rehabilitation solutions.',
      points: ['German quality implants', '3D guided surgery', 'Same-day teeth possible', 'Lifetime warranty available']
    },
    {
      title: 'Orthodontics',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
      content: 'From traditional metal braces to invisible aligners, we offer comprehensive orthodontic solutions for all ages. Our orthodontist creates personalized treatment plans using digital scanning and simulation.',
      points: ['Invisible aligners (Invisalign)', 'Self-ligating braces', 'ingual braces (hidden)', 'Custom treatment planning']
    },
    {
      title: 'Teeth Whitening',
      image: 'https://images.unsplash.com/photo-1445583939503-55e0acae237c?auto=format&fit=crop&q=80&w=800',
      content: 'Professional teeth whitening can brighten your smile by several shades in just one session. We use advanced LED whitening technology that is safe for enamel and provides long-lasting results.',
      points: ['Zoom LED whitening', 'In-office & take-home options', 'Safe for sensitive teeth', 'Results in 1 hour']
    }
,
    {
      title: 'Preventive Dentistry',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
      content: 'Regular dental check-ups and cleanings are the foundation of oral health. Our preventive care includes professional cleaning, fluoride treatment, sealants, and oral cancer screening.',
      points: ['Professional cleaning', 'Fluoride treatment', 'Dental sealants', 'Oral cancer screening']
    },
    {
      title: 'Dentures & Partials',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800',
      content: 'We craft comfortable, natural-looking dentures using premium materials. Our denture solutions include flexible partials, implant-supported dentures, and full arch restorations.',
      points: ['Flexible partials', 'Implant-supported options', 'Same-day repairs', 'Natural appearance']
    }
  ];

  const faqs = [
    { q: 'How long does a root canal take?', a: 'Most root canal treatments are completed in 45-60 minutes. Complex cases may require 2 visits.' },
    { q: 'Are dental implants painful?', a: 'The procedure is performed under local anesthesia, so you won\'t feel pain during the surgery. Mild discomfort for 2-3 days is normal.' },
    { q: 'How long do braces take?', a: 'Treatment duration varies from 6 months to 2 years depending on the complexity of your case.' },
    { q: 'Is teeth whitening safe?', a: 'Yes, professional whitening is completely safe when done by trained dentists. We use enamel-safe products.' },
    { q: 'How often should I visit for check-ups?', a: 'We recommend visiting every 6 months for regular check-ups and cleaning.' }
  ];

  return (
    <div className="treatments-page-wrapper">
      <section className="bg-light-blue" style={{ paddingTop: '8rem', paddingBottom: '4rem', position: 'relative', overflow: 'hidden' }}>
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1600" 
          alt="Treatments Background" 
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15, display: 'block' }} 
        />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="section-title text-center">Available Treatments</h2>
          <p className="vision-text text-center" style={{ maxWidth: '700px', margin: '0 auto' }}>
            From preventative care to advanced surgical procedures, we offer a comprehensive suite of dental services using state-of-the-art tools.
          </p>
        </div>
      </section>

      <section className="treatments">
        <div className="container">
          <div className="treatment-grid">
            {treatments.map((t, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="treatment-card glass-morphism"
                style={{ overflow: 'hidden', padding: 0 }}
              >
                <div style={{ width: '100%', height: '200px', position: 'relative' }}>
                  <img src={t.image} alt={t.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div className="icon-box text-teal" style={{ position: 'absolute', bottom: '-20px', right: '20px', width: '60px', height: '60px', borderRadius: '1rem', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                    {t.icon}
                  </div>
                </div>
                <div style={{ padding: '2.5rem 2rem 2rem' }}>
                  <h3>{t.title}</h3>
                  <p>{t.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', fontSize: '0.85rem', color: '#6B7280' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Clock size={14} /> {t.duration}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Users size={14} /> {t.patients}</span>
                  </div>
                  <Link to="/contact" className="learn-more" style={{ marginTop: '1.5rem' }}>Inquire Now <ChevronRight size={14} /></Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="treatment-footer text-center" style={{ marginTop: '4rem' }}>
            <p className="vision-text">Don't see what you're looking for? Contact us to discuss your specific dental needs.</p>
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>GET A FREE CONSULTATION</Link>
          </div>
        </div>
      </section>

      {/* Detailed Treatment Information */}
      <section className="treatments-detailed bg-light-blue" style={{ padding: '6rem 0' }}>
        <div className="container">
          <h2 className="section-title text-center">Comprehensive Treatment Details</h2>
          <p className="vision-text text-center" style={{ maxWidth: '700px', margin: '0 auto 3rem' }}>
            Learn more about our treatments and what to expect during your visit.
          </p>
          {detailedTreatments.map((dt, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr', gap: '3rem', background: 'white', borderRadius: '1.5rem', padding: '2.5rem', marginBottom: '3rem', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', alignItems: 'center' }}>
              {i % 2 !== 0 && (
                <div style={{ height: '100%', borderRadius: '1rem', overflow: 'hidden' }}>
                  <img src={dt.image} alt={dt.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              )}
              <div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--primary-blue)' }}>{dt.title}</h3>
                <p style={{ fontSize: '1rem', color: '#4B5563', marginBottom: '1.5rem', lineHeight: '1.8' }}>{dt.content}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                  {dt.points.map((point, j) => (
                    <span key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-light-blue)', padding: '0.6rem 1.2rem', borderRadius: '2rem', fontSize: '0.9rem' }}>
                      <CheckCircle size={16} className="text-teal" /> {point}
                    </span>
                  ))}
                </div>
              </div>
              {i % 2 === 0 && (
                <div style={{ height: '100%', borderRadius: '1rem', overflow: 'hidden' }}>
                  <img src={dt.image} alt={dt.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Our Treatments */}
      <section className="treatments-why" style={{ padding: '6rem 0' }}>
        <div className="container">
          <h2 className="section-title text-center">Why Choose Our Treatments</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', marginTop: '3rem' }}>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--bg-light-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <ShieldCheck size={40} className="text-teal" />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Premium Materials</h3>
              <p style={{ fontSize: '0.9rem', color: '#4B5563' }}>We use only FDA-approved materials from trusted manufacturers.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--bg-light-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <Clock size={40} className="text-teal" />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Painless Procedures</h3>
              <p style={{ fontSize: '0.9rem', color: '#4B5563' }}>Advanced techniques ensure comfortable, pain-free treatments.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--bg-light-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <Award size={40} className="text-teal" />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Expert Specialists</h3>
              <p style={{ fontSize: '0.9rem', color: '#4B5563' }}>Our team has decades of combined experience in all dental fields.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--bg-light-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <Heart size={40} className="text-teal" />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Personalized Care</h3>
              <p style={{ fontSize: '0.9rem', color: '#4B5563' }}>Customized treatment plans for each patient's unique needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="treatments-faq bg-blue text-white" style={{ padding: '6rem 0' }}>
        <div className="container">
          <h2 className="section-title text-center text-white">Frequently Asked Questions</h2>
          <div style={{ maxWidth: '800px', margin: '3rem auto 0' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '1rem', padding: '1.5rem', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ChevronRight size={20} /> {faq.q}
                </h3>
                <p style={{ fontSize: '0.95rem', opacity: 0.8, paddingLeft: '1.5rem' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="treatments-cta" style={{ padding: '6rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title">Ready to Start Your Treatment?</h2>
          <p className="vision-text" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            Book a free consultation and let our experts guide you to the perfect treatment for your smile.
          </p>
          <Link to="/contact" className="btn btn-primary">SCHEDULE FREE CONSULTATION</Link>
        </div>
      </section>
    </div>
  );
};

export default Treatments;
