import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

interface HomeScreenProps {
}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
