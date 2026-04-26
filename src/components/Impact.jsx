const STATS = [
  { value: "1.1 Billion+", label: "Public services delivered" },
  { value: "50+ partners", label: "from technology, governments and NGOs" },
];

const Impact = () => {
  return (
    <section className="impact">
      <div className="impact-bg" />
      <div className="impact-overlay" />
      <div className="impact-inner">
        <div className="impact-grid">
          <div className="impact-display">
            <h2 className="impact-headline">1,000,000,100+</h2>
            <div className="impact-stats">
              {STATS.map((stat) => (
                <div key={stat.value}>
                  <div className="impact-stat-val">{stat.value}</div>
                  <div className="impact-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="impact-sub">
              Citizens availing public services through eGov's Digital Public
              Goods (DPG)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
