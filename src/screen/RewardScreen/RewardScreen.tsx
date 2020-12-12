import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import {
  Divider,
  Layout,
  Icon,
  TopNavigation,
  TopNavigationAction,
  TabView,
  Tab,
  Text,
  List,
  ListItem,
} from '@ui-kitten/components';
import {StackNavigationProp} from '@react-navigation/stack';
import {Progress} from '@component/Progress';

interface RewardScreenProps {
  navigation: StackNavigationProp<any>;
}

const stamp = 6;
const RewardScreen: React.FC<RewardScreenProps> = ({navigation}) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
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
        title={(evaProps) => <Text {...evaProps}>리워드</Text>}
        accessoryLeft={BackAction}
      />
      <Divider />
      <TabView
        selectedIndex={selectedTab}
        onSelect={(index) => setSelectedTab(index)}>
        <Tab title="마이 리워드">
          <Layout style={styles.container}>
            <Layout style={styles.rewardContainer}>
              <Layout style={styles.progressWrapper}>
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
              </Layout>
              <Text style={styles.indicator}>
                무료 음료 쿠폰 발행까지 {12 - stamp}개의 하트가 남았습니다.
              </Text>
              <Text category="label">
                쿠폰 발행은 최대 24시간까지 소요될 수 있습니다.
              </Text>
            </Layout>
          </Layout>
        </Tab>
        <Tab title="히스토리">
          <Layout style={styles.container}>
            <List
              data={Array(10).fill('테스트')}
              style={styles.list}
              renderItem={({item}) => (
                <ListItem
                  title={item}
                  disabled={true}
                  description={() => (
                    <Layout style={styles.listDisc}>
                      <Text style={styles.date}>일자 : 2020.10.05 12:30</Text>
                      <Text style={styles.desc}>일반 적립</Text>
                    </Layout>
                  )}
                  accessoryLeft={() => (
                    <Layout>
                      <Icon
                        style={styles.icon}
                        fill="#000"
                        name="heart-outline"
                      />
                      <Text style={styles.label}>+12</Text>
                    </Layout>
                  )}
                />
              )}
              keyExtractor={(_, index) => index.toString()}
              ItemSeparatorComponent={Divider}
            />
          </Layout>
        </Tab>
      </TabView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height - 165,
    padding: 15,
  },
  rewardContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressWrapper: {
    marginBottom: 5,
  },
  indicator: {
    marginBottom: 15,
  },
  list: {
    backgroundColor: 'transparent',
  },
  listDisc: {
    paddingTop: 5,
    paddingLeft: 7.5,
  },
  date: {
    fontSize: 10,
  },
  desc: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  icon: {
    width: 47.5,
    height: 47.5,
  },
  label: {
    position: 'absolute',
    top: 17,
    left: 8,
    width: 30,
    fontSize: 9,
    textAlign: 'center',
  },
});

export default RewardScreen;
