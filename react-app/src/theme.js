// theme.js

// VitaGenie.jsx

export const COLORSVG = {
  lime: '#c8f135',
  limeDim: '#9dbf1e',
  bg: '#080808',
  surface: '#111111',
  surface2: '#181818',
  border: '#222222',
  text: '#efefef',
  muted: '#777777',
  dim: '#333333',
  white: '#ffffff',
  btnHover: '#daff66',
  darkBtnBg: '#1c1c1e',

  // translucent / overlay tones used across the design
  cursorRingBorder: 'rgba(200,241,53,0.4)',
  navBorder: 'rgba(255,255,255,0.04)',
  navBg: 'rgba(8,8,8,0.7)',
  gridLine: 'rgba(255,255,255,0.015)',
  glow1: 'rgba(200,241,53,0.07)',
  glow2: 'rgba(200,241,53,0.04)',
  featHoverBorder: 'rgba(200,241,53,0.3)',
  shadowLight: 'rgba(0,0,0,0.4)',
  shadowDark: 'rgba(0,0,0,0.6)',
  dlGlow: 'rgba(200,241,53,0.08)',
  dlWatermark: 'rgba(200,241,53,0.03)',
};

export function getCSSVariables(colors = COLORSVG) {
  const vars = {};
  Object.entries(colors).forEach(([key, value]) => {
    const kebabKey = key.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
    vars[`--${kebabKey}`] = value;
  });
  return vars;
}

// Authentication.jsx
export const COLORSAuth = {
  // base text / background
  bodyText: '#ffe8e8',
  bgBlack1: '#000000',
  bgBlack2: '#010206',
  bgDark1: '#0f1419',
  bgBlack3: '#030508',
  bgDark2: '#0a0f1c',
  bgDark3: '#1a1f2e',

  // brand green family
  brandGreen: '#21a027',
  brandGreenLight: '#3b973f',
  brandGreenMuted: '#5f8461',
  brandGreenSoft: '#63d068',
  brandGreenHover: '#6cc270',
  brandGreenPale: '#75d47a',
  brandGreenDeep: '#156a1a',
  brandGreenDeeper: '#17691b',
  brandGreenDeepest: '#0d4810',
  brandGreenDark: '#1b4e1e',
  brandGreenBright: '#16801b',
  brandGreenMid: '#49b04f',
  brandGreenMidBg: '#4aaa4f5c',

  // success / error / info (notifications)
  success1: '#27ae60',
  success2: '#2ecc71',
  error1: '#e74c3c',
  error2: '#c0392b',
  info1: '#3498db',
  info2: '#2980b9',

  // translucent overlays
  containerBg: '#153e185d',
  containerShadow: 'rgba(0,0,0,0.51)',
  containerBorder: 'rgba(255,255,255,0.32)',
  logoShadow: 'rgba(33,160,39,0.6)',
  fieldBg: 'rgba(255,240,240,0.5)',
  fieldBgFocus: 'rgba(255,240,240,0.8)',
  dropdownBorder: 'rgba(33,160,39,0.53)',
  shineOverlay: 'rgba(255,255,255,0.3)',
  actionHoverShadow: 'rgba(255,107,107,0.4)',
  modeActiveShadow: 'rgba(255,107,107,0.3)',
  notifShadow: 'rgba(0,0,0,0.2)',

  // custom cursor (was `var(--lime)` in the original but never defined — fixed here)
  cursorDot: '#21a027',
  cursorRingBorder: 'rgba(200,241,53,0.4)',

  white: '#ffffff',
};

export function getCSSVariablesAuth(colors = COLORSAuth) {
  const vars = {};
  Object.entries(colors).forEach(([key, value]) => {
    const kebabKey = key.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
    vars[`--${kebabKey}`] = value;
  });
  return vars;
}


// Har section (Home, Workouts, Settings, Nutrition, Progress, Community, News, Exercises)
// BottonNav.jsx
// HomeScreen.jsx
export const COLORSMulFiles = {
  // ── Base ──
  bodyText: '#ffe8e8',
  bgBlack: '#000000',
  bgDark: '#0d0f12',

  // ── Brand green (primary accent across app) ──
  brandGreen: '#21a027',
  brandGreenDark: '#01342e',
  brandGreenSoft: '#22c55e',
  brandGreenSofter: '#4ade80',
  brandGreenDeep: '#16a34a',

  // ── Blues ──
  accentBlue: '#3b82f6',
  accentBlueLight: '#60a5fa',
  accentBlueDeep: '#2563eb',
  accentBlueSky: '#42beeb',

  // ── Purples ──
  accentPurple: '#8b5cf6',
  accentPurpleLight: '#a855f7',
  accentPurpleSoft: '#a78bfa',

  // ── Reds / Pinks ──
  accentRed: '#ef4444',
  accentRedSoft: '#f58383',
  accentRedDeep: '#dc2626',

  // ── Ambers / Yellows ──
  accentAmber: '#f59e0b',
  accentAmberDeep: '#d97706',
  accentGold: '#ffc107',
  accentGoldDark: 'goldenrod',

  // ── Neutrals / Text ──
  textPrimary: '#f8fafc',
  textSecondary: '#94a3b8',
  textMuted: '#6b7280',
  textFaint: '#64748b',
  white: '#ffffff',

  // ── Surfaces ──
  surfaceDark: '#161a20',
  surfaceCard: '#0f0d2630',
  surfaceGlass: '#ffffff17',
  surfaceGlassLight: '#ffffff0d',

  // ── Achievement icon gradients (start colors) ──
  iconGreenStart: '#10b981',
  iconGreenEnd: '#059669',
  iconRedStart: '#ef4444',
  iconRedEnd: '#dc2626',
  iconYellowStart: '#f59e0b',
  iconYellowEnd: '#d97706',
  iconPurpleStart: '#8b5cf6',
  iconPurpleEnd: '#7c3aed',
  iconBlueStart: '#3b82f6',
  iconBlueEnd: '#2563eb',
};

export function getCSSVariablesMulFiles(colors = COLORSMulFiles) {
  const vars = {};
  Object.entries(colors).forEach(([key, value]) => {
    const kebabKey = key.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
    vars[`--${kebabKey}`] = value;
  });
  return vars;
}