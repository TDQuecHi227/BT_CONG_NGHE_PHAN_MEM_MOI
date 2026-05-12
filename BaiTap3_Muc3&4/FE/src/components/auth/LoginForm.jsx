import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Alert } from 'react-bootstrap';
import { loginUser, clearError } from '../../store/slices/authSlice';

// Icons SVG components
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
  </svg>
);

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
  </svg>
);

const EyeIcon = ({ open }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
    {open ? (
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
    ) : (
      <>
        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
      </>
    )}
  </svg>
);

const LoginForm = () => {
  const dispatch = useDispatch();
  const { loading, error, isAuthenticated, redirectUrl } = useSelector((state) => state.auth);

  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    if (isAuthenticated && redirectUrl) {
      window.location.href = redirectUrl;
    }
  }, [isAuthenticated, redirectUrl]);

  useEffect(() => {
    if (error) dispatch(clearError());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [identifier, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!identifier || !password) return;
    dispatch(loginUser({ identifier, password }));
  };

  return (
    <Form onSubmit={handleSubmit} id="login-form">
      {error && (
        <Alert variant="danger" className="login-alert">
          {error}
        </Alert>
      )}

      {/* Field: Email */}
      <Form.Group controlId="loginIdentifier">
        <Form.Label className="form-label-custom">Email</Form.Label>
        <div className="input-group-custom">
          <span className="input-icon-left"><MailIcon /></span>
          <Form.Control
            type="text"
            placeholder="username"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            required
            className="input-custom"
            autoComplete="username"
          />
        </div>
      </Form.Group>

      {/* Field: Mật khẩu */}
      <Form.Group controlId="loginPassword">
        <Form.Label className="form-label-custom">Mật khẩu</Form.Label>
        <div className="input-group-custom">
          <span className="input-icon-left"><LockIcon /></span>
          <Form.Control
            type={showPassword ? 'text' : 'password'}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            className="input-custom"
            autoComplete="current-password"
          />
          <button
            type="button"
            className="input-icon-right"
            onClick={() => setShowPassword(!showPassword)}
            tabIndex={-1}
          >
            <EyeIcon open={showPassword} />
          </button>
        </div>
      </Form.Group>

      {/* Options */}
      <div className="form-options">
        <label className="custom-checkbox">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          Ghi nhớ tôi
        </label>
        <a href="#" className="forgot-link">Quên mật khẩu?</a>
      </div>

      {/* Nút Đăng nhập */}
      <Button
        type="submit"
        className="btn-submit"
        disabled={loading}
      >
        {loading ? (
          <>
            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />
            Đang đăng nhập...
          </>
        ) : (
          'Sign In'
        )}
      </Button>

      {/* Đăng ký */}
      <p className="register-hint">
        Chưa có tài khoản? <a href="/register" className="register-link">Đăng ký ngay</a>
      </p>
    </Form>
  );
};

export default LoginForm;
