import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useSelector } from "react-redux";
import * as Styled from "./style";

import listStyles from "../../api/listOfStyles";
import { RootState } from "../../api/redux/configRedux";
import { getDataWord } from "../../api/functions";

interface IProps {
  title: string;
  list: {
    definition: string;
    synonyms: string[];
    example?: string;
    antonyms: string[];
  }[];
  synonyms: string[];
}

export default function ({ title, list, synonyms }: IProps) {
  const { theme, font } = useSelector(
    (rootReducer: RootState) => rootReducer.useTheme
  );

  let listTest: any = [
    {
      antonyms: [],
      definition:
        '(with "the") Human collective existence; existence in general.',
      example: "There will always be lovers, till the world’s end.",
      synonyms: [],
    },
  ];

  async function handleWord(word: string) {
    await getDataWord(word);
  }

  return (
    <Styled.Container width={Dimensions.get("window").width - 30}>
      <Styled.Title>
        <Text
          style={{
            fontFamily: font,
            fontSize: 16,
            color: theme ? listStyles.veryLight : listStyles.lightBlack,
            fontWeight: "700",
            marginRight: 10,
          }}
        >
          {title}
        </Text>
        <View
          style={{
            width: "100%",
            height: 1,
            marginRight: 15,
            backgroundColor: "#979797",
          }}
        />
      </Styled.Title>

      <Text
        style={{
          marginBottom: 15,
          fontSize: 15,
          fontFamily: font,
          color: listStyles.gray,
        }}
      >
        Meaning
      </Text>

      <FlatList
        data={list}
        keyExtractor={(item) => item.definition}
        renderItem={({ item }: any) => (
          <View style={{ marginBottom: 13, flexDirection: "row" }}>
            <View
              style={{
                width: 5,
                height: 5,
                backgroundColor: listStyles.purple,
                borderRadius: 3,
                marginTop: 6,
                marginRight: 20,
              }}
            />

            <View>
              <Text
                style={{
                  fontFamily: font,
                  fontWeight: "500",
                  fontSize: 14,
                  lineHeight: 20,

                  color: theme ? listStyles.veryLight : listStyles.lightBlack,
                }}
              >
                {item.definition}
              </Text>

              {item.example && (
                <Text
                  style={{
                    fontSize: 15,
                    color: listStyles.gray,
                    marginTop: 10,
                  }}
                >
                  "{item.example}"
                </Text>
              )}
            </View>
          </View>
        )}
      />

      {synonyms.length > 0 && (
        <View style={{ flexDirection: "row", marginBottom: 20, marginTop: 10 }}>
          <Text
            style={{
              marginRight: 15,
              fontFamily: font,
              fontSize: 17,
              color: "#757575",
            }}
          >
            Synonyms:
          </Text>
          {synonyms.map((text) => (
            <TouchableOpacity
              onPress={() => handleWord(text)}
              style={{ marginRight: 5 }}
            >
              <Text
                style={{
                  fontFamily: font,
                  fontSize: 16,
                  fontWeight: "700",
                  color: listStyles.purple,
                }}
              >
                {" "}
                {text}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </Styled.Container>
  );
}
