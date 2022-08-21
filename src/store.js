import { configureStore } from "@reduxjs/toolkit";

import quizReducer from "./features/quiz/quizSlice";
import timerReducer from "./features/timer/timerSlice";

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    timer: timerReducer,
  },
});
