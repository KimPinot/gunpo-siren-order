import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Navigator} from 'src/Navigator';
import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <NavigationContainer>
        <ApplicationProvider {...eva} theme={eva.light}>
          <Navigator />
        </ApplicationProvider>
      </NavigationContainer>
    </>
  );
};

export default App;
