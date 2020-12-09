import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screen
import HomeScreen from '@Screen/HomeScreen/HomeScreen';

export const Navigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <Stack.Screen name="home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
