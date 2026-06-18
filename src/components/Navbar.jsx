import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { destinations } from '../data/destinations'
import './Navbar.css'

const logoUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr5ky7UPioDg-ivfvLpgEgZPZ9NwelA40UUGvrhDUyazUwxwI9-4AJhlcQwExvgg9MjuA&usqp=CAU"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          <img src={logoUrl} alt="Logo" />
        </Link>

        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`navbar__menu ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className="navbar__link" onClick={() => setMenuOpen(false)}>Home</Link>

          <div className="navbar__dropdown" ref={dropdownRef}>
            <button
              className="navbar__link navbar__dropdown-btn"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Destinations
              <svg className={`navbar__arrow ${dropdownOpen ? 'open' : ''}`} width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className={`navbar__dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
              {destinations.map((d) => (
                <Link
                  key={d.id}
                  to={`/destination/${d.id}`}
                  className="navbar__dropdown-item"
                  onClick={() => { setDropdownOpen(false); setMenuOpen(false) }}
                >
                  {d.title.split(' - ')[0] || d.title}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/contact" className="navbar__link" onClick={() => setMenuOpen(false)}>Contact</Link>
          <div className="navbar__actions">
            <Link to="/login" className="navbar__btn navbar__btn--outline" onClick={() => setMenuOpen(false)}>Log In</Link>
            <Link to="/signup" className="navbar__btn navbar__btn--solid" onClick={() => setMenuOpen(false)}>Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
