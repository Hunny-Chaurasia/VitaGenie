import React, { useEffect, useMemo, useRef, useState } from 'react';
import { COLORSAuth, getCSSVariablesAuth } from './AuthenticationForm';
import './AuthenticationForm.css';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';

const ROLE_MESSAGES = {
  'weight-loss': '🔥 Welcome, Fat Burner! Ready to torch those calories?',
  'muscle-gain': "💪 Welcome, Muscle Builder! Time to get swole!",
  endurance: "🏃 Welcome, Endurance Athlete! Let's boost that stamina!",
  wellness: '🧘 Welcome, Wellness Warrior! Balance and health await!',
};

let notifIdCounter = 0;

export default function AuthenticationForm() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  const [mode, setMode] = useState('signin'); // 'signin' | 'signup'
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null | 'success'
  const [notifications, setNotifications] = useState([]);

  const [form, setForm] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    weight: '',
    height: '',
    anyInjury: '',
    breathingIssues: '',
    fitnessGoal: '',
    bodyType: '',
  });

  const isSignup = mode === 'signup';

  // Floating health-icon particles — generated once on mount, positions are random
  const healthIcons = useMemo(() => {
    return Array.from({ length: 25 }, (_, i) => ({
      id: i,
      odd: i % 2 === 1,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 4,
    }));
  }, []);

  // ── Custom cursor
  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    let mx = 0, my = 0, rx = 0, ry = 0;
    let rafId;

    const handleMouseMove = (e) => {
      mx = e.clientX; my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    };
    const animateRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      rafId = requestAnimationFrame(animateRing);
    };
    const handleMouseOver = (e) => {
      if (e.target.closest('a, button')) {
        cursor.style.width = '18px'; cursor.style.height = '18px';
        ring.style.width = '52px'; ring.style.height = '52px';
      }
    };
    const handleMouseOut = (e) => {
      if (e.target.closest('a, button')) {
        cursor.style.width = '10px'; cursor.style.height = '10px';
        ring.style.width = '36px'; ring.style.height = '36px';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    animateRing();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const updateField = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const pushNotification = (message, type) => {
    const id = ++notifIdCounter;
    setNotifications((prev) => [...prev, { id, message, type, leaving: false }]);
    setTimeout(() => {
      setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, leaving: true } : n)));
      setTimeout(() => {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
      }, 300);
    }, 5000);
  };

  async function signIn(username, password, role) {
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, role }),
      });
      const data = await response.json();
      return { success: response.ok, data };
    } catch (error) {
      return { success: false, data: { message: '❌ Connection error. Make sure the server is running on http://localhost:5001' } };
    }
  }

  async function signUp(username, password, role, email) {
    try {
      const response = await fetch(`${API_BASE_URL}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, email, role }),
      });
      const data = await response.json();
      return { success: response.ok, data };
    } catch (error) {
      return { success: false, data: { message: '❌ Connection error. Make sure the server is running on http://localhost:5001' } };
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password, confirmPassword, fitnessGoal, email } = form;

    if (!username || !password || !fitnessGoal) {
      pushNotification('❌ Please fill in all the required fitness fields!', 'error');
      return;
    }
    if (isSignup) {
      if (password !== confirmPassword) {
        pushNotification("🔒 Passwords don't match - keep your fitness data secure!", 'error');
        return;
      }
      if (password.length < 6) {
        pushNotification('🔐 Password needs to be at least 6 characters long!', 'error');
        return;
      }
    }

    setSubmitting(true);
    const result = isSignup
      ? await signUp(username, password, fitnessGoal, email)
      : await signIn(username, password, fitnessGoal);
    setSubmitting(false);

    if (result.success) {
      setSubmitStatus('success');
      const successMessage = !isSignup
        ? (ROLE_MESSAGES[fitnessGoal] || '🎉 Welcome to your health transformation!')
        : '✅ Account created successfully! You can now sign in and start your fitness journey!';
      pushNotification(successMessage, 'success');

      if (!isSignup) {
        localStorage.setItem('fitUser', JSON.stringify({
          username,
          role: fitnessGoal,
          joinedAt: new Date().toISOString(),
          caloriesBurned: result.data.calories_burned || 0,
          workoutCount: result.data.workout_count || 0,
        }));
        setTimeout(() => {
          pushNotification('🔄 Redirecting to your fitness dashboard...', 'success');
          setTimeout(() => { window.location.href = 'dashboard.html'; }, 1500);
        }, 1000);
      } else {
        setTimeout(() => {
          setMode('signin');
          setForm({
            username: '', password: '', confirmPassword: '', email: '',
            weight: '', height: '', anyInjury: '', breathingIssues: '',
            fitnessGoal: '', bodyType: '',
          });
          pushNotification('✨ You can now sign in with your new account!', 'success');
        }, 2000);
      }
    } else {
      pushNotification(result.data.message || '❌ Something went wrong in our fitness system!', 'error');
    }

    setTimeout(() => setSubmitStatus(null), 3000);
  };

  const showForgotPassword = () => pushNotification('🔐 Password recovery coming soon! Contact your fitness trainer for help.', 'info');
  const showFitnessHelp = () => pushNotification('💪 Our fitness support team is here to help! Email: support@motionmentor.com', 'info');

  const buttonLabel = submitting
    ? (isSignup ? 'Building your profile...' : 'Connecting to VitaGenie...')
    : (isSignup ? 'Join VitaGenie Community' : 'Sign In to VitaGenie');

  return (
    <div className="vg-root" style={getCSSVariablesAuth(COLORSAuth)}>
      <div id="cursor" ref={cursorRef}></div>
      <div id="cursor-ring" ref={ringRef}></div>

      <div className="floating-elements">
        {healthIcons.map((icon) => (
          <div
            key={icon.id}
            className={`health-icon${icon.odd ? ' odd' : ''}`}
            style={{
              left: `${icon.left}%`,
              animationDelay: `${icon.delay}s`,
              animationDuration: `${icon.duration}s`,
            }}
          />
        ))}
      </div>

      {notifications.map((n) => (
        <div key={n.id} className={`notification ${n.type}${n.leaving ? ' leaving' : ''}`}>
          {n.message}
        </div>
      ))}

      <div>
        <div className="brand-logo"><i className="fas fa-heartbeat"></i></div>
        <h1 className="main-title">VitaGenie</h1>
        <p className="welcome-subtitle">
          {isSignup ? 'Begin your transformation journey' : 'Transform your health journey today'}
        </p>

        <div className="auth-container">
          <div className="mode-selector">
            <button
              type="button"
              className={`mode-option${!isSignup ? ' active' : ''}`}
              onClick={() => setMode('signin')}
            >
              Sign In
            </button>
            <button
              type="button"
              className={`mode-option${isSignup ? ' active' : ''}`}
              onClick={() => setMode('signup')}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-section">
              <label className="field-label" htmlFor="username">Username</label>
              <div className="field-wrapper">
                <input type="text" id="username" className="text-field" placeholder="Fit-username"
                  value={form.username} onChange={updateField('username')} required />
                <span className="field-icon"><i className="fas fa-user-circle"></i></span>
              </div>
            </div>

            <div className="input-section">
              <label className="field-label" htmlFor="password">Password</label>
              <div className="field-wrapper">
                <input type="password" id="password" className="text-field" placeholder="Strong-Password"
                  value={form.password} onChange={updateField('password')} required />
                <span className="field-icon"><i className="fas fa-lock"></i></span>
              </div>
            </div>

            <div className={`registration-fields${isSignup ? ' active' : ''}`}>
              <div className="input-section">
                <label className="field-label" htmlFor="confirmPassword">Confirm Password</label>
                <div className="field-wrapper">
                  <input type="password" id="confirmPassword" className="text-field" placeholder="Confirm strong password"
                    value={form.confirmPassword} onChange={updateField('confirmPassword')} required={isSignup} />
                  <span className="field-icon"><i className="fas fa-lock"></i></span>
                </div>
              </div>

              <div className="input-section">
                <label className="field-label" htmlFor="email">Email (Optional)</label>
                <div className="field-wrapper">
                  <input type="email" id="email" className="text-field" placeholder="fitness@gmail.com"
                    value={form.email} onChange={updateField('email')} />
                  <span className="field-icon"><i className="fas fa-envelope"></i></span>
                </div>
              </div>

              <div className="input-section">
                <label className="field-label" htmlFor="weight">Weight</label>
                <div className="field-wrapper">
                  <input type="text" id="weight" className="text-field" placeholder="Your Weight"
                    value={form.weight} onChange={updateField('weight')} />
                  <span className="field-icon"><i className="fas fa-weight"></i></span>
                </div>
              </div>

              <div className="input-section">
                <label className="field-label" htmlFor="height">Height</label>
                <div className="field-wrapper">
                  <input type="text" id="height" className="text-field" placeholder="Your Height"
                    value={form.height} onChange={updateField('height')} />
                  <span className="field-icon"><i className="fas fa-ruler-vertical"></i></span>
                </div>
              </div>

              <div className="input-section">
                <label className="field-label" htmlFor="anyInjury">Any Injury</label>
                <div className="field-wrapper">
                  <textarea id="anyInjury" className="text-field" placeholder="Any Injury?? If Yes Please Mention"
                    value={form.anyInjury} onChange={updateField('anyInjury')} />
                  <span className="field-icon"><i className="fas fa-briefcase-medical"></i></span>
                </div>
              </div>

              <div className="input-section">
                <label className="field-label" htmlFor="breathingIssues">Breathing Issues</label>
                <div className="field-wrapper">
                  <textarea id="breathingIssues" className="text-field" placeholder="Any Breathing Issues?? If Yes Please Mention"
                    value={form.breathingIssues} onChange={updateField('breathingIssues')} />
                  <span className="field-icon"><i className="fas fa-lungs"></i></span>
                </div>
              </div>
            </div>

            <div className="input-section">
              <label className="field-label" htmlFor="fitnessGoal">Fitness Goal</label>
              <div className="field-wrapper">
                <select id="fitnessGoal" className="dropdown-field" value={form.fitnessGoal} onChange={updateField('fitnessGoal')} required>
                  <option value="">Select your fitness focus</option>
                  <option value="weight-loss">🔥 Weight Loss & Fat Burn</option>
                  <option value="muscle-gain">💪 Muscle Building & Strength</option>
                  <option value="endurance">🏃 Cardio & Endurance</option>
                  <option value="wellness">🧘 Overall Health & Wellness</option>
                  <option value="street-workout">🧘 Street Workout</option>
                </select>
                <span className="field-icon"><i className="fas fa-crosshairs"></i></span>
              </div>
            </div>

            <div className="input-section">
              <label className="field-label" htmlFor="bodyType">Body Type</label>
              <div className="field-wrapper">
                <select id="bodyType" className="dropdown-field" value={form.bodyType} onChange={updateField('bodyType')}>
                  <option value="">Select your body Type</option>
                  <option value="ectomorph">🔥 Ectomorph: Lean, long, and slender</option>
                  <option value="mesomorph">💪 Mesomorph: Naturally muscular and athletic</option>
                  <option value="endomorph">🏃 Endomorph: Round, stores fat</option>
                </select>
                <span className="field-icon"><i className="fas fa-crosshairs"></i></span>
              </div>
            </div>

            <div className="health-feature">
              <div className="health-feature-title"><i className="fas fa-heart"></i> 24/7 Health Monitoring</div>
              Track your progress with real-time health metrics and personalized insights!
            </div>

            <div className="utility-links">
              <button type="button" className="utility-link" onClick={showForgotPassword}>Forgot Password?</button>
              <button type="button" className="utility-link" onClick={showFitnessHelp}>Fitness Support</button>
            </div>

            <button
              type="submit"
              className={`action-button${submitting ? ' loading' : ''}${submitStatus === 'success' ? ' success' : ''}`}
              disabled={submitting}
            >
              <i className={submitting ? 'fas fa-spinner fa-pulse' : 'fas fa-heartbeat'}></i> {buttonLabel}
            </button>
            <a href="data.html" style={{ marginTop: '10px', display: 'inline-block' }}>Skip For Now</a>
            <div className="content-divider">
              <span>Healthy • Strong • Motivated</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}