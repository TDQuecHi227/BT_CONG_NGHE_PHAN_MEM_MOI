import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import heroImage from '../assets/login_hero.png'; // Generated image

const LoginPage = () => {
  return (
    <div className="login-layout">
      {/* ── Header ── */}
      <header className="login-header-nav">
        <a href="/" className="logo-text">FlashCardApp</a>
        <div className="header-actions">
          <a href="#" className="link-plain">Đăng nhập</a>
          <a href="#" className="btn-primary-sm">Sign Up</a>
        </div>
      </header>

      {/* ── Main Layout ── */}
      <main className="login-main">
        <div className="login-container">

          {/* Left Column: Hero Content */}
          <div className="login-hero-col">
            <div className="hero-image-wrapper">
              <img src={heroImage} alt="Learning easily" className="hero-image" />
            </div>
            <h1 className="hero-title">Học tập dễ dàng hơn bao giờ hết</h1>
            <p className="hero-subtitle">
              Khám phá phương pháp ghi nhớ thông minh qua các bộ thẻ flashcards chuyên sâu.
            </p>
          </div>

          {/* Right Column: Login Card */}
          <div className="login-form-col">
            <div className="login-card">
              <h2 className="card-title">Welcome Back</h2>
              <p className="card-subtitle">Tiếp tục hành trình ngôn ngữ của bạn</p>

              {/* Social Buttons */}
              <div className="social-buttons">
                <button type="button" className="btn-social">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48">
                    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
                    <path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
                    <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
                    <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
                  </svg>
                  Google
                </button>

              </div>

              <div className="divider">
                <span>Hoặc đăng nhập với tài khoản của bạn</span>
              </div>

              {/* Login Form */}
              <LoginForm />

            </div>
          </div>

        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="login-footer">
        <div>
          <div className="footer-brand">FlashCardApp</div>
          <div className="footer-copy">© 2024 FlashCardApp. All rights reserved.</div>
        </div>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Help Center</a>
          <a href="#">Contact Us</a>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
