import React from 'react';
import {StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  Layout,
  Card,
  Divider,
  Text,
  TopNavigation,
} from '@ui-kitten/components';
import {UserCard} from '@component/UserInfo/UserCard';

interface HomeScreenProps {
  navigation: StackNavigationProp<any>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <>
      <TopNavigation
        alignment="center"
        title={(evaProps) => <Text {...evaProps}>BizCool Order</Text>}
      />
      <Divider />
      <Layout style={styles.container}>
        <Layout
          style={styles.content}
          onTouchEnd={() => navigation.navigate('card')}>
          <UserCard />
        </Layout>
        <Card
          style={styles.content}
          onPress={() => navigation.navigate('reward')}>
          <Text>주문 스탬프</Text>
          <Text>9 / 12 개 (75%)</Text>
        </Card>
        <Card
          style={styles.content}
          onPress={() => navigation.navigate('order')}>
          <Text>주문하기</Text>
        </Card>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    paddingHorizontal: 15,
  },
  content: {
    marginTop: 15,
  },
});

export default HomeScreen;
