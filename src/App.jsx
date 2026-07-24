import GymCard from './components/GymCard.jsx';

function App() {
  return (
    <div className="app-shell">
      <header className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Gym Club</span>
          <h1>Train smarter. Grow stronger.</h1>
          <p>Powerful workouts, personalized plans, and a training community built for every level.</p>
          <div className="hero-actions">
            <button className="btn primary">Join Now</button>
            <button className="btn secondary">View Programs</button>
          </div>
        </div>
      </header>

      <main className="content">
        <section className="section">
          <div className="section-heading">
            <h2>Featured Classes</h2>
            <p>Choose your focus and get coached through every move.</p>
          </div>
          <div className="card-grid">
            <GymCard title="Strength Training" description="Build power with guided strength sessions and progressive overload." icon="🏋️" />
            <GymCard title="HIIT" description="High-energy intervals for maximum calorie burn and stamina." icon="🔥" />
            <GymCard title="Yoga Recovery" description="Stretch, recover, and restore mobility with calming routines." icon="🧘" />
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Gym React App. Your next workout starts here.</p>
      </footer>
    </div>
  );
}

export default App;
