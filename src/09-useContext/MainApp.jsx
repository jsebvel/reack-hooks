import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { AboutPage } from "./AboutPage";

export const MainApp = () => {
  return (
    <div>
      <h1>MainApp!</h1>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/about">About</Link>


      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="/*" element={<Navigate to="about" />}/>
      </Routes>
    </div>
  );
};
