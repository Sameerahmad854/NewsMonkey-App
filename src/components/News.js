import React, { Component } from "react";
import Spinner from "./Spinner";
import Newsitem from "./Newsitem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    pageSize: 5,
    category: "general",
    country: "us",
  };

  static propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string,
    country: PropTypes.string,
    setProgress: PropTypes.func,
  };

  capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
      loading: true,
    };

    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - NewsMonkey`;
  }

  componentDidMount() {
    this.fetchNews(1);
  }

  fetchNews = async (page) => {
    try {
      this.props.setProgress && this.props.setProgress(30);

      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${page}&pageSize=${this.props.pageSize}`;

      let data = await fetch(url);
      this.props.setProgress && this.props.setProgress(60);

      let parsedData = await data.json();
      this.props.setProgress && this.props.setProgress(100);

      if (parsedData.status === "ok") {
        this.setState({
          articles: parsedData.articles || [],
          totalResults: parsedData.totalResults || 0,
          page: page,
          loading: false,
        });
      } else {
        this.setState({ loading: false });
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      this.setState({ loading: false });
    }
  };

  fetchMoreData = async () => {
    const nextPage = this.state.page + 1;

    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${nextPage}&pageSize=${this.props.pageSize}`;

      let data = await fetch(url);
      let parsedData = await data.json();

      if (parsedData.status === "ok") {
        this.setState({
          articles: this.state.articles.concat(parsedData.articles || []),
          page: nextPage,
          totalResults: parsedData.totalResults || 0,
        });
      }
    } catch (error) {
      console.error("Fetch More Error:", error);
    }
  };

  render() {
    const fallbackImage = "https://placehold.co/300x200?text=No+Image";

    return (
      <div className="container my-4">
        <h1 className="text-center">
          NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h1>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="row">
            {this.state.articles.map((element, index) => (
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
      </div>
    );
  }
}

export default News;
