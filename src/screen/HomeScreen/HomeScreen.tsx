import React from 'react';
import {SafeAreaView, View, Text, Image, Dimensions} from 'react-native';

interface HomeScreenProps {
}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: Dimensions.get('window').width,
            padding: 15,
          }}>
          <Image
            source={{
              uri:
                'https://bwipjs-api.metafloor.com/?bcid=code128&text=AB1234567890&scale=3',
            }}
            style={{
              width: '100%',
              height: 100,
            }}
            resizeMode={'stretch'}
          />
          <Text>2019-1234-5555</Text>
          <Text>100,000 원</Text>
        </View>

        <View
          style={{
            padding: 15,
          }}>
          <Text>주문 스탬프</Text>
          <Text>9 / 12 개 (75%)</Text>
        </View>

        <View
          style={{
            padding: 15,
          }}>
          <Text>주문하기</Text>
        </View>

        <View
          style={{
            padding: 15,
          }}>
          <Text>공지사항</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
