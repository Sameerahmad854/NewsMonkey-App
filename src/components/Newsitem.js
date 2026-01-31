import React from "react";

const Newsitem = ({ title, description, imageurl, newsUrl, author, date }) => {
  const fallbackImage =
    "https://dummyimage.com/300x200/cccccc/000000.png&text=No+Image";

  return (
    <div className="card my-3">
      <img
        src={imageurl || fallbackImage}
        className="card-img-top"
        alt="News"
        onError={(e) => (e.target.src = fallbackImage)}
      />
      <div className="card-body">
        <h5 className="card-title">{title || "No Title Available"}</h5>
        <p className="card-text">{description || "No description available"}</p>
        <p className="card-text">
          <small className="text-muted">
            By {author || "Unknown"}{" "}
            {date ? `on ${new Date(date).toLocaleString()}` : ""}
          </small>
        </p>
        <a
          href={newsUrl}
          target="_blank"
          rel="noreferrer"
          className="btn btn-sm btn-dark"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default Newsitem;
