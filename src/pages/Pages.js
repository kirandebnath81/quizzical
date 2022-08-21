import React from "react";

//components
import Home from "./Home";
import One from "./questions/One";
import Two from "./questions/Two";
import Three from "./questions/Three";
import Four from "./questions/Four";
import Five from "./questions/Five";
import Six from "./questions/Six";
import Seven from "./questions/Seven";
import Eight from "./questions/Eight";
import Nine from "./questions/Nine";
import Ten from "./questions/Ten";
import QuizResult from "./QuizResult";

//router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Pages = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/question/one" element={<One />} />
        <Route path="quiz/question/two" element={<Two />} />
        <Route path="quiz/question/three" element={<Three />} />
        <Route path="quiz/question/four" element={<Four />} />
        <Route path="quiz/question/five" element={<Five />} />
        <Route path="quiz/question/six" element={<Six />} />
        <Route path="quiz/question/seven" element={<Seven />} />
        <Route path="quiz/question/eight" element={<Eight />} />
        <Route path="quiz/question/nine" element={<Nine />} />
        <Route path="quiz/question/ten" element={<Ten />} />
        <Route path="quiz/result" element={<QuizResult />} />
      </Routes>
    </Router>
  );
};

export default Pages;
