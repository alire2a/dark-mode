import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import togglerReducer from '../features/toggler/toglerSlice'

export const store = configureStore({
  reducer: {
    toggler:togglerReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
