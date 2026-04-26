const SUPPORTERS = [
  "◎  Logo",
  "RuLe NIRMITI EARTH",
  "TATA TRUSTS",
  "THE GOAL FUND",
  "NATIONAL HEALTH AUTHORITY",
];

const Supporters = () => {
  return (
    <section className="supporters">
      <div className="supporters-inner">
        <h2 className="supporters-heading">
          Our <strong>Supporters</strong>
        </h2>
        <div className="logos-grid">
          {SUPPORTERS.map((name) => (
            <div key={name} className="logo-item">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Supporters;
