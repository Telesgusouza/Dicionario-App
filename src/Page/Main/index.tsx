import { useSelector } from "react-redux";

import * as Styled from "./style";
import listStyle from "../../api/listOfStyles";
import { RootState } from "../../api/redux/configRedux";
// import Modal from "react-native-modal";

import Header from "../../component/Header";
import Input from "../../component/Input";
import { View, Text } from "react-native";

export default function () {
  const { theme } = useSelector(
    (rootReducer: RootState) => rootReducer.useTheme
  );

  return (
    <Styled.Container
      bgColor={theme ? listStyle.veryBlack : listStyle.veryLight}
    >
      {/* <Modal
        isVisible={true}
        backdropColor="transparent"
        backdropOpacity={0.0}
        hasBackdrop={false}

        style={{backgroundColor: "green", maxHeight: 70}}
      > */}
        <Header />

      <Input />
      {/* 
      <View>
        <Text>haaa HAAAAAAAAAAA</Text>
      </View> */}
    </Styled.Container>
  );
}
