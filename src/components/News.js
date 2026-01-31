import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";

const News = ({ query, pageSize, apiKey }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchNews = async () => {
    setLoading(true);
    setError("");

    // eslint-disable-next-line
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${query}&pageSize=${pageSize}&apiKey=${apiKey}`;

    try {
      const res = await fetch(url);

      if (res.status === 429) {
        setError("Too many requests. Please wait and try again later.");
        setLoading(false);
        return;
      }

      const data = await res.json();

      if (data.status === "ok") setArticles(data.articles);
      else setError("Failed to load news.");
    } catch (err) {
      setError("Network error.");
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line
  }, [query]);

  return (
    <div className="container my-4">
      <h1 className="text-center" style={{ marginTop: "90px" }}>
        Top News about {query.charAt(0).toUpperCase() + query.slice(1)}
      </h1>

      {loading && <Spinner />}

      {error && <div className="alert alert-warning text-center">{error}</div>}

      <div className="row">
        {articles.map((item, index) => (
          <div className="col-md-4" key={item.url || index}>
            <Newsitem
              title={item.title}
              description={item.description}
              imageurl={item.urlToImage}
              newsUrl={item.url}
              author={item.author}
              date={item.publishedAt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
