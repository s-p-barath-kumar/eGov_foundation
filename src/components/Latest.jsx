import { useState, useEffect, useMemo, useCallback } from "react";
import { MOCK_DATA, CATEGORIES } from "../data";
import Card from "./Card";

const SkeletonCard = () => (
  <div style={{ borderRadius: 16, border: "1px solid #e2e8f0", overflow: "hidden" }}>
    <div className="skeleton" style={{ height: 180 }} />
    <div style={{ padding: "18px 20px" }}>
      <div className="skeleton" style={{ height: 12, width: "40%", borderRadius: 8, marginBottom: 12 }} />
      <div className="skeleton" style={{ height: 16, width: "90%", borderRadius: 8, marginBottom: 8 }} />
      <div className="skeleton" style={{ height: 16, width: "70%", borderRadius: 8, marginBottom: 16 }} />
      <div className="skeleton" style={{ height: 12, width: "60%", borderRadius: 8 }} />
    </div>
  </div>
);

const Latest = () => {
  const [activeCategory, setActiveCategory] = useState("What's New");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  const handleCategoryChange = useCallback((cat) => {
    setActiveCategory(cat);
  }, []);

  const handleSearchChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const filtered = useMemo(() => {
    let data = MOCK_DATA;
    if (activeCategory !== "What's New") {
      data = data.filter((d) => d.category === activeCategory);
    }
    if (search.trim()) {
      data = data.filter((d) =>
        d.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    return data;
  }, [activeCategory, search]);

  return (
    <section className="latest">
      <div className="latest-inner">
        <h2 className="section-heading">
          Latest at <span className="brand-text">eGov</span>
        </h2>

        {/* Filter bar */}
        <div className="filter-bar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-tab${activeCategory === cat ? " active" : ""}`}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
            </button>
          ))}
          <div className="search-wrap">
            <span className="search-icon">🔍</span>
            <input
              className="search-input"
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        {/* Loading skeleton */}
        {loading ? (
          <div className="loading-grid">
            {[1, 2, 3].map((i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          /* Empty state */
          <div className="empty-state">
            <div className="empty-state-icon">📭</div>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
              No results found
            </h3>
            <p style={{ fontSize: 14 }}>
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        ) : (
          /* Cards grid */
          <>
            <div className="cards-grid">
              {filtered.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
            <button className="btn-see-all">See All</button>
          </>
        )}
      </div>
    </section>
  );
};

export default Latest;
