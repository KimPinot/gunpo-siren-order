import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screen
import HomeScreen from '@Screen/HomeScreen/HomeScreen';
import CardScreen from '@Screen/CardScreen/CardScreen';

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
        cardStyleInterpolator: ({current, layouts}) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
              ],
            },
          };
        },
      }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="card" component={CardScreen} />
    </Stack.Navigator>
  );
};
