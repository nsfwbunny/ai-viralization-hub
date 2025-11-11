'use client';

import { useLanguage } from '@/app/hooks/useLanguage';
import Link from 'next/link';

export default function Home() {
  const { t } = useLanguage();

  return (
    <main style={{ background: '#0a0a0a', color: '#fff', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
        background: 'radial-gradient(circle, rgba(0,0,0,0.3), rgba(10,10,10,0.9))'
      }}>
        <div style={{ maxWidth: '800px' }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            color: '#d4af37',
            marginBottom: '1.5rem',
            textShadow: '0 0 20px rgba(212, 175, 55, 0.5)',
            fontWeight: 900
          }}>
            {t('heroTitle')}
          </h1>
          <p style={{
            fontSize: '1.1rem',
            lineHeight: 1.8,
            marginBottom: '2rem',
            color: '#e0e0e0'
          }}>
            {t('heroDesc')}
          </p>
          <button style={{
            padding: '1rem 2.5rem',
            fontSize: '1.1rem',
            background: 'linear-gradient(135deg, #d4af37 0%, #f0e68c 100%)',
            color: '#0a0a0a',
            border: 'none',
            borderRadius: '50px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            transition: 'all 0.3s ease'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 0 50px rgba(212, 175, 55, 0.7)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 0 30px rgba(212, 175, 55, 0.4)';
          }}>
            {t('buyNow')}
          </button>

          <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#b0b0b0' }}>
            <p>{t('limited')}</p>
            <Link href="/auth/login" style={{ color: '#d4af37', textDecoration: 'none', marginRight: '1rem' }}>
              {t('login')}
            </Link>
            <Link href="/auth/register" style={{ color: '#d4af37', textDecoration: 'none' }}>
              {t('register')}
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        background: 'linear-gradient(180deg, rgba(0,0,0,0.5), rgba(0,0,0,0.8))'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          width: '100%'
        }}>
          {[
            { title: t('feature1Title'), desc: t('feature1Desc') },
            { title: t('feature2Title'), desc: t('feature2Desc') },
            { title: t('feature3Title'), desc: t('feature3Desc') }
          ].map((feature, i) => (
            <div key={i} style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, rgba(212, 175, 55, 0.02) 100%)',
              border: '2px solid rgba(212, 175, 55, 0.2)',
              padding: '2rem',
              borderRadius: '15px',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }} onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = 'rgba(212, 175, 55, 0.6)';
              el.style.background = 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%)';
              el.style.boxShadow = '0 0 30px rgba(212, 175, 55, 0.3)';
              el.style.transform = 'translateY(-10px)';
            }} onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = 'rgba(212, 175, 55, 0.2)';
              el.style.background = 'linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, rgba(212, 175, 55, 0.02) 100%)';
              el.style.boxShadow = 'none';
              el.style.transform = 'translateY(0)';
            }}>
              <h3 style={{ color: '#d4af37', fontSize: '1.5rem', marginBottom: '1rem' }}>
                {feature.title}
              </h3>
              <p style={{ color: '#b0b0b0', lineHeight: 1.6 }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.05), rgba(0, 0, 0, 0.9))'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          maxWidth: '900px',
          width: '100%'
        }}>
          {[
            { text: t('testimonial1'), author: t('testimonial1Author') },
            { text: t('testimonial2'), author: t('testimonial2Author') }
          ].map((testimonial, i) => (
            <div key={i} style={{
              background: 'rgba(212, 175, 55, 0.1)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              padding: '2rem',
              borderRadius: '10px',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(212, 175, 55, 0.15)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.2)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(212, 175, 55, 0.1)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'scale(1)';
            }}>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '1rem',
                color: '#e0e0e0',
                fontStyle: 'italic'
              }}>
                "{testimonial.text}"
              </p>
              <strong style={{ color: '#d4af37' }}>
                {testimonial.author}
              </strong>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
        background: 'linear-gradient(180deg, rgba(0,0,0,0.5), rgba(10,10,10,0.9))'
      }}>
        <div style={{ maxWidth: '600px' }}>
          <h2 style={{
            fontSize: '2.5rem',
            color: '#d4af37',
            marginBottom: '1.5rem',
            textShadow: '0 0 15px rgba(212, 175, 55, 0.4)'
          }}>
            {t('pricingTitle')}
          </h2>
          <p style={{
            fontSize: '4rem',
            color: '#d4af37',
            margin: '1rem 0',
            fontWeight: 900,
            textShadow: '0 0 20px rgba(212, 175, 55, 0.5)'
          }}>
            {t('price')}
          </p>
          <p style={{
            fontSize: '1.1rem',
            marginBottom: '2rem',
            color: '#b0b0b0'
          }}>
            {t('pricingDesc')}
          </p>
          <button style={{
            padding: '1rem 2.5rem',
            fontSize: '1.1rem',
            background: 'linear-gradient(135deg, #d4af37 0%, #f0e68c 100%)',
            color: '#0a0a0a',
            border: 'none',
            borderRadius: '50px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            transition: 'all 0.3s ease'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 0 50px rgba(212, 175, 55, 0.7)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 0 30px rgba(212, 175, 55, 0.4)';
          }}>
            {t('buyNow')}
          </button>
        </div>
      </section>
    </main>
  );
}
