import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Linking,
} from "react-native";
import * as Styled from "./style";

import ImgNewWindow from "../../../assets/images/icon-new-window.svg";

export default function ({ sourceUrl }: { sourceUrl: any }) {

  async function handleSrc() {
    await Linking.openURL(sourceUrl);
  }

  return (
    <Styled.Container width={Dimensions.get("window").width - 30}>
      <Text>Source</Text>

      <TouchableOpacity
        onPress={handleSrc}
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 8,
        }}
      >
        <Text style={{ marginRight: 15 }}>{sourceUrl}</Text>
        <ImgNewWindow width={15} height={15} />
      </TouchableOpacity>
    </Styled.Container>
  );
}
