import React, {useEffect} from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <SafeAreaView>
        <Text>GunpoSirenOrder</Text>
      </SafeAreaView>
    </>
  );
};

export default App;
