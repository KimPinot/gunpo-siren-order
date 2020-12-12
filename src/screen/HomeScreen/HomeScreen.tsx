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
import {Progress} from '@component/Progress';

interface HomeScreenProps {
  navigation: StackNavigationProp<any>;
}

const stamp = 6;
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
        <Layout style={styles.contentRow}>
          <Card
            style={styles.contentColumn}
            onPress={() => navigation.navigate('reward')}>
            <Progress
              {...{
                current: stamp,
                max: 12,
                color: {
                  tint: '#FFC7A9',
                  secondary: '#FF4128',
                  background: '#FFE6D3',
                },
              }}
            />
            <Text category="s1" style={styles.label}>
              리워드
            </Text>
          </Card>
          <Card style={styles.contentColumnLast}>
            <Text>쿠폰</Text>
          </Card>
        </Layout>
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
  label: {
    position: 'absolute',
    width: '100%',
    left: 29,
    bottom: 20,
    textAlign: 'center',
  },
  contentRow: {
    marginTop: 15,
    flexDirection: 'row',
  },
  contentColumn: {
    position: 'relative',
    flex: 1,
    marginRight: 5,
    alignItems: 'center',
  },
  contentColumnLast: {
    marginLeft: 5,
    flex: 1,
  },
});

export default HomeScreen;
