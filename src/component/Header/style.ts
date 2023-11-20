import styled, { css } from "styled-components/native";
// import ElevatedView from "react-native-elevated-view";
// import { css } from "styled-components";

export const Container = styled.View`
  padding: 55px 15px 30px 15px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerSelect = styled.View``;

export const Title = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  /* padding: 5px; */
`;

export const Logo = styled.View<{ rtIcon: string }>`
  transform: rotate(${(props) => props.rtIcon});
`;

export const ToggleContainer = styled.TouchableOpacity`
  padding-left: 16px;


  flex-direction: row;
`;

export const Toggle = styled.View<{ toggle?: string }>`
  background-color: black;
  width: 40px;
  height: 20px;

  margin-right: 10px;

  border-radius: 20px;

  /* position: relative; */
`;

export const ToggleBoll = styled.View<{theme: string}>`
  position: absolute;
  top: 3px;
  left: ${props => props.theme};
  height: 14px;
  width: 14px;

  transition: left .3s ease;

  border-radius: 7px;
  background-color: white;
`;
