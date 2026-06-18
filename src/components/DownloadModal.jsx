export default function DownloadModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <h2 className="modal-title">Download Our App</h2>
        <p className="modal-desc">Choose your platform to get started</p>
        <div className="modal-options">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="modal-option"
            onClick={onClose}
          >
            <div className="modal-option-icon">
              <svg viewBox="0 0 512 512" width="52" height="52">
                <path fill="#34A853" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z" />
                <path fill="#4285F4" d="M47 13L301.5 267.5l-60.1 60.1L47 13z" />
                <path fill="#EA4335" d="M325.3 234.3l-60.1 60.1 85.7 85.7-25.6 14.8-186.2-107.1L47 13z" />
                <path fill="#FBBC04" d="M325.3 391.7L26.8 512l-26.8-6.2 248.4-248.4 85.7 85.7z" />
                <path fill="#34A853" d="M325.3 391.7L480.2 256 512 269.3v124.1l-186.7 132.1z" />
                <path fill="#4285F4" d="M512 269.3L104.6 13l-26.8 0L512 269.3z" />
                <path fill="#EA4335" d="M512 393.4L480.2 256 512 269.3v124.1z" />
                <path fill="#FBBC04" d="M325.3 391.7L480.2 256 512 269.3v124.1l-186.7 132.1z" />
              </svg>
            </div>
            <div className="modal-option-text">
              <span className="modal-option-label">Google Play</span>
              <span className="modal-option-name">Android App</span>
            </div>
            <span className="modal-option-arrow">&rarr;</span>
          </a>
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="modal-option"
            onClick={onClose}
          >
            <div className="modal-option-icon">
              <svg viewBox="0 0 384 512" width="52" height="52">
                <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-111.2-19.9-139.3z" />
              </svg>
            </div>
            <div className="modal-option-text">
              <span className="modal-option-label">App Store</span>
              <span className="modal-option-name">iPhone App</span>
            </div>
            <span className="modal-option-arrow">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  )
}
