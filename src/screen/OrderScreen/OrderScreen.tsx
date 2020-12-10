import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {List, Text, Divider} from '@ui-kitten/components';
import {TopNavigation} from '@ui-kitten/components';
import {ProductInfoType} from '@interface/types';

interface OrderScreenProps {}

const OrderScreen: React.FC<OrderScreenProps> = () => {
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
      />
      <View>
        <Text category="h2">주문 가능한 메뉴</Text>
        <List data={data} renderItem={menus} ItemSeparatorComponent={Divider} />
      </View>
    </SafeAreaView>
  );
};

export default OrderScreen;
