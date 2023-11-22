import {
  Text,
  Dimensions,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../api/redux/configRedux";

import * as Speech from 'expo-speech';

import * as Styled from "./style";
import listStyles from "../../api/listOfStyles";

import ImgPlay from "../../../assets/images/icon-play.svg";

export default function ({
  word,
  phonetic,
}: {
  word: string;
  phonetic: string;
}) {
  const { theme, font } = useSelector(
    (rootReducer: RootState) => rootReducer.useTheme
  );

  function handleSpeak() {
    Speech.speak(word, {
      language: "us"
    });
  }

  return (
    <Styled.Container width={Dimensions.get("window").width - 30}>
      <View>
        <Styled.Text
          style={[
            {
              fontSize: 28,
              fontFamily: font,
              fontWeight: "700",
              color: theme ? listStyles.veryLight : listStyles.lightBlack,
            },
          ]}
          numberOfLines={1}
        >
          {word}
        </Styled.Text>
        <Text
          style={{ fontSize: 18, fontFamily: font, color: listStyles.purple }}
          numberOfLines={1}
        >
          {phonetic}
        </Text>
      </View>

      <TouchableOpacity onPress={handleSpeak} >
        <ImgPlay width={75} height={75} />
      </TouchableOpacity>

    </Styled.Container>
  );
}

const styles = StyleSheet.create({
  text: {
    maxWidth: Dimensions.get("window").width - 100,

    overflow: "hidden",
  },
});
