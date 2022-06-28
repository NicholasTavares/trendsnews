import React from 'react';
import {Platform, SafeAreaView, StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import theme from './src/global/theme';
import {NavigationContainer} from '@react-navigation/native';
import {AppRoutes} from './src/routes/app.routes';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <SafeAreaView
      style={{flex: 1, paddingTop: Platform.OS === 'android' ? 25 : 0}}>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <StatusBar backgroundColor="transparent" translucent={true} />
          <ThemeProvider theme={theme}>
            <AppRoutes />
          </ThemeProvider>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default App;
