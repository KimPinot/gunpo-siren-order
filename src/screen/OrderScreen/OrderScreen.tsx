import React from 'react';
import {SafeAreaView, View, Image, StyleSheet} from 'react-native';
import {
  List,
  Text,
  Divider,
  TopNavigation,
  TopNavigationAction,
  Icon,
  ListItem,
  Layout,
} from '@ui-kitten/components';
import {ProductInfoType} from '@interface/types';
import {StackNavigationProp} from '@react-navigation/stack';
import {localizeCredit} from '@lib/utils';

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
    {
      name: '핫초코',
      price: 1000,
    },
  ];
  const BackAction = () => (
    <TopNavigationAction
      onPress={() => navigation.goBack()}
      icon={(props) => <Icon {...props} name="arrow-back" />}
    />
  );
  return (
    <SafeAreaView>
      <TopNavigation
        alignment="center"
        title={(evaProps) => <Text {...evaProps}>주문하기</Text>}
        accessoryLeft={BackAction}
      />
      <Divider />
      <View>
        <List
          data={data}
          style={styles.list}
          renderItem={({item: {name, price}}: {item: ProductInfoType}) => (
            <ListItem
              accessoryLeft={() => (
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 500,
                  }}
                  source={{
                    uri: 'http://placehold.it/500x500',
                  }}
                />
              )}
              title={() => <Text style={styles.name}>{name}</Text>}
              description={() => (
                <Text style={styles.price}>{localizeCredit(price)}</Text>
              )}
            />
          )}
          ItemSeparatorComponent={Divider}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'transparent',
    paddingHorizontal: 15,
  },
  card: {
    marginTop: 20,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 7.5,
  },
  price: {
    fontSize: 13,
    marginLeft: 7.5,
  },
});

export default OrderScreen;
