import { createSlice } from "@reduxjs/toolkit";
import { IMeaning } from "../../interface";

const initialState: {
  dataWord: {
    phonetic: string;
    word: string;
    listMeaning: IMeaning[];
    sourceUrl: string | null;
  };
} = {
  dataWord: { phonetic: "", word: "", listMeaning: [], sourceUrl: null },
};

const useWord = createSlice({
  name: "search word",
  initialState,
  reducers: {
    SearchWord: (state, action) => {
      state.dataWord = action.payload;
    },
  },
});

export const { SearchWord } = useWord.actions;
export default useWord.reducer;
