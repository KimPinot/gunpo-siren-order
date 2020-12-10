import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {
  Divider,
  Layout,
  Icon,
  TopNavigation,
  TopNavigationAction,
  TabView,
  Tab,
} from '@ui-kitten/components';
import {StackNavigationProp} from '@react-navigation/stack';

interface RewardScreenProps {
  navigation: StackNavigationProp<any>;
}

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
        title={(evaProps) => (
          <Text {...evaProps}>
            리워드
          </Text>
        )}
        accessoryLeft={BackAction}
      />
      <Divider />
      <TabView
        selectedIndex={selectedTab}
        onSelect={(index) => setSelectedTab(index)}>
        <Tab title="마이 리워드">
          <Layout style={styles.container}>
            <Text>마이 리워드</Text>
          </Layout>
        </Tab>
        <Tab title="히스토리">
          <Layout style={styles.container}>
            <Text>히스토리</Text>
          </Layout>
        </Tab>
      </TabView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});

export default RewardScreen;
