import styled from "styled-components/native";

export const Container = styled.View<{ word: number }>`
  width: ${(props) => props.word};
  height: 100%;
  margin-left: 15;

  flex: 1;

  justify-content: center;
  align-items: center;

  background-color: red;
`;
