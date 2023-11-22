import { useSelector } from "react-redux";

import * as Styled from "./style";
import listStyle from "../../api/listOfStyles";
import { RootState } from "../../api/redux/configRedux";

import Header from "../../component/Header";
import Input from "../../component/Input";
import { ScrollView, Text } from "react-native";
import Main from "../../component/Main";
import SectionInfoWord from "../../component/SectionInfoWord";
import Source from "../../component/Source";
import ErrorWord from "../../component/ErrorWord";

export default function () {
  const { theme } = useSelector(
    (rootReducer: RootState) => rootReducer.useTheme
  );

  const { dataWord } = useSelector(
    (rootReducer: RootState) => rootReducer.useWord
  );

  const { currentError, messageError } = useSelector(
    (rootReducer: RootState) => rootReducer.useError
  );

  // console.log("=======================");
  // console.log(currentError);
  // console.log(messageError);

  return (
    <Styled.Container
      bgColor={theme ? listStyle.veryBlack : listStyle.veryLight}
    >
      <Header />
      <Input />

      {currentError ? (
        <>
          <ErrorWord />
        </>
      ) : (
        <>
          <Main word={dataWord.word} phonetic={dataWord.phonetic} />

          {dataWord.listMeaning.length > 0 &&
            dataWord.listMeaning.map((meaning) => (
              <SectionInfoWord
                title={meaning.partOfSpeech}
                list={meaning.definitions}
                synonyms={meaning.synonyms}
              />
            ))}

          {dataWord.sourceUrl !== null && (
            <Source sourceUrl={dataWord.sourceUrl} />
          )}
        </>
      )}
    </Styled.Container>
  );
}
