import React, { Component } from "react";
import Spinner from "./Spinner";
import Newsitem from "./Newsitem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

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

  capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )}-NewsMonkey`;
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

  fetchMoreData = async () => {
    const nextPage = this.state.page + 1;
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=92c79a53d9504c6aae36b9323386a99b&page=${nextPage}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();

      if (parsedData.status === "ok") {
        this.setState({
          articles: this.state.articles.concat(parsedData.articles || []),
          totalResults: parsedData.totalResults || 0,
          page: nextPage,
        });
      }
    } catch (error) {
      console.error("Fetch More Error:", error);
    }
  };

  render() {
    const fallbackImage =
      "https://placehold.co/300x200?text=No+Image&bg=cccccc&fg=000000";

    return (
      <div className="container my-4">
        <h1 className="text-center">
          {`NewsMonkey - Top ${this.capitalizeFirstLetter(
            this.props.category
          )} Headlines`}
        </h1>

        {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="row">
            {this.state.articles.map((element) => (
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
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
