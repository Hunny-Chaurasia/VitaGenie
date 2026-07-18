import React, { useEffect, useRef } from 'react';
import { COLORS, getCSSVariables } from './theme';
import './VitaGenie.css';

const FEATURES = [
  { icon: '🎬', title: 'GIF Demonstrations', desc: 'Every exercise comes with a live animated GIF so you can see exactly how the movement looks before you start.' },
  { icon: '📋', title: 'Step-by-Step Instructions', desc: 'Detailed execution steps with focus cues for each phase of the movement — no guesswork, just clean form.' },
  { icon: '🎯', title: 'Muscle Targeting', desc: "Know exactly which muscles you're hitting. Primary and secondary muscle groups are clearly labeled for every exercise." },
  { icon: '⚠️', title: 'Mistake Prevention', desc: 'Common form errors flagged for every move so you can avoid injury and get the most out of every rep.' },
  { icon: '🟢🟠🔴', title: '3 Difficulty Levels', desc: 'Beginner, Intermediate, and Advanced — clearly separated so you always train at the right intensity for your level.' },
  { icon: '🛠️', title: 'Equipment Aware', desc: 'Each exercise lists exactly what gear you need — or confirms you can do it with zero equipment at home.' },
];

const STEPS = [
  { num: '01', title: 'Browse the library', desc: 'Scroll through 100+ exercises organised by difficulty. Find exactly what fits your training goal today.' },
  { num: '02', title: 'Tap any exercise', desc: 'Open the full guide — GIF preview, step-by-step cues, muscles worked, best time to do it, and more.' },
  { num: '03', title: 'Train with confidence', desc: 'Follow the form guide, watch for flagged mistakes, and move better every single session.' },
  { num: '04', title: 'Level up', desc: 'Once Beginner feels easy, move to Intermediate and Advanced. Motion Mentor grows with you.' },
];

const MARQUEE_ITEMS = [
  { icon: '⚡', label: 'Exercise Library' },
  { icon: '🎯', label: 'Muscle Focus' },
  { icon: '🟢', label: 'Beginner Friendly' },
  { icon: '🔴', label: 'Advanced Moves' },
  { icon: '📋', label: 'Step-by-Step' },
  { icon: '⚠️', label: 'Mistake Warnings' },
  { icon: '🛠️', label: 'Equipment Tips' },
  { icon: '🏋️', label: 'Full Body' },
];

const DYNAMIC_WORDS = ['perfected.', 'stronger.', 'flexible.', 'energized.', 'unstoppable.'];

export default function VitaGenie() {
  const rootRef = useRef(null);
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const dynWordsRef = useRef(null);

  // Custom cursor: dot follows mouse instantly, ring follows with easing (lerp)
  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    let mx = 0, my = 0, rx = 0, ry = 0;
    let rafId;

    const handleMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
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

    document.addEventListener('mousemove', handleMouseMove);
    animateRing();

    // Grow cursor on hover over links/buttons (event delegation)
    const handleMouseOver = (e) => {
      if (e.target.closest('a, button')) {
        cursor.style.width = '18px';
        cursor.style.height = '18px';
        ring.style.width = '52px';
        ring.style.height = '52px';
      }
    };
    const handleMouseOut = (e) => {
      if (e.target.closest('a, button')) {
        cursor.style.width = '10px';
        cursor.style.height = '10px';
        ring.style.width = '36px';
        ring.style.height = '36px';
      }
    };
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Dynamic word rotator: cycles once through the word list on page load
  useEffect(() => {
    const words = dynWordsRef.current;
    if (!words) return;
    const items = words.querySelectorAll('.dynamic-word');
    const total = items.length;
    const itemH = items[0].offsetHeight;
    let idx = 0;
    let done = false;
    const timeouts = [];

    const next = () => {
      if (done) return;
      idx++;
      if (idx >= total) { done = true; return; }
      words.style.transition = 'transform 0.55s cubic-bezier(0.76,0,0.24,1)';
      words.style.transform = `translateY(-${idx * itemH}px)`;
      const delay = idx < total - 1 ? 1200 : 9999;
      timeouts.push(setTimeout(next, delay));
    };

    timeouts.push(setTimeout(next, 1800));

    return () => timeouts.forEach(clearTimeout);
  }, []);

  // Scroll reveal via IntersectionObserver
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reveals = root.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mm-root" ref={rootRef} style={getCSSVariables(COLORS)}>
      <div id="mm-cursor" ref={cursorRef}></div>
      <div id="mm-cursor-ring" ref={ringRef}></div>

      <nav>
        <a href="#" className="nav-logo">
          <span className="logo-dot"></span>
          Motion Mentor
        </a>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#how">How it works</a></li>
          <li><a href="#download">Download</a></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-glow"></div>
        <div className="hero-glow2"></div>
        <div className="hero-inner">
          <div className="hero-eyebrow"><span></span> Your personal fitness companion</div>
          <h1 className="hero-title">
            Your body,<br />
            <span className="dynamic-line">
              <div className="dynamic-words" ref={dynWordsRef}>
                {DYNAMIC_WORDS.map((word) => (
                  <div className="dynamic-word" key={word}>{word}</div>
                ))}
              </div>
            </span>
          </h1>
          <p className="hero-sub">Motion Mentor gives you a curated exercise library — from beginner to advanced — with step-by-step form guides, GIF demos, and common mistake warnings.</p>
          <div className="hero-actions">
            <a href="VitaGenie.html" className="btn-primary" target="_blank" rel="noreferrer">⚡ Try it on Web</a>
            <a href="#download" className="btn-ghost">Download the app ↓</a>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-num">100<span className="lime">+</span></div>
            <div className="stat-label">Exercises</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <div className="stat-num">3</div>
            <div className="stat-label">Difficulty levels</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <div className="stat-num">GIF<span className="lime">+</span></div>
            <div className="stat-label">Visual guides</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <div className="stat-num">0<span className="lime">₹</span></div>
            <div className="stat-label">Free to use</div>
          </div>
        </div>
      </section>

      <div className="marquee-section">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <div className="marquee-item" key={i}><span>{item.icon}</span> {item.label}</div>
          ))}
        </div>
      </div>

      <section className="section" id="features">
        <div className="section-label">What you get</div>
        <h2 className="section-title">Everything you need to <span className="lime">train right.</span></h2>
        <div className="features-grid">
          {FEATURES.map((f) => (
            <div className="feat-card reveal" key={f.title}>
              <span className="feat-icon">{f.icon}</span>
              <div className="feat-title">{f.title}</div>
              <p className="feat-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="how" style={{ paddingTop: 0 }}>
        <div className="section-label">Simple as 1-2-3</div>
        <h2 className="section-title">How <span className="lime">Motion Mentor</span> works.</h2>
        <div className="steps-row">
          {STEPS.map((s) => (
            <div className="step-block reveal" key={s.num}>
              <div className="step-num-badge">{s.num}</div>
              <div className="step-title">{s.title}</div>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="download">
        <div className="download-section reveal">
          <div className="dl-eyebrow">📲 Available now</div>
          <h2 className="dl-title">Take your workouts<br /><span className="lime">everywhere.</span></h2>
          <p className="dl-sub">Download Motion Mentor free on iOS and Android. Your entire exercise library — offline, always in your pocket.</p>
          <div className="dl-btns">
            <a href="#" className="store-btn">
              <span className="store-icon">🍎</span>
              <div className="store-text">
                <span className="store-small">Download on the</span>
                <span className="store-name">App Store</span>
              </div>
            </a>
            <a href="#" className="store-btn dark">
              <span className="store-icon">▶</span>
              <div className="store-text">
                <span className="store-small">Get it on</span>
                <span className="store-name">Google Play</span>
              </div>
            </a>
          </div>
          <div className="dl-note">Free download · No subscription required · Works offline</div>
        </div>
      </section>

      <footer>
        <a href="#" className="footer-logo"><span className="logo-dot"></span> Motion Mentor</a>
        <span className="footer-copy">© 2025 Motion Mentor. All rights reserved.</span>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="motion_mentor_updated.html" target="_blank" rel="noreferrer">Launch App →</a>
        </div>
      </footer>
    </div>
  );
}