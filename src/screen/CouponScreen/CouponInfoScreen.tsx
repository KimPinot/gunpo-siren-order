import React from 'react';
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import {StackNavigationProp} from '@react-navigation/stack';
import {Dimensions, Image, StyleSheet} from 'react-native';

interface CouponInfoScreenProps {
  navigation: StackNavigationProp<any>;
  route: {
    params: {
      coupon: any;
    };
  };
}

const CouponInfoScreen: React.FC<CouponInfoScreenProps> = ({
  navigation,
  route: {
    params: {coupon},
  },
}) => {
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
      <Layout style={styles.container}>
        <Image
          source={{
            uri: `https://bwipjs-api.metafloor.com/?bcid=qrcode&text=${coupon.couponNum}`,
          }}
          style={{
            width: 100,
            height: 100,
            alignSelf: 'center',
            borderWidth: 1,
          }}
        />
        <Text
          style={{
            alignSelf: 'center',
            marginTop: 15,
          }}
          category="h5">
          {coupon.name}
        </Text>
        <Text
          style={{
            alignSelf: 'center',
            marginTop: 15,
            fontSize: 15,
          }}>
          {coupon.expired} 에 만료됩니다.
        </Text>
        {/*<Text>{JSON.stringify(coupon)}</Text>*/}
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height - 71,
    padding: 15,
    backgroundColor: 'transparent',
  },
});

export default CouponInfoScreen;
