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
import {useAppState, useUserState} from '@store/index';
import {setUsedCoupon} from '@store/slices/appSlice';
import {useDispatch} from 'react-redux';
import {localizeCredit} from '@lib/utils';

interface CouponScreenProps {
  navigation: StackNavigationProp<any>;
  route: {
    params: {
      isUsing: boolean;
    };
  };
}

const CouponScreen: React.FC<CouponScreenProps> = ({
  navigation,
  route: {
    params: {isUsing},
  },
}) => {
  const dispatch = useDispatch();

  const {
    userInfo: {coupons},
  } = useUserState();

  const {usedCoupon} = useAppState();

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
              description={localizeCredit(item.price) + ' | ' + item.couponNum}
              onPress={() => navigation.navigate('couponinfo', {coupon: item})}
              accessoryLeft={() =>
                isUsing ? (
                  <CheckBox
                    style={{
                      marginRight: 5,
                    }}
                    checked={
                      !!usedCoupon.find((e) => e.couponNum === item.couponNum)
                    }
                    onChange={() =>
                      // @ts-ignore
                      dispatch(
                        setUsedCoupon(
                          !usedCoupon.find(
                            (e) => e.couponNum === item.couponNum,
                          )
                            ? [...usedCoupon, item]
                            : usedCoupon.filter(
                                (e) => e.couponNum !== item.couponNum,
                              ),
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
        {usedCoupon.length ? (
          // @ts-ignore
          <Button
            style={styles.button}
            onPress={() =>
              navigation.navigate('payment')
            }>
            쿠폰 {usedCoupon.length}개 적용하기
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
