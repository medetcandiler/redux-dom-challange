import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counterValue: 0,
  isPaused: false,
  likes: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementCounter: (state) => {
      state.counterValue += 1;
    },
    decrementCounter: (state) => {
      state.counterValue -= 1;
    },
    setPaused: (state) => {
      state.isPaused = !state.isPaused;
    },
    setLikes: (state, action) => {
      const { counterValue } = action.payload;
      const checkSameCounterLikes = state.likes.find(like => like.counterValue === counterValue)

      if(checkSameCounterLikes){
        checkSameCounterLikes.count += 1;
      }else {
        state.likes.push({ counterValue, count:1})
      }
    }

  }
})

export const { incrementCounter, decrementCounter, setPaused, setLikes } = counterSlice.actions
export default counterSlice.reducer;