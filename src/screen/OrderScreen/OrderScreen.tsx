import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

interface OrderScreenProps {}

const OrderScreen: React.FC<OrderScreenProps> = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>주문 가능한 메뉴</Text>

        <View>
          <Text>아이스 초코</Text>
          <Text>1,000원</Text>
          <Button title="추가하기">
            <Text>추가하기</Text>
          </Button>
        </View>

        <View>
          <Text>아이스티</Text>
          <Text>1,000원</Text>
          <Button title="추가하기">
            <Text>추가하기</Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderScreen;
