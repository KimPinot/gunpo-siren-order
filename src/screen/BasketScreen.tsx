import React, {useState} from 'react';
import {
  Button,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  Divider,
} from '@ui-kitten/components';
import {StackNavigationProp} from '@react-navigation/stack';
import {ProductInfoType} from '@interface/types';
import {StyleSheet, ScrollView, Dimensions, Image} from 'react-native';
import {localizeCredit} from '@lib/utils';

interface BasketScreenProps {
  navigation: StackNavigationProp<any>;
  route: {
    params: {
      item: ProductInfoType;
    };
  };
}

const BasketScreen: React.FC<BasketScreenProps> = ({
  navigation,
  route: {params: {item}},
}) => {
  const [current, setCurrent] = useState<number>(1);
  const BackAction = () => (
    <TopNavigationAction
      onPress={() => navigation.goBack()}
      icon={(props) => <Icon {...props} name="arrow-back" />}
    />
  );
  return (
    <Layout>
      <TopNavigation
        alignment="center"
        title={(evaProps) => <Text {...evaProps}>주문하기</Text>}
        accessoryLeft={BackAction}
      />
      <Divider />
      <ScrollView style={styles.container}>
        <Image
          style={{
            width: Dimensions.get('screen').width - 30,
            height: Dimensions.get('screen').width - 30,
            borderRadius: 10,
          }}
          source={item.uri}
        />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{localizeCredit(item.price)}</Text>
        <Layout style={styles.ButtonContainer}>
          <Button
            style={styles.button}
            onPress={() => (current > 1 ? setCurrent(current - 1) : null)}
            status="basic">
            -
          </Button>
          <Text style={styles.buttonLabel}>{current}</Text>
          <Button
            style={styles.button}
            onPress={() => (current < 10 ? setCurrent(current + 1) : null)}
            status="basic">
            +
          </Button>
        </Layout>
        <Layout style={styles.ButtonContainer}>
          <Button style={styles.button} status="basic">장바구니에 추가</Button>
          <Button
            style={styles.button}
            status="basic"
            onPress={() => navigation.navigate('payment')}>
            주문하기
          </Button>
        </Layout>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height - 73,
    padding: 15,
  },
  name: {
    marginTop: 15,
    fontSize: 25,
  },
  price: {
    fontSize: 17.5,
    fontWeight: 'bold',
  },
  ButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  button: {
    flex: 1,
    marginRight: 7.5,
  },
  buttonLast: {
    flex: 1,
    marginLeft: 7.5,
  },
  buttonLabel: {
    flex: 8,
    textAlign: 'center',
  },
});

export default BasketScreen;
