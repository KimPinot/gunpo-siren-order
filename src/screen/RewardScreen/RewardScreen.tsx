import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {TopNavigation} from '@ui-kitten/components';

interface RewardScreenProps {}

const RewardScreen: React.FC<RewardScreenProps> = () => {
  return (
    <SafeAreaView>
      <TopNavigation
        alignment="center"
        title={(evaProps) => (
          <Text {...evaProps}>
            리워드
          </Text>
        )}
      />
      <View
        style={{
          padding: 15,
        }}>
        <Text>주문 스탬프</Text>
        <Text>9 / 12 개 (75%)</Text>
        <Text>앞으로 3개 남았습니다!</Text>
      </View>
    </SafeAreaView>
  );
};

export default RewardScreen;
