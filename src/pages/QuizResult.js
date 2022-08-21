import React from "react";

//styled components
import { Container } from "./styles/QuizResult.styles";
import { SButton } from "./questions/styles/Main.styles";

//redux
import { useSelector, useDispatch } from "react-redux";
import { clearQuiz } from "../features/quiz/quizSlice";

//router
import { useNavigate } from "react-router-dom";

const QuizResult = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { totalScore, correct, inCorrect } = useSelector((state) => state.quiz);
  const { timeTaken } = useSelector((state) => state.timer);

  const { min, sec } = timeTaken;

  //view solution
  const solutinHandler = () => {
    navigate(`/quiz/question/one`);
  };

  //play again
  const playHandler = () => {
    navigate(`/`);
    dispatch(clearQuiz());
  };

  return (
    <Container>
      <div className="main-title">Your Score </div>
      <div className="quiz-mark">
        <span className="total-score"> {totalScore}</span>
        <span className="total-mark"> / 100</span>
      </div>
      <SButton onClick={solutinHandler}>View Solution</SButton>
      <div className="mark-details">
        <div className="sub-title">Total Marks</div>
        {correct !== 0 && (
          <div className="mark">
            <div>
              Correct{" "}
              <span style={{ color: "grey", fontSize: "1rem" }}>
                ({correct})
              </span>
            </div>

            <div>
              <span>+</span> {correct * 10}
            </div>
          </div>
        )}

        {inCorrect !== 0 && (
          <div className="mark incorrect">
            <div>
              Incorrect{" "}
              <span style={{ color: "grey", fontSize: "1rem" }}>
                ({inCorrect})
              </span>
            </div>

            <div>
              <span>-</span> {Math.ceil(inCorrect * 3)}
            </div>
          </div>
        )}

        {10 - (correct + inCorrect) !== 0 && (
          <div className="mark">
            <div>
              Unanswered{" "}
              <span style={{ color: "grey", fontSize: "1rem" }}>
                ({10 - (correct + inCorrect)})
              </span>
            </div>

            <div>0</div>
          </div>
        )}
      </div>

      <div className="time">
        Time taken {min !== 0 && <span>{min} miniute </span>}
        {sec !== 0 && <span>{sec} seconds</span>}
      </div>

      <SButton onClick={playHandler}>Play Again</SButton>
    </Container>
  );
};

export default QuizResult;
