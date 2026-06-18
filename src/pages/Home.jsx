import { useState } from 'react'
import { Link } from 'react-router-dom'
import { destinations } from '../data/destinations'
import DownloadModal from '../components/DownloadModal'
import './Home.css'
import '../components/DownloadModal.css'

export default function Home() {
  const [showDownload, setShowDownload] = useState(false)

  return (
    <div className="home page-enter">
      <section className="hero">
        <div className="hero__overlay" />
        <div className="hero__content">
          <span className="hero__badge">Explore. Dream. Discover.</span>
          <h1 className="hero__title">WELCOME TO <span className="hero__highlight">OUR AGENCY</span></h1>
          <p className="hero__subtitle">Your gateway to unforgettable travel experiences around the world.</p>
          <div className="hero__actions">
            <button onClick={() => setShowDownload(true)} className="hero__btn hero__btn--primary">Download App</button>
            <Link to="/signup" className="hero__btn hero__btn--secondary">Join Us</Link>
          </div>
        </div>
        <div className="hero__scroll">
          <span>Scroll to explore</span>
          <div className="hero__scroll-dot" />
        </div>
      </section>

      <section className="destinations-preview">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Destinations</span>
            <h2 className="section-title">Popular Destinations</h2>
            <p className="section-desc">Handpicked locations that promise extraordinary experiences</p>
          </div>
          <div className="destinations-grid">
            {destinations.map((dest, index) => (
              <Link to={`/destination/${dest.id}`} key={dest.id} className="dest-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="dest-card__image">
                  <img src={dest.image} alt={dest.title} loading="lazy" />
                  <div className="dest-card__overlay">
                    <span className="dest-card__cta">Explore Now</span>
                  </div>
                </div>
                <div className="dest-card__body">
                  <h3>{dest.title.split(' - ')[0]}</h3>
                  <p>{dest.description.slice(0, 100)}...</p>
                  <div className="dest-card__footer">
                    <span className="dest-card__price">From {dest.prices[0].price}</span>
                    <span className="dest-card__arrow">&rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats__grid">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Destinations</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Happy Travelers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">99%</span>
              <span className="stat-label">Satisfaction Rate</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
          </div>
        </div>
      </section>

      <DownloadModal isOpen={showDownload} onClose={() => setShowDownload(false)} />
    </div>
  )
}
