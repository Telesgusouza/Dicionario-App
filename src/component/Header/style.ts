import styled, { css } from "styled-components/native";

export const Container = styled.View`
  padding: 55px 15px 30px 15px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerSelect = styled.View``;

export const Title = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.View<{ rtIcon: string }>`
  transform: rotate(${(props) => props.rtIcon});
`;

export const Menu = styled.FlatList<{ width: number; bgColor: string, shadow: string }>`
  width: ${(props) => props.width};
  background-color: ${(props) => props.bgColor};
  padding: 15px;
  padding-bottom: 0;

  position: "absolute";
  left: 15px;
  top: 15px;

  border-radius: 12px;

  elevation: 5;

  shadow-color: ${props => props.shadow};
  shadow-opacity: 1;
  shadow-radius: 25;
`;

export const ToggleContainer = styled.TouchableOpacity`
  padding-left: 16px;

  flex-direction: row;
`;

export const Toggle = styled.View<{ bgTheme: string }>`
  background-color: ${(props) => props.bgTheme};
  width: 40px;
  height: 20px;

  margin-right: 10px;

  border-radius: 20px;
`;

export const ToggleBoll = styled.View<{ theme: string }>`
  position: absolute;
  top: 3px;
  left: ${(props) => props.theme};
  height: 14px;
  width: 14px;

  transition: left 0.3s ease;

  border-radius: 7px;
  background-color: white;
`;
