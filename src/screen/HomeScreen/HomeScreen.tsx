import React from 'react';
import {SafeAreaView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Layout, Card, Text, TopNavigation} from '@ui-kitten/components';
import {UserCard} from '@component/UserInfo/UserCard';

interface HomeScreenProps {
  navigation: StackNavigationProp<any>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView>
      <TopNavigation
        alignment="center"
        title={(evaProps) => <Text {...evaProps}>BizCool Order</Text>}
      />
      <Layout
        style={{
          display: 'flex',
        }}>
        <Layout onTouchEnd={() => navigation.push('card')}>
          <UserCard />
        </Layout>
        <Card onPress={() => navigation.push('coupon')}>
          <Text>주문 스탬프</Text>
          <Text>9 / 12 개 (75%)</Text>
        </Card>
        <Card onPress={() => navigation.push('order')}>
          <Text>주문하기</Text>
        </Card>
      </Layout>
    </SafeAreaView>
  );
};

export default HomeScreen;
