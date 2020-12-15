import React from 'react';
import {Dimensions, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {
  Button,
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  RadioGroup,
  Radio,
} from '@ui-kitten/components';
import {StackNavigationProp} from '@react-navigation/stack';
import {localizeCredit} from '@lib/utils';
import {PaymentMethodType} from '@interface/history';
import {CouponType} from '@interface/types';

interface PaymentScreenProps {
  navigation: StackNavigationProp<any, any>;
  route: {
    params: {
      applyCoupon: CouponType[];
    };
  };
}

const PaymentScreen: React.FC<PaymentScreenProps> = ({
  navigation,
  route: {params},
}) => {
  const [paymentIndex, setPaymentIndex] = React.useState<PaymentMethodType>(0);
  const data = [
    {
      name: '아이스 초코',
      price: 1000,
      uri: require('../../asset/product/1i.jpg'),
    },
    {
      name: '아이스 티',
      price: 1000,
      uri: require('../../asset/product/0.jpg'),
    },
    {
      name: '핫초코',
      price: 1000,
      uri: require('../../asset/product/1h.jpg'),
    },
    {
      name: '핫초코',
      price: 1000,
      uri: require('../../asset/product/1h.jpg'),
    },
  ];
  const applyCoupon = params?.applyCoupon;
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
        title={(evaProps) => <Text {...evaProps}>장바구니</Text>}
        accessoryLeft={BackAction}
      />
      <Divider />
      <ScrollView style={styles.container}>
        <Layout style={styles.couponContainer}>
          <Text style={styles.title}>결제</Text>
          <Divider />
          <Layout
            style={{
              marginBottom: 15,
            }}>
            <Layout
              style={{
                paddingTop: 7.5,
                paddingHorizontal: 15,
              }}>
              <Text
                style={{
                  paddingVertical: 5,
                }}>
                결제 수단
              </Text>
              <RadioGroup
                selectedIndex={paymentIndex}
                onChange={(index) => setPaymentIndex(index)}
                style={{
                  flexDirection: 'row',
                  marginBottom: 5,
                }}>
                <Radio>현장 결제</Radio>
                <Radio>카드 결제</Radio>
              </RadioGroup>
            </Layout>
            <Divider />
            <Button
              appearance="ghost"
              style={{
                padding: 0,
                justifyContent: 'space-between',
              }}
              onPress={() =>
                navigation.navigate('coupon', {
                  isUsing: true,
                  applyCoupon,
                })
              }
              accessoryLeft={() => <Text>쿠폰 사용하기</Text>}
              accessoryRight={() => (
                <Icon
                  style={{
                    width: 22,
                    height: 22,
                  }}
                  fill="#000"
                  name="chevron-right-outline"
                />
              )}
            />
            <Divider />
          </Layout>
        </Layout>
        <Layout style={styles.itemContainer}>
          <Text style={styles.title}>결제할 메뉴</Text>
          <Divider />
          {data.map((item, index) => (
            <>
              <Layout
                style={{
                  padding: 15,
                }}
                key={item.name + index}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginBottom: 5,
                  }}>
                  {item.name}
                </Text>
                <Text>{localizeCredit(item.price)}</Text>
              </Layout>
              <Divider />
            </>
          ))}
        </Layout>
        <Layout style={styles.priceContainer}>
          <Layout style={styles.priceWrapper}>
            <Text>총 주문금액</Text>
            <Text style={styles.price}>{localizeCredit(1000)}</Text>
          </Layout>
          <Layout style={styles.priceWrapper}>
            <Text>총 할인금액</Text>
            <Text style={styles.discount}>- {localizeCredit(1000)}</Text>
          </Layout>
          <Divider />
          <Layout style={styles.priceWrapper}>
            <Text>최종 결제금액</Text>
            <Text status="info" style={styles.priceTotal}>
              {localizeCredit(0)}
            </Text>
          </Layout>
        </Layout>
        <Button
          style={{
            marginBottom: 15,
          }}>
          결제 & 주문하기
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height - 80,
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  title: {
    paddingVertical: 10,
    fontSize: 17,
    fontWeight: 'bold',
  },
  itemContainer: {
    marginBottom: 20,
  },
  couponContainer: {},
  priceContainer: {
    marginBottom: 20,
  },
  priceWrapper: {
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
  },
  discount: {
    fontSize: 16,
    color: '#666',
  },
  priceTotal: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default PaymentScreen;
