import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Linking,
} from "react-native";
import { useSelector } from 'react-redux'
import * as Styled from "./style";
import listOfStyles from "../../api/listOfStyles";

import ImgNewWindow from "../../../assets/images/icon-new-window.svg";
import { RootState } from "../../api/redux/configRedux";

export default function ({ sourceUrl }: { sourceUrl: any }) {
  const { theme, font } = useSelector((rootReducer: RootState) => rootReducer.useTheme)

  async function handleSrc() {
    await Linking.openURL(sourceUrl);
  }

  return (
    <Styled.Container width={Dimensions.get("window").width - 30}>
      <Text style={{ color: listOfStyles.gray, fontFamily: font }}>Source</Text>

      <TouchableOpacity
        onPress={handleSrc}
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 8,
        }}
      >
        <Text style={{ marginRight: 15, fontFamily: font, color: theme ? listOfStyles.veryLight : listOfStyles.lightBlack }}>{sourceUrl}</Text>
        <ImgNewWindow width={15} height={15} />
      </TouchableOpacity>
    </Styled.Container>
  );
}
