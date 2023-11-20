import { TextInput } from "react-native";
import * as Styled from "./style";
// import ElevatedView from "react-native-elevated-view";

export default function () {
  return (
    // <ElevatedView elevation={1} style={{marginTop: 150}} >
    // <ElevatedView elevation={1} style={{marginTop: 0}} >
      <Styled.Container>
        <TextInput
          placeholder="HAAAAA EU TO MALUCO"
          value="OK OK PESSOAL"
          style={{ color: "white" }}
        />
      </Styled.Container>
    // </ElevatedView>
  );
}
