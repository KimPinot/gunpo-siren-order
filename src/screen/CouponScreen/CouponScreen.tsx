import React, {useEffect, useState} from 'react';
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  List,
  ListItem,
  CheckBox,
  Button,
} from '@ui-kitten/components';
import {StackNavigationProp} from '@react-navigation/stack';
import {Dimensions, StyleSheet} from 'react-native';
import {CouponType} from '@interface/types';

interface CouponScreenProps {
  navigation: StackNavigationProp<any>;
  route: {
    params: {
      isUsing: boolean;
      applyCoupon?: CouponType[];
    };
  };
}

const coupons = [
  {
    name: '웰컴 쿠폰',
    couponNum: 1234555588,
    expired: Date.now(),
    price: 5000,
  },
  {
    name: '웰컴 쿠폰',
    couponNum: 1234555589,
    expired: Date.now(),
    price: 5000,
  },
  {
    name: '웰컴 쿠폰',
    couponNum: 1234555581,
    expired: Date.now(),
    price: 5000,
  },
  {
    name: '웰컴 쿠폰',
    couponNum: 1234555582,
    expired: Date.now(),
    price: 5000,
  },
  {
    name: '웰컴 쿠폰',
    couponNum: 1234555583,
    expired: Date.now(),
    price: 5000,
  },
];

const CouponScreen: React.FC<CouponScreenProps> = ({
  navigation,
  route: {
    params: {isUsing, applyCoupon},
  },
}) => {
  const [selectedCoupon, setSelectedCoupon] = useState<CouponType[]>([]);
  useEffect(() => {
    applyCoupon?.length && setSelectedCoupon(applyCoupon);
  }, [applyCoupon]);
  const BackAction = () => (
    <TopNavigationAction
      onPress={() => navigation.goBack()}
      icon={(props) => <Icon {...props} name="arrow-back" />}
    />
  );
  return (
    <>
      <TopNavigation
        alignment="center"
        title={(evaProps) => <Text {...evaProps}>쿠폰</Text>}
        accessoryLeft={BackAction}
      />
      <Divider />
      <Layout>
        <List
          style={styles.container}
          data={coupons}
          ItemSeparatorComponent={Divider}
          renderItem={({item}) => (
            <ListItem
              title={item.name}
              description={item.couponNum}
              onPress={() => navigation.navigate('couponinfo', {coupon: item})}
              accessoryLeft={() =>
                isUsing ? (
                  <CheckBox
                    style={{
                      marginRight: 5,
                    }}
                    checked={
                      !!selectedCoupon.find(
                        (e) => e.couponNum === item.couponNum,
                      )
                    }
                    onChange={() =>
                      // @ts-ignore
                      setSelectedCoupon(
                        !selectedCoupon.find(
                          (e) => e.couponNum === item.couponNum,
                        )
                          ? [...selectedCoupon, item]
                          : selectedCoupon.filter(
                              (e) => e.couponNum !== item.couponNum,
                            ),
                      )
                    }
                  />
                ) : (
                  <Layout />
                )
              }
              accessoryRight={() => (
                <Icon
                  style={{
                    width: 25,
                    height: 25,
                  }}
                  fill="#000"
                  name="chevron-right-outline"
                />
              )}
            />
          )}
        />
        {selectedCoupon.length ? (
          // @ts-ignore
          <Button
            style={styles.button}
            onPress={() =>
              navigation.navigate('payment', {applyCoupon: selectedCoupon})
            }>
            쿠폰 {selectedCoupon.length}개 적용하기
          </Button>
        ) : null}
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height - 141,
    paddingHorizontal: 15,
    backgroundColor: 'transparent',
  },
  button: {
    marginHorizontal: 15,
  },
});

export default CouponScreen;
