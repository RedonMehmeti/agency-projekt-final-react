import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { destinations } from '../data/destinations'
import './Destination.css'

const destInfo = {
  1: {
    info: [
      { label: "Vendndodhja", value: "Turqi" },
      { label: "Gjuha", value: "Turqisht" },
      { label: "Monedha", value: "Lira Turke" },
    ],
    highlights: ["Hagia Sophia", "Blu Xhamia", "Pallati Topkapi", "Bazari i Madh", "Bosfori"],
    features: ["Udhëzues Turistik", "Transporti", "Mëngjesi", "Sigurimi i Udhëtimit"]
  },
  2: {
    info: [
      { label: "Vendndodhja", value: "Dubai, EBA" },
      { label: "Gjuha", value: "Arabisht" },
      { label: "Monedha", value: "Dirhami" },
    ],
    highlights: ["Kati i Vëzhgimit", "Shatërvani i Dubai", "Dubai Mall", "Aquarium"],
    features: ["Biletë Hyrjeje", "Transporti", "Udhëzues", "Sigurimi"]
  },
  3: {
    info: [
      { label: "Vendndodhja", value: "Oqeani Indian" },
      { label: "Gjuha", value: "Dhivehi" },
      { label: "Monedha", value: "Rufiyaa" },
    ],
    highlights: ["Plazhet e Bardha", "Resortet Luksoze", "Skenuba", "Perëndimi i Diellit"],
    features: ["Akomodimi", "Ushqimi", "Transporti Detar", "Aktivitete Ujore"]
  },
  4: {
    info: [
      { label: "Vendndodhja", value: "Paris, Francë" },
      { label: "Gjuha", value: "Frëngjisht" },
      { label: "Monedha", value: "Euro" },
    ],
    highlights: ["Kulla Eifel", "Luvri", "Harku i Triumfit", "Lumi Senë"],
    features: ["Biletë Hyrjeje", "Udhëzues", "Shëtitje me Varkë", "Verërat"]
  }
}

const pricingFeatures = {
  1: {
    0: ["Udhëzues në grup", "Transporti lokal", "Mëngjesi i përfshirë"],
    1: ["Udhëzues privat", "Transporti VIP", "Mëngjes & Dreka", "Ekskursione"],
    2: ["Udhëzues Premium", "Transporti Luksoz", "Mëngjes, Dreka & Darka", "Ekskursione të Gjitha", "Hoteli 5*"]
  },
  2: {
    0: ["Biletë Standard", "Transporti", "Udhëzues në grup"],
    1: ["Biletë Premium", "Transporti VIP", "Udhëzues privat", "Dreka"],
    2: ["Biletë Gold", "Transporti Luksoz", "Udhëzues Ekskluziv", "Mëngjes & Dreka", "Hoteli 5*"]
  },
  3: {
    0: ["Akomodimi Basic", "Mëngjesi", "Transporti"],
    1: ["Akomodimi Superior", "Mëngjes & Dreka", "Transporti Detar", "Skenuba"],
    2: ["Akomodimi Luksoz", "All Inclusive", "VIP Transport", "Të Gjitha Aktivitetet", "Spa & Masazh"]
  },
  4: {
    0: ["Biletë Standard", "Udhëzues në grup", "Shëtitje në Senë"],
    1: ["Biletë Premium", "Udhëzues privat", "Shëtitje me Varkë", "Verërat"],
    2: ["Biletë Luksoze", "Udhëzues Ekskluziv", "Shëtitje VIP", "Darkë Romantike", "Hoteli 4*"]
  }
}

export default function Destination() {
  const { id } = useParams()
  const dest = destinations.find((d) => d.id === Number(id))
  const info = destInfo[Number(id)]
  const features = pricingFeatures[Number(id)]
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState(null)
  const [step, setStep] = useState('form')
  const [form, setForm] = useState({ name: '', email: '', phone: '' })

  const openModal = (pkgIdx) => {
    setSelectedPackage(pkgIdx)
    setStep('form')
    setForm({ name: '', email: '', phone: '' })
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedPackage(null)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStep('thankyou')
  }

  if (!dest) {
    return (
      <div className="dest-not-found page-enter">
        <div className="container">
          <h1>Destination not found</h1>
          <Link to="/" className="hero__btn hero__btn--primary">Back to Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="destination page-enter">
      <div className="dest-hero">
        <img src={dest.image} alt={dest.title} />
        <div className="dest-hero__overlay">
          <div className="container">
            <Link to="/" className="dest-hero__back">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/></svg>
              Back to Home
            </Link>
            <h1>{dest.title.split(' - ')[0]}</h1>
            <p>{dest.title.split(' - ')[1] || dest.title}</p>
          </div>
        </div>
      </div>

      <div className="dest-body container">
        <div className="dest-description">
          <h2>About the Destination</h2>
          <p className="dest-description__text">{dest.description}</p>

          {info && (
            <div className="dest-info-cards">
              {info.info.map((item, i) => (
                <div key={i} className="dest-info-card">
                  <span className="dest-info-card__label">{item.label}</span>
                  <span className="dest-info-card__value">{item.value}</span>
                </div>
              ))}
            </div>
          )}

          {info && (
            <div className="dest-highlights">
              <h3>Highlights</h3>
              <div className="dest-highlights__grid">
                {info.highlights.map((h, i) => (
                  <div key={i} className="dest-highlight-tag">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {h}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="dest-pricing">
          <h2>Pricing Plans</h2>
          <p className="dest-pricing__sub">Choose the perfect package for your adventure</p>
          <div className="dest-pricing__grid">
            {dest.prices.map((p, i) => (
              <div key={i} className={`dest-pricing__card ${i === 1 ? 'featured' : ''}`}>
                {i === 1 && <span className="dest-pricing__badge">Most Popular</span>}
                <div className="dest-pricing__days">{p.days}</div>
                <div className="dest-pricing__price">{p.price}</div>
                <div className="dest-pricing__per">{p.per}</div>
                {features && features[i] && (
                  <ul className="dest-pricing__features">
                    {features[i].map((f, j) => (
                      <li key={j}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
                <button className="dest-pricing__btn" onClick={() => openModal(i)}>Book Now</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="booking-modal__overlay" onClick={closeModal}>
          <div className="booking-modal" onClick={(e) => e.stopPropagation()}>
            <button className="booking-modal__close" onClick={closeModal}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>

            {step === 'form' && selectedPackage !== null && (
              <div className="booking-modal__form">
                <div className="booking-modal__header">
                  <h2>Complete Your Booking</h2>
                  <p className="booking-modal__dest">{dest.title.split(' - ')[0]}</p>
                </div>

                <div className="booking-modal__summary">
                  <div className="booking-modal__summary-item">
                    <span className="booking-modal__summary-label">Package</span>
                    <span className="booking-modal__summary-value">{dest.prices[selectedPackage].days}</span>
                  </div>
                  <div className="booking-modal__summary-item">
                    <span className="booking-modal__summary-label">Price</span>
                    <span className="booking-modal__summary-value booking-modal__summary-price">{dest.prices[selectedPackage].price}</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="booking-modal__field">
                    <label htmlFor="name">Full Name</label>
                    <input id="name" name="name" type="text" placeholder="e.g. John Doe" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="booking-modal__field">
                    <label htmlFor="email">Email Address</label>
                    <input id="email" name="email" type="email" placeholder="e.g. john@example.com" value={form.email} onChange={handleChange} required />
                  </div>
                  <div className="booking-modal__field">
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" name="phone" type="tel" placeholder="e.g. +383 44 123 456" value={form.phone} onChange={handleChange} required />
                  </div>
                  <button type="submit" className="booking-modal__submit">Confirm Booking</button>
                </form>
              </div>
            )}

            {step === 'thankyou' && (
              <div className="booking-modal__thankyou">
                <div className="booking-modal__thankyou-icon">&#10004;</div>
                <h2>Thank You, {form.name || 'Traveler'}!</h2>
                <p>Your booking for <strong>{dest.title.split(' - ')[0]}</strong> has been received.</p>
                <p>We&apos;ve sent a confirmation to <strong>{form.email}</strong>. Get ready for an unforgettable adventure!</p>
                <div className="booking-modal__thankyou-emoji">&#127881; &#9992;&#65039; &#127796;</div>
                <button className="booking-modal__submit" onClick={closeModal}>Done</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
