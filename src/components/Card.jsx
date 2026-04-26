const Card = ({ item }) => {
  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  return (
    <article className="news-card">
      <div className="news-card-img">
        <img src={item.image} alt={item.title} loading="lazy" />
      </div>
      <div className="news-card-body">
        <span className="news-card-category">{item.category}</span>
        <h3 className="news-card-title">{item.title}</h3>
        <div className="news-card-meta">
          {item.tags.map((tag) => (
            <span key={tag} className="news-card-tag">{tag}</span>
          ))}
        </div>
        <div className="news-card-date">{formatDate(item.date)}</div>
      </div>
    </article>
  );
};

export default Card;
