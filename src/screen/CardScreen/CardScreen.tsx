import React from 'react';
import {SafeAreaView, View, Text, Image, Dimensions} from 'react-native';

interface CardScreenProps {
}

const CardScreen: React.FC<CardScreenProps> = () => {
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
        
        <View>
          <Text>최근 이용 내역</Text>
          <View>
            <Text>10 / 25 : -1000 원</Text>
          </View>
          <View>
            <Text>10 / 24 : -1000 원</Text>
          </View>
          <View>
            <Text>10 / 23 : -1000 원</Text>
          </View>
          <View>
            <Text>10 / 22 : -1000 원</Text>
          </View>
          <View>
            <Text>10 / 21 : +10,000 원</Text>
          </View>
          <View>
            <Text>10 / 20 : -1000 원</Text>
          </View>
          <View>
            <Text>10 / 19 : -1000 원</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CardScreen;
