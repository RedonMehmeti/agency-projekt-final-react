import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

export default function Signup() {
  const [form, setForm] = useState({ email: '', password: '', confirmPassword: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="auth page-enter">
      <div className="auth__container">
        <div className="auth__card">
          <div className="auth__header">
            <h2>Create Account</h2>
            <p>Join us and start your journey</p>
          </div>
          <form onSubmit={handleSubmit} className="auth__form">
            <div className="auth__field">
              <label htmlFor="email">Email / Username</label>
              <div className="auth__input-wrapper">
                <svg className="auth__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="auth__field">
              <label htmlFor="password">Password</label>
              <div className="auth__input-wrapper">
                <svg className="auth__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Create a password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="auth__field">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="auth__input-wrapper">
                <svg className="auth__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <Link to="/login" className="auth__submit">Sign Up</Link>
          </form>
          <div className="auth__footer">
            <p>Already have an account? <Link to="/login">Log In</Link></p>
          </div>
        </div>
        <div className="auth__decor">
          <div className="auth__decor-shape auth__decor-shape--1" />
          <div className="auth__decor-shape auth__decor-shape--2" />
          <div className="auth__decor-shape auth__decor-shape--3" />
          <div className="auth__decor-shape auth__decor-shape--4" />
        </div>
      </div>
    </div>
  )
}
