import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    value2: 100,
  },
  reducers: {
    increment: (state) => {
      state.value +=1
    },
    decrement: (state) => {
      state.value -=1
    },
    incrementByAmount: (state,action) => {
      state.value += action.payload
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload
    },
    multiplyByAmount: (state, action) => {
      state.value = state.value * action.payload
    },
    divideByAmount: (state, action) => {
      state.value = state.value / action.payload
    },
    multiply: (state,action) => {
      state.value2 = state.value2 * action.payload
    },
    reset: (state) => {
      state.value = 0
    }
  },
})

export const {increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  multiplyByAmount,
  divideByAmount,
  multiply,
  reset
      } = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

export const decrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(decrementByAmount(amount))
  }, 1000)
}

export const multiplyAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(multiplyByAmount(amount))
  }, 1000)
}

export default counterSlice.reducer
