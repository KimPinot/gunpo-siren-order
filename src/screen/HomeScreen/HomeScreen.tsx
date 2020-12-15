import React from 'react';
import {StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  Layout,
  Card,
  Divider,
  Text,
  TopNavigation,
  Icon,
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
            <Layout
              style={{
                position: 'absolute',
                bottom: 20,
                left: '50%',
                transform: [
                  {
                    translateX: 15,
                  },
                ],
              }}>
              <Text category="s1" style={styles.label}>
                리워드
              </Text>
            </Layout>
          </Card>
          <Card
            style={styles.contentColumnLast}
            onPress={() => navigation.navigate('coupon', {isUsing: false})}>
            <Layout>
              <Icon style={styles.icon} fill="#000" name="file-text-outline" />
              <Text category="s1" style={styles.text}>쿠폰</Text>
            </Layout>
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
    textAlign: 'center',
    left: '-50%',
  },
  icon: {
    height: 50,
    width: 50,
  },
  text: {
    textAlign: 'center',
    marginTop: 10,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
