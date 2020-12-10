import React from 'react';
import {SafeAreaView, View, Image} from 'react-native';
import {
  Layout,
  Card,
  Text,
  List,
  Divider,
  ListItem,
  TopNavigation,
} from '@ui-kitten/components';

interface CardScreenProps {}

const CardScreen: React.FC<CardScreenProps> = () => {
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
      />
      <Layout>
        <Card>
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
