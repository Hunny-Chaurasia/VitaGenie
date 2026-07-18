import React, { useState } from 'react';
import { useAppNav } from './AppNavContext';

/*
  Ab HomeScreen khud Context se activeScreen padhta hai aur decide karta
  hai ki render karna hai ya nahi. App.jsx me ab koi switch/routing logic
  nahi rakhni padegi — bas <HomeScreen /> ko render kar do, wo khud
  handle kar lega jab wo screen active na ho to kuch render nahi karega.

  Original had onclick="showLesson()" on several buttons (Join Challenge,
  Start New Challenge, Join Team Quest, Continue Streak) but showLesson()
  itself was never defined anywhere in script.js — only a showScreen()
  override existed. So these buttons currently do nothing functionally in
  the original either. I've wired them to a placeholder handler + left a
  clear TODO so you can decide what each should actually do (probably
  navigate to a lesson/workout screen).
*/

const DAILY_STATS = [
  { id: 'steps', icon: 'fa-solid fa-shoe-prints', label: 'Steps Today', value: '8,549', unit: 'steps', percent: '12%' },
  { id: 'calories', icon: 'fa-solid fa-fire', label: 'Calories Burned', value: '342', unit: 'kcal', percent: '8%' },
  { id: 'water', icon: 'fa-solid fa-bottle-water', label: 'Water Intake', value: '6.2', unit: 'L', percent: '📉 5%' },
  { id: 'sleep', icon: 'fa-solid fa-bed', label: 'Sleep', value: '7.8', unit: 'hrs', percent: '15%' },
];

const CHALLENGES = [
  { title: '30-Day Cardio Blast', desc: 'Complete 30 minutes of Cardio For 30 Minutes of Trait.', points: 250, joined: 1250, daysLeft: 3, progress: 60 },
  { title: '30-Day Cardio Blast', desc: 'Complete 30 minutes of Cardio For 30 Minutes of Trait.', points: 250, joined: 1250, daysLeft: 3, progress: 60 },
  { title: '30-Day Cardio Blast', desc: 'Complete 30 minutes of Cardio For 30 Minutes of Trait.', points: 250, joined: 1250, daysLeft: 3, progress: 60 },
];

const LEADERBOARD = [
  { rank: 1, name: 'Alex Thunder', level: 'Lv28', title: 'Fitness Legend', points: '12,450', streak: 45, weekChange: '+340', icon: 'fa-crown', iconClass: 'crown-community' },
  { rank: 2, name: 'Sarah Storm', level: 'Lv26', title: 'Cardio Queen', points: '11,890', streak: 38, weekChange: '+275', icon: 'fa-medal', iconClass: 'silver-community' },
  { rank: 3, name: 'Mike Muscle', level: 'Lv25', title: 'Strength Master', points: '11,200', streak: 42, weekChange: '+310', icon: 'fa-medal', iconClass: 'bronze-community' },
];

export default function HomeScreen() {
  const { activeScreen } = useAppNav();
  const [weeklyWorkoutsDone] = useState(3);
  const weeklyWorkoutsGoal = 5;

  if (activeScreen !== 'home') return null;

  // TODO: wire this to whatever "start a challenge / lesson" flow you build next
  const handleActionClick = (actionName) => {
    console.log(`${actionName} clicked — hook this up to your lesson/challenge flow`);
  };

  return (
    <div id="home">
      <div className="welcome-section">
        <div>
          <div className="level-badge">
            <div className="icon-flame"></div> Fitness Beast - Level 5
          </div>
          <h2>Welcome back, FitWarrior!</h2>
          <div className="subtitle2">Dedicated Health Enthusiast</div>

          <div>
            <div className="flex" style={{ color: 'aliceblue' }}>
              <p>Fitness Level</p>
              <p>10/100px</p>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '60%' }}></div>
            </div>
            <div id="details" className="flex">
              <div>
                <span className="head-subtitle4">90%<br /></span>
                <span className="subtitle4">Success rate</span>
              </div>
              <div>
                <span className="head-subtitle4">4,433<br /></span>
                <span className="subtitle4">Active users</span>
              </div>
              <div>
                <span className="head-subtitle4">500+<br /></span>
                <span className="subtitle4">Workouts</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="data" className="flex">
        {DAILY_STATS.map((stat, i) => (
          <div id={`data-item${i + 1}`} key={stat.id}>
            <div className="top-section">
              <div id={`avatar${i + 1}`} className="avatar"><i className={stat.icon}></i></div>
              <div className={`percent${i > 0 ? i + 1 : ''}`}>
                {stat.percent.startsWith('📉') ? stat.percent : <><i className="fa-solid fa-chart-column"></i> {stat.percent}</>}
              </div>
            </div>
            <p className="subtitle3">{stat.label}</p>
            <p className="main-value">{stat.value} <span className="unit">{stat.unit}</span></p>
          </div>
        ))}
      </div>

      <div id="Home_Data">
        <div>
          <div>
            <h2><span className="challenge-icon">⚔</span>Available Challenges</h2>
            <p className="subtitle2">Join exciting fitness challenges and compete with others</p>

            {CHALLENGES.map((c, i) => (
              <div className="Challenge-card" key={i}>
                <h3>{c.title}</h3>
                <p className="subtitle3">{c.desc}</p>
                <div className="flex">
                  <div><span className="challenge-icon"><i className="fa-solid fa-trophy"></i></span> {c.points}pts</div>
                  <div><span className="challenge-icon"><i className="fa-solid fa-people-line"></i></span>{c.joined} joined</div>
                  <div><span className="challenge-icon"><i className="fa-solid fa-user-clock"></i></span>{c.daysLeft} days left</div>
                </div>
                <small>Your Progress {c.progress}%</small>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${c.progress}%` }}></div>
                </div>
                <button className="Join-Challenge-btn" onClick={() => handleActionClick('Join Challenge')}>
                  Join Challenge
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="Quick-card">
            <h3><span className="icon"><i className="fa-solid fa-bolt-lightning"></i></span>Quick Actions</h3>
            <button id="Quest-btn" className="start-learning-btn" onClick={() => handleActionClick('Start New Challenge')}>
              <span><i className="fa-solid fa-hourglass-start"></i></span> Start New Challenge
            </button><br />
            <button className="Join-Team-Quest" onClick={() => handleActionClick('Join Team Quest')}>
              <span className="icon"><i className="fa-solid fa-people-line"></i></span> Join Team Quest
            </button><br />
            <button className="continue-streak-btn" onClick={() => handleActionClick('Continue Streak')}>
              <i className="fa-solid fa-rocket"></i> Continue Streak
            </button>
          </div>

          <div className="progress-card flex">
            <h3><i className="fa-solid fa-chart-column"></i>This Week's Progress</h3>
            <p>You've completed {weeklyWorkoutsDone} out of {weeklyWorkoutsGoal} planned workouts this week.</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${(weeklyWorkoutsDone / weeklyWorkoutsGoal) * 100}%` }}></div>
            </div>
            <small>
              {weeklyWorkoutsGoal - weeklyWorkoutsDone} more workouts to unlock the{' '}
              <span id="badge-name">"Consistency Champion" </span>badge!
              <i className="fa-solid fa-trophy"></i>
            </small>
          </div>

          <div className="progress-card">
            <h3>Peak Achievers</h3>
            <div className="leaderboard-list-community">
              {LEADERBOARD.map((p) => (
                <div className="leaderboard-item-community" key={p.rank}>
                  <div className="rank-community">
                    <i className={`fas ${p.icon} rank-icon-community ${p.iconClass}`}></i>
                    #{p.rank}
                  </div>
                  <div className="avatar-community">
                    <i className="fas fa-user"></i>
                  </div>
                  <div className="player-info-community">
                    <div className="player-name-community">{p.name}</div>
                    <div className="player-level-community">
                      <span className="level-badge-community">{p.level}</span>
                      {p.title}
                    </div>
                  </div>
                  <div className="stats-community">
                    <div className="stat-community">
                      <div className="stat-value-community">{p.points}</div>
                      <div className="stat-change-community">Points</div>
                    </div>
                    <div className="stat-community">
                      <div className="stat-value-community streak-community">{p.streak}</div>
                      <div className="stat-change-community">Streak</div>
                    </div>
                    <div className="stat-community">
                      <div className="stat-value-community positive-community">{p.weekChange}</div>
                      <div className="stat-change-community">This Week</div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex Achievers" id="Your-Ranking">
                <div>Your Ranking <br /><span id="isRanked">Not Ranked Yet</span></div>
                <div>0 Pts<br /> Start earning!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}