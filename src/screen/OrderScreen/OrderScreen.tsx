import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {
  List,
  Text,
  Divider,
  TopNavigation,
  TopNavigationAction,
  Icon,
} from '@ui-kitten/components';
import {ProductInfoType} from '@interface/types';
import {StackNavigationProp} from '@react-navigation/stack';

interface OrderScreenProps {
  navigation: StackNavigationProp<any>;
}

const OrderScreen: React.FC<OrderScreenProps> = ({navigation}) => {
  const data: ProductInfoType[] = [
    {
      name: '아이스 초코',
      price: 1000,
    },
    {
      name: '아이스 티',
      price: 1000,
    },
  ];
  const BackAction = () => (
    <TopNavigationAction
      onPress={() => navigation.goBack()}
      icon={(props) => <Icon {...props} name="arrow-back" />}
    />
  );
  const menus = ({item: {name, price}}: {item: ProductInfoType}) => (
    <View>
      <Text category="h5">{name}</Text>
      <Text category="s2">{price} 원</Text>
    </View>
  );
  return (
    <SafeAreaView>
      <TopNavigation
        alignment="center"
        title={(evaProps) => (
          <Text {...evaProps}>
            주문하기
          </Text>
        )}
        accessoryLeft={BackAction}
      />
      <View>
        <Text category="h2">주문 가능한 메뉴</Text>
        <List data={data} renderItem={menus} ItemSeparatorComponent={Divider} />
      </View>
    </SafeAreaView>
  );
};

export default OrderScreen;
