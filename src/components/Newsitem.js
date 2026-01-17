import React from "react";

const Newsitem = (props) => {
  let { title, description, imageurl, newsUrl, author, date } = props;

  const fallbackImage = "https://via.placeholder.com/300x200?text=No+Image";

  return (
    <div className="card my-3">
      <img
        src={imageurl ? imageurl : fallbackImage}
        className="card-img-top"
        alt="News"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = fallbackImage;
        }}
      />

      <div className="card-body">
        <h5 className="card-title">{title ? title : "No Title Available"}</h5>

        <p className="card-text">
          {description ? description : "No description available"}
        </p>

        <p className="card-text">
          <small className="text-muted">
            By {author ? author : "Unknown"} {date ? `on ${date}` : ""}
          </small>
        </p>

        <a
          href={newsUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="btn btn-sm btn-dark"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default Newsitem;
