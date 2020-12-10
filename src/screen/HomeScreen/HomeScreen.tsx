import React from 'react';
import {SafeAreaView, Image} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Layout, Card, Text, TopNavigation} from '@ui-kitten/components';

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
        <Card onPress={() => navigation.push('card')}>
          <Image
            source={{
              uri:
                'https://bwipjs-api.metafloor.com/?bcid=code128&text=AB1234567890&scale=3',
            }}
            style={{
              width: '100%',
              height: 100,
            }}
          />
          <Text>2019-1234-5555</Text>
          <Text>100,000 원</Text>
        </Card>
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
