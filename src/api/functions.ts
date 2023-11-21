import axios from "axios";
import { store } from "./redux/configRedux";
import { SearchWord } from "./redux/useWord/reducer";
import {
  IMeaning,
  IMeaningApi,
  IMeaningDataApi,
  IMeaningDefinitions,
} from "./interface";
import { useErrorWord } from "./redux/useError/reducer";

export async function getDataWord(word: string) {
  store.dispatch(useErrorWord({ error: false, message: "" }));

  const getData = await axios
    .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .catch((err) => {
      store.dispatch(useErrorWord({ error: true, message: "word" }));
      console.error(err);
    });

  let listsMeaningCurrent: {
    phonetic: string;
    word: string;
    listMeaning: IMeaning[];
    sourceUrl: string | null;
  } = {
    phonetic: "",
    word: "",
    sourceUrl: "",
    listMeaning: [],
  };

  getData?.data.forEach((item: IMeaningDataApi) => {
    item.meanings.forEach((meaning: IMeaningApi) => {
      if (
        !listsMeaningCurrent.listMeaning.find(
          (item: IMeaning) => item.partOfSpeech === meaning.partOfSpeech
        )
      ) {
        const data = {
          partOfSpeech: meaning.partOfSpeech,
          definitions: meaning.definitions.map(
            (item: IMeaningDefinitions) => item
          ),
          synonyms: meaning.synonyms,
        };

        listsMeaningCurrent.listMeaning.push(data);
      }
    });

    listsMeaningCurrent.sourceUrl = item.sourceUrls[0]
      ? item.sourceUrls[0]
      : null;
    listsMeaningCurrent.word = item.word;
    listsMeaningCurrent.phonetic = item.phonetics[0]?.text;
  });

  store.dispatch(SearchWord(listsMeaningCurrent));
}
