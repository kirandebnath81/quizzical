import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { v4 } from "uuid";
import getArrangedAnswers from "../../utils/getArrangedAnswers";

export const getQuizData = createAsyncThunk(
  "quiz/getQuizData",

  async (url, thunkAPI) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  quizData: [],
  totalScore: 0,
  correct: 0,
  inCorrect: 0,
  isSubmit: false,
  isLoading: false,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    selectAnswer: (state, { payload }) => {
      const quizElement = state.quizData.find(
        (data) => data.id === payload.questionId
      );

      quizElement.answers = quizElement.answers?.map((answer) =>
        answer.id === payload.ansId
          ? { ...answer, isSelect: true }
          : { ...answer, isSelect: false }
      );
    },

    setScore: (state) => {
      let score = 0;
      let correct = 0;
      let inCorrect = 0;

      state.quizData.forEach((element) => {
        element.answers.forEach((answer) => {
          if (answer.isSelect) {
            if (answer.ans === element.correctAns) {
              score += 10;
              correct += 1;
            } else {
              score -= 3;
              inCorrect += 1;
            }
          }
        });
      });

      state.quizData = state.quizData.map((data) => {
        const selectedAns = data.answers.find((answer) => answer.isSelect);

        if (selectedAns) {
          if (selectedAns.ans === data.correctAns) {
            return { ...data, answerType: "correct" };
          } else {
            return { ...data, answerType: "incorrect" };
          }
        } else {
          return { ...data, answerType: "unanswered" };
        }
      });

      state.totalScore = score;
      state.correct = correct;
      state.inCorrect = inCorrect;
      state.isSubmit = true;
    },

    clearQuiz: (state) => {
      state.quizData = [];
      state.totalScore = 0;
      state.correct = 0;
      state.inCorrect = 0;
      state.isSubmit = false;
      state.isLoading = false;
    },
  },

  extraReducers: {
    [getQuizData.pending]: (state) => {
      state.isLoading = true;
    },
    [getQuizData.fulfilled]: (state, action) => {
      state.isLoading = false;
      const modifiedData = action.payload?.map((data) => ({
        question: data.question,
        answers: getArrangedAnswers(data),
        correctAns: data.correct_answer,
        answerType: "",
        id: v4(),
      }));

      state.quizData = modifiedData;
    },
    [getQuizData.rejected]: (state, action) => {
      state.isLoading = false;
      console.log(`error occured ` + action.payload);
    },
  },
});

export const { selectAnswer, setScore, clearQuiz } = quizSlice.actions;

export default quizSlice.reducer;
