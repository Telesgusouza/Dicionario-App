import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import { useSelector } from "react-redux";

import { useState } from "react";
import { useDispatch } from "react-redux";
// import ElevatedView from "react-native-elevated-view";

import * as Styled from "./style";

import ImgLogo from "../../../assets/images/logo.svg";
import ArrowIcon from "../../../assets/images/icon-arrow-down.svg";
import ImgMoon from "../../../assets/images/icon-moon.svg";

import { RootState } from "../../api/redux/configRedux";
import { toggleTheme } from "../../api/redux/useTheme/reducer";

// import Modal from "react-native-modal";
// import Overlay from 'react-native-overlay';
// import Modal from 'react-native-modalbox';
// import Popover from "react-native-popover-view";

export default function () {
  const [toggleSelect, setToggleSelect] = useState<Boolean>(false);
  const [selecteFont, setSelecteFont] = useState<string>("Sans Serif");

  const dispatch = useDispatch();
  const { theme } = useSelector(
    (rootReducer: RootState) => rootReducer.useTheme
  );

  let arrayObj = [
    { font: "Sans Serif", fontFM: "sans-serif" },
    { font: "Serif", fontFM: "serif" },
    { font: "Mono", fontFM: "monospace" },
  ];

  function handleSelect(font: string) {
    setSelecteFont(font);
  }

  function handleTheme() {
    dispatch(toggleTheme({ theme: !theme }));
  }

  return (
    <Styled.Container>
      <ImgLogo fill={"#212121"} width={30} height={30} />

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Styled.ContainerSelect>
          <Styled.Title
            onPress={() => setToggleSelect(!toggleSelect)}
            style={{ zIndex: 199 }}
          >
            <Text style={{ marginRight: 10, fontSize: 17 }}>{selecteFont}</Text>

            <Styled.Logo rtIcon={toggleSelect ? "0deg" : "180deg"}>
              <ArrowIcon width={18} height={9} />
            </Styled.Logo>
          </Styled.Title>

          <View
            style={[
              toggleSelect && styles.toggleMenu,
              {
                width: Dimensions.get("window").width,
                position: "absolute",
                top: 25,
                right: -100,
                backgroundColor: "red",
                zIndex: 99,
              },
            ]}
          >
            <FlatList
              data={arrayObj}
              keyExtractor={(item) => item.font}
              style={[styles.menu, toggleSelect && styles.toggleMenu]}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleSelect(item.font)} >
                  <Text
                    style={{
                      width: "100%",
                      height: 30,
                      marginBottom: 15,
                      fontSize: 18,
                      fontFamily: item.fontFM,
                    }}
                  >
                    {item.font}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </Styled.ContainerSelect>

        <Styled.ToggleContainer onPress={handleTheme}>
          <Styled.Toggle>
            <Styled.ToggleBoll theme={theme ? "23px" : "3px"} />
          </Styled.Toggle>

          <ImgMoon width={20} height={20} />
        </Styled.ToggleContainer>
      </View>
    </Styled.Container>
  );
}

const styles = StyleSheet.create({
  menu: {
    width: Dimensions.get("window").width - 30,
    padding: 15,
    paddingBottom: 0,
    position: "absolute",
    right: 15,
    top: 15,

    borderRadius: 12,
    backgroundColor: "white",

    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },

  toggleMenu: {
    display: "none",
  },
});
