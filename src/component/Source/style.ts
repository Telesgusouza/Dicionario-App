import styled from "styled-components/native";

export const Container = styled.View<{ width: number }>`
  width: ${(props) => props.width};
  margin-left: 15px;
  margin-bottom: 30px;
`;
