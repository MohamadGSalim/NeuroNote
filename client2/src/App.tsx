import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/home";
import Diary from "./pages/diary";
import Feedback from "./pages/feedback";
import ThankYou from "./pages/thankyou";
import FrequencyChart from "./pages/frequencyChart";
import Profile from "./pages/profile";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/login" element = {<Login />} />
          <Route path="/register" element = {<Register />} />
          <Route path="/" element = {<Home />} />
          <Route path="/diary" element = {<Diary />} />
          <Route path="/feedback" element = {<Feedback />} />
          <Route path="/thankyou" element = {<ThankYou />} />
          <Route path="/chart" Component={FrequencyChart} />
          <Route path="/profile" Component={Profile} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
