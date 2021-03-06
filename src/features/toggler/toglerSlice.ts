import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface TogglerState {
  value: boolean;
  status: "idle" | "loading" | "failed";
}

const persistedIsDark = localStorage.getItem("isDarkMode");

const initialState: TogglerState = {
  value: persistedIsDark ? JSON.parse(persistedIsDark) : false,
  status: "idle",
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
// export const incrementAsync = createAsyncThunk(
//   "counter/fetchCount",
//   async (amount: number) => {
//     const response = await fetchCount(amount);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

export const togglerSlice = createSlice({
  name: "toggler",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    toggle: state => {
      state.value = !state.value;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  // extraReducers: builder => {
  //   builder
  //     .addCase(incrementAsync.pending, state => {
  //       state.status = "loading";
  //     })
  //     .addCase(incrementAsync.fulfilled, (state, action) => {
  //       state.status = "idle";
  //       state.value += action.payload;
  //     });
  // },
});

export const { toggle } = togglerSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTheme = (state: RootState) => state.toggler.value;

export default togglerSlice.reducer;
