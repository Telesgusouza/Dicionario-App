import styled from "styled-components/native";
import ImgSourch from "../../../assets/images/icon-search.svg";

export const Container = styled.View<{ width: number }>`
  width: ${(props) => props.width};
  margin-left: 15px;

  flex-direction: row;
  align-items: center;

  position: relative;
`;

export const Input = styled.TextInput<{ bgInput: string, clInput: string }>`
  width: 100%;
  padding: 14px 50px 14px 18px;
  color: ${props => props.clInput};
  background-color: ${props => props.bgInput};

  border-radius: 10px;
`;

export const Logo = styled.TouchableOpacity`
  position: absolute;
  right: 16px;
`;
