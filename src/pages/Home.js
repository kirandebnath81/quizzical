import React, { useState } from "react";

// styled components
import { Container, SelectContainer } from "./styles/Home.styles";
import { SButton } from "./questions/styles/Main.styles";

//utils
import { quizCategory } from "../utils/getCategory";
import { getQuizUrl } from "../utils/getQuizUrl";

//redux
import { useDispatch } from "react-redux";
import { getQuizData } from "../features/quiz/quizSlice";
import { startTimer } from "../features/timer/timerSlice";

//router
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [quizInfo, setQuizInfo] = useState({ difficulty: "", category: "" });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setQuizInfo((prev) => ({ ...prev, [name]: value }));
  };

  //start quiz
  const clickHandler = () => {
    const { difficulty, category } = quizInfo;
    dispatch(getQuizData(getQuizUrl(difficulty, category)));
    dispatch(startTimer());
    navigate("/quiz/question/one");
  };

  return (
    <Container>
      <h1>Quizzical</h1>
      <p>A quiz game for testing your knowledge on different subjects.</p>
      <div className="instructions">
        <div>Instructions</div>
        <ul>
          <li>The questions will be in MCQ type.</li>
          <li>There will be total 10 questions. </li>
          <li>There will be total 10 minutes time. </li>
          <li> 10 marks for correct answer. </li>
          <li> -3 marks for incorrect answer. </li>
        </ul>
      </div>
      <SelectContainer>
        <div>
          <label htmlFor="category">Select Category</label>
          <select
            name="category"
            id="category"
            value={quizInfo.category}
            onChange={(e) => changeHandler(e)}
          >
            <option value="">Any Category</option>
            {quizCategory.map(({ type, num, id }) => (
              <option key={id} value={num}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="difficult">Select Difficulty </label>
          <select
            name="difficulty"
            id="difficult"
            value={quizInfo.difficulty}
            onChange={(e) => changeHandler(e)}
          >
            <option value="">Any Category</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
      </SelectContainer>
      <SButton onClick={clickHandler}>Start</SButton>
    </Container>
  );
};

export default Home;
