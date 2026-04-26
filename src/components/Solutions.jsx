import { useState } from "react";
import { SOLUTION_CARDS } from "../data";

const CATEGORIES = Object.keys(SOLUTION_CARDS);

const Solutions = () => {
  const [active, setActive] = useState("Public Health");

  return (
    <section className="solutions">
      <div className="solutions-inner">
        {/* Left: heading + category list */}
        <div className="solutions-left">
          <h2 className="solutions-heading">
            Big problems need
            <br />
            <strong>bold approaches</strong>
          </h2>
          <ul className="category-list">
            {CATEGORIES.map((cat) => (
              <li key={cat}>
                <button
                  className={`category-item${active === cat ? " active" : ""}`}
                  onClick={() => setActive(cat)}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: solution cards */}
        <div className="solution-cards">
          {(SOLUTION_CARDS[active] || []).map((card, i) => (
            <article key={i} className="solution-card">
              <div className="solution-card-img">
                <img src={card.img} alt={card.label} loading="lazy" />
              </div>
              <div className="solution-card-body">
                <div className={`solution-card-stat${card.color ? " " + card.color : ""}`}>
                  {card.stat}
                </div>
                <p className="solution-card-title">{card.label}</p>
                <button className="btn-read-more">Read More</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
