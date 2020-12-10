import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  Layout,
  Text,
  Divider,
  TopNavigation,
  TopNavigationAction,
  Icon,
} from '@ui-kitten/components';
import {UserCard} from '@component/UserInfo/UserCard';
import {HistoryList} from '@component/History/HistoryList';
import {StackNavigationProp} from '@react-navigation/stack';

interface CardScreenProps {
  navigation: StackNavigationProp<any>;
}

const CardScreen: React.FC<CardScreenProps> = ({navigation}) => {
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
        title={(evaProps) => <Text {...evaProps}>카드</Text>}
        accessoryLeft={BackAction}
      />
      <Divider />
      <Layout>
        <UserCard />
        <HistoryList />
      </Layout>
    </SafeAreaView>
  );
};

export default CardScreen;
