import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/home";
import FrequencyChart from "./pages/frequencyChart";
import Profile from "./pages/profile";
import FeedbackForm from "./pages/feedback";
function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/" Component={Home} />
          <Route path="/chart" Component={FrequencyChart} />
          <Route path="/profile" Component={Profile} />
          <Route path="/feedback" Component={FeedbackForm}></Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
