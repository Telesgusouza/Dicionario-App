import { Text, Dimensions } from "react-native";

import * as Styled from "./style";

export default function () {
  return (
    <Styled.Container word={Dimensions.get("window").width - 30} >
      <Text>[ERROR] Não foi possivel encontrar palavra</Text>
    </Styled.Container>
  );
}
