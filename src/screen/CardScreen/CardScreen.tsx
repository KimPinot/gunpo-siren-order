import React from 'react';
import {SafeAreaView, StyleSheet, Dimensions} from 'react-native';
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
        title={(evaProps) => <Text {...evaProps}>카드 관리</Text>}
        accessoryLeft={BackAction}
      />
      <Divider />
      <Layout style={styles.container}>
        <HistoryList
          headerComponent={
            <>
              <Layout style={styles.wrapper}>
                <UserCard />
              </Layout>

              <Text style={styles.subTitle} category="s1">
                사용 내역
              </Text>
              <Divider />
            </>
          }
        />
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height - 86,
    paddingHorizontal: 15,
  },
  wrapper: {
    marginVertical: 15,
  },
  subTitle: {
    marginBottom: 7.5,
  },
});

export default CardScreen;
