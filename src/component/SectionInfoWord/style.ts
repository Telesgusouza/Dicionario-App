import styled from "styled-components/native";

export const Container = styled.View<{ width: number }>`
  width: ${(props) => props.width};
  margin-left: 15px;

  overflow: hidden;
`;

export const Title = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;
