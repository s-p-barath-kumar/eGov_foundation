const TESTIMONIALS = [
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    quote: '"I log my health details once a week for something like a gram. The process is quick and easy."',
    name: "Rajan Kumar",
    role: "Citizen, Andhra Pradesh",
  },
  {
    img: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&q=80",
    quote: '"Using our digital platform, I can help the government find the best talent from the ground."',
    name: "Meena Sharma",
    role: "Social worker, Maharashtra",
  },
];

const About = () => {
  return (
    <section className="about">
      <div className="about-inner">
        <h2 className="about-heading">
          20 years of reimagining for citizens and
          <br />
          <span>sustaining change</span>
        </h2>
        <p className="about-body">
          Technology is powerful but is only one piece of the puzzle, when it
          comes to enhancing the quality of life for every citizen. To have
          sustainable impact at scale, the collective energy of local networks
          to solve local problems needs to be tapped into. Our Partners &amp;
          networks bring this collective energy to life. The ecosystem already
          exists; our task is to facilitate and amplify their efforts. For 20
          years, we've been turning small steps into lasting, meaningful change,
          so that no citizen is left behind.
        </p>

        <div className="testimonials">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-img">
                <img src={t.img} alt={t.name} loading="lazy" />
              </div>
              <div className="testimonial-body">
                <p className="testimonial-quote">{t.quote}</p>
                <p className="testimonial-name">{t.name}</p>
                <p className="testimonial-role">{t.role}</p>
                <button className="play-btn" aria-label="Play video">
                  <svg width="12" height="14" viewBox="0 0 24 24" fill="white">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="btn-outline" style={{ margin: "0 auto", display: "block" }}>
          About Us
        </button>
      </div>
    </section>
  );
};

export default About;
