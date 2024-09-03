// importing
import { configureStore } from "@reduxjs/toolkit";
import  CounterSlice  from "./CounterSlice";



        // "⬇️ - store name "
const    store = configureStore({
//"⬇️-all the reducer (single) "
  reducer: {
//"⬇️-name of state"      //"⬇️-name of reducer/slice/jo vi slice me default export kara tha"
counterx        :            CounterSlice,
  },
});
export default store;
