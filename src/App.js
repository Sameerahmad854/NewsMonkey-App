import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import News from "./components/News";

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/general" />} />

        <Route
          path="/general"
          element={
            <News
              apiKey={apiKey}
              key="general"
              category="general"
              country="us"
              pageSize={5}
            />
          }
        />

        <Route
          path="/business"
          element={
            <News
              apiKey={apiKey}
              key="business"
              category="business"
              country="us"
              pageSize={10}
            />
          }
        />

        <Route
          path="/entertainment"
          element={
            <News
              apiKey={apiKey}
              key="entertainment"
              category="entertainment"
              country="us"
              pageSize={5}
            />
          }
        />

        <Route
          path="/health"
          element={
            <News
              apiKey={apiKey}
              key="health"
              category="health"
              country="us"
              pageSize={5}
            />
          }
        />

        <Route
          path="/science"
          element={
            <News
              apiKey={apiKey}
              key="science"
              category="science"
              country="us"
              pageSize={5}
            />
          }
        />

        <Route
          path="/sports"
          element={
            <News
              apiKey={apiKey}
              key="sports"
              category="sports"
              country="us"
              pageSize={5}
            />
          }
        />

        <Route
          path="/technology"
          element={
            <News
              apiKey={apiKey}
              key="technology"
              category="technology"
              country="us"
              pageSize={5}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
