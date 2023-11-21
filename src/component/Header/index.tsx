import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import { useSelector } from "react-redux";

import { useState } from "react";
import { useDispatch } from "react-redux";

import * as Styled from "./style";
import listStyle from "../../api/listOfStyles";

import ImgLogo from "../../../assets/images/logo.svg";
import ArrowIcon from "../../../assets/images/icon-arrow-down.svg";
import ImgMoon from "../../../assets/images/icon-moon.svg";

import { RootState } from "../../api/redux/configRedux";
import { toggleFont, toggleTheme } from "../../api/redux/useTheme/reducer";

export default function () {
  const [toggleSelect, setToggleSelect] = useState<Boolean>(true);
  const [selecteFont, setSelecteFont] = useState<string>("Sans Serif");

  const dispatch = useDispatch();
  const { theme, font } = useSelector(
    (rootReducer: RootState) => rootReducer.useTheme
  );

  let arrayObj: { font: string; fontFM: string }[] = [
    { font: "Sans Serif", fontFM: "sans-serif" },
    { font: "Serif", fontFM: "serif" },
    { font: "Mono", fontFM: "monospace" },
  ];

  function handleTheme() {
    dispatch(toggleTheme({ theme: !theme }));
  }

  function toggleFontCurrent(option: string, font: string) {
    setSelecteFont(option);
    dispatch(toggleFont({ font: font }));
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
            <Text
              style={{
                marginRight: 10,
                fontSize: 17,
                color: theme ? listStyle.veryLight : listStyle.lightBlack,
                fontFamily: font,
              }}
            >
              {selecteFont}
            </Text>

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
                zIndex: 99,
              },
            ]}
          >
            <Styled.Menu
              width={Dimensions.get("window").width - 30}
              bgColor={theme ? listStyle.black : listStyle.veryLight}
              shadow={theme ? listStyle.purple : listStyle.black}
              data={arrayObj}
              keyExtractor={(item: { font: string; fontFM: string } | any) =>
                item.font
              }
              style={[toggleSelect && styles.toggleMenu]}
              renderItem={({ item }: {item: { font: string; fontFM: string } | any}) => (
                <TouchableOpacity
                  onPress={() => toggleFontCurrent(item.font, item.fontFM)}
                >
                  <Text
                    style={{
                      width: "100%",
                      height: 30,
                      marginBottom: 15,
                      fontSize: 18,
                      fontFamily: item.fontFM,
                      fontWeight: "700",
                      color: theme ? listStyle.veryLight : listStyle.lightBlack,
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
          <Styled.Toggle bgTheme={theme ? listStyle.purple : listStyle.gray}>
            <Styled.ToggleBoll theme={theme ? "23px" : "3px"} />
          </Styled.Toggle>

          <ImgMoon width={20} height={20} />
        </Styled.ToggleContainer>
      </View>
    </Styled.Container>
  );
}

const styles = StyleSheet.create({
  toggleMenu: {
    display: "none",
  },
});
