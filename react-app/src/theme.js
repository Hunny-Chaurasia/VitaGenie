// theme.js
// Yahan pe saare colors ek hi jagah define hain.
// Agar kabhi color scheme change karni ho, to bas yahi file edit karo —

import VitaGenie from "./VitaGenie";
import AuthenticationForm from "./AuthenticationForm";

// poore app me automatically apply ho jayega (CSS variables ke through).
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

// Converts camelCase keys ("btnHover") to CSS variable names ("--btn-hover")
// so we can inject the whole theme as inline CSS variables on the root element.
export function getCSSVariables(colors = COLORSVG) {
  const vars = {};
  Object.entries(colors).forEach(([key, value]) => {
    const kebabKey = key.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
    vars[`--${kebabKey}`] = value;
  });
  return vars;
}

// Authentication.jsx
// authTheme.js
// VitaGenie Auth page — saare colors yahan constants ke roop mein.
// Kahin bhi hex/rgba hardcode nahi karna, isi file se import karke use karo.

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