const Platform = () => {
  return (
    <section className="platform">
      <div className="platform-inner">
        {/* Left content */}
        <div>
          <div className="platform-badge">
            <div className="platform-badge-dot" />
            ✦ DIGIT by eGov Foundation
          </div>
          <p className="platform-eyebrow">Our open source</p>
          <h2 className="platform-title">technology-for-good platform</h2>
          <p className="platform-sub">
            DIGIT, short for Digital Infrastructure for Governance, Inclusion
            and Transformation is eGov's open-source platform with reusable
            building blocks and shared data registries that can be used to
            build solutions in multiple sectors.
          </p>
          <button className="btn-platform">Explore the platform</button>
        </div>

        {/* Right image */}
        <div className="platform-img-wrap">
          <div className="platform-img-bg">
            <img
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&q=80"
              alt="Platform user"
              loading="lazy"
            />
          </div>
          <div className="platform-badge-overlay">
            <div style={{ fontWeight: 700, fontSize: 16, color: "#7dd3fc" }}>
              Open Source
            </div>
            <div style={{ color: "rgba(255,255,255,0.7)", marginTop: 2 }}>
              MIT Licensed · Free to use
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
