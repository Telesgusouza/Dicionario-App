import styled from "styled-components/native";

export const Container = styled.ScrollView<{ bgColor: string }>`
  flex: 1;
  background-color: ${(props) => props.bgColor};
`;
