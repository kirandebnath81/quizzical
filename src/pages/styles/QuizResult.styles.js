import styled from "styled-components";

export const Container = styled.div`
  background-color: #f9f9f9;
  width: 600px;
  margin: 30px auto 0px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 35px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 20px;
  border-radius: 20px;

  .main-title {
    font-size: 2.7rem;
    font-weight: 600;
  }

  .quiz-mark {
    margin: 20px 0px;
    .total-score {
      font-weight: 600;
      font-size: 4rem;
    }
    .total-mark {
      color: grey;
      font-size: 2rem;
    }
  }

  .mark-details {
    width: 300px;
    margin: 30px;
    .sub-title {
      font-size: 1.5rem;
      font-weight: 500;
      margin: 20px 0px 15px;
    }

    .mark {
      font-size: 1.3rem;
      font-weight: 600;
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
      span {
        color: #41f579;
        font-size: 1.4rem;
      }
    }

    .incorrect {
      span {
        color: #ff5f5f;
      }
    }
  }

  .time {
    margin-bottom: 20px;
    font-size: 1.15rem;
    word-spacing: 2px;

    span {
      font-weight: bold;
      font-size: 1.3rem;
    }
  }

  @media only screen and (max-width: 600px) {
    height: 100vh;
    width: 100%;
    margin: 0px;
    box-shadow: 0px 0px 0px 0px;
    border-radius: 0px;

    .time {
      margin-bottom: 30px;
      font-size: 1.15rem;
      word-spacing: 2px;
      text-align: center;
    }
  }
`;
