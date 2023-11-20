import { StatusBar } from "expo-status-bar";

import listTheme from './src/api/listOfStyles'

import Providers from "./src/api/redux/provider";
import Main from "./src/Page/Main";
import { ThemeProvider } from "styled-components/native";

export default function App() {

  return (
    <Providers>
        <ThemeProvider theme={listTheme}>
          <Main />
          
          <StatusBar style="auto" />
        </ThemeProvider>
    </Providers>
  );
}
