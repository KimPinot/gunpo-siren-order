import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {Divider, Icon, TopNavigation, TopNavigationAction} from '@ui-kitten/components';
import {StackNavigationProp} from '@react-navigation/stack';

interface RewardScreenProps {
  navigation: StackNavigationProp<any>;
}

const RewardScreen: React.FC<RewardScreenProps> = ({navigation}) => {
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
        title={(evaProps) => (
          <Text {...evaProps}>
            리워드
          </Text>
        )}
        accessoryLeft={BackAction}
      />
      <Divider />
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
