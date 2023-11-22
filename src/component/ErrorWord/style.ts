import styled from "styled-components/native";

export const Container = styled.View<{ word: number }>`
  width: ${(props) => props.word};
  height: 100%;
  margin-top: 70px;
  margin-left: 15;

  flex: 1;

  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 64px;
  height: 64px;
  object-fit: cover;
  margin-bottom: 50px;
`;
