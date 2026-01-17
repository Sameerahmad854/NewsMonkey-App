import React, { useState } from "react";
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

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API; // your API key from env
  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <NavBar />

      {/* Top Loading Bar */}
      <LoadingBar color="#c21c3d" progress={progress} height={3} />

      <Routes>
        <Route path="/" element={<Navigate to="/general" />} />

        <Route
          path="/general"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
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
              setProgress={setProgress}
              apiKey={apiKey}
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
              setProgress={setProgress}
              apiKey={apiKey}
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
              setProgress={setProgress}
              apiKey={apiKey}
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
              setProgress={setProgress}
              apiKey={apiKey}
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
              setProgress={setProgress}
              apiKey={apiKey}
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
              setProgress={setProgress}
              apiKey={apiKey}
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
};

export default App;
