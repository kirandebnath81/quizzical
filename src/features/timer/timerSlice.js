import { createSlice } from "@reduxjs/toolkit";

//toast
import { toast } from "react-toastify";

const initialState = {
  timer: { min: 10, sec: 0 },
  timeTaken: { min: 0, sec: 0 },
  isStart: false,
  isTimeup: false,
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    startTimer: (state) => {
      state.isStart = true;
    },
    closeTimer: (state) => {
      state.isStart = false;
      state.isTimeup = false;
      state.timer = { min: 10, sec: 0 };
    },
    setTimer: (state) => {
      const { min, sec } = state.timer;

      if (sec === 0) {
        if (min > 0) {
          state.timer.sec = 59;
          state.timer.min -= 1;
        }

        if (min === 0) {
          state.isTimeup = true;
          toast.warning("Your time is over please submit to see score");
        }
      } else if (sec > 0) {
        state.timer.sec -= 1;
      }

      if (min !== 0 || sec !== 0) {
        if (state.timeTaken.sec === 59) {
          state.timeTaken.min += 1;
          state.timeTaken.sec = 0;
        } else {
          state.timeTaken.sec += 1;
        }
      }
    },
  },
});

export const { startTimer, closeTimer, setTimer, setTimeup } =
  timerSlice.actions;
export default timerSlice.reducer;
