import { createSlice } from '@reduxjs/toolkit'
import Four from '../../components/pages/Four'
import One from '../../components/pages/One'
import Three from '../../components/pages/Three'
import Two from '../../components/pages/Two'

const initialState = {
  pages: [<One />, <Two />, <Three />, <Four />],
}

export const counterSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer