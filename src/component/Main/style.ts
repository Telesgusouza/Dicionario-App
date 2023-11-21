import styled from "styled-components/native";
import { Dimensions } from "react-native";

export const Container = styled.View<{ width: number }>`
  width: ${(props) => props.width};
  height: 90px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 40px 15px 20px 15px;

  white-space: nowrap;
`;

export const Text = styled.Text`
  width: "100%";
  max-width: ${Dimensions.get("window").width - 60}px;
`;
