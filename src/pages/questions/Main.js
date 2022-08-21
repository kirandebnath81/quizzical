import React, { useEffect } from "react";

//toast
import { toast } from "react-toastify";

//icons
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { IoIosArrowDropleftCircle } from "react-icons/io";

//styled component
import {
  Container,
  Box,
  ButtonContainer,
  Button,
  SButton,
  AnswerMsgBox,
} from "./styles/Main.styles";

//style
import answerStyle from "./styles/answerStyle";

import getAnswerMsg from "../../utils/getAnswerMsg";

//redux
import { useSelector, useDispatch } from "react-redux";
import { selectAnswer, setScore } from "../../features/quiz/quizSlice";
import { setTimer, closeTimer } from "../../features/timer/timerSlice";

//router
import { useNavigate } from "react-router-dom";

const Main = ({ index, previousPage, nextPage }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { quizData, isSubmit, isLoading } = useSelector((state) => state.quiz);
  const { timer, isStart, isTimeup } = useSelector((state) => state.timer);

  const { min, sec } = timer;
  const data = quizData.length > 0 && quizData[index];

  //timer
  useEffect(() => {
    const timer = setInterval(() => {
      if (isStart && !isLoading && !isTimeup) {
        dispatch(setTimer());
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [isStart, isLoading, dispatch, isTimeup]);

  //select ans
  const clickHandler = (ansId, questionId) => {
    if (isSubmit) {
      return;
    }
    if (isTimeup) {
      toast.warning("Time is over, you cannot select now. Please submit");
      return;
    }
    dispatch(selectAnswer({ questionId, ansId }));
  };

  //navigate
  //previus
  const previousHandler = () => {
    if (previousPage !== "") {
      navigate(`/quiz/question/${previousPage}`);
    } else {
      toast.info("This is the first question");
    }
  };

  // next
  const nextHandler = () => {
    if (nextPage !== "") {
      navigate(`/quiz/question/${nextPage}`);
    } else {
      toast.info("You have reached the last question");
    }
  };

  //submit
  const submitHandler = () => {
    dispatch(setScore());
    dispatch(closeTimer());
    navigate(`/quiz/result`);
  };

  //back page
  const backHandler = () => {
    navigate(`/quiz/result`);
  };

  return (
    <Container>
      {isLoading ? (
        <h1 className="quiz-loading">Loading...</h1>
      ) : (
        <>
          {isSubmit && (
            <IoIosArrowDropleftCircle
              className="backIcon"
              onClick={backHandler}
            />
          )}
          <Box>
            <div className="quiz-info">
              <div>Q. {index + 1} of 10</div>
              <div className="quiz-timer">
                <strong>{min < 10 ? "0" + min : min}</strong> :
                <strong>{sec < 10 ? "0" + sec : sec}</strong> m
              </div>
            </div>

            {isSubmit && <AnswerMsgBox>{getAnswerMsg(data)}</AnswerMsgBox>}

            <div
              className="quiz-question"
              dangerouslySetInnerHTML={{ __html: data?.question }}
            />
            <ol className="quiz-answers">
              {data.answers?.map(({ ans, id, isSelect }) => (
                <li
                  dangerouslySetInnerHTML={{ __html: ans }}
                  key={id}
                  className="quiz-ans"
                  onClick={() => clickHandler(id, data.id)}
                  style={answerStyle(isSelect, ans, data.correctAns, isSubmit)}
                />
              ))}
            </ol>

            <ButtonContainer>
              <Button onClick={previousHandler}>
                <GrFormPrevious className="icon" /> Previus
              </Button>

              <div>
                {nextPage ? (
                  <Button onClick={nextHandler}>
                    Next <GrFormNext className="icon" />
                  </Button>
                ) : isSubmit ? (
                  <div>
                    <Button onClick={nextHandler}>
                      Next <GrFormNext className="icon" />
                    </Button>
                  </div>
                ) : (
                  <SButton className="btn next-btn" onClick={submitHandler}>
                    Submit
                  </SButton>
                )}
              </div>
            </ButtonContainer>
          </Box>
        </>
      )}
    </Container>
  );
};

export default Main;
