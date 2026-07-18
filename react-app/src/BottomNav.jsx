import React from 'react';
import { useAppNav } from './AppNavContext';

/*
  Ab koi props nahi le rahe — activeScreen, setActiveScreen, mobileNavOpen,
  setMobileNavOpen sab seedha useAppNav() se aa rahe hain. App.jsx ko
  ab kuch pass karne ki zaroorat nahi.

  Mobile hamburger button (#Menu) bhi yahin move kar diya hai kyunki
  uska kaam hi navigation dikhana/chhupana hai.
*/

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: 'fa-regular fa-house' },
  { id: 'Workouts', label: 'Workouts', icon: 'fa-solid fa-person-running' },
  { id: 'Nutrition', label: 'Nutrition', icon: 'fa-solid fa-wheat-awn-circle-exclamation' },
  { id: 'Progress', label: 'Progress', icon: 'fa-solid fa-chart-column' },
  { id: 'Settings', label: 'Settings', icon: 'fa-solid fa-gear' },
];

export default function BottomNav() {
  const { activeScreen, setActiveScreen, mobileNavOpen, setMobileNavOpen } = useAppNav();

  return (
    <>
      <button
        id="Menu"
        onClick={() => setMobileNavOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        <i className="fa-solid fa-angles-right"></i>
      </button>

      <div
        id="bottom-nav"
        style={{ display: mobileNavOpen ? 'block' : undefined }}
      >
        <div id="top-nav">
          <p className="nav-text active">
            VitaGenie
            <p className="subtitle2">Your Health Journey</p>
          </p>
        </div>

        <div className="nav">
          <div id="left-nav">
            <p className="nav-text">
              VitaGenie
              <p className="subtitle2">Your Health Journey</p>
            </p>
          </div>
          <hr />

          {NAV_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`nav-item${activeScreen === item.id ? ' active-nav' : ''}`}
              onClick={() => setActiveScreen(item.id)}
            >
              <span className="nav-icon"><i className={item.icon}></i></span>
              {item.label}
            </div>
          ))}
          <hr />
        </div>
      </div>
    </>
  );
}