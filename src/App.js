import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress });
  };

  render() {
    return (
      <Router>
        <NavBar />

        <LoadingBar color="#c21c3d" progress={this.state.progress} height={3} />

        <Routes>
          <Route path="/" element={<Navigate to="/general" />} />

          <Route
            path="/general"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="general"
                pageSize={5}
                country="us"
                category="general"
              />
            }
          />

          <Route
            path="/business"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="business"
                pageSize={5}
                country="us"
                category="business"
              />
            }
          />

          <Route
            path="/entertainment"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="entertainment"
                pageSize={5}
                country="us"
                category="entertainment"
              />
            }
          />

          <Route
            path="/health"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="health"
                pageSize={5}
                country="us"
                category="health"
              />
            }
          />

          <Route
            path="/science"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="science"
                pageSize={5}
                country="us"
                category="science"
              />
            }
          />

          <Route
            path="/sports"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="sports"
                pageSize={5}
                country="us"
                category="sports"
              />
            }
          />

          <Route
            path="/technology"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="technology"
                pageSize={5}
                country="us"
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    );
  }
}
