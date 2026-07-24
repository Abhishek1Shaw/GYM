function GymCard({ title, description, icon }) {
  return (
    <article className="gym-card">
      <div className="gym-card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default GymCard;
