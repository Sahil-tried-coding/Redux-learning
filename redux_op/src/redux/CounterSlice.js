// importing
import {createSlice} from '@reduxjs/toolkit'

// yaha pe slices bante
      "⬇️-name of slice"
const CounterSlice = createSlice({
//⬇️-name of state
  name:"counterx",
//⬇️-initial value of state
  initialState : {
    value:65
  },
//⬇️-all reducers function (*redecusers*)
  reducers:{
    //⬇️                ⬇️
  // name of action  // reducer actual logic
  increment :       (state,action) => {state.value += 1},
  decrement :       (state,action) => {state.value += 1},
  incByVal :        (state,action) => {state.value += action.payload}
  }
})

"⬇️ - exporting actions(piular) "
export const {increment,decrement,incByVal} = CounterSlice.actions
"⬇️ - exporting reducer (singular) "
export default CounterSlice.reducer