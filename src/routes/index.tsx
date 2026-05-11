import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: Home,
})

const serviceOptions = [
  'Lawn Care',
  'Landscaping',
  'Holiday Lighting',
  'Haul-Off Services',
  'Property Cleanups',
  'Pressure Washing',
  'Exterior Maintenance',
  'Other',
]

function QuoteForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    const formData = new FormData(e.currentTarget)
    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="kwm-quote-success">
        <p className="kwm-green" style={{ fontSize: '2rem' }}>✓</p>
        <h4>Request Received!</h4>
        <p>Thanks for reaching out. We'll be in touch shortly with your free estimate.</p>
      </div>
    )
  }

  return (
    <form
      name="quote-request"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="kwm-quote-form"
    >
      <input type="hidden" name="form-name" value="quote-request" />
      <p style={{ display: 'none' }}>
        <label>Don't fill this out: <input name="bot-field" /></label>
      </p>

      <div className="kwm-form-row">
        <div className="kwm-form-group">
          <label htmlFor="quote-name">Name *</label>
          <input id="quote-name" name="name" type="text" placeholder="Your full name" required />
        </div>
        <div className="kwm-form-group">
          <label htmlFor="quote-phone">Phone *</label>
          <input id="quote-phone" name="phone" type="tel" placeholder="(555) 555-5555" required />
        </div>
      </div>

      <div className="kwm-form-row">
        <div className="kwm-form-group">
          <label htmlFor="quote-email">Email</label>
          <input id="quote-email" name="email" type="email" placeholder="your@email.com" />
        </div>
        <div className="kwm-form-group">
          <label htmlFor="quote-service">Service Needed *</label>
          <select id="quote-service" name="service" required>
            <option value="">Select a service…</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="kwm-form-group">
        <label htmlFor="quote-address">Property Address</label>
        <input id="quote-address" name="address" type="text" placeholder="City, State or full address" />
      </div>

      <div className="kwm-form-group">
        <label htmlFor="quote-details">Tell Us More</label>
        <textarea
          id="quote-details"
          name="details"
          rows={4}
          placeholder="Describe what you need, property size, any details that will help us give an accurate estimate…"
        />
      </div>

      {status === 'error' && (
        <p style={{ color: '#e05252', marginBottom: '10px' }}>
          Something went wrong. Please try again or call us directly.
        </p>
      )}

      <button type="submit" className="kwm-btn kwm-btn-green" disabled={status === 'submitting'} style={{ width: '100%', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
        {status === 'submitting' ? 'Sending…' : 'Request Free Estimate'}
      </button>
    </form>
  )
}

const services = [
  {
    title: 'Lawn Care',
    description: 'Professional mowing and lawn maintenance services.',
  },
  {
    title: 'Landscaping',
    description: 'Clean, attractive landscaping solutions for your property.',
  },
  {
    title: 'Holiday Lighting',
    description: 'Professional holiday light installation and removal for homes and businesses.',
  },
  {
    title: 'Haul-Off Services',
    description: 'Fast junk, debris, and brush removal services.',
  },
  {
    title: 'Property Cleanups',
    description: 'Complete exterior cleanups to restore curb appeal.',
  },
  {
    title: 'Pressure Washing',
    description:
      'Driveways, siding, patios, fences, and more professionally cleaned.',
  },
  {
    title: 'Exterior Maintenance',
    description: 'General exterior upkeep to keep your property looking its best.',
  },
]

const galleryPhotos = [
  { src: '/work-lighting-3.jpeg', alt: 'Holiday lighting installation on large home' },
  { src: '/work-lighting-4.jpeg', alt: 'Professional holiday lights on two-story home' },
  { src: '/work-lawn-1.jpeg', alt: 'Lawn care and mowing service' },
  { src: '/work-lighting-1.jpeg', alt: 'Holiday light installation on residential home' },
  { src: '/work-lawn-2.jpeg', alt: 'Clean lawn maintenance beside home' },
  { src: '/work-lighting-2.jpeg', alt: 'Full property holiday lighting with driveway lights' },
]

const reviews = [
  {
    text: '"KWM Exterior Services did an amazing job cleaning up our property. Highly recommend."',
  },
  {
    text: '"Professional, on time, and great work at a fair price."',
  },
  {
    text: '"Fast service and excellent communication from start to finish."',
  },
]

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="kwm-hero">
        <div className="kwm-hero-content">
          <h2>
            EXTERIOR SERVICES.<br />
            <span className="kwm-green">QUALITY YOU CAN SEE.</span>
          </h2>
          <p>
            Reliable, Professional, Affordable. We help homes and businesses stay
            clean, sharp, and well-maintained year-round.
          </p>
          <div className="kwm-buttons">
            <a className="kwm-btn kwm-btn-green" href="#quote">
              GET A FREE QUOTE
            </a>
            <a className="kwm-btn kwm-btn-outline" href="sms:16822445367">
              TEXT US
            </a>
            <a className="kwm-btn kwm-btn-outline" href="tel:16822445367">
              CALL US
            </a>
            <a
              className="kwm-btn kwm-btn-outline"
              href="mailto:Kadesales@kwmexteriorservices.com"
            >
              EMAIL US
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="kwm-section">
        <div className="kwm-section-title">
          <h3>Our Services</h3>
        </div>
        <div className="kwm-services-grid">
          {services.map((s) => (
            <div key={s.title} className="kwm-card">
              <h4 className="kwm-green">{s.title}</h4>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="kwm-section">
        <div className="kwm-section-title">
          <h3>Our Work</h3>
        </div>
        <div className="kwm-gallery-grid">
          {galleryPhotos.map((photo) => (
            <div key={photo.src} className="kwm-gallery-item">
              <img src={photo.src} alt={photo.alt} />
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="kwm-section">
        <div className="kwm-about">
          <div>
            <div className="kwm-section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
              <h3>About KWM Exterior Services</h3>
            </div>
            <p>
              At KWM Exterior Services, we are committed to delivering high-quality
              exterior services with honest pricing, reliable communication, and
              professional results.
            </p>
            <br />
            <p>
              We take pride in helping homes and businesses stay clean, sharp, and
              well-maintained year-round.
            </p>
          </div>
          <img
            src="/work-lighting-4.jpeg"
            alt="Professional holiday lighting installation"
            className="kwm-about-img"
          />
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="kwm-section">
        <div className="kwm-section-title">
          <h3>Customer Reviews</h3>
        </div>
        <div className="kwm-reviews-grid">
          {reviews.map((r, i) => (
            <div key={i} className="kwm-card">
              <p style={{ color: '#6baa3d', fontSize: '1.2rem' }}>★★★★★</p>
              <br />
              <p>{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Request */}
      <section id="quote" className="kwm-section" style={{ background: '#161616' }}>
        <div className="kwm-section-title">
          <h3>Request a Free Quote</h3>
          <p style={{ color: '#aaa', marginTop: '-20px' }}>
            Fill out the form below and we'll get back to you with a free estimate — no obligation.
          </p>
        </div>
        <div className="kwm-quote-wrapper">
          <QuoteForm />
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="kwm-footer">
        <h3>Contact KWM Exterior Services</h3>
        <p>
          <strong>Text or Call:</strong> 682-244-5367
        </p>
        <p>
          <strong>Email:</strong> Kadesales@kwmexteriorservices.com
        </p>
        <br />
        <p>Free Estimates Available</p>
      </footer>
    </>
  )
}
