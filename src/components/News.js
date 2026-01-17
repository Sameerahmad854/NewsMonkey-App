import React, { useEffect, useState, useCallback } from "react";
import Spinner from "./Spinner";
import Newsitem from "./Newsitem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const { country, category, pageSize, apiKey, setProgress } = props;

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  const fetchNews = useCallback(
    async (pageNumber) => {
      try {
        setProgress && setProgress(30);

        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${pageNumber}&pageSize=${pageSize}`;

        setLoading(true);
        const data = await fetch(url);
        setProgress && setProgress(60);

        const parsedData = await data.json();
        setProgress && setProgress(100);

        if (parsedData.status === "ok") {
          setArticles(parsedData.articles || []);
          setTotalResults(parsedData.totalResults || 0);
          setPage(pageNumber);
          setLoading(false);
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error("Fetch Error:", error);
        setLoading(false);
      }
    },
    [country, category, pageSize, apiKey, setProgress] // ✅ specific props only
  );

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${nextPage}&pageSize=${pageSize}`;

    const data = await fetch(url);
    const parsedData = await data.json();

    if (parsedData.status === "ok") {
      setArticles(articles.concat(parsedData.articles || []));
      setPage(nextPage);
      setTotalResults(parsedData.totalResults || 0);
    }
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(category)} - NewsMonkey`;
    fetchNews(1);
  }, [category, fetchNews]); // ✅ ESLint clean

  const fallbackImage = "https://placehold.co/300x200?text=No+Image";

  return (
    <div className="container my-4">
      <h1 className="text-center" style={{ marginTop: "90px" }}>
        NewsMonkey - Top {capitalizeFirstLetter(category)} Headlines
      </h1>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
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

      {loading && <Spinner />}
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
  setProgress: PropTypes.func,
};

export default News;
