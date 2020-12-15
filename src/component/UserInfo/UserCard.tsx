import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Card, Text} from '@ui-kitten/components';
import {splitCardNum, localizeCredit} from '@lib/utils';
import {useUserState} from '@store/index';

interface UserCardProps {}

export const UserCard: React.FC<UserCardProps> = () => {
  const {
    isLoggedIn,
    userInfo: {userId, credit},
  } = useUserState();
  if (!isLoggedIn) {
    return (
      <Card disabled={true} style={styles.container}>
        <Text>로그인하세요.</Text>
      </Card>
    );
  }
  return (
    <Card disabled={true} style={styles.container}>
      <Image
        source={{
          uri: `https://bwipjs-api.metafloor.com/?bcid=code128&text=${splitCardNum(
            userId,
          )}&scale=3`,
        }}
        style={styles.barcode}
      />
      <Text category="s1" style={styles.cardNumber}>
        {splitCardNum(userId)}
      </Text>
      <Text category="h5" style={styles.credit}>
        {localizeCredit(credit)}
      </Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {},
  barcode: {
    width: '100%',
    height: 100,
    marginBottom: 1,
  },
  cardNumber: {
    textAlign: 'center',
    marginBottom: 5,
  },
  credit: {
    textAlign: 'center',
  },
});
