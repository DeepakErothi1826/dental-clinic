import { MapPin, Phone, Clock, Mail, Send, Facebook, Instagram, Youtube, Star } from 'lucide-react';

const Contact = () => {
  const faqs = [
    { q: 'What are your working hours?', a: 'We are open Monday to Saturday from 10:00 AM to 1:00 PM and 5:00 PM to 8:30 PM. Sunday is for emergencies only.' },
    { q: 'Do you offer emergency dental services?', a: 'Yes, we provide emergency dental care. Call us immediately for urgent dental issues.' },
    { q: 'Do you accept dental insurance?', a: 'Yes, we accept most major dental insurance plans. Contact us to verify your coverage.' },
    { q: 'Is parking available?', a: 'Yes, ample parking space is available around Anand Plaza for all our patients.' },
    { q: 'How can I book an appointment?', a: 'You can book online through our website, call us, or visit our clinic directly.' }
  ];

  const directions = [
    'From Railway Station: 5 km - Take auto/taxi towards Shankar Nagar',
    'From Bus Stand: 3 km - Head towards Vidhan Sabha Road',
    'From Airport: 15 km - Take NH53 towards city center'
  ];

  return (
    <div className="contact-page-wrapper">
      <section className="bg-light-blue" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
        <div className="container">
          <h2 className="section-title text-center">Contact Us</h2>
          <p className="vision-text text-center">We're here to help you achieve your best smile. Reach out to book an appointment or ask a question.</p>
        </div>
      </section>

      <section className="contact-content container" style={{ padding: '4rem 0' }}>
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          
          <div className="contact-form-section">
            <div className="glass-morphism" style={{ padding: '3rem', borderRadius: '1.5rem' }}>
              <h2 className="section-title" style={{ fontSize: '1.8rem' }}>Book an Appointment</h2>
              <form className="contact-form" onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
                <input type="text" placeholder="Your Name" className="form-input" style={{ padding: '1rem', borderRadius: '0.5rem', border: '1px solid #ddd' }} />
                <input type="email" placeholder="Your Email" className="form-input" style={{ padding: '1rem', borderRadius: '0.5rem', border: '1px solid #ddd' }} />
                <input type="tel" placeholder="Phone Number" className="form-input" style={{ padding: '1rem', borderRadius: '0.5rem', border: '1px solid #ddd' }} />
                <select style={{ padding: '1rem', borderRadius: '0.5rem', border: '1px solid #ddd' }}>
                  <option value="">Select Treatment</option>
                  <option value="checkup">Dental Check-up</option>
                  <option value="rootcanal">Root Canal</option>
                  <option value="implant">Dental Implant</option>
                  <option value="braces">Braces / Aligners</option>
                  <option value="whitening">Teeth Whitening</option>
                  <option value="other">Other</option>
                </select>
                <textarea placeholder="Message / Preferred Time" style={{ padding: '1rem', borderRadius: '0.5rem', border: '1px solid #ddd', minHeight: '150px' }}></textarea>
                <button className="btn btn-primary" type="submit">
                  SEND MESSAGE <Send size={18} style={{ marginLeft: '10px' }} />
                </button>
              </form>
            </div>
          </div>

          <div className="contact-info-section">
            <div style={{ borderRadius: '2rem', overflow: 'hidden', marginBottom: '2.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
               <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" alt="Clinic Interior" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
            </div>
            <h2 className="section-title" style={{ fontSize: '1.8rem' }}>Visit Our Clinic</h2>
            <div className="info-list" style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="info-item" style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ background: 'var(--bg-light-blue)', padding: '0.8rem', borderRadius: '1rem' }}>
                  <MapPin className="text-teal" size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>Location</h3>
                  <p style={{ fontSize: '0.95rem', color: '#4B5563' }}>1st Floor, Anand Plaza, Raipur, CG 492004</p>
                </div>
              </div>
              <div className="info-item" style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ background: 'var(--bg-light-blue)', padding: '0.8rem', borderRadius: '1rem' }}>
                  <Phone className="text-teal" size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>Call Us</h3>
                  <p style={{ fontSize: '0.95rem', color: '#4B5563' }}>+91 91791 22444</p>
                  <p style={{ fontSize: '0.95rem', color: '#4B5563' }}>+91 0771 4053333</p>
                </div>
              </div>
              <div className="info-item" style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ background: 'var(--bg-light-blue)', padding: '0.8rem', borderRadius: '1rem' }}>
                  <Clock className="text-teal" size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>Working Hours</h3>
                  <p style={{ fontSize: '0.9rem', color: '#4B5563' }}><strong>Mon-Sat:</strong> 10:00 AM - 1:30 PM & 5:00 PM - 8:30 PM</p>
                  <p style={{ fontSize: '0.9rem', color: '#4B5563' }}>Sunday: Emergencies Only</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Get Directions */}
      <section className="directions-section bg-light-blue" style={{ padding: '4rem 0' }}>
        <div className="container">
          <h2 className="section-title text-center">How to Reach Us</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginTop: '3rem' }}>
            {directions.map((d, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '2rem', background: 'white', borderRadius: '1rem' }}>
                <MapPin size={32} className="text-teal" style={{ marginBottom: '1rem' }} />
                <p style={{ fontSize: '1rem' }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="social-section" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title">Connect With Us</h2>
          <p className="vision-text" style={{ marginBottom: '2rem' }}>Follow us on social media for dental tips, updates, and special offers</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
            <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', borderRadius: '50%', background: 'var(--bg-light-blue)', color: 'var(--primary-teal)' }}><Facebook size={28} /></a>
            <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', borderRadius: '50%', background: 'var(--bg-light-blue)', color: 'var(--primary-teal)' }}><Instagram size={28} /></a>
            <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', borderRadius: '50%', background: 'var(--bg-light-blue)', color: 'var(--primary-teal)' }}><Youtube size={28} /></a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section bg-blue text-white" style={{ padding: '6rem 0' }}>
        <div className="container">
          <h2 className="section-title text-center text-white">Frequently Asked Questions</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '3rem' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '1rem', padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>{faq.q}</h3>
                <p style={{ fontSize: '0.95rem', opacity: 0.8 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="reviews-section" style={{ padding: '6rem 0' }}>
        <div className="container">
          <h2 className="section-title text-center">Patient Reviews</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', margin: '1.5rem 0' }}>
            {[...Array(5)].map((_, i) => <Star key={i} size={32} fill="#F97316" stroke="#F97316" />)}
          </div>
          <p className="text-center" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>4.9/5 based on 200+ Google Reviews</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginTop: '3rem' }}>
            <div className="glass-morphism" style={{ padding: '2rem', borderRadius: '1rem' }}>
              <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>"Best dental clinic in Raipur! The doctors are very professional and the facility is top-notch. Highly recommended!"</p>
              <p style={{ fontWeight: '600' }}>- Rajesh Kumar</p>
            </div>
            <div className="glass-morphism" style={{ padding: '2rem', borderRadius: '1rem' }}>
              <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>"Got my braces done here and the results are amazing. The team is very caring and explained everything clearly."</p>
              <p style={{ fontWeight: '600' }}>- Anjali Singh</p>
            </div>
            <div className="glass-morphism" style={{ padding: '2rem', borderRadius: '1rem' }}>
              <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>"Excellent service! Painless root canal treatment. The clinic is very clean and staff is extremely friendly."</p>
              <p style={{ fontWeight: '600' }}>- Vikram Patel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Simulation */}
      <section className="map-section" style={{ height: '500px', background: '#e5e7eb', overflow: 'hidden', position: 'relative' }}>
        <img 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" 
          alt="Map Location" 
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} 
        />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
          <div style={{ width: '80px', height: '80px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <MapPin size={40} className="text-teal" />
          </div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary-blue)' }}>Mahima Dental Care on Google Maps</h3>
          <p style={{ fontWeight: '600', color: 'var(--primary-blue)' }}>Raipur, Chhattisgarh</p>
          <a href="https://goo.gl/maps/placeholder" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>OPEN IN MAPS</a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
