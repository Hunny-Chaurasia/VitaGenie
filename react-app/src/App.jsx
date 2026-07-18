// import AuthenticationForm from "./AuthenticationForm.jsx";

// function App() {
//   return <AuthenticationForm />;
// }

// export default App;

import React from 'react';
import { COLORSMulFiles, getCSSVariablesMulFiles } from './theme';
import { AppNavProvider } from './AppNavContext';
import BottomNav from './BottomNav';
import HomeScreen from './HomeScreen';
import './HomeBottom.css';
// Aage jab Workouts/Settings/Nutrition/Progress screens banenge,
// bas unhe yahan import karke niche render kar dena — har screen
// khud check karega ki wo active hai ya nahi (jaise HomeScreen karta hai)
// import WorkoutsScreen from './WorkoutsScreen';
// import SettingsScreen from './SettingsScreen';
// import NutritionScreen from './NutritionScreen';
// import ProgressScreen from './ProgressScreen';

/*
  App.jsx ab sirf ek wrapper hai:
  1. Theme (colors) ko CSS variables ke roop me inject karta hai
  2. AppNavProvider se poore app ko navigation-context deta hai
  3. BottomNav aur saare screens ko render karta hai — koi switch/if-else
     routing logic yahan nahi hai, har screen apna faisla khud karta hai
*/

export default function App() {
  return (
    <AppNavProvider>
      <div className="vg-app" style={getCSSVariablesMulFiles(COLORSMulFiles)}>
        <BottomNav />

        <div id="screen_container" className="container">
          <HomeScreen />
          {/* <WorkoutsScreen /> */}
          {/* <NutritionScreen /> */}
          {/* <ProgressScreen /> */}
          {/* <SettingsScreen /> */}
        </div>
      </div>
    </AppNavProvider>
  );
}