// src/components/News.js
import React, { useEffect, useState, useCallback } from "react";
import Spinner from "./Spinner";
import Newsitem from "./Newsitem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({ country, category, pageSize, apiKey }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  const fallbackImage =
    "https://dummyimage.com/300x200/cccccc/000000&text=No+Image";

  // Initial fetch
  const fetchNews = useCallback(async () => {
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=1&pageSize=${pageSize}`;
    try {
      const data = await fetch(url);
      const parsedData = await data.json();

      console.log("Fetched Articles:", parsedData.articles.length);
      console.log("Total Results:", parsedData.totalResults);

      if (parsedData.status === "ok") {
        setArticles(parsedData.articles || []);
        setTotalResults(parsedData.totalResults || 0);
        setPage(1);
      }
    } catch (error) {
      console.error("Error fetching news:", error);
    }
    setLoading(false);
  }, [country, category, pageSize, apiKey]);

  // Fetch more for infinite scroll
  const fetchMoreData = async () => {
    if (articles.length >= totalResults) return; // Prevent extra scroll fetch

    const nextPage = page + 1;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${nextPage}&pageSize=${pageSize}`;

    try {
      const data = await fetch(url);
      const parsedData = await data.json();

      console.log(
        `Next Page ${nextPage} Articles:`,
        parsedData.articles.length,
      );

      if (parsedData.status === "ok" && parsedData.articles.length > 0) {
        setArticles((prev) => prev.concat(parsedData.articles));
        setPage(nextPage);
      }
    } catch (error) {
      console.error("Error fetching more news:", error);
    }
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(category)} - NewsMonkey`;
    fetchNews();
  }, [category, fetchNews]);

  return (
    <div className="container my-4">
      <h1 className="text-center" style={{ marginTop: "90px" }}>
        NewsMonkey - Top {capitalizeFirstLetter(category)} Headlines
      </h1>

      {loading && articles.length === 0 && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
        scrollThreshold={0.9}
      >
        <div className="row">
          {articles.map((element, index) => (
            <div className="col-md-4" key={element.url || index}>
              <Newsitem
                title={element.title || ""}
                description={element.description || ""}
                imageurl={element.urlToImage || fallbackImage}
                newsUrl={element.url}
                author={element.author || "Unknown"}
                date={
                  element.publishedAt
                    ? new Date(element.publishedAt).toGMTString()
                    : ""
                }
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>

      {/* Spinner at bottom while loading next page */}
      {loading && articles.length > 0 && <Spinner />}
    </div>
  );
};

News.defaultProps = {
  pageSize: 5,
  category: "general",
  country: "us",
};

News.propTypes = {
  pageSize: PropTypes.number,
  category: PropTypes.string,
  country: PropTypes.string,
  apiKey: PropTypes.string.isRequired,
};

export default News;
