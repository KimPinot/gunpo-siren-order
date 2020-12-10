import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {
  Layout,
  Text,
  List,
  Divider,
  ListItem,
  TopNavigation,
  TopNavigationAction,
  Icon,
} from '@ui-kitten/components';
import {UserCard} from '@component/UserInfo/UserCard';
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
  const data = new Array(8).fill({
    title: 'Item',
    description: 'Description for Item',
  });
  const moneyAccessory = () => (
    <View>
      <Text category="s2" status="primary">
        1,000 원
      </Text>
      <Text category="c2">32,500 원</Text>
    </View>
  );
  const listItem = () => (
    <ListItem
      title="아이스초코 외 1"
      description="16:30 | 현금"
      accessoryRight={moneyAccessory}
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
        <Layout>
          <UserCard />
        </Layout>
        <List
          data={data}
          renderItem={listItem}
          ItemSeparatorComponent={Divider}
        />
      </Layout>
    </SafeAreaView>
  );
};

export default CardScreen;
