import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

interface CouponScreenProps {}

const CouponScreen: React.FC<CouponScreenProps> = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          padding: 15,
        }}>
        <Text>주문 스탬프</Text>
        <Text>9 / 12 개 (75%)</Text>
        <Text>앞으로 3개 남았습니다!</Text>
      </View>

      <View>
        <Text>히스토리</Text>
      </View>
    </SafeAreaView>
  );
};

export default CouponScreen;
