export interface IState {
  theme: boolean;
  font: "sans-serif" | "serif" | "monospace";
}

export interface IAction {
  type: string;
  payload: IState;
}

export interface IRootReducers {
  useTheme: IState;
}

export interface ITheme {
  theme?: boolean;
}

export interface IMeaningDefinitions {
  definition: string;
  synonyms: string[];
  example?: string;
  antonyms: string[];
}

export interface IMeaning {
  partOfSpeech: string;
  definitions: IMeaningDefinitions[];
  synonyms: string[];
}

export interface IMeaningApi {
  partOfSpeech: string;
  definitions: {
    definition: string;
    synonyms: string[];
    antonyms: string[];
  }[];
  synonyms: string[];
  antonyms: string[];
}

export interface IMeaningDataApi {
  word: string;
  phonetic: string;
  phonetics: {
    text: string;
    audio: string;
    sourceUrl: string;
    license: {
      name: string;
      url: string;
    };
  }[];
  meanings: IMeaningApi[];
  license: {
    name: string;
    url: string;
  };
  sourceUrls: string[];
}
