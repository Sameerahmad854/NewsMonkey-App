import React, { Component } from "react";
import Spinner from "./Spinner";

import Newsitem from "./Newsitem";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    pageSize: 5,
    category: "general",
  };

  static propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string,
    country: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    this.fetchNews();
  }

  fetchNews = async (page = 1) => {
    this.setState({ loading: true });
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=92c79a53d9504c6aae36b9323386a99b&page=${page}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();

      if (parsedData.status === "ok") {
        this.setState({
          articles: parsedData.articles || [],
          totalResults: parsedData.totalResults || 0,
          loading: false,
          page: page,
        });
      } else {
        console.error("API Error:", parsedData.message);
        this.setState({ loading: false, articles: [] });
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      this.setState({ loading: false, articles: [] });
    }
  };

  handleNextClick = () => {
    if (
      this.state.page + 1 <=
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
      this.fetchNews(this.state.page + 1);
    }
  };

  handlePrevClick = () => {
    if (this.state.page > 1) {
      this.fetchNews(this.state.page - 1);
    }
  };

  render() {
    const fallbackImage = "https://via.placeholder.com/300x200?text=No+Image";

    return (
      <div className="container my-3">
        <h1 className="text-center">
          NewsMonkey - Top Headlines ({this.props.country.toUpperCase()})
        </h1>

        {this.state.loading && <Spinner />}

        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => (
              <div className="col-md-4" key={element.url}>
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

        <div className="container d-flex justify-content-between my-3">
          <button
            disabled={this.state.page <= 1 || this.state.loading}
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Prev
          </button>
          <button
            disabled={
              this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize) ||
              this.state.loading
            }
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
