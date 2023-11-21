import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  currentError: boolean;
  messageError: string
} = {
  currentError: false,
  messageError: "",
};

const useError = createSlice({
  name: "search word",
  initialState,
  reducers: {
    useErrorWord: (state, action) => {
      state.currentError = action.payload.error;
      state.messageError = action.payload.message;
    },
  },
});

export const { useErrorWord } = useError.actions;
export default useError.reducer;
