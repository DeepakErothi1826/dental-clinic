import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Award, Users, CheckCircle } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2010', title: 'Foundation', image: 'https://images.unsplash.com/photo-1629909615082-2d93e18a996f?auto=format&fit=crop&q=80&w=600', desc: 'Started with a vision to provide quality dental care in the heart of Raipur.' },
    { year: '2015', title: 'Expansion', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600', desc: 'Added advanced laser technology and expanded our specialist team.' },
    { year: '2020', title: 'Awarded', image: 'https://images.unsplash.com/photo-1582213726839-ed2e0c13ce82?auto=format&fit=crop&q=80&w=600', desc: 'Recognized as Raipur\'s most trusted clinic for patient safety and care.' },
    { year: '2024', title: 'Today', image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600', desc: 'Serving the community with 15+ specialists and 10,000+ happy smiles.' }
  ];

  const values = [
    { title: 'Patient-Centric', desc: 'Every decision we make puts patient comfort first', image: 'https://images.unsplash.com/photo-1576091160550-217359f42f8c?auto=format&fit=crop&q=80&w=400' },
    { title: 'Excellence', desc: 'We pursue the highest standards in everything we do', image: 'https://images.unsplash.com/photo-1582213726839-ed2e0c13ce82?auto=format&fit=crop&q=80&w=400' },
    { title: 'Integrity', desc: 'Honest, transparent treatment recommendations always', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400' },
    { title: 'Innovation', desc: 'Continuously upgrading our technology and techniques', image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=400' }
  ];

  return (
    <div className="about-page-wrapper">
      <section className="about-hero" style={{ padding: '8rem 0', position: 'relative', overflow: 'hidden', background: 'var(--primary-blue)' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.2 }}>
            <img src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=1600" alt="Clinic Overlay" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="section-title text-center text-white" style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>About Mahima Dental Care</h2>
          <p className="vision-text text-center text-white" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', opacity: 0.9 }}>
            A legacy of dental excellence in Raipur, blending modern technology with compassionate, patient-centered care since 2010.
          </p>
        </div>
      </section>

      {/* Our Journey */}
      <section className="about-journey" style={{ padding: '6rem 0' }}>
        <div className="container">
          <h2 className="section-title text-center">Our Journey</h2>
          <p className="vision-text text-center" style={{ maxWidth: '700px', margin: '0 auto 3rem' }}>
            From a small beginning to Raipur's most trusted dental destination, our journey has been defined by commitment and care.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginTop: '3rem' }}>
            {milestones.map((m, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                style={{ background: 'white', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}
              >
                <div style={{ height: '180px', position: 'relative' }}>
                  <img src={m.image} alt={m.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <div style={{ position: 'absolute', top: '15px', right: '15px', background: 'var(--primary-teal)', color: 'white', padding: '0.4rem 1rem', borderRadius: '1rem', fontWeight: '800', fontSize: '1rem' }}>{m.year}</div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--primary-blue)' }}>{m.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#4B5563', lineHeight: '1.5' }}>{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-vision" style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div className="about-visual">
              <div style={{ position: 'relative' }}>
                <img 
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" 
                  alt="Doctor with patient" 
                  style={{ width: '100%', borderRadius: '2rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', display: 'block' }}
                />
                <div className="glass-morphism" style={{ position: 'absolute', bottom: '-30px', right: '-30px', padding: '2rem', borderRadius: '1.5rem', background: 'rgba(255,255,255,0.9)' }}>
                  <h4 style={{ fontSize: '1.8rem', color: 'var(--primary-teal)', fontWeight: '800' }}>20+</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--primary-blue)', fontWeight: '600' }}>Years of Experience</p>
                </div>
              </div>
            </div>
            <div className="about-text">
              <h2 className="section-title">Our Vision & Mission</h2>
              <p className="vision-text" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                At Mahima Dental Care, our mission is to transform the dental experience by combining human-centric care with world-class technology. We envision a community where excellent oral health is accessible to everyone in a comfortable, anxiety-free setting.
              </p>
              <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ background: 'var(--bg-light-blue)', padding: '1rem', borderRadius: '1rem' }}><ShieldCheck size={24} className="text-teal" /></div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>Unmatched Sterilization</h4>
                    <p style={{ fontSize: '0.9rem', color: '#4B5563' }}>We follow rigorous international standards for hygiene and safety.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ background: 'var(--bg-light-blue)', padding: '1rem', borderRadius: '1rem' }}><Clock size={24} className="text-teal" /></div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>Patient-First Timings</h4>
                    <p style={{ fontSize: '0.9rem', color: '#4B5563' }}>Timely appointments with extended hours for your busy schedule.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="about-values bg-light-blue" style={{ padding: '6rem 0' }}>
        <div className="container">
          <h2 className="section-title text-center">Our Core Values</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', marginTop: '3rem' }}>
            {values.map((v, i) => (
              <div key={i} style={{ padding: '0', background: 'white', borderRadius: '1rem', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                <div style={{ height: '150px', overflow: 'hidden' }}>
                  <img src={v.image} alt={v.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <Award size={40} className="text-teal" style={{ marginBottom: '1rem' }} />
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>{v.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#4B5563' }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Infrastructure */}
      <section className="about-infrastructure bg-light-blue" style={{ padding: '6rem 0' }}>
        <div className="container">
          <h2 className="section-title text-center">World-Class Infrastructure</h2>
          <p className="vision-text text-center" style={{ maxWidth: '700px', margin: '0 auto 4rem' }}>
            We invest in the best technology and environment to ensure your dental visits are safe, precise, and comfortable.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2rem' }}>
            <div style={{ borderRadius: '2rem', overflow: 'hidden', height: '500px' }}>
              <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200" alt="Main Clinic" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
              <div style={{ borderRadius: '2rem', overflow: 'hidden', height: '240px' }}>
                <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600" alt="Sterilization Lab" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ borderRadius: '2rem', overflow: 'hidden', height: '240px' }}>
                <img src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600" alt="Diagnostic Suite" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="about-team" style={{ padding: '6rem 0' }}>
        <div className="container">
          <h2 className="section-title text-center">Meet Our Specialists</h2>
          <p className="vision-text text-center" style={{ maxWidth: '700px', margin: '0 auto 3rem' }}>
            Our team of experienced dentists brings together decades of expertise across various dental specializations.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', marginTop: '3rem' }}>
            {[
              { name: 'Dr. Priya Sharma', role: 'Principal Dentist', spec: 'BDS, MDS - Restorative Dentistry', exp: '15+ Years', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300' },
              { name: 'Dr. Amit Patel', role: 'Orthodontist', spec: 'BDS, MDS - Orthodontics', exp: '12+ Years', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300' },
              { name: 'Dr. Sneha Reddy', role: 'Oral Surgeon', spec: 'BDS, MDS - Oral Surgery', exp: '10+ Years', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300' },
              { name: 'Dr. Vikram Singh', role: 'Implantologist', spec: 'BDS, MDS - Implantology', exp: '8+ Years', img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300' }
            ].map((member, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="glass-morphism" 
                style={{ padding: '2rem', borderRadius: '2rem', textAlign: 'center', background: 'white' }}
              >
                <div style={{ width: '130px', height: '130px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 1.5rem', border: '5px solid var(--bg-light-blue)' }}>
                  <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--primary-blue)' }}>{member.name}</h3>
                <p className="text-teal" style={{ fontWeight: '700', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{member.role}</p>
                <div style={{ height: '1px', background: 'var(--bg-light-blue)', width: '40px', margin: '1rem auto' }}></div>
                <p style={{ fontSize: '0.8rem', color: '#6B7280', fontWeight: '500' }}>{member.spec}</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--primary-blue)', fontWeight: '700', marginTop: '0.5rem' }}>{member.exp} Experience</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-why bg-blue text-white" style={{ padding: '6rem 0' }}>
        <div className="container">
          <h2 className="section-title text-center text-white">Why Patients Trust Us</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginTop: '3rem' }}>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <Users size={48} className="text-white" style={{ marginBottom: '1.5rem', opacity: 0.9 }} />
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>10,000+ Happy Patients</h3>
              <p style={{ fontSize: '0.95rem', opacity: 0.8 }}>Thousands of satisfied patients trust us with their dental care.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <Award size={48} className="text-white" style={{ marginBottom: '1.5rem', opacity: 0.9 }} />
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Award-Winning Care</h3>
              <p style={{ fontSize: '0.95rem', opacity: 0.8 }}>Recognized as the best dental clinic in Chhattisgarh.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <ShieldCheck size={48} className="text-white" style={{ marginBottom: '1.5rem', opacity: 0.9 }} />
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Safety First</h3>
              <p style={{ fontSize: '0.95rem', opacity: 0.8 }}>100% sterilization protocols and premium quality materials.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta" style={{ padding: '6rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title">Experience Quality Dental Care</h2>
          <p className="vision-text" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            Schedule a consultation today and discover why we're Raipur's most preferred dental clinic.
          </p>
          <a href="/contact" className="btn btn-primary">BOOK FREE CONSULTATION</a>
        </div>
      </section>
    </div>
  );
};

export default About;
