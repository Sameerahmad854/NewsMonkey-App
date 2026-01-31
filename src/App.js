import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import News from "./components/News";

const App = () => {
  const apiKey = "92c79a53d9504c6aae36b9323386a99b";
  const categories = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
    "tesla",
  ];

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/general" />} />

        {categories.map((cat) => (
          <Route
            key={cat}
            path={`/${cat}`}
            element={<News apiKey={apiKey} query={cat} pageSize={10} />}
          />
        ))}
      </Routes>
    </>
  );
};

export default App;
