import styled from "styled-components";

export const Container = styled.div`
  .quiz-loading {
    text-align: center;
    margin-top: 70px;
    font-size: 2.5rem;
  }

  .backIcon {
    font-size: 2rem;
    position: absolute;
    top: 30px;
    left: 100px;
    box-shadow: rgba(0, 0, 0, 0.6) 0px 0px 15px 0px;
    border-radius: 50%;
    cursor: pointer;
    transition: 300ms box-shadow;

    &:active {
      box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px;
    }
  }

  @media only screen and (max-width: 600px) {
    .backIcon {
      top: 20px;
      left: 25px;
      font-size: 1.6rem;
    }
  }
`;

export const Box = styled.div`
  margin: 30px auto 30px;
  width: 620px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

  .quiz-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    font-size: 1.15rem;
    font-weight: 600;
  }

  .quiz-timer {
    display: flex;
    justify-content: space-around;
    strong {
      text-align: center;
      width: 30px;
    }
  }

  .quiz-question {
    font-size: 1.18rem;
    line-height: 1.55rem;
    user-select: none;
  }

  .quiz-answers {
    margin-top: 35px;
    list-style-type: upper-alpha;
    list-style-position: inside;
    font-size: 17px;

    .quiz-ans {
      width: 100%;
      padding: 11px 15px;
      border-radius: 5px;
      margin-bottom: 30px;
      cursor: pointer;
      user-select: none;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 3px,
        rgba(0, 0, 0, 0.2) 0px 0px 10px -3px,
        rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

      transition: 150ms background-color ease-in-out, 150ms color ease-in-out;

      &:hover {
        background-color: #777c7b;
        color: white;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    margin: 0px;
    width: 100%;
    padding: 100px 20px;

    border-radius: 0px;
    box-shadow: 0px 0px 0px 0px;

    .quiz-info {
      margin-bottom: 15px;
      font-size: 1rem;
    }

    .quiz-question {
      font-size: 1.07rem;
      line-height: 1.4rem;
    }

    .quiz-answers {
      font-size: 1rem;

      .quiz-ans {
        width: 100%;
        padding: 10px 15px;
      }
    }
  }
`;

export const AnswerMsgBox = styled.div`
  .ans-type {
    padding: 8px 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    font-weight: 550;
    user-select: none;
  }

  .correct-ans {
    background-color: #e2ffe4;
    .icon {
      color: var(--correct-ans-color);
      font-size: 2rem;
      font-weight: bold;
      margin-right: 10px;
    }

    span {
      color: var(--correct-ans-color);
      font-size: 1.3rem;
      font-weight: bold;
      margin-left: 10px;
    }
  }

  .incorrect-ans {
    background-color: #fff0f0;
    .icon {
      color: var(--incorrect-ans-color);
      font-weight: 600;
      margin-right: 10px;
      font-size: 1.3rem;
    }
    span {
      color: var(--incorrect-ans-color);
      font-size: 1.2rem;
      font-weight: bold;
      margin-left: 10px;
    }
  }
  .not-answered {
    background-color: #f5f5f5;
    span {
      font-size: 1.2rem;
      font-weight: bold;
      margin-left: 10px;
    }
  }

  @media only screen and (max-width: 600px) {
    .ans-type {
      margin: 20px 0px;
      align-items: flex-start;
    }

    .correct-ans {
      .icon {
        font-size: 1.5rem;
      }

      span {
        font-size: 1.1rem;
      }
    }

    .incorrect-ans {
      .icon,
      span {
        font-size: 1.2rem;
      }
    }
    .not-answered {
      span {
        font-size: 1.2rem;
      }
    }
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  border: none;
  height: 30px;
  width: 100px;
  cursor: pointer;
  font-weight: 500;
  font-size: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 3px;
  background-color: white;
  box-shadow: inset rgba(0, 0, 0, 0.4) 0px 0px 3px 1px;
  user-select: none;
  font-family: "Montserrat", sans-serif;

  .icon {
    font-size: 1.2rem;
    color: white;
  }

  &:active {
    box-shadow: inset rgba(0, 0, 0, 0.6) 0px 0px 15px 0px;
  }
`;
export const SButton = styled.button`
  border: none;
  height: 30px;
  width: 140px;
  cursor: pointer;
  font-weight: 500;
  font-size: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  background-color: white;
  user-select: none;
  box-shadow: 0px 2px 5px 0px grey;
  transition: 200ms all ease-in;
  font-family: "Montserrat", sans-serif;
  padding: 10px;
  font-weight: 600;

  &:hover {
    background-color: black;
    color: white;
    box-shadow: 0px 0px 0px 0px grey;
  }
`;
