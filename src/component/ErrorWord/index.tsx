import { Text, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import * as Styled from "./style";

import { RootState } from "../../api/redux/configRedux";
import listOfStyles from "../../api/listOfStyles";

const imgSad = require("../../../assets/images/sadEmoji.png");

export default function () {
  const { theme, font } = useSelector(
    (rootReducer: RootState) => rootReducer.useTheme
  );

  return (
    <Styled.Container word={Dimensions.get("window").width - 30}>
      <Styled.Image source={imgSad} alt="" />
      <Text
        style={{
          fontFamily: font,
          fontSize: 20,
          fontWeight: "700",

          color: theme ? listOfStyles.veryLight : listOfStyles.lightBlack,

          textAlign: "center",
          marginBottom: 20,
        }}
      >
        No Definitions Found
      </Text>
      <Text
        style={{
          fontSize: 18,
          textAlign: "center",
          fontFamily: font,
          color: listOfStyles.gray,
        }}
      >
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </Text>
    </Styled.Container>
  );
}
