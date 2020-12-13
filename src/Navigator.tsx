import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screen
import HomeScreen from '@screen/HomeScreen/HomeScreen';
import CardScreen from '@screen/CardScreen/CardScreen';
import RewardScreen from '@screen/RewardScreen/RewardScreen';
import OrderScreen from '@screen/OrderScreen/OrderScreen';
import BasketScreen from '@screen/BasketScreen';

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
      <Stack.Screen name="reward" component={RewardScreen} />
      <Stack.Screen name="order" component={OrderScreen} />
      <Stack.Screen name="basket" component={BasketScreen} />
    </Stack.Navigator>
  );
};
