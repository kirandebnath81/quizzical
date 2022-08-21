import styled from "styled-components";

export const Container = styled.div`
  margin: 30px auto 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 30px 25px;
  width: 600px;
  border-radius: 20px;
  background-color: #f9f9f9;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 35px 0px;
  h1 {
    font-size: 2.3rem;
    margin-bottom: 3px;
  }

  .instructions {
    margin-top: 20px;

    div {
      text-align: center;
      font-size: 1.4rem;
      font-weight: 600;
      margin-bottom: 5px;
    }

    ul li {
      font-size: 1.1rem;
      margin-bottom: 10px;
      list-style-position: inside;
    }
  }

  @media only screen and (max-width: 600px) {
    margin: 0px;
    padding: 100px 20px;
    width: 100%;
    height: 100vh;
    box-shadow: 0px 0px 0px 0px;
    border-radius: 0px;

    h1 {
      font-size: 2.2rem;
      margin-bottom: 10px;
    }

    p {
      line-height: 1.2rem;
      text-align: center;
      font-size: 14px;
    }

    .instructions {
      margin-top: 30px;

      div {
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 20px;
      }

      ul li {
        font-size: 1rem;
        margin-bottom: 15px;
      }
    }
  }
`;

export const SelectContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 5px;
  font-size: 1.1rem;
  div {
    margin-bottom: 20px;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  label {
    margin-bottom: 10px;
    font-weight: 600;
  }

  select {
    border: none;
    width: 100%;
    border-radius: 5px;
    padding: 10px 10px;
    font-size: 1rem;
    font-weight: 500;
    outline: none;
    user-select: none;
    cursor: pointer;

    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 3px,
      rgba(0, 0, 0, 0.2) 0px 0px 10px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

    option {
      padding: 20px 20px;
      font-size: 1rem;
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 600px) {
    margin-top: 40px;
    margin-bottom: 20px;
    width: 100%;
    div {
      width: 100%;
      margin-bottom: 30px;
    }
  }
`;
