import { useState, useEffect } from "react";
import {
  Dimensions,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
  Alert,
} from "react-native";
import { useSelector } from "react-redux";
import axios from "axios";

import * as Styled from "./style";
import { getDataWord } from "../../api/functions";

import ImgSourch from "../../../assets/images/icon-search.svg";
import { RootState } from "../../api/redux/configRedux";

export default function () {
  const [input, setInput] = useState("");

  const { theme } = useSelector(
    (rootReducer: RootState) => rootReducer.useTheme
  );

  useEffect(() => {
    async function getWord() {
      const getWordRandom = await axios
        .get("https://random-word-api.vercel.app/api?words=1")
        .catch((err) => {
          console.error(err);
        });
      await getDataWord(getWordRandom?.data[0]);
    }

    getWord();
  }, []);

  async function handleWord() {
    if (!!input.trim()) {
      await getDataWord(input);
      setInput("")
    } else {
      Alert.alert("type a word", "Enter a word so it can be searched");
    }
  }

  async function handleSubmitWord(
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) {
    e.preventDefault();
    handleWord();
  }

  return (
    <Styled.Container width={Dimensions.get("window").width - 30}>
      <Styled.Input
        bgInput={theme ? "#1f1f1f" : "#f4f4f4"}
        clInput={theme ? "#ffffff" : "#2d2d2d"}


        placeholder="Enter a word"
        onChangeText={(e) => setInput(e)}
        value={input}
        onSubmitEditing={handleSubmitWord}
      />

      <Styled.Logo onPress={handleWord}>
        <ImgSourch width={20} height={20} />
      </Styled.Logo>
    </Styled.Container>
  );
}
