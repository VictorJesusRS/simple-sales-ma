import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';

import MainStackNav from './src/navigation/MainStackNav';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // primary: 'light',
    // secondary: 'yellow',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <MainStackNav/>
      </NavigationContainer>
    </PaperProvider>

  );
};
