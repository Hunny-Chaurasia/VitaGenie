let userPoints = 342;
let userStreak = 7;

function showScreen(screenId) {
  // Hide all screens
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active-nav');
  });

  // Show selected screen
  document.getElementById(screenId).classList.add('active-nav');

  // Update navigation
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active-nav');
  });
  event.target.closest('.nav-item').classList.add('active-nav');
}

function showScreen() {
  showScreen('lesson');
  // Update nav to show we're in lesson mode
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active-nav');
  });
}

function playVideo() {
  const player = document.querySelector('.video-player');
  player.innerHTML = '⏸️';
  player.style.background = 'linear-gradient(135deg, #27ae60, #00cec9)';

  // Simulate video progress
  setTimeout(() => {
    player.innerHTML = '✅ Video Complete!';
    player.style.background = 'linear-gradient(135deg, #27ae60, #00b894)';
  }, 2000);
}

function selectAnswer(button, isCorrect) {
  // Disable all buttons
  document.querySelectorAll('.answer-btn').forEach(btn => {
    btn.style.pointerEvents = 'none';
  });

  if (isCorrect) {
    button.classList.add('correct');
    userPoints += 10;

    // Show points earned
    const pointsDiv = document.createElement('div');
    pointsDiv.className = 'points-earned bounce';
    pointsDiv.innerHTML = '🎉 Correct! +10 Points';
    button.parentNode.appendChild(pointsDiv);

    // Confetti effect
    setTimeout(() => {
      pointsDiv.innerHTML = '🎊 Well done! Moving to next lesson...';
    }, 1000);

  } else {
    button.style.background = '#f8d7da';
    button.style.borderColor = '#e74c3c';

    // Show correct answer
    document.querySelectorAll('.answer-btn')[2].classList.add('correct');

    const encouragement = document.createElement('div');
    encouragement.style.background = '#fff3cd';
    encouragement.style.padding = '10px';
    encouragement.style.borderRadius = '8px';
    encouragement.style.marginTop = '10px';
    encouragement.innerHTML = '💪 Keep trying! The correct answer is highlighted.';
    button.parentNode.appendChild(encouragement);
  }
}

// Simulate offline capability

// Add smooth transitions
document.addEventListener('click', (e) => {
  if (e.target.closest('.subject-card') || e.target.closest('.start-learning-btn')) {
    e.target.closest('div, button').style.transform = 'scale(0.95)';
    setTimeout(() => {
      if (e.target.closest('div, button')) {
        e.target.closest('div, button').style.transform = 'scale(1)';
      }
    }, 150);
  }
});

function toggleSwitch(element) {
  element.classList.toggle('active');
}


//workout acc age
// document.addEventListener("DOMContentLoaded", function () {
// Hide all workout sections initially
// const sections = [
//   "kids_5-12_section",
//   "kids_13-16_section",
//   "age_17-21_section",
//   "age_22-45_section",
//   "age_46-75_section",
// ];
// sections.forEach((id) => {
//   const el = document.getElementById(id);
//   if (el) el.style.display = "none";
// });
// Prompt user for age
// let age = prompt("Please enter your age:");
// Validate input
// age = parseInt(age);
// if (isNaN(age) || age <= 0) {
// alert("Invalid age entered. Showing all workouts.");
// Show all sections if invalid age
//   sections.forEach((id) => {
//     const el = document.getElementById(id);
//     if (el) el.style.display = "grid";
//   });
//   return;
// }
// Show only the section corresponding to the age
//   if (age >= 5 && age <= 12) {
//     document.getElementById("kids_5-12_section").style.display = "grid";
//   } else if (age >= 13 && age <= 16) {
//     document.getElementById("kids_13-16_section").style.display = "grid";
//   } else if (age >= 17 && age <= 21) {
//     document.getElementById("age_17-21_section").style.display = "grid";
//   } else if (age >= 22 && age <= 45) {
//     document.getElementById("age_22-45_section").style.display = "grid";
//   } else if (age >= 46 && age <= 75) {
//     document.getElementById("age_46-75_section").style.display = "grid";
//   } else {
//     alert("No workouts available for your age group. Showing all workouts.");
//     sections.forEach((id) => {
//       const el = document.getElementById(id);
//       if (el) el.style.display = "grid";
//     });
//   }
// });

const menu = document.getElementById("Menu");
const navigationshow = document.getElementById("bottom-nav");
let show = false;

menu.addEventListener("click", () => {
  if (show === false) {
    show = true;
    navigationshow.style.display = "block";
  } else {
    show = false;
    navigationshow.style.display = "none";
  }
});
// Animate counters on page load
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);

  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start);
    }
  }, 16);
}

// Add hover effects and interactions
document.addEventListener('DOMContentLoaded', function () {
  // Animate stats on load
  setTimeout(() => {
    animateCounter(document.getElementById('articles-today'), 127);
    animateCounter(document.getElementById('topics'), 45);
  }, 500);

  // Add click handlers for article cards
  document.querySelectorAll('.article-card').forEach(card => {
    card.addEventListener('click', function () {
      this.style.transform = 'scale(0.98)';
      setTimeout(() => {
        this.style.transform = 'translateY(-5px)';
      }, 100);
    });
  });

  // Live update simulation
  setInterval(() => {
    const readersElement = document.getElementById('readers');
    let currentReaders = parseFloat(readersElement.textContent);
    currentReaders += Math.random() * 0.001;
    readersElement.textContent = currentReaders.toFixed(1) + 'M';
  }, 5000);

  // Add smooth scrolling for better UX
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
// Nutrition tracking functionality
'use strict';

/* ══════════════════════════════════════════════
   NUTRITION TRACKER — nutrition.js
   Drop-in safe: all globals namespaced to nutrition*
   No body/window assumptions.
══════════════════════════════════════════════ */

/* ── Gemini Config ── */
const NUTRITION_GEMINI_KEY = 'AIzaSyDT80dAyuhtxEAEFI2R4JLmWawX14aNJ-c';
const NUTRITION_GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${NUTRITION_GEMINI_KEY}`;

/* ── App State ── */
const nutritionState = {
  cal:     { cur: 1245, max: 2200 },
  water:   { cur: 2.1,  max: 3.5  },
  protein: { cur: 89,   max: 120  },
  fruits:  { cur: 5,    max: 8    },
  loggedMeals: 3,
};

/* ══════════════════════════════════════════════
   TOAST
══════════════════════════════════════════════ */
let _naiToast = null;
function naiToast(msg, icon = '✅') {
  if (!_naiToast) {
    _naiToast = document.createElement('div');
    _naiToast.className = 'nai-toast';
    document.body.appendChild(_naiToast);
  }
  _naiToast.innerHTML = `${icon} ${msg}`;
  _naiToast.classList.add('show');
  clearTimeout(_naiToast._t);
  _naiToast._t = setTimeout(() => _naiToast.classList.remove('show'), 2800);
}

/* ══════════════════════════════════════════════
   MODAL ENGINE
══════════════════════════════════════════════ */
let _naiOverlay = null;
function naiOpenModal(title, icon, buildFn) {
  naiCloseModal();
  const ov = document.createElement('div');
  ov.className = 'nai-overlay';
  ov.addEventListener('click', e => { if (e.target === ov) naiCloseModal(); });

  ov.innerHTML = `
    <div class="nai-modal">
      <div class="nai-modal-header">
        <div class="nai-modal-title">${icon} ${title}</div>
        <button class="nai-close" onclick="naiCloseModal()">✕</button>
      </div>
      <div class="nai-modal-body" id="_nai_mb"></div>
    </div>`;

  document.body.appendChild(ov);
  _naiOverlay = ov;
  buildFn(ov.querySelector('#_nai_mb'));
}
function naiCloseModal() {
  if (_naiOverlay) { _naiOverlay.remove(); _naiOverlay = null; }
}
// Expose for inline onclick in dynamically built HTML
window.naiCloseModal = naiCloseModal;

/* ══════════════════════════════════════════════
   STATS UPDATER
══════════════════════════════════════════════ */
function nutritionUpdateStats() {
  const S = nutritionState;

  const q = id => document.getElementById(id);

  q('stat-cal').innerHTML =
    `${Math.round(S.cal.cur)}<span style="color:#6b7280;font-size:15px;">/${S.cal.max}</span>`;
  q('prog-cal').style.width =
    Math.min(100, (S.cal.cur / S.cal.max) * 100).toFixed(1) + '%';

  q('stat-water').innerHTML =
    `${S.water.cur.toFixed(1)}<span style="color:#6b7280;font-size:15px;">/${S.water.max}</span>`;
  q('prog-water').style.width =
    Math.min(100, (S.water.cur / S.water.max) * 100).toFixed(1) + '%';

  q('stat-protein').innerHTML =
    `${Math.round(S.protein.cur)}<span style="color:#6b7280;font-size:15px;">/${S.protein.max}</span>`;
  q('prog-protein').style.width =
    Math.min(100, (S.protein.cur / S.protein.max) * 100).toFixed(1) + '%';

  q('sum-cal').textContent     = Math.round(S.cal.cur).toLocaleString() + ' kcal';
  q('sum-protein').textContent = Math.round(S.protein.cur) + 'g';
  q('sum-meals').textContent   = S.loggedMeals + '/4';
  q('sum-water').textContent   = Math.round((S.water.cur / S.water.max) * 100) + '%';
}

/* ══════════════════════════════════════════════
   ADD LOGGED MEAL TO DOM
══════════════════════════════════════════════ */
function naiAppendMealRow(icon, name, desc, time, cal, p, c, f, logged = true) {
  const list = document.getElementById('meals-list');
  const div = document.createElement('div');
  div.className = 'meal-item-nutrition';
  div.innerHTML = `
    <div class="meal-icon-nutrition" style="background:#22c55e15;font-size:18px;">${icon}</div>
    <div class="meal-details-nutrition">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:2px;">
        <div class="meal-name-nutrition">${naiEsc(name)}</div>
        ${logged ? '<div class="meal-status-nutrition">Logged</div>' : ''}
      </div>
      <div class="meal-description-nutrition">${naiEsc(desc)}</div>
      <div class="meal-time-nutrition">${naiEsc(time)}</div>
      <div class="meal-macros-nutrition">
        <span class="macro-nutrition protein-macro-nutrition">${p}g Protein</span>
        <span class="macro-nutrition carbs-macro-nutrition">${c}g Carbs</span>
        <span class="macro-nutrition fat-macro-nutrition">${f}g Fat</span>
      </div>
    </div>
    <div class="meal-calories-nutrition">
      <div class="calories-number-nutrition">${cal}</div>
      <div class="calories-label-nutrition">kcal</div>
    </div>`;
  list.appendChild(div);
}

/* ══════════════════════════════════════════════
   SCAN FOOD — Gemini Vision
══════════════════════════════════════════════ */
function nutritionScanFood() {
  naiOpenModal('Scan Food', '📸', naiRenderUpload);
}
window.nutritionScanFood = nutritionScanFood;

function naiRenderUpload(body) {
  body.innerHTML = `
    <div class="nai-upload-zone" id="_nai_uz">
      <input type="file" id="_nai_fi" accept="image/*"/>
      <span class="nai-upload-icon">🍽️</span>
      <div class="nai-upload-text">Drop a food photo or tap to browse</div>
      <div class="nai-upload-sub">JPG · PNG · WEBP — analyzed by Gemini AI Vision</div>
    </div>
    <button class="nai-btn nai-btn-green nai-btn-full" id="_nai_ab" style="display:none;">
      🔍 Analyze This Food
    </button>`;

  let file = null;
  const zone = body.querySelector('#_nai_uz');
  const inp  = body.querySelector('#_nai_fi');
  const btn  = body.querySelector('#_nai_ab');

  zone.addEventListener('dragover',  e => { e.preventDefault(); zone.classList.add('drag-over'); });
  zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
  zone.addEventListener('drop', e => {
    e.preventDefault(); zone.classList.remove('drag-over');
    const f = e.dataTransfer.files[0];
    if (f && f.type.startsWith('image/')) pick(f);
  });
  inp.addEventListener('change', () => inp.files[0] && pick(inp.files[0]));

  function pick(f) {
    file = f;
    const url = URL.createObjectURL(f);
    zone.innerHTML = `
      <div class="nai-preview-wrap">
        <img src="${url}" class="nai-preview-img" alt="preview"/>
        <button class="nai-preview-change" id="_nai_chg">↺ Change</button>
        <input type="file" id="_nai_fi2" accept="image/*" style="display:none"/>
      </div>`;
    body.querySelector('#_nai_chg').addEventListener('click', e => {
      e.stopPropagation(); body.querySelector('#_nai_fi2').click();
    });
    body.querySelector('#_nai_fi2').addEventListener('change', function () {
      if (this.files[0]) pick(this.files[0]);
    });
    btn.style.display = 'flex';
  }
  btn.addEventListener('click', () => file && naiDoAnalyze(body, file));
}

/* ─── Step 1: Analyze image ─── */
async function naiDoAnalyze(body, file) {
  naiShowSpinner(body, 'Gemini is analyzing your food...', 'Identifying ingredients & nutrition data');
  try {
    const b64  = await naiToB64(file);
    const mime = file.type || 'image/jpeg';

    const prompt = `You are an expert nutritionist and food-recognition AI.

Analyze the food image carefully. Respond ONLY with a single valid JSON object — no markdown, no explanation, no extra text. Use this exact structure:

{
  "identified": true,
  "confidence": "high",
  "food_name": "Name of dish",
  "description": "Short description",
  "needs_clarification": false,
  "clarification_question": "",
  "ingredients": ["item1", "item2"],
  "serving_size": "e.g. 1 plate ~300g",
  "nutrition": {
    "calories": 400,
    "protein_g": 25,
    "carbs_g": 35,
    "fat_g": 12,
    "fiber_g": 5,
    "sugar_g": 8,
    "sodium_mg": 480,
    "cholesterol_mg": 60,
    "vitamin_c_mg": 15,
    "calcium_mg": 80,
    "iron_mg": 2,
    "potassium_mg": 420
  }
}

Rules:
- If food is unclear, set needs_clarification: true and write a helpful clarification_question.
- If completely unidentifiable, set identified: false, needs_clarification: true.
- confidence: "high" | "medium" | "low"
- Base all nutrition on the visible serving size.
- All nutrition fields must be numbers (use 0 if unknown).`;

    const raw  = await naiCallGemini(b64, mime, prompt);
    const data = naiParseJSON(raw);

    if (!data) { naiShowErr(body, 'Could not parse the AI response. Please try again.'); return; }

    if (!data.identified || data.needs_clarification) {
      naiShowClarify(body, file, data);
    } else {
      naiShowResults(body, data);
    }
  } catch (e) {
    naiShowErr(body, e.message || 'Network error. Check your connection.');
  }
}

/* ─── Step 2: Clarification ─── */
function naiShowClarify(body, file, data) {
  const url = URL.createObjectURL(file);
  body.innerHTML = `
    <div class="nai-preview-wrap" style="margin-bottom:14px;">
      <img src="${url}" class="nai-preview-img" alt="preview"/>
    </div>
    <div class="nai-clarify-box">
      <div class="nai-clarify-title">🤔 Need a bit more info</div>
      <div class="nai-clarify-text">${naiEsc(data.clarification_question || 'Please describe the food — ingredients, portion size, and how it was prepared.')}</div>
      <textarea class="nai-clarify-input" id="_nai_ctxt"
        placeholder="e.g. Grilled chicken breast with white rice and steamed broccoli, about 400g total..."></textarea>
    </div>
    <div class="nai-btn-row">
      <button class="nai-btn nai-btn-secondary" onclick="naiCloseModal()">Cancel</button>
      <button class="nai-btn nai-btn-primary" id="_nai_csub">🔍 Calculate Nutrition</button>
    </div>`;

  body.querySelector('#_nai_csub').addEventListener('click', async () => {
    const desc = body.querySelector('#_nai_ctxt').value.trim();
    if (!desc) { naiToast('Please describe the food first', '⚠️'); return; }
    naiShowSpinner(body, 'Calculating from your description...', 'Combining image + text analysis');
    try {
      const b64  = await naiToB64(file);
      const mime = file.type || 'image/jpeg';
      const prompt = `You are an expert nutritionist.

The user describes this food as: "${desc}"

Also use the attached food image for additional context.

Respond ONLY with valid JSON (no markdown, no extra text):

{
  "identified": true,
  "confidence": "high",
  "food_name": "Name from description",
  "description": "Brief description",
  "needs_clarification": false,
  "clarification_question": "",
  "ingredients": ["item1", "item2"],
  "serving_size": "as described",
  "nutrition": {
    "calories": 0, "protein_g": 0, "carbs_g": 0, "fat_g": 0,
    "fiber_g": 0, "sugar_g": 0, "sodium_mg": 0, "cholesterol_mg": 0,
    "vitamin_c_mg": 0, "calcium_mg": 0, "iron_mg": 0, "potassium_mg": 0
  }
}

Replace all 0s with real values from standard food composition databases.`;

      const raw = await naiCallGemini(b64, mime, prompt);
      const d2  = naiParseJSON(raw);
      if (!d2) { naiShowErr(body, 'Parse failed. Please try again.'); return; }
      naiShowResults(body, d2);
    } catch (e) { naiShowErr(body, e.message); }
  });
}

/* ─── Step 3: Show results ─── */
function naiShowResults(body, d) {
  const n = d.nutrition;
  const pKcal = (n.protein_g || 0) * 4;
  const cKcal = (n.carbs_g   || 0) * 4;
  const fKcal = (n.fat_g     || 0) * 9;
  const tot   = pKcal + cKcal + fKcal || 1;
  const pPct  = Math.round(pKcal / tot * 100);
  const cPct  = Math.round(cKcal / tot * 100);
  const fPct  = 100 - pPct - cPct;

  const confCfg = {
    high:   { color: '#22c55e', bg: '#22c55e18', border: '#22c55e40' },
    medium: { color: '#f59e0b', bg: '#f59e0b10', border: '#f59e0b35' },
    low:    { color: '#ef4444', bg: '#ef444415', border: '#ef444440' },
  }[d.confidence] || { color: '#9ca3af', bg: '#ffffff0a', border: '#ffffff18' };

  body.innerHTML = `
    <div class="nai-result-header">
      <div class="nai-food-badge">✅ ${naiEsc(d.food_name)}</div>
      <span class="nai-confidence-badge"
        style="color:${confCfg.color};background:${confCfg.bg};border:1px solid ${confCfg.border};">
        ${(d.confidence || '').toUpperCase()}
      </span>
    </div>

    <div class="nai-serving">📐 ${naiEsc(d.serving_size || '1 serving')}${d.description ? ' · ' + naiEsc(d.description) : ''}</div>

    <div class="nai-nutrition-grid">
      <div class="nai-nut-card highlight">
        <div class="nai-nut-label">Calories</div>
        <div class="nai-nut-value">${n.calories}</div>
        <div class="nai-nut-unit">kcal per serving</div>
      </div>
      <div class="nai-nut-card">
        <div class="nai-nut-label">Protein</div>
        <div class="nai-nut-value">${n.protein_g}<small style="font-size:13px;font-weight:400">g</small></div>
        <div class="nai-nut-unit">muscle building</div>
      </div>
      <div class="nai-nut-card">
        <div class="nai-nut-label">Carbohydrates</div>
        <div class="nai-nut-value">${n.carbs_g}<small style="font-size:13px;font-weight:400">g</small></div>
        <div class="nai-nut-unit">energy source</div>
      </div>
      <div class="nai-nut-card">
        <div class="nai-nut-label">Total Fat</div>
        <div class="nai-nut-value">${n.fat_g}<small style="font-size:13px;font-weight:400">g</small></div>
        <div class="nai-nut-unit">per serving</div>
      </div>
      <div class="nai-nut-card">
        <div class="nai-nut-label">Dietary Fiber</div>
        <div class="nai-nut-value">${n.fiber_g}<small style="font-size:13px;font-weight:400">g</small></div>
        <div class="nai-nut-unit">digestive health</div>
      </div>
      <div class="nai-nut-card">
        <div class="nai-nut-label">Sugar</div>
        <div class="nai-nut-value">${n.sugar_g}<small style="font-size:13px;font-weight:400">g</small></div>
        <div class="nai-nut-unit">natural + added</div>
      </div>
    </div>

    <div class="nai-macro-bar-wrap">
      <div class="nai-macro-lbl">Macro Calorie Ratio</div>
      <div class="nai-macro-bar">
        <div class="nai-macro-seg p" style="width:${pPct}%"></div>
        <div class="nai-macro-seg c" style="width:${cPct}%"></div>
        <div class="nai-macro-seg f" style="width:${fPct}%"></div>
      </div>
      <div class="nai-macro-legend">
        <div class="nai-leg-item"><div class="nai-leg-dot" style="background:#a855f7"></div>Protein ${pPct}%</div>
        <div class="nai-leg-item"><div class="nai-leg-dot" style="background:#3b82f6"></div>Carbs ${cPct}%</div>
        <div class="nai-leg-item"><div class="nai-leg-dot" style="background:#f59e0b"></div>Fat ${fPct}%</div>
      </div>
    </div>

    <div class="nai-micros">
      <div class="nai-micros-title">🧪 Micronutrients</div>
      <div class="nai-micro-grid">
        <div class="nai-micro-row"><span class="nai-micro-name">Sodium</span><span class="nai-micro-val">${n.sodium_mg} mg</span></div>
        <div class="nai-micro-row"><span class="nai-micro-name">Cholesterol</span><span class="nai-micro-val">${n.cholesterol_mg} mg</span></div>
        <div class="nai-micro-row"><span class="nai-micro-name">Vitamin C</span><span class="nai-micro-val">${n.vitamin_c_mg} mg</span></div>
        <div class="nai-micro-row"><span class="nai-micro-name">Calcium</span><span class="nai-micro-val">${n.calcium_mg} mg</span></div>
        <div class="nai-micro-row"><span class="nai-micro-name">Iron</span><span class="nai-micro-val">${n.iron_mg} mg</span></div>
        <div class="nai-micro-row"><span class="nai-micro-name">Potassium</span><span class="nai-micro-val">${n.potassium_mg} mg</span></div>
      </div>
    </div>

    ${d.ingredients && d.ingredients.length ? `
    <div class="nai-ingredients">
      <div class="nai-ing-title">🥦 Detected Ingredients</div>
      <div class="nai-ing-list">
        ${d.ingredients.map(i => `<span class="nai-ing-tag">${naiEsc(i)}</span>`).join('')}
      </div>
    </div>` : ''}

    <div class="nai-btn-row">
      <button class="nai-btn nai-btn-secondary" onclick="nutritionScanFood()">📸 Scan Another</button>
      <button class="nai-btn nai-btn-green" id="_nai_add">+ Add to Log</button>
    </div>`;

  body.querySelector('#_nai_add').addEventListener('click', () => {
    nutritionState.cal.cur     += n.calories  || 0;
    nutritionState.protein.cur += n.protein_g || 0;
    nutritionState.loggedMeals  = Math.min(4, nutritionState.loggedMeals + 1);

    const now  = new Date();
    const time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    naiAppendMealRow('🍽️', d.food_name, d.description || d.food_name, time,
      n.calories, n.protein_g, n.carbs_g, n.fat_g, true);

    nutritionUpdateStats();
    naiCloseModal();
    naiToast(`${d.food_name} added — ${n.calories} kcal`, '🍽️');
  });
}

/* ─── Error ─── */
function naiShowErr(body, msg) {
  body.innerHTML = `
    <div style="text-align:center;padding:28px 0;">
      <div style="font-size:2.5rem;margin-bottom:12px;">⚠️</div>
      <div style="font-size:14px;font-weight:600;color:#e8eaf0;margin-bottom:6px;">Analysis Failed</div>
      <div style="font-size:12px;color:#6b7280;margin-bottom:20px;">${naiEsc(msg)}</div>
      <div class="nai-btn-row">
        <button class="nai-btn nai-btn-secondary" onclick="naiCloseModal()">Cancel</button>
        <button class="nai-btn nai-btn-primary" onclick="nutritionScanFood()">Try Again</button>
      </div>
    </div>`;
}

/* ─── Spinner ─── */
function naiShowSpinner(body, txt, sub) {
  body.innerHTML = `
    <div class="nai-analyzing">
      <div class="nai-spinner"></div>
      <div class="nai-analyzing-text">${naiEsc(txt)}</div>
      <div class="nai-analyzing-sub">${naiEsc(sub)}</div>
    </div>`;
}

/* ══════════════════════════════════════════════
   LOG MEAL MODAL
══════════════════════════════════════════════ */
function nutritionLogMeal() {
  const icons = { Breakfast: '🌅', Lunch: '☀️', Snack: '🍎', Dinner: '🌇', Other: '🥘' };
  naiOpenModal('Log a Meal', '🍽️', body => {
    body.innerHTML = `
      <div class="nai-form-group">
        <label class="nai-label">Meal Type</label>
        <select class="nai-select" id="_nai_mtype">
          ${Object.keys(icons).map(k => `<option value="${k}">${icons[k]} ${k}</option>`).join('')}
        </select>
      </div>
      <div class="nai-form-group">
        <label class="nai-label">Food Description</label>
        <input class="nai-input" id="_nai_mdesc" placeholder="e.g. Grilled salmon with quinoa and spinach"/>
      </div>
      <div class="nai-input-row">
        <div class="nai-form-group">
          <label class="nai-label">Calories (kcal)</label>
          <input class="nai-input" id="_nai_mcal" type="number" placeholder="400" min="0"/>
        </div>
        <div class="nai-form-group">
          <label class="nai-label">Protein (g)</label>
          <input class="nai-input" id="_nai_mpro" type="number" placeholder="30" min="0"/>
        </div>
      </div>
      <div class="nai-input-row">
        <div class="nai-form-group">
          <label class="nai-label">Carbs (g)</label>
          <input class="nai-input" id="_nai_mcar" type="number" placeholder="45" min="0"/>
        </div>
        <div class="nai-form-group">
          <label class="nai-label">Fat (g)</label>
          <input class="nai-input" id="_nai_mfat" type="number" placeholder="14" min="0"/>
        </div>
      </div>
      <div class="nai-form-group">
        <label class="nai-label">Time</label>
        <input class="nai-input" id="_nai_mtime" type="time" value="${naiNowTime()}"/>
      </div>
      <div class="nai-btn-row">
        <button class="nai-btn nai-btn-secondary" onclick="naiCloseModal()">Cancel</button>
        <button class="nai-btn nai-btn-green" id="_nai_msub">✅ Log Meal</button>
      </div>`;

    body.querySelector('#_nai_msub').addEventListener('click', () => {
      const desc = body.querySelector('#_nai_mdesc').value.trim();
      const cal  = parseInt(body.querySelector('#_nai_mcal').value)  || 0;
      const pro  = parseInt(body.querySelector('#_nai_mpro').value)  || 0;
      const car  = parseInt(body.querySelector('#_nai_mcar').value)  || 0;
      const fat  = parseInt(body.querySelector('#_nai_mfat').value)  || 0;
      const type = body.querySelector('#_nai_mtype').value;
      const time = naiFmtTime(body.querySelector('#_nai_mtime').value);
      if (!desc) { naiToast('Please enter a food description', '⚠️'); return; }

      nutritionState.cal.cur     += cal;
      nutritionState.protein.cur += pro;
      nutritionState.loggedMeals  = Math.min(4, nutritionState.loggedMeals + 1);
      naiAppendMealRow(icons[type] || '🥘', type, desc, time, cal, pro, car, fat, true);
      nutritionUpdateStats();
      naiCloseModal();
      naiToast(`${type} logged — ${cal} kcal`, '✅');
    });
  });
}
window.nutritionLogMeal = nutritionLogMeal;

/* ══════════════════════════════════════════════
   ADD WATER MODAL
══════════════════════════════════════════════ */
function nutritionAddWater() {
  const opts = [
    { emoji: '🥛', label: 'Small Cup', ml: 200  },
    { emoji: '🥤', label: 'Glass',     ml: 250  },
    { emoji: '🍶', label: 'Bottle',    ml: 500  },
    { emoji: '💧', label: 'Large',     ml: 750  },
    { emoji: '🫗', label: '1 Liter',   ml: 1000 },
    { emoji: '✏️', label: 'Custom',    ml: null },
  ];
  let selMl = 250;

  naiOpenModal('Add Water', '💧', body => {
    body.innerHTML = `
      <div style="font-size:13px;color:#9ca3af;margin-bottom:14px;">
        Current: <strong style="color:#3b82f6;">${nutritionState.water.cur.toFixed(1)}L</strong> / ${nutritionState.water.max}L goal
      </div>
      <div class="nai-water-grid">
        ${opts.map((o, i) => `
          <button class="nai-water-opt ${o.ml === 250 ? 'sel' : ''}" data-i="${i}" data-ml="${o.ml || ''}">
            <span class="nai-water-emoji">${o.emoji}</span>
            <span class="nai-water-lbl">${o.label}</span>
            ${o.ml ? `<span class="nai-water-ml">${o.ml}ml</span>` : '<span class="nai-water-ml">enter ml</span>'}
          </button>`).join('')}
      </div>
      <div id="_nai_custom" style="display:none;margin-bottom:14px;">
        <input class="nai-input" id="_nai_cml" type="number" placeholder="Enter amount in ml..." min="50" max="2000"/>
      </div>
      <div class="nai-btn-row">
        <button class="nai-btn nai-btn-secondary" onclick="naiCloseModal()">Cancel</button>
        <button class="nai-btn nai-btn-primary" id="_nai_wsub">💧 Add Water</button>
      </div>`;

    body.querySelectorAll('.nai-water-opt').forEach(btn => {
      btn.addEventListener('click', () => {
        body.querySelectorAll('.nai-water-opt').forEach(b => b.classList.remove('sel'));
        btn.classList.add('sel');
        selMl = parseInt(btn.dataset.ml) || null;
        body.querySelector('#_nai_custom').style.display = selMl ? 'none' : 'block';
      });
    });

    body.querySelector('#_nai_wsub').addEventListener('click', () => {
      const ml = selMl || parseInt(body.querySelector('#_nai_cml')?.value);
      if (!ml || ml < 50) { naiToast('Please pick or enter a valid amount', '⚠️'); return; }
      const L = parseFloat((ml / 1000).toFixed(2));
      nutritionState.water.cur = parseFloat(
        Math.min(nutritionState.water.max, nutritionState.water.cur + L).toFixed(2)
      );
      nutritionUpdateStats();
      naiCloseModal();
      naiToast(`+${ml}ml water added`, '💧');
    });
  });
}
window.nutritionAddWater = nutritionAddWater;

/* ══════════════════════════════════════════════
   GEMINI API
══════════════════════════════════════════════ */
async function naiCallGemini(b64, mime, prompt) {
  const res = await fetch(NUTRITION_GEMINI_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{
        parts: [
          { inline_data: { mime_type: mime, data: b64 } },
          { text: prompt }
        ]
      }],
      generationConfig: { temperature: 0.15, maxOutputTokens: 1400 }
    })
  });
  if (!res.ok) {
    const e = await res.json().catch(() => ({}));
    throw new Error(e?.error?.message || `API error ${res.status}`);
  }
  const d = await res.json();
  return d?.candidates?.[0]?.content?.parts?.[0]?.text || '';
}

/* ══════════════════════════════════════════════
   UTILS
══════════════════════════════════════════════ */
function naiToB64(file) {
  return new Promise((res, rej) => {
    const r = new FileReader();
    r.onload  = () => res(r.result.split(',')[1]);
    r.onerror = rej;
    r.readAsDataURL(file);
  });
}
function naiParseJSON(txt) {
  try {
    return JSON.parse(txt.replace(/```json\s*/gi, '').replace(/```\s*/g, '').trim());
  } catch (_) {
    const m = txt.match(/\{[\s\S]*\}/);
    if (m) try { return JSON.parse(m[0]); } catch (_2) { /* fall through */ }
    return null;
  }
}
function naiEsc(s) {
  return String(s || '').replace(/[&<>"']/g, m => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]
  ));
}
function naiNowTime() { return new Date().toTimeString().slice(0, 5); }
function naiFmtTime(t) {
  if (!t) return new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  const [h, m] = t.split(':').map(Number);
  return `${h % 12 || 12}:${String(m).padStart(2, '0')} ${h < 12 ? 'AM' : 'PM'}`;
}
// Add hover effects for meal items
document.querySelectorAll('.meal-item-nutrition').forEach(item => {
  item.addEventListener('mouseenter', function () {
    this.style.background = 'rgba(255, 255, 255, 0.05)';
    this.style.borderRadius = '8px';
    this.style.padding = '15px';
    this.style.margin = '0 -15px';
    this.style.transition = 'all 0.3s ease';
  });

  item.addEventListener('mouseleave', function () {
    this.style.background = '';
    this.style.borderRadius = '';
    this.style.padding = '15px 0';
    this.style.margin = '';
  });
});

// Initialize progress bars
updateProgress();

// Add some dynamic updates
setInterval(() => {
  const insights = document.querySelector('.insight-text-nutrition');
  const time = new Date().getHours();

  if (time >= 17 && time < 20) {
    insights.textContent = "It's dinner time! Don't forget to log your evening meal.";
  } else if (time >= 20) {
    insights.textContent = "Great job today! Review your nutrition goals for tomorrow.";
  }
}, 60000); // Check every minute

// Comprehensive animation system for scroll events and screen changes
function initializeComprehensiveAnimations() {
  // Add CSS for all animation types
  const style = document.createElement('style');
  style.textContent = `
        .slide-up {
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.6s ease-out;
        }
        
        .slide-up.visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Animation for screen changes */
        .screen-transition {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.5s ease-in-out;
        }
        
        .screen-transition.active {
            opacity: 1;
            transform: translateY(0);
        }
    `;
  document.head.appendChild(style);

  // Function to animate elements when they come into view
  function animateElementsOnScroll() {
    const elements = document.querySelectorAll('.slide-up:not(.visible)');

    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if element is in viewport
      if (rect.top < windowHeight - 50 && rect.bottom > 0) {
        element.classList.add('visible');
      }
    });
  }

  // Function to prepare elements for animation
  function prepareElementsForAnimation() {
    const elementsToAnimate = document.querySelectorAll(`
            .welcome-section,
            .progress-card,
            .Challenge-card,
            .Quick-card,
            .Workouts-card,
            .article-card,
            .expert-card,
            .category-card,
            .stat-card,
            .settings-section,
            .breaking-news,
            .trending-topics,
            .newsletter,
            .News-header,
            #data > div,
            #Nut_data > div,
            .simple-card,
            .Achievers
        `);

    elementsToAnimate.forEach(element => {
      element.classList.add('slide-up');
    });
  }

  // Throttled scroll handler
  let scrollTicking = false;
  function handleScroll() {
    if (!scrollTicking) {
      requestAnimationFrame(() => {
        animateElementsOnScroll();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }

  // Handle wheel events (mouse scroll)
  function handleWheel(event) {
    handleScroll();
  }

  // Handle touch events (mobile scroll)
  function handleTouch(event) {
    handleScroll();
  }

  // Handle keyboard scroll events
  function handleKeyboard(event) {
    // Arrow keys, Page Up/Down, Space, Home, End
    if ([32, 33, 34, 35, 36, 37, 38, 39, 40].includes(event.keyCode)) {
      handleScroll();
    }
  }

  // Enhanced showScreen function with animations
  function enhanceScreenTransitions() {
    // Find existing showScreen function or create one
    window.originalShowScreen = window.showScreen || function (screenId) {
      // Default screen switching logic
      document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active-nav');
      });
      document.getElementById(screenId).classList.add('active');
    };

    // Override showScreen with animation
    window.showScreen = function (screenId) {
      // Hide all screens with fade out
      document.querySelectorAll('.screen.active').forEach(screen => {
        screen.style.opacity = '0';
        screen.style.transform = 'translateY(-20px)';

        setTimeout(() => {
          screen.classList.remove('active');
          screen.style.opacity = '';
          screen.style.transform = '';
        }, 250);
      });

      // Show new screen with fade in
      setTimeout(() => {
        const newScreen = document.getElementById(screenId);
        if (newScreen) {
          newScreen.classList.add('active');

          // Prepare elements in new screen for animation
          const elementsInScreen = newScreen.querySelectorAll(`
                        .welcome-section,
                        .progress-card,
                        .Challenge-card,
                        .Quick-card,
                        .Workouts-card,
                        .article-card,
                        .expert-card,
                        .category-card,
                        .stat-card,
                        .settings-section,
                        .breaking-news,
                        .trending-topics,
                        .newsletter,
                        .News-header,
                        #data > div,
                        #Nut_data > div
                        .feature-card-chatbot
                        .chat-container-chatbot
                    `);

          // Reset animations for elements in new screen
          elementsInScreen.forEach(element => {
            element.classList.remove('visible');
            element.classList.add('slide-up');
          });

          // Trigger animations after screen transition
          setTimeout(() => {
            animateElementsOnScroll();
          }, 100);

          // Animate screen entrance
          newScreen.style.opacity = '0';
          newScreen.style.transform = 'translateY(20px)';

          setTimeout(() => {
            newScreen.style.transition = 'all 0.5s ease-out';
            newScreen.style.opacity = '1';
            newScreen.style.transform = 'translateY(0)';

            setTimeout(() => {
              newScreen.style.transition = '';
            }, 500);
          }, 50);
        }
      }, 250);
    };
  }

  // Initialize all event listeners
  function initializeEventListeners() {
    // Scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Wheel event (mouse scroll)
    window.addEventListener('wheel', handleWheel, { passive: true });

    // Touch events for mobile scrolling
    window.addEventListener('touchstart', handleTouch, { passive: true });
    window.addEventListener('touchmove', handleTouch, { passive: true });

    // Keyboard navigation
    window.addEventListener('keydown', handleKeyboard);

    // Resize event to recalculate positions
    window.addEventListener('resize', () => {
      setTimeout(handleScroll, 100);
    });
  }

  // Initialize everything
  function initialize() {
    prepareElementsForAnimation();
    enhanceScreenTransitions();
    initializeEventListeners();

    // Initial check for visible elements
    setTimeout(() => {
      animateElementsOnScroll();
    }, 100);

    console.log('Comprehensive scroll animations initialized');
  }

  // Run initialization
  initialize();
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializeComprehensiveAnimations);

// Fallback initialization
window.addEventListener('load', function () {
  if (!document.querySelector('.slide-up')) {
    initializeComprehensiveAnimations();
  }
});

// Re-initialize animations when navigating back/forward
window.addEventListener('popstate', function () {
  setTimeout(() => {
    initializeComprehensiveAnimations();
  }, 100);
});



//Progress
document.addEventListener('DOMContentLoaded', () => {
  // Sample data to populate the dashboard
  const workoutData = [
    { date: '3/18/2024', type: 'Strength', duration: '45min', calories: 320, intensity: 'High' },
    { date: '3/17/2024', type: 'Cardio', duration: '30min', calories: 380, intensity: 'Medium' },
    { date: '3/16/2024', type: 'Yoga', duration: '60min', calories: 180, intensity: 'Low' },
    { date: '3/15/2024', type: 'Rest Day', duration: 'Missed', calories: '', intensity: 'Missed' },
    { date: '3/14/2024', type: 'HIIT', duration: '25min', calories: 350, intensity: 'High' },
    { date: '3/13/2024', type: 'Strength', duration: '50min', calories: 380, intensity: 'High' },
    { date: '3/12/2024', type: 'Cardio', duration: '35min', calories: 290, intensity: 'Medium' }
  ];

  // Selectors
  const navButtons = document.querySelectorAll('.nav-button-progress');
  const viewSections = document.querySelectorAll('.view-section-progress');
  const dailySessionList = document.getElementById('daily-sessions-list-progress');

  // Function to populate daily sessions
  const populateDailySessions = () => {
    dailySessionList.innerHTML = '';
    workoutData.forEach(session => {
      const sessionItem = document.createElement('div');
      sessionItem.classList.add('session-item-progress');

      // Set different icons for different workout types
      let icon = '';
      let iconColor = '';
      switch (session.type) {
        case 'Strength':
          icon = '💪';
          iconColor = 'var(--accent-purple-progress)';
          break;
        case 'Cardio':
          icon = '❤️';
          iconColor = 'var(--accent-red-progress)';
          break;
        case 'Yoga':
          icon = '🧘';
          iconColor = 'var(--accent-green-progress)';
          break;
        case 'HIIT':
          icon = '⚡';
          iconColor = 'var(--accent-blue-progress)';
          break;
        case 'Rest Day':
          icon = '';
          iconColor = '#791919ff';
          break;
      }

      sessionItem.innerHTML = `
                <span class="session-icon-progress" style="color: ${iconColor};">${icon}</span>
                <div class="session-details-progress">
                    <p class="session-date-progress">${session.date}</p>
                    <p class="session-type-progress">${session.type}</p>
                </div>
                <div class="session-stats-progress">
                    <span class="duration-progress">${session.duration}</span>
                    <span class="calories-progress">${session.calories}</span>
                    <span class="intensity-progress ${session.intensity.toLowerCase()}">${session.intensity}</span>
                </div>
            `;
      dailySessionList.appendChild(sessionItem);
    });
  };

  // Function to handle navigation
  const switchView = (targetId) => {
    viewSections.forEach(section => {
      section.classList.remove('active');
    });
    navButtons.forEach(button => {
      button.classList.remove('active');
    });

    document.getElementById(targetId).classList.add('active');
    document.querySelector(`#${targetId.replace('-view', '-btn')}`).classList.add('active');
  };

  // Event listeners for navigation buttons
  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.id.replace('-btn', '-view');
      switchView(targetId);
    });
  });

  // Initialize the page with the daily view and populate data
  populateDailySessions();
  switchView('daily-view-progress');
});



// Add some interactive animations
document.addEventListener('DOMContentLoaded', function () {
  // Animate stats on load
  const statNumbers = document.querySelectorAll('.stat-number-community');
  statNumbers.forEach((stat, index) => {
    setTimeout(() => {
      stat.style.transform = 'scale(1.1)';
      setTimeout(() => {
        stat.style.transform = 'scale(1)';
      }, 200);
    }, index * 100);
  });

  // Add click animation to buttons
  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function () {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 150);
    });
  });

  // Add hover effects to leaderboard items
  document.querySelectorAll('.leaderboard-item-community').forEach(item => {
    item.addEventListener('mouseenter', function () {
      this.style.transform = 'translateX(5px)';
    });

    item.addEventListener('mouseleave', function () {
      this.style.transform = 'translateX(0)';
    });
  });
});

// Simulate real-time updates
setInterval(() => {
  const liveSessionsElement = document.querySelector('.live-sessions-community');
  const currentValue = parseInt(liveSessionsElement.textContent);
  const change = Math.random() > 0.5 ? 1 : -1;
  const newValue = Math.max(100, currentValue + change);
  liveSessionsElement.textContent = newValue;
}, 5000);

// Live-stream
// Navigation functionality
document.querySelectorAll('.nav-link-community').forEach(link => {
  link.addEventListener('click', function () {
    document.querySelectorAll('.nav-link-community').forEach(l => l.classList.remove('active-community'));
    this.classList.add('active-community');
  });
});

// Stream button functionality
document.querySelector('.stream-button-community').addEventListener('click', function () {
  this.style.background = 'linear-gradient(45deg, #ef4444, #dc2626)';
  this.innerHTML = '🔴 Going Live...';

  setTimeout(() => {
    this.style.background = 'linear-gradient(45deg, #8b5cf6, #a855f7)';
    this.innerHTML = '🎥 Start Stream';
  }, 3000);
});

// Reminder button functionality
document.querySelectorAll('.reminder-button-community').forEach(button => {
  button.addEventListener('click', function () {
    const originalText = this.innerHTML;
    this.innerHTML = '✅ Reminder Set';
    this.style.background = 'rgba(16, 185, 129, 0.2)';
    this.style.borderColor = 'rgba(16, 185, 129, 0.4)';

    setTimeout(() => {
      this.innerHTML = originalText;
      this.style.background = 'rgba(255, 255, 255, 0.1)';
      this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
    }, 2000);
  });
});

// Real-time viewer count updates (simulation)
function updateViewerCounts() {
  const viewerElements = document.querySelectorAll('.session-stats-community span:first-child');
  viewerElements.forEach(element => {
    if (element.textContent.includes('🔥')) {
      const currentCount = parseInt(element.textContent.replace('🔥 ', '').replace(',', ''));
      const change = Math.floor(Math.random() * 20) - 10;
      const newCount = Math.max(0, currentCount + change);
      element.textContent = `🔥 ${newCount.toLocaleString()}`;
    }
  });
}

// Update viewer counts every 5 seconds
setInterval(updateViewerCounts, 5000);

// Add hover effects to session cards
document.querySelectorAll('.session-card-community').forEach(card => {
  card.addEventListener('mouseenter', function () {
    this.style.borderLeftWidth = '5px';
  });

  card.addEventListener('mouseleave', function () {
    this.style.borderLeftWidth = '3px';
  });
});
// Achievements


// Join Challenge button functionality
document.querySelectorAll('.join-button-community').forEach(button => {
  button.addEventListener('click', function () {
    const originalText = this.innerHTML;
    const originalBg = this.style.background;

    this.innerHTML = '✅ Joined!';
    this.style.background = 'linear-gradient(45deg, #10b981, #059669)';
    this.style.transform = 'scale(0.95)';

    setTimeout(() => {
      this.innerHTML = '🔥 Challenge Active';
      this.style.background = 'linear-gradient(45deg, #8b5cf6, #a855f7)';
      this.style.transform = 'scale(1)';
    }, 1500);
  });
});

// Progress bar animation on load
function animateProgressBars() {
  const progressBars = document.querySelectorAll('.progress-fill-community');
  progressBars.forEach((bar, index) => {
    const width = bar.style.width;
    bar.style.width = '0%';
    setTimeout(() => {
      bar.style.width = width;
    }, index * 200);
  });
}

// Simulate real-time progress updates
function updateProgress() {
  const progressElements = [
    { selector: '.challenges-grid-community .challenge-card-community:nth-child(1) .progress-fill-community', current: 85 },
    { selector: '.challenges-grid-community .challenge-card-community:nth-child(2) .progress-fill-community', current: 78 },
    { selector: '.challenges-grid-community .challenge-card-community:nth-child(3) .progress-fill-community', current: 71 },
    { selector: '.challenges-grid-community .challenge-card-community:nth-child(4) .progress-fill-community', current: 68 }
  ];

  progressElements.forEach(element => {
    const progressBar = document.querySelector(element.selector);
    const randomIncrease = Math.random() * 0.1;
    const newProgress = Math.min(100, element.current + randomIncrease);

    if (progressBar) {
      progressBar.style.width = `${newProgress}%`;
    }
  });
}

// Hover effects for challenge cards
document.querySelectorAll('.challenge-card-community').forEach(card => {
  card.addEventListener('mouseenter', function () {
    this.style.borderColor = 'rgb(255 255 255 / 50%)';
    this.style.boxShadow = '0 20px 40px rgb(0 0 0 / 74%) 0px 20px 40px';
  });

  card.addEventListener('mouseleave', function () {
    this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    this.style.boxShadow = 'none';
  });
});

// Initialize animations
setTimeout(animateProgressBars, 500);

// Update progress every 10 seconds
setInterval(updateProgress, 10000);

// Trophy pulse effect
const trophy = document.querySelector('.trophy-pulse-community');
if (trophy) {
  trophy.addEventListener('click', function () {
    this.style.transform = 'scale(1.2) rotate(15deg)';
    setTimeout(() => {
      this.style.transform = 'scale(1) rotate(0deg)';
    }, 300);
  });
}

// Challenge completion celebration
function celebrateCompletion() {
  const champion = document.querySelector('.champion-stat-number-community');
  if (champion && champion.textContent === '1/3') {
    // Simulate challenge completion
    setTimeout(() => {
      champion.textContent = '2/3';
      champion.style.color = '#f59e0b';
      champion.style.fontWeight = 'bold';
    }, 5000);
  }
}

// Function to show the selected community content
function showCommunityContent(contentId) {
  // Hide all content sections
  const contents = document.querySelectorAll('.community-content');
  contents.forEach(content => {
    content.classList.remove('visible');
    content.classList.add('hidden');
  });

  // Show the selected content
  const selectedContent = document.getElementById(contentId);
  if (selectedContent) {
    selectedContent.classList.remove('hidden');
    selectedContent.classList.add('visible');
  }

  // Update active navigation item
  const navItems = document.querySelectorAll('.nav-item-community');
  navItems.forEach(item => {
    item.classList.remove('active-community');
  });

  // Find and activate the clicked nav item
  event.target.classList.add('active-community');
}

// Progresss acievements
document.addEventListener('DOMContentLoaded', function () {
  // Animate progress bars
  const progressBars = document.querySelectorAll('.progress-fill-PROGRESS-ACHIEVEMENTS');

  function animateProgressBars() {
    progressBars.forEach(bar => {
      const targetWidth = bar.style.width;
      bar.style.width = '0%';
      setTimeout(() => {
        bar.style.width = targetWidth;
      }, 500);
    });
  }

  // Trigger animation on page load
  setTimeout(animateProgressBars, 1000);

  // Share button functionality
  const shareBtn = document.querySelector('.share-btn-PROGRESS-ACHIEVEMENTS');
  shareBtn.addEventListener('click', function () {
    // Create a simple share effect
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.style.transform = 'translateY(-2px) scale(1.05)';
      setTimeout(() => {
        this.style.transform = 'translateY(-2px)';
      }, 200);
    }, 100);

    // Simulate share action
    alert('Achievement progress shared! 🎉');
  });

  // Achievement card hover effects
  const achievementCards = document.querySelectorAll('.achievement-card-PROGRESS-ACHIEVEMENTS');
  achievementCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
      this.style.background = 'rgba(30, 41, 59, 0.8)';
    });

    card.addEventListener('mouseleave', function () {
      this.style.background = 'rgba(30, 41, 59, 0.6)';
    });
  });

  // Counter animation for stats
  function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        element.textContent = target + (target === 67 ? '%' : '');
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(start) + (target === 67 ? '%' : '');
      }
    }, 16);
  }

  // Trigger counter animations
  setTimeout(() => {
    const statNumbers = document.querySelectorAll('.stat-number-PROGRESS-ACHIEVEMENTS');
    animateCounter(statNumbers[0], 3);
    animateCounter(statNumbers[1], 3);
    animateCounter(statNumbers[2], 67);
  }, 1500);
});

// MONTHLY
class MonthlyDashboard_PROGRESS_MONTHLY {
  constructor() {
    this.initializeProgress_PROGRESS_MONTHLY();
    this.setupInteractions_PROGRESS_MONTHLY();
    this.animateMetrics_PROGRESS_MONTHLY();
    this.setupRealtimeUpdates_PROGRESS_MONTHLY();
  }

  initializeProgress_PROGRESS_MONTHLY() {
    const progressBars_PROGRESS_MONTHLY = document.querySelectorAll('.progress-fill-PROGRESS-MONTHLY');

    progressBars_PROGRESS_MONTHLY.forEach((bar_PROGRESS_MONTHLY, index_PROGRESS_MONTHLY) => {
      const targetProgress_PROGRESS_MONTHLY = bar_PROGRESS_MONTHLY.getAttribute('data-progress') || 0;
      bar_PROGRESS_MONTHLY.style.width = '0%';

      setTimeout(() => {
        bar_PROGRESS_MONTHLY.style.width = `${targetProgress_PROGRESS_MONTHLY}%`;
      }, 1000 + (index_PROGRESS_MONTHLY * 200));
    });
  }

  animateMetrics_PROGRESS_MONTHLY() {
    const metricValues_PROGRESS_MONTHLY = [
      { element: document.querySelectorAll('.metric-value-PROGRESS-MONTHLY')[0], target: [24, 31], separator: '/' },
      { element: document.querySelectorAll('.metric-value-PROGRESS-MONTHLY')[1], target: 18, suffix: 'h' },
      { element: document.querySelectorAll('.metric-value-PROGRESS-MONTHLY')[2], target: 7200, format: 'comma' },
      { element: document.querySelectorAll('.metric-value-PROGRESS-MONTHLY')[3], target: 18 }
    ];

    metricValues_PROGRESS_MONTHLY.forEach((metric_PROGRESS_MONTHLY, index_PROGRESS_MONTHLY) => {
      setTimeout(() => {
        this.animateCounter_PROGRESS_MONTHLY(metric_PROGRESS_MONTHLY);
      }, 1500 + (index_PROGRESS_MONTHLY * 300));
    });
  }

  animateCounter_PROGRESS_MONTHLY(metric_PROGRESS_MONTHLY) {
    const element_PROGRESS_MONTHLY = metric_PROGRESS_MONTHLY.element;
    if (!element_PROGRESS_MONTHLY) return;

    const target_PROGRESS_MONTHLY = Array.isArray(metric_PROGRESS_MONTHLY.target)
      ? metric_PROGRESS_MONTHLY.target[0]
      : metric_PROGRESS_MONTHLY.target;

    let current_PROGRESS_MONTHLY = 0;
    const increment_PROGRESS_MONTHLY = target_PROGRESS_MONTHLY / 50;

    const timer_PROGRESS_MONTHLY = setInterval(() => {
      current_PROGRESS_MONTHLY += increment_PROGRESS_MONTHLY;

      if (current_PROGRESS_MONTHLY >= target_PROGRESS_MONTHLY) {
        current_PROGRESS_MONTHLY = target_PROGRESS_MONTHLY;
        clearInterval(timer_PROGRESS_MONTHLY);
      }

      let displayValue_PROGRESS_MONTHLY = Math.floor(current_PROGRESS_MONTHLY);

      if (metric_PROGRESS_MONTHLY.format === 'comma') {
        displayValue_PROGRESS_MONTHLY = displayValue_PROGRESS_MONTHLY.toLocaleString();
      }

      if (Array.isArray(metric_PROGRESS_MONTHLY.target)) {
        displayValue_PROGRESS_MONTHLY = `${displayValue_PROGRESS_MONTHLY}${metric_PROGRESS_MONTHLY.separator}${metric_PROGRESS_MONTHLY.target[1]}`;
      } else {
        if (metric_PROGRESS_MONTHLY.suffix) displayValue_PROGRESS_MONTHLY += metric_PROGRESS_MONTHLY.suffix;
      }

      element_PROGRESS_MONTHLY.textContent = displayValue_PROGRESS_MONTHLY;
    }, 30);
  }

  setupInteractions_PROGRESS_MONTHLY() {
    const metricCards_PROGRESS_MONTHLY = document.querySelectorAll('.metric-card-PROGRESS-MONTHLY');
    const reportButton_PROGRESS_MONTHLY = document.querySelector('.report-button-PROGRESS-MONTHLY');
    const insightCards_PROGRESS_MONTHLY = document.querySelectorAll('.insight-card-PROGRESS-MONTHLY');

    metricCards_PROGRESS_MONTHLY.forEach(card_PROGRESS_MONTHLY => {
      card_PROGRESS_MONTHLY.addEventListener('click', () => {
        this.handleMetricClick_PROGRESS_MONTHLY(card_PROGRESS_MONTHLY);
      });
    });

    reportButton_PROGRESS_MONTHLY.addEventListener('click', () => {
      this.handleReportClick_PROGRESS_MONTHLY();
    });

    insightCards_PROGRESS_MONTHLY.forEach(card_PROGRESS_MONTHLY => {
      card_PROGRESS_MONTHLY.addEventListener('click', () => {
        this.handleInsightClick_PROGRESS_MONTHLY(card_PROGRESS_MONTHLY);
      });
    });
  }

  handleMetricClick_PROGRESS_MONTHLY(card_PROGRESS_MONTHLY) {
    // Remove previous selections
    document.querySelectorAll('.metric-card-PROGRESS-MONTHLY').forEach(c => {
      c.classList.remove('pulse-animation-PROGRESS-MONTHLY');
      c.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    });

    // Highlight selected card
    card_PROGRESS_MONTHLY.style.borderColor = 'rgba(59, 130, 246, 0.5)';
    card_PROGRESS_MONTHLY.classList.add('pulse-animation-PROGRESS-MONTHLY');

    const icon_PROGRESS_MONTHLY = card_PROGRESS_MONTHLY.querySelector('.metric-icon-PROGRESS-MONTHLY');
    icon_PROGRESS_MONTHLY.style.transform = 'scale(1.3) rotate(15deg)';

    setTimeout(() => {
      icon_PROGRESS_MONTHLY.style.transform = 'scale(1) rotate(0deg)';
      card_PROGRESS_MONTHLY.classList.remove('pulse-animation-PROGRESS-MONTHLY');
      card_PROGRESS_MONTHLY.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    }, 2000);
  }

  handleInsightClick_PROGRESS_MONTHLY(card_PROGRESS_MONTHLY) {
    const originalBackground_PROGRESS_MONTHLY = card_PROGRESS_MONTHLY.style.background;
    card_PROGRESS_MONTHLY.style.background = 'rgba(59, 130, 246, 0.2)';
    card_PROGRESS_MONTHLY.style.transform = 'scale(1.02)';

    setTimeout(() => {
      card_PROGRESS_MONTHLY.style.background = originalBackground_PROGRESS_MONTHLY;
      card_PROGRESS_MONTHLY.style.transform = 'scale(1)';
    }, 300);
  }

  handleReportClick_PROGRESS_MONTHLY() {
    const button_PROGRESS_MONTHLY = document.querySelector('.report-button-PROGRESS-MONTHLY');
    button_PROGRESS_MONTHLY.style.transform = 'scale(0.95)';

    setTimeout(() => {
      button_PROGRESS_MONTHLY.style.transform = 'scale(1)';
      this.showComprehensiveReport_PROGRESS_MONTHLY();
    }, 150);
  }

  showComprehensiveReport_PROGRESS_MONTHLY() {
    const modal_PROGRESS_MONTHLY = document.createElement('div');
    modal_PROGRESS_MONTHLY.className = 'report-modal-PROGRESS-MONTHLY';
    modal_PROGRESS_MONTHLY.innerHTML = `
                    <div style="
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0, 0, 0, 0.9);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        z-index: 1000;
                        animation: fadeIn-PROGRESS-MONTHLY 0.3s ease;
                    ">
                        <div style="
                            background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95));
                            border-radius: 20px;
                            padding: 40px;
                            max-width: 600px;
                            width: 90%;
                            text-align: center;
                            border: 1px solid rgba(255, 255, 255, 0.2);
                            backdrop-filter: blur(20px);
                        ">
                            <h2 style="color: #3b82f6; margin-bottom: 20px; font-size: 24px;">📊 Comprehensive Monthly Report</h2>
                            <div style="text-align: left; margin: 20px 0;">
                                <p style="color: #94a3b8; margin-bottom: 15px; line-height: 1.6;">
                                    <strong style="color: #ffffff;">Performance Highlights:</strong><br>
                                    • Completed 77% of monthly workout goals<br>
                                    • Achieved personal record streak of 18 days<br>
                                    • Burned 7,200 calories total (300/day average)<br>
                                    • Monday shows consistent miss pattern
                                </p>
                                <p style="color: #94a3b8; margin-bottom: 15px; line-height: 1.6;">
                                    <strong style="color: #ffffff;">Recommendations:</strong><br>
                                    • Schedule Monday prep sessions on Sunday evening<br>
                                    • Maintain current intensity level (Medium)<br>
                                    • Target 85% completion rate next month
                                </p>
                            </div>
                            <button onclick="document.body.removeChild(this.closest('.report-modal-PROGRESS-MONTHLY'))" style="
                                background: linear-gradient(135deg, #3b82f6, #1d4ed8);
                                color: white;
                                border: none;
                                padding: 12px 24px;
                                border-radius: 10px;
                                cursor: pointer;
                                font-size: 16px;
                                font-weight: 600;
                                margin-top: 20px;
                            ">Close Report</button>
                        </div>
                    </div>
                `;

    const style_PROGRESS_MONTHLY = document.createElement('style');
    style_PROGRESS_MONTHLY.textContent = `
                    @keyframes fadeIn-PROGRESS-MONTHLY {
                        from { opacity: 0; transform: scale(0.9); }
                        to { opacity: 1; transform: scale(1); }
                    }
                `;
    document.head.appendChild(style_PROGRESS_MONTHLY);
    document.body.appendChild(modal_PROGRESS_MONTHLY);
  }

  setupRealtimeUpdates_PROGRESS_MONTHLY() {
    // Simulate real-time data updates
    setInterval(() => {
      const completionRate_PROGRESS_MONTHLY = document.querySelector('.green-value-PROGRESS-MONTHLY');
      if (completionRate_PROGRESS_MONTHLY && Math.random() > 0.7) {
        const currentRate_PROGRESS_MONTHLY = parseInt(completionRate_PROGRESS_MONTHLY.textContent);
        const newRate_PROGRESS_MONTHLY = Math.min(currentRate_PROGRESS_MONTHLY + 1, 100);
        completionRate_PROGRESS_MONTHLY.textContent = `${newRate_PROGRESS_MONTHLY}%`;

        // Update progress bar
        const progressBar_PROGRESS_MONTHLY = document.querySelector('.progress-fill-PROGRESS-MONTHLY');
        progressBar_PROGRESS_MONTHLY.style.width = `${newRate_PROGRESS_MONTHLY}%`;
      }
    }, 10000);
  }

  updateMonthlyData_PROGRESS_MONTHLY(newData_PROGRESS_MONTHLY) {
    Object.keys(newData_PROGRESS_MONTHLY).forEach(key_PROGRESS_MONTHLY => {
      const element_PROGRESS_MONTHLY = document.querySelector(`[data-metric="${key_PROGRESS_MONTHLY}"]`);
      if (element_PROGRESS_MONTHLY) {
        element_PROGRESS_MONTHLY.textContent = newData_PROGRESS_MONTHLY[key_PROGRESS_MONTHLY];
      }
    });
  }
}

// Initialize dashboard when page loads
document.addEventListener('DOMContentLoaded', () => {
  const dashboard_PROGRESS_MONTHLY = new MonthlyDashboard_PROGRESS_MONTHLY();

  // Add breathing animation to star icon
  const starIcon_PROGRESS_MONTHLY = document.querySelector('.star-icon-PROGRESS-MONTHLY');
  if (starIcon_PROGRESS_MONTHLY) {
    setInterval(() => {
      starIcon_PROGRESS_MONTHLY.style.transform = 'scale(1.1) rotate(5deg)';
      setTimeout(() => {
        starIcon_PROGRESS_MONTHLY.style.transform = 'scale(1) rotate(0deg)';
      }, 500);
    }, 3000);
  }
});

// Add hover sound effects (visual feedback)
document.addEventListener('mouseover', (e) => {
  if (e.target.closest('.metric-card-PROGRESS-MONTHLY')) {
    const card_PROGRESS_MONTHLY = e.target.closest('.metric-card-PROGRESS-MONTHLY');
    const icon_PROGRESS_MONTHLY = card_PROGRESS_MONTHLY.querySelector('.metric-icon-PROGRESS-MONTHLY');
    icon_PROGRESS_MONTHLY.style.transform = 'scale(1.1)';
  }
});

document.addEventListener('mouseout', (e) => {
  if (e.target.closest('.metric-card-PROGRESS-MONTHLY')) {
    const card_PROGRESS_MONTHLY = e.target.closest('.metric-card-PROGRESS-MONTHLY');
    const icon_PROGRESS_MONTHLY = card_PROGRESS_MONTHLY.querySelector('.metric-icon-PROGRESS-MONTHLY');
    icon_PROGRESS_MONTHLY.style.transform = 'scale(1)';
  }
});

// Add floating particles background effect
function createFloatingParticles_PROGRESS_MONTHLY() {
  const particleContainer_PROGRESS_MONTHLY = document.createElement('div');
  particleContainer_PROGRESS_MONTHLY.className = 'floating-particles-PROGRESS-MONTHLY';
  particleContainer_PROGRESS_MONTHLY.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events:non;
                z-index: -1;
                overflow: hidden;
            `;

  for (let i = 0; i < 30; i++) {
    const particle_PROGRESS_MONTHLY = document.createElement('div');
    particle_PROGRESS_MONTHLY.className = `particle-${i}-PROGRESS-MONTHLY`;
    particle_PROGRESS_MONTHLY.style.cssText = `
                    position: absolute;
                    width: ${Math.random() * 9 + 2}px;
                    height: ${Math.random() * 11 + 2}px;
                    background: ${['#3b82f6', '#fbbf24', '#f87171', '#a78bfa'][Math.floor(Math.random() * 4)]};
                    border-radius: 50%;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    opacity: ${Math.random() * 0.5 + 0.2};
                    animation: float-particle-${i}-PROGRESS-MONTHLY ${Math.random() * 10 + 15}s linear infinite;
                `;
    particleContainer_PROGRESS_MONTHLY.appendChild(particle_PROGRESS_MONTHLY);

    // Create unique animation keyframes for each particle
    const keyframes_PROGRESS_MONTHLY = document.createElement('style');
    keyframes_PROGRESS_MONTHLY.textContent = `
                    @keyframes float-particle-${i}-PROGRESS-MONTHLY {
                        0% { 
                            transform: translateY(0px) rotate(0deg); 
                            opacity: 0;
                        }
                        10% {
                            opacity: ${Math.random() * 1.5 + 0.2};
                        }
                        90% {
                            opacity: ${Math.random() * 0.5 + 0.2};
                        }
                        100% { 
                            transform: translateY(-100vh) rotate(360deg); 
                            opacity: 0;
                        }
                    }
                `;
    document.head.appendChild(keyframes_PROGRESS_MONTHLY);
  }

  document.body.appendChild(particleContainer_PROGRESS_MONTHLY);
}

// Initialize floating particles
window.addEventListener('load', () => {
  createFloatingParticles_PROGRESS_MONTHLY();
});

// Add data export functionality
function exportMonthlyData_PROGRESS_MONTHLY() {
  const data_PROGRESS_MONTHLY = {
    monthlyWorkouts: '24/31',
    totalTrainingTime: '18h',
    caloriesBurned: '7,200',
    bestStreak: '18',
    completionRate: '77%',
    missedSessions: '7',
    avgIntensity: 'Medium',
    progressVsGoal: '+12%',
    mostMissedDay: 'Monday (3 times)',
    recoveryRate: '85%'
  };

  const jsonData_PROGRESS_MONTHLY = JSON.stringify(data_PROGRESS_MONTHLY, null, 2);
  const blob_PROGRESS_MONTHLY = new Blob([jsonData_PROGRESS_MONTHLY], { type: 'application/json' });
  const url_PROGRESS_MONTHLY = URL.createObjectURL(blob_PROGRESS_MONTHLY);

  const link_PROGRESS_MONTHLY = document.createElement('a');
  link_PROGRESS_MONTHLY.href = url_PROGRESS_MONTHLY;
  link_PROGRESS_MONTHLY.download = `monthly-fitness-report-${new Date().toISOString().slice(0, 7)}.json`;
  document.body.appendChild(link_PROGRESS_MONTHLY);
  link_PROGRESS_MONTHLY.click();
  document.body.removeChild(link_PROGRESS_MONTHLY);
  URL.revokeObjectURL(url_PROGRESS_MONTHLY);
}

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey || e.metaKey) {
    switch (e.key) {
      case 'r':
        e.preventDefault();
        document.querySelector('.report-button-PROGRESS-MONTHLY').click();
        break;
      case 'e':
        e.preventDefault();
        exportMonthlyData_PROGRESS_MONTHLY();
        break;
    }
  }
});

// Add progress tracking animation
function trackProgress_PROGRESS_MONTHLY() {
  const progressElements_PROGRESS_MONTHLY = document.querySelectorAll('.summary-value-PROGRESS-MONTHLY');

  progressElements_PROGRESS_MONTHLY.forEach(element_PROGRESS_MONTHLY => {
    element_PROGRESS_MONTHLY.addEventListener('animationend', () => {
      element_PROGRESS_MONTHLY.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.5)';
      setTimeout(() => {
        element_PROGRESS_MONTHLY.style.boxShadow = 'none';
      }, 1000);
    });
  });
}

// Initialize progress tracking
setTimeout(trackProgress_PROGRESS_MONTHLY, 2000);

// WEEKLY
class WeeklyDashboard_PROGRESS_WEEKLY {
  constructor() {
    this.initializeAnimations_PROGRESS_WEEKLY();
    this.setupInteractivity_PROGRESS_WEEKLY();
    this.animateCounters_PROGRESS_WEEKLY();
  }

  initializeAnimations_PROGRESS_WEEKLY() {
    const progressBars_PROGRESS_WEEKLY = document.querySelectorAll('.progress-bar-fill-PROGRESS-WEEKLY');

    progressBars_PROGRESS_WEEKLY.forEach((bar_PROGRESS_WEEKLY, index_PROGRESS_WEEKLY) => {
      const targetProgress_PROGRESS_WEEKLY = bar_PROGRESS_WEEKLY.getAttribute('data-progress') || 0;
      bar_PROGRESS_WEEKLY.style.width = '0%';

      setTimeout(() => {
        bar_PROGRESS_WEEKLY.style.width = `${targetProgress_PROGRESS_WEEKLY}%`;
      }, 800 + (index_PROGRESS_WEEKLY * 200));
    });
  }

  animateCounters_PROGRESS_WEEKLY() {
    const counters_PROGRESS_WEEKLY = [
      { element: document.querySelector('.stats-grid-PROGRESS-WEEKLY .stat-value-PROGRESS-WEEKLY'), target: [6, 7], separator: '/' },
      { element: document.querySelectorAll('.weekly-stat-value-PROGRESS-WEEKLY')[0], target: 6 },
      { element: document.querySelectorAll('.weekly-stat-value-PROGRESS-WEEKLY')[2], target: 5, prefix: '+', suffix: '%' }
    ];

    counters_PROGRESS_WEEKLY.forEach((counter_PROGRESS_WEEKLY, index_PROGRESS_WEEKLY) => {
      if (!counter_PROGRESS_WEEKLY.element) return;

      setTimeout(() => {
        this.animateNumber_PROGRESS_WEEKLY(counter_PROGRESS_WEEKLY);
      }, 1200 + (index_PROGRESS_WEEKLY * 300));
    });
  }

  animateNumber_PROGRESS_WEEKLY(counter_PROGRESS_WEEKLY) {
    const element_PROGRESS_WEEKLY = counter_PROGRESS_WEEKLY.element;
    const target_PROGRESS_WEEKLY = Array.isArray(counter_PROGRESS_WEEKLY.target)
      ? counter_PROGRESS_WEEKLY.target[0]
      : counter_PROGRESS_WEEKLY.target;

    let current_PROGRESS_WEEKLY = 0;
    const increment_PROGRESS_WEEKLY = target_PROGRESS_WEEKLY / 30;

    const timer_PROGRESS_WEEKLY = setInterval(() => {
      current_PROGRESS_WEEKLY += increment_PROGRESS_WEEKLY;

      if (current_PROGRESS_WEEKLY >= target_PROGRESS_WEEKLY) {
        current_PROGRESS_WEEKLY = target_PROGRESS_WEEKLY;
        clearInterval(timer_PROGRESS_WEEKLY);
      }

      let displayText_PROGRESS_WEEKLY = Math.floor(current_PROGRESS_WEEKLY);

      if (Array.isArray(counter_PROGRESS_WEEKLY.target)) {
        displayText_PROGRESS_WEEKLY = `${displayText_PROGRESS_WEEKLY}${counter_PROGRESS_WEEKLY.separator}${counter_PROGRESS_WEEKLY.target[1]}`;
      } else {
        if (counter_PROGRESS_WEEKLY.prefix) displayText_PROGRESS_WEEKLY = counter_PROGRESS_WEEKLY.prefix + displayText_PROGRESS_WEEKLY;
        if (counter_PROGRESS_WEEKLY.suffix) displayText_PROGRESS_WEEKLY += counter_PROGRESS_WEEKLY.suffix;
      }

      element_PROGRESS_WEEKLY.textContent = displayText_PROGRESS_WEEKLY;
    }, 50);
  }

  setupInteractivity_PROGRESS_WEEKLY() {
    const statCards_PROGRESS_WEEKLY = document.querySelectorAll('.stat-card-PROGRESS-WEEKLY');
    const analysisBtn_PROGRESS_WEEKLY = document.querySelector('.analysis-btn-PROGRESS-WEEKLY');

    statCards_PROGRESS_WEEKLY.forEach(card_PROGRESS_WEEKLY => {
      card_PROGRESS_WEEKLY.addEventListener('click', () => {
        this.handleCardClick_PROGRESS_WEEKLY(card_PROGRESS_WEEKLY);
      });
    });

    analysisBtn_PROGRESS_WEEKLY.addEventListener('click', () => {
      this.handleAnalysisClick_PROGRESS_WEEKLY();
    });

    this.setupHoverEffects_PROGRESS_WEEKLY();
  }

  handleCardClick_PROGRESS_WEEKLY(card_PROGRESS_WEEKLY) {
    // Remove previous selections
    document.querySelectorAll('.stat-card-PROGRESS-WEEKLY').forEach(c => {
      c.style.borderColor = 'rgba(255, 255, 255, 0.1)';
      c.style.transform = '';
    });

    // Highlight selected card
    card_PROGRESS_WEEKLY.style.borderColor = 'rgba(59, 130, 246, 0.5)';
    card_PROGRESS_WEEKLY.style.transform = 'translateY(-8px) scale(1.02)';

    // Pulse effect
    const icon_PROGRESS_WEEKLY = card_PROGRESS_WEEKLY.querySelector('.stat-icon-PROGRESS-WEEKLY');
    icon_PROGRESS_WEEKLY.style.transform = 'scale(1.2)';

    setTimeout(() => {
      icon_PROGRESS_WEEKLY.style.transform = 'scale(1)';
      card_PROGRESS_WEEKLY.style.borderColor = 'rgba(255, 255, 255, 0.1)';
      card_PROGRESS_WEEKLY.style.transform = '';
    }, 1500);
  }

  handleAnalysisClick_PROGRESS_WEEKLY() {
    const btn_PROGRESS_WEEKLY = document.querySelector('.analysis-btn-PROGRESS-WEEKLY');
    btn_PROGRESS_WEEKLY.style.background = 'rgba(59, 130, 246, 0.3)';
    btn_PROGRESS_WEEKLY.style.transform = 'scale(0.95)';

    setTimeout(() => {
      btn_PROGRESS_WEEKLY.style.background = '';
      btn_PROGRESS_WEEKLY.style.transform = '';
      this.showAnalysisModal_PROGRESS_WEEKLY();
    }, 150);
  }

  showAnalysisModal_PROGRESS_WEEKLY() {
    const modal_PROGRESS_WEEKLY = document.createElement('div');
    modal_PROGRESS_WEEKLY.className = 'analysis-modal-PROGRESS-WEEKLY';
    modal_PROGRESS_WEEKLY.innerHTML = `
                    <div style="
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0, 0, 0, 0.8);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        z-index: 1000;
                    ">
                        <div style="
                            background: rgba(15, 23, 42, 0.95);
                            border-radius: 20px;
                            padding: 30px;
                            max-width: 500px;
                            text-align: center;
                            border: 1px solid rgba(255, 255, 255, 0.2);
                        ">
                            <h3 style="color: #3b82f6; margin-bottom: 15px;">📈 Detailed Analysis</h3>
                            <p style="color: #94a3b8; margin-bottom: 20px;">
                                Your weekly performance shows consistent improvement with 86% goal completion.
                                Average session intensity has increased by 12% compared to last month.
                            </p>
                            <button onclick="document.body.removeChild(this.closest('.analysis-modal-PROGRESS-WEEKLY'))" style="
                                background: #3b82f6;
                                color: white;
                                border: none;
                                padding: 12px 24px;
                                border-radius: 10px;
                                cursor: pointer;
                                font-size: 14px;
                            ">Close</button>
                        </div>
                    </div>
                `;

    document.body.appendChild(modal_PROGRESS_WEEKLY);
  }

  setupHoverEffects_PROGRESS_WEEKLY() {
    const successBanner_PROGRESS_WEEKLY = document.querySelector('.success-banner-PROGRESS-WEEKLY');

    successBanner_PROGRESS_WEEKLY.addEventListener('mouseenter', () => {
      successBanner_PROGRESS_WEEKLY.style.background = 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.15))';
    });

    successBanner_PROGRESS_WEEKLY.addEventListener('mouseleave', () => {
      successBanner_PROGRESS_WEEKLY.style.background = 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.1))';
    });
  }

  updateWeeklyData_PROGRESS_WEEKLY(newData_PROGRESS_WEEKLY) {
    Object.keys(newData_PROGRESS_WEEKLY).forEach(key_PROGRESS_WEEKLY => {
      const element_PROGRESS_WEEKLY = document.querySelector(`[data-stat="${key_PROGRESS_WEEKLY}"]`);
      if (element_PROGRESS_WEEKLY) {
        element_PROGRESS_WEEKLY.textContent = newData_PROGRESS_WEEKLY[key_PROGRESS_WEEKLY];
      }
    });
  }
}

// Initialize dashboard when page loads
document.addEventListener('DOMContentLoaded', () => {
  const dashboard_PROGRESS_WEEKLY = new WeeklyDashboard_PROGRESS_WEEKLY();

  // Simulate real-time updates
  setTimeout(() => {
    dashboard_PROGRESS_WEEKLY.updateWeeklyData_PROGRESS_WEEKLY({
      'weekly-sessions': '7/7',
      'streak-days': '14'
    });
  }, 5000);
});

// Add particle animation background
function createParticles_PROGRESS_WEEKLY() {
  const particleCount_PROGRESS_WEEKLY = 50;
  const particles_PROGRESS_WEEKLY = document.createElement('div');
  particles_PROGRESS_WEEKLY.className = 'particles-container-PROGRESS-WEEKLY';
  particles_PROGRESS_WEEKLY.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: -1;
            `;

  for (let i = 0; i < particleCount_PROGRESS_WEEKLY; i++) {
    const particle_PROGRESS_WEEKLY = document.createElement('div');
    particle_PROGRESS_WEEKLY.style.cssText = `
                    position: absolute;
                    width: 2px;
                    height: 2px;
                    background: rgba(59, 130, 246, 0.3);
                    border-radius: 50%;
                    animation: float-${i}-PROGRESS-WEEKLY 6s infinite ease-in-out;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                `;
    particles_PROGRESS_WEEKLY.appendChild(particle_PROGRESS_WEEKLY);

    // Create unique animation for each particle
    const style_PROGRESS_WEEKLY = document.createElement('style');
    style_PROGRESS_WEEKLY.textContent = `
                    @keyframes float-${i}-PROGRESS-WEEKLY {
                        0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
                        50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
                    }
                `;
    document.head.appendChild(style_PROGRESS_WEEKLY);
  }

  document.body.appendChild(particles_PROGRESS_WEEKLY);
}

// Initialize particles after page load
window.addEventListener('load', createParticles_PROGRESS_WEEKLY);

class FitnessTracker_PROGRESS {
  constructor() {
    this.initializeProgressBars_PROGRESS();
    this.addInteractivity_PROGRESS();
  }

  initializeProgressBars_PROGRESS() {
    const progressBars_PROGRESS = document.querySelectorAll('.progress-fill-PROGRESS');

    progressBars_PROGRESS.forEach((bar_PROGRESS, index_PROGRESS) => {
      const width_PROGRESS = bar_PROGRESS.style.width;
      bar_PROGRESS.style.width = '0%';

      setTimeout(() => {
        bar_PROGRESS.style.width = width_PROGRESS;
      }, 500 + (index_PROGRESS * 200));
    });
  }

  addInteractivity_PROGRESS() {
    const sessionItems_PROGRESS = document.querySelectorAll('.session-item-PROGRESS');
    const reportBtn_PROGRESS = document.querySelector('.report-btn-PROGRESS');

    sessionItems_PROGRESS.forEach(item_PROGRESS => {
      item_PROGRESS.addEventListener('click', () => {
        this.handleSessionClick_PROGRESS(item_PROGRESS);
      });
    });

    reportBtn_PROGRESS.addEventListener('click', () => {
      this.handleReportClick_PROGRESS();
    });

    this.animateStreak_PROGRESS();
  }

  handleSessionClick_PROGRESS(session_PROGRESS) {
    // Remove previous selections
    document.querySelectorAll('.session-item-PROGRESS').forEach(item => {
      item.style.transform = '';
      item.style.background = '';
    });

    // Highlight selected session
    session_PROGRESS.style.background = 'rgba(59, 130, 246, 0.1)';
    session_PROGRESS.style.transform = 'translateX(10px) scale(1.02)';

    // Reset after animation
    setTimeout(() => {
      session_PROGRESS.style.background = '';
      session_PROGRESS.style.transform = '';
    }, 2000);
  }

  handleReportClick_PROGRESS() {
    const reportBtn_PROGRESS = document.querySelector('.report-btn-PROGRESS');
    reportBtn_PROGRESS.style.background = 'rgba(59, 130, 246, 0.3)';
    reportBtn_PROGRESS.style.transform = 'scale(0.95)';

    setTimeout(() => {
      reportBtn_PROGRESS.style.background = '';
      reportBtn_PROGRESS.style.transform = '';
      alert('Opening detailed fitness report...');
    }, 150);
  }

  animateStreak_PROGRESS() {
    const streakDays_PROGRESS = document.querySelector('.streak-days-PROGRESS');
    const streakIcon_PROGRESS = document.querySelector('.streak-icon-PROGRESS');

    let currentDay_PROGRESS = 0;
    const targetDay_PROGRESS = 13;

    const countInterval_PROGRESS = setInterval(() => {
      if (currentDay_PROGRESS <= targetDay_PROGRESS) {
        streakDays_PROGRESS.textContent = `${currentDay_PROGRESS} Days`;
        currentDay_PROGRESS++;
      } else {
        clearInterval(countInterval_PROGRESS);
      }
    }, 100);

    // Pulsing fire animation
    setInterval(() => {
      streakIcon_PROGRESS.style.transform = 'scale(1.1)';
      setTimeout(() => {
        streakIcon_PROGRESS.style.transform = 'scale(1)';
      }, 300);
    }, 2000);
  }

  updateGoalProgress_PROGRESS(goalName_PROGRESS, currentValue_PROGRESS, maxValue_PROGRESS) {
    const goalItems_PROGRESS = document.querySelectorAll('.goal-item-PROGRESS');

    goalItems_PROGRESS.forEach(item_PROGRESS => {
      const nameElement_PROGRESS = item_PROGRESS.querySelector('.goal-name-PROGRESS');
      if (nameElement_PROGRESS.textContent === goalName_PROGRESS) {
        const valueElement_PROGRESS = item_PROGRESS.querySelector('.goal-value-PROGRESS');
        const progressBar_PROGRESS = item_PROGRESS.querySelector('.progress-fill-PROGRESS');

        const percentage_PROGRESS = (currentValue_PROGRESS / maxValue_PROGRESS) * 100;

        valueElement_PROGRESS.textContent = `${currentValue_PROGRESS}/${maxValue_PROGRESS}`;
        progressBar_PROGRESS.style.width = `${Math.min(percentage_PROGRESS, 100)}%`;

        if (percentage_PROGRESS >= 100) {
          item_PROGRESS.querySelector('.progress-bar-PROGRESS').classList.add('completed-bar-PROGRESS');
        }
      }
    });
  }
}

// Initialize the fitness tracker when page loads
document.addEventListener('DOMContentLoaded', () => {
  const tracker_PROGRESS = new FitnessTracker_PROGRESS();

  // Example of updating goals dynamically
  setTimeout(() => {
    tracker_PROGRESS.updateGoalProgress_PROGRESS('Active Minutes', 50, 60);
  }, 3000);
});

// Add some hover effects
document.addEventListener('mouseover', (e) => {
  if (e.target.closest('.session-item-PROGRESS')) {
    e.target.closest('.session-item-PROGRESS').style.borderColor = 'rgba(59, 130, 246, 0.3)';
  }
});

document.addEventListener('mouseout', (e) => {
  if (e.target.closest('.session-item-PROGRESS')) {
    e.target.closest('.session-item-PROGRESS').style.borderColor = 'rgba(255, 255, 255, 0.05)';
  }
});


// back exercises
function change_text() {
  // Note: Ensure your HTML ID is actually spelled "Begginer" to match this
  document.getElementById("Beginner_back1").innerHTML = `
        <button style="background-color: transparent; border: none; cursor: pointer;" onclick="change_text()">
            <img src="https://liftmanual.com/wp-content/uploads/2023/04/band-seated-row.webp" alt="Band Seated Row Form & Visual" style="width: 140px; height: auto;">
        </button>
        <p><strong>Seated Row Form & Visual</strong></p>
          <ol style="text-align: left; padding-left: 25px;">
    <li>
      <p class="text_left">
        <strong>Setup:</strong> Sit on the floor with your legs extended straight in front of you. Loop a resistance band around your feet and hold the ends with both hands.
      </p>
    </li><br>
    <li>
      <p class="text_left">
        <strong>Starting Position:</strong> Keep your back straight and shoulders relaxed. Engage your core and slightly lean back to create tension in the band.
      </p>
    </li><br>
    <li>
      <p class="text_left">
        <strong>The Pull:</strong> Pull the band towards your torso, squeezing your shoulder blades together. Keep your elbows close to your sides and avoid shrugging your shoulders.
      </p>
    </li><br>
    <li>
      <p class="text_left">
        <strong>The Release:</strong> Slowly extend your arms back to the starting position, maintaining control of the band. Keep your back straight and core engaged throughout.
      </p>
    </li><br>
    <li>
      <p class="text_left">
        <strong>Repeat:</strong> Perform 3-4 sets of 10-15 reps, focusing on smooth and controlled movements.
      </p>
    </li>
  </ol>

  <button class="start_excercise" onclick="">Start Workout</button>
`;
}

function change_text2() {
  // Note: Ensure your HTML ID is actually spelled "Begginer" to match this
  document.getElementById("Beginner_back2").innerHTML = `
        <button style="background-color: transparent; border: none; cursor: pointer;" onclick="change_text()">
            <img src="https://raw.githubusercontent.com/Hunny-Chaurasia/GIF-ONLY/main/kettlebell-sumo-deadlift.gif" 
                 alt="Double Kettlebell Sumo Deadlift" 
                 style="width: 140px; height: auto;">
        </button>
        <p><strong>Double Kettlebell Sumo Deadlift</strong></p>
       <ol style="text-align: left; padding-left: 25px;">
    <li>
      <p class="text_left">
        <strong>Setup:</strong> Place two kettlebells on the floor slightly wider than shoulder-width apart. Stand in a sumo stance (feet wider than hip-width, toes pointed outward at ~45°). Position yourself between the kettlebells.
      </p>
    </li><br>
    <li>
      <p class="text_left">
        <strong>Grip & Stance:</strong> Hinge at your hips and bend your knees to lower into position. Grasp each kettlebell with an overhand grip (palms facing you). Keep your back flat, chest up, and shoulders back.
      </p>
    </li><br>
    <li>
      <p class="text_left">
        <strong>The Lift:</strong> Drive through your heels to stand up, keeping the kettlebells close to your body. Fully extend your hips and knees at the top, squeezing your glutes.
      </p>
    </li><br>
    <li>
      <p class="text_left">
        <strong>The Descent:</strong> Hinge at your hips and bend your knees to lower the kettlebells back down. Maintain a flat back and control the movement throughout.
      </p>
    </li><br>
    <li>
      <p class="text_left">
        <strong>Repeat:</strong> Perform 3-4 sets of 6-10 reps, focusing on maintaining perfect form.
      </p>
    </li>
  </ol>
  <button class="start_excercise" onclick="">Start Workout</button>`;
}

function change_text3() {
  // Note: Ensure your HTML ID is actually spelled "Begginer" to match this
  document.getElementById("Beginner_back3").innerHTML = `
        <button style="background-color: transparent; border: none; cursor: pointer;" onclick="change_text()">
            <img src="https://raw.githubusercontent.com/Hunny-Chaurasia/GIF-ONLY/main/how-to-do-a-kettlebell-sumo-squat.gif"
                 alt="Kettlebell Sumo Squat" 
                 style="width: 140px; height: auto;">
        </button>
        <p><strong>Kettlebell Sumo Squat</strong></p>
          <ol style="text-align: left; padding-left: 25px;">
    <li>
      <p class="text_left">
        <strong>Setup:</strong> Stand in a **sumo stance** (feet wider than shoulder-width, toes pointed outward at ~45°). Place a kettlebell on the floor in front of you.
      </p>
    </li><br>
    <li>
      <p class="text_left">
        <strong>Grip the Kettlebell:</strong> Hinge at your hips and bend your knees to lower into a squat. Grasp the kettlebell handle with both hands using an **overhand grip**.
      </p>
    </li><br>
    <li>
      <p class="text_left">
        <strong>The Squat:</strong> Push through your heels to stand up, lifting the kettlebell off the floor. Keep your chest up, back straight, and core engaged.
      </p>
    </li><br>
    <li>
      <p class="text_left">
        <strong>Lower the Kettlebell:</strong> Hinge at your hips and bend your knees to lower the kettlebell back to the floor. Keep your back flat and control the movement.
      </p>
    </li><br>
    <li>
      <p class="text_left">
        <strong>Repeat:</strong> Perform 3-4 sets of 8-12 reps, maintaining proper form throughout.
      </p>
    </li>
  </ol>
  <button class="start_excercise" onclick="">Start Workout</button>`;
}

function change_text4() {
  // Note: Ensure your HTML ID is actually spelled "Begginer" to match this
  document.getElementById("Beginner_back4").innerHTML = `
        <button style="background-color: transparent; border: none; cursor: pointer;" onclick="change_text()">
            <img src="https://raw.githubusercontent.com/Hunny-Chaurasia/GIF-ONLY/main/Kettlebell%20Sumo%20Deadlift.gif"  
                 alt="Kettlebell Sumo Deadlift" 
                 style="width: 140px; height: auto;">
        </button>
        <p><strong>Kettlebell Sumo Deadlift</strong></p>
          <ol style="text-align: left; padding-left: 25px;">
    <li>
      <p class="text_left">
        <strong>Setup:</strong> Place two kettlebells on the floor, slightly wider than shoulder-width. Stand in a sumo stance (feet wider than hip-width, toes pointed outward at ~45°). Position yourself so the kettlebells are centered between your feet.
      </p>
    </li><br>
    <li>
      <p class="text_left">
        <strong>Grip & Body Positioning:</strong> Hinge at your hips and bend your knees to lower into a deep squat. Grip each kettlebell with an overhand grip (palms facing you). Keep your back straight, chest up, and shoulders pulled back. Engage your core to protect your lower back.
      </p>
    </li><br>
    <li>
      <p class="text_left">
        <strong>The Lift (Upward Movement):</strong> Push through your heels (not toes) to stand up. Drive your hips forward while keeping the kettlebells close to your body. Fully extend your hips and knees at the top (but don’t hyperextend). Squeeze your glutes at the top for maximum engagement.
      </p>
    </li><br>
    <li>
      <p class="text_left">
        <strong>The Descent (Downward Movement):</strong> Hinge at your hips and bend your knees to lower the kettlebells. Keep your back flat (no rounding!) as you lower them. Control the descent—don’t let gravity do the work.
      </p>
    </li><br>
    <li>
      <p class="text_left">
        <strong>Repeat:</strong> Reset your stance if needed and perform 3-4 sets of 8-12 reps.
      </p>
    </li>
  </ol>
  <button class="start_excercise" onclick="">Start Workout</button>`;
}

function change_text5() {
  // Note: Ensure your HTML ID is actually spelled "Begginer" to match this
  document.getElementById("Beginner_back5").innerHTML = `
        <button style="background-color: transparent; border: none; cursor: pointer;" onclick="change_text()">
            <img src="https://liftmanual.com/wp-content/uploads/2023/04/band-seated-row.webp" 
                 alt="Band Seated Row Form & Visual" 
                 style="width: 140px; height: auto;">
        </button>
        <p><strong>Seated Row Form & Visual</strong></p>
        <ol style="text-align: left; padding-left: 25px;">
            <li><p class="text_left">Sit on the floor with your legs extended in front of you. Loop a resistance band around your feet and hold the ends with your hands.</p></li><br>
            <li><p class="text_left">Keep your back straight and engage your core. Pull the band towards your torso, squeezing your shoulder blades together.</p></li><br>
            <li><p class="text_left">Slowly return to the starting position and repeat for the desired number of reps.</p></li>
        </ol>`;
}

function change_text6() {
  // Note: Ensure your HTML ID is actually spelled "Begginer" to match this
  document.getElementById("Beginner_back6").innerHTML = `
        <button style="background-color: transparent; border: none; cursor: pointer;" onclick="change_text()">
            <img src="https://raw.githubusercontent.com/Hunny-Chaurasia/GIF-ONLY/main/Kettlebell%20Sumo%20Deadlift.gif" 
                 alt="Band Seated Row Form & Visual" 
                 style="width: 140px; height: auto;">
        </button>
        <p><strong>Seated Row Form & Visual</strong></p>
        <ol style="text-align: left; padding-left: 25px;">
            <li><p class="text_left">Sit on the floor with your legs extended in front of you. Loop a resistance band around your feet and hold the ends with your hands.</p></li><br>
            <li><p class="text_left">Keep your back straight and engage your core. Pull the band towards your torso, squeezing your shoulder blades together.</p></li><br>
            <li><p class="text_left">Slowly return to the starting position and repeat for the desired number of reps.</p></li>
        </ol>`;
}
//Sports
const SPORTS_KW = ['football','cricket','tennis','basketball','olympic','athlete','match','tournament','league','game','player','team','goal','score','champion','race','swim','run','marathon','gym','workout','exercise','training','fitness','strength','endurance'];
const HEALTH_KW = ['health','mental health','disease','doctor','hospital','therapy','wellness','medicine','immune','heart','brain','sleep','stress','diet','weight','body','injury','recovery','pain','surgery','cancer','diabetes','blood'];
const NUTRI_KW = ['protein','carb','calorie','vitamin','mineral','supplement','diet','food','eat','meal','nutrition','hydration','fat','sugar','fiber','nutrient','vegetable','fruit','omega','probiotic'];
const TRAIN_KW = ['workout','training','exercise','strength','endurance','cardio','hiit','crossfit','yoga','pilates','rep','set','muscle','squat','deadlift','bench','performance','coach','program','routine','sprint'];

function classify(article) {
  const txt = ((article.title||'') + ' ' + (article.description||'')).toLowerCase();
  const scores = { sports:0, health:0, nutrition:0, training:0 };
  SPORTS_KW.forEach(k => { if(txt.includes(k)) scores.sports += (k.length > 5 ? 2 : 1) });
  HEALTH_KW.forEach(k => { if(txt.includes(k)) scores.health += (k.length > 5 ? 2 : 1) });
  NUTRI_KW.forEach(k => { if(txt.includes(k)) scores.nutrition += (k.length > 5 ? 2 : 1) });
  TRAIN_KW.forEach(k => { if(txt.includes(k)) scores.training += (k.length > 5 ? 2 : 1) });
  if (article._apiCat === 'sports') scores.sports += 5;
  if (article._apiCat === 'health') scores.health += 5;
  if (article._apiCat === 'food') scores.nutrition += 5;
  if (article._apiCat === 'lifestyle') scores.training += 2;
  const best = Object.entries(scores).sort((a,b)=>b[1]-a[1])[0];
  return best[1] > 0 ? best[0] : 'health';
}

function readTime(text) {
  if (!text) return '2 min';
  return Math.max(1, Math.round(text.trim().split(/\s+/).length / 200)) + ' min read';
}

function timeAgo(d) {
  if (!d) return '';
  const h = Math.floor((Date.now() - new Date(d).getTime()) / 3600000);
  if (h < 1) return 'Just now';
  if (h < 24) return h + 'h ago';
  return Math.floor(h/24) + 'd ago';
}

async function fetchBatch(category) {
  const url = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=en&category=${category}&size=10`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('HTTP ' + res.status);
  const data = await res.json();
  if (data.status === 'error') throw new Error(data.results?.message || 'API error');
  return (data.results || []).map(a => ({ ...a, _apiCat: category }));
}

async function init() {
  ALL = [];
  document.getElementById('breaking-wrap').innerHTML = '<div class="loader"><span class="spinner"></span>Fetching live articles…</div>';
  document.getElementById('grid-wrap').innerHTML = '';
  document.getElementById('trending-wrap').innerHTML = '<div class="loader" style="padding:1rem">Loading…</div>';
  try {
    const [b1, b2] = await Promise.allSettled([
      fetchBatch('sports,health'),
      fetchBatch('food,lifestyle')
    ]);
    const raw = [];
    if (b1.status === 'fulfilled') raw.push(...b1.value);
    if (b2.status === 'fulfilled') raw.push(...b2.value);
    if (!raw.length) throw new Error('No articles returned. Check API plan.');
    const seen = new Set();
    raw.forEach(a => {
      if (!a.title) return;
      if (seen.has(a.title)) return;
      seen.add(a.title);
      a._category = classify(a);
      ALL.push(a);
    });
    ALL.sort((a,b) => new Date(b.pubDate||0) - new Date(a.pubDate||0));
    updateCounts();
    render();
    renderTrending();
  } catch(e) {
    document.getElementById('breaking-wrap').innerHTML = `<div class="error-box">⚠ Could not load news.<br><small>${e.message}</small><br><button class="retry-btn" onclick="init()">↺ Retry</button></div>`;
    document.getElementById('grid-wrap').innerHTML = '';
    document.getElementById('trending-wrap').innerHTML = '<div style="padding:.5rem;font-size:13px;color:var(--color-text-tertiary)">Unavailable</div>';
  }
}

function updateCounts() {
  const c = { sports:0, health:0, nutrition:0, training:0 };
  ALL.forEach(a => { if(c[a._category] !== undefined) c[a._category]++; });
  document.getElementById('count-total').textContent = ALL.length;
  document.getElementById('count-sports').textContent = c.sports;
  document.getElementById('count-health').textContent = c.health;
  document.getElementById('count-nutrition').textContent = c.nutrition;
  document.getElementById('count-training').textContent = c.training;
}

function filtered() {
  if (currentTab === 'all') return ALL;
  if (currentTab === 'training') return ALL.filter(a => a._category === 'training' || a._category === 'fitness');
  return ALL.filter(a => a._category === currentTab);
}

function render() {
  const list = filtered();
  if (!list.length) {
    document.getElementById('breaking-wrap').innerHTML = '<div class="loader">No articles in this category yet.</div>';
    document.getElementById('grid-wrap').innerHTML = '';
    return;
  }
  renderBreaking(list[0]);
  renderGrid(list.slice(1, 10));
}

function renderBreaking(a) {
  const cat = CAT_MAP[a._category] || CAT_MAP.health;
  document.getElementById('breaking-wrap').innerHTML = `
    <div class="breaking-card">
      <div style="display:flex;align-items:flex-start;gap:10px;flex-wrap:wrap">
        <div style="flex:1;min-width:200px">
          <span class="breaking-badge">Breaking</span>
          <span class="cat-tag ${cat.cls}" style="margin-left:6px;font-size:11px;padding:3px 10px;border-radius:20px">${cat.label}</span>
          <h2 class="breaking-title">${a.title}</h2>
          <p class="breaking-desc">${a.description || 'No description available.'}</p>
          <div class="meta-row">
            <span class="meta-chip">📰 ${a.source_id || 'News'}</span>
            <span class="meta-chip">🕐 ${timeAgo(a.pubDate)}</span>
            <span class="meta-chip">📖 ${readTime(a.description)}</span>
            <button class="btn-read" onclick="openModal(${ALL.indexOf(a)})">Read Article →</button>
          </div>
        </div>
      </div>
    </div>`;
}

function renderGrid(list) {
  if (!list.length) { document.getElementById('grid-wrap').innerHTML = ''; return; }
  document.getElementById('grid-wrap').innerHTML = list.map((a,i) => {
    const cat = CAT_MAP[a._category] || CAT_MAP.health;
    const desc = (a.description||'').slice(0,130) + ((a.description||'').length>130?'…':'');
    const idx = ALL.indexOf(a);
    return `<div class="article-card" onclick="openModal(${idx})">
      <span class="cat-tag ${cat.cls}">${cat.label}</span>
      <div class="card-title">${a.title}</div>
      <div class="card-desc">${desc || 'Tap to read more.'}</div>
      <div class="card-footer">
        <span class="card-source">${a.source_id||'News'} · ${timeAgo(a.pubDate)}</span>
        <button class="card-read-btn" onclick="event.stopPropagation();openModal(${idx})">Read →</button>
      </div>
    </div>`;
  }).join('');
}

function renderTrending() {
  const tags = [
    { tag:'#HIITWorkouts', cat:'Training', growth:'+23%', cat_key:'training' },
    { tag:'#SportsMedicine', cat:'Health', growth:'+18%', cat_key:'health' },
    { tag:'#PlantProtein', cat:'Nutrition', growth:'+31%', cat_key:'nutrition' },
    { tag:'#OlympicSports', cat:'Sports', growth:'+42%', cat_key:'sports' },
    { tag:'#MentalFitness', cat:'Wellness', growth:'+15%', cat_key:'health' }
  ];
  document.getElementById('trending-wrap').innerHTML = tags.map((t,i) => {
    const count = ALL.filter(a=>a._category===t.cat_key).length;
    const posts = Math.max(count*50, 200) + Math.floor(Math.random()*300);
    return `<div class="trending-item">
      <div class="trend-rank">${i+1}</div>
      <div class="trend-text">
        <h4>${t.tag}</h4>
        <div class="trend-meta">${posts}+ posts · ${t.cat} <span class="growth">${t.growth}</span></div>
      </div>
    </div>`;
  }).join('');
}

function openModal(idx) {
  const a = ALL[idx];
  if (!a) return;
  const cat = CAT_MAP[a._category] || CAT_MAP.health;
  const modal = document.getElementById('modal');
  modal.style.display = 'flex';
  modal.style.position = 'fixed';
  modal.style.inset = '0';
  modal.style.background = 'rgba(0,0,0,0.5)';
  modal.style.zIndex = '1000';
  modal.style.alignItems = 'center';
  modal.style.justifyContent = 'center';
  modal.style.padding = '1rem';
  modal.innerHTML = `<div class="modal-box">
    <button class="modal-close" onclick="closeModal()">✕</button>
    <div class="modal-tag"><span class="cat-tag ${cat.cls}">${cat.label}</span></div>
    <div class="modal-title">${a.title}</div>
    <div class="modal-meta">
      <span>📰 ${a.source_id||'News Source'}</span>
      <span>🕐 ${timeAgo(a.pubDate)}</span>
      <span>📖 ${readTime(a.description)}</span>
    </div>
    <div class="modal-body">${a.description || 'No detailed description available for this article. Click the button below to read the full article on the source website.'}</div>
    ${a.link ? `<a href="${a.link}" target="_blank" class="btn-ext">Read full article ↗</a>` : ''}
  </div>`;
}

function closeModal() {
  const m = document.getElementById('modal');
  m.style.display = 'none';
  m.innerHTML = '';
}

function switchTab(tab, el) {
  currentTab = tab;
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  if (ALL.length) render();
}

document.addEventListener('keydown', e => { if(e.key==='Escape') closeModal(); });
init();
