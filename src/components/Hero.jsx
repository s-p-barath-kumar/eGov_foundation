const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-inner">
        {/* Left content */}
        <div className="hero-content">
          <p className="hero-label">eGov Foundation</p>
          <h1 className="hero-heading">
            20 years of digital
            <br />
            transformation in
            <br />
            public service delivery
            <span className="hero-highlight">It's possible.</span>
          </h1>
          <p className="hero-body">
            Catalysts. Ecosystem enablers. Problem Solvers.
            <br />
            At eGov, we're driven by the power of open digital infrastructure
            and ecosystems to enable governments deliver accessible, inclusive
            and transparent services to every citizen.
          </p>
          <div className="hero-ctas">
            <button className="btn-primary">Our Approach</button>
            <button className="btn-outline">Our Impact</button>
          </div>
        </div>

        {/* Right image collage */}
        <div className="hero-image-grid">
          <div className="hero-img-main">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&q=80"
              alt="Citizens being served digitally"
              loading="lazy"
            />
          </div>
          <div className="hero-person-badge">
            <div className="badge-dot" />
            Citizens served digitally
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
