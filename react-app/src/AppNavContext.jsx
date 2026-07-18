import React, { createContext, useContext, useState } from 'react';

/*
  Pehle App.jsx activeScreen aur mobileNavOpen state rakhta tha, aur unhe
  props ke through BottomNav tak pass karta tha (prop drilling).

  Ab ye state ek Context me hai. Koi bhi component — BottomNav ho ya
  HomeScreen ho ya aage banne wale Workouts/Settings/Nutrition —
  seedha `useAppNav()` hook call karke activeScreen padh sakta hai ya
  badal sakta hai, bina App.jsx se prop pass kiye.
*/

const AppNavContext = createContext(null);

export function AppNavProvider({ children }) {
  const [activeScreen, setActiveScreen] = useState('home');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const value = { activeScreen, setActiveScreen, mobileNavOpen, setMobileNavOpen };

  return (
    <AppNavContext.Provider value={value}>
      {children}
    </AppNavContext.Provider>
  );
}

// Har component isi hook ko call karega — App.jsx ke through kuch pass nahi karna padega
export function useAppNav() {
  const ctx = useContext(AppNavContext);
  if (!ctx) {
    throw new Error('useAppNav must be used inside <AppNavProvider>');
  }
  return ctx;
}