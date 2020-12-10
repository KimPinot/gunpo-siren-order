import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screen
import HomeScreen from '@screen/HomeScreen/HomeScreen';
import CardScreen from '@screen/CardScreen/CardScreen';
import CouponScreen from '@screen/CouponScreen/CouponScreen';
import OrderScreen from '@screen/OrderScreen/OrderScreen';

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
      <Stack.Screen name="coupon" component={CouponScreen} />
      <Stack.Screen name="order" component={OrderScreen} />
    </Stack.Navigator>
  );
};
