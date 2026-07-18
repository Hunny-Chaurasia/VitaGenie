// theme.js
// Yahan pe saare colors ek hi jagah define hain.
// Agar kabhi color scheme change karni ho, to bas yahi file edit karo —
// poore app me automatically apply ho jayega (CSS variables ke through).

export const COLORS = {
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
export function getCSSVariables(colors = COLORS) {
  const vars = {};
  Object.entries(colors).forEach(([key, value]) => {
    const kebabKey = key.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
    vars[`--${kebabKey}`] = value;
  });
  return vars;
}
