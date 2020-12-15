import React, {useState} from 'react';
import {Dimensions, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {
  Button,
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  RadioGroup,
  Radio,
  Card,
  Modal,
} from '@ui-kitten/components';
import {StackNavigationProp} from '@react-navigation/stack';
import {localizeCredit} from '@lib/utils';
import {HistoryClassType, PaymentMethodType} from '@interface/history';
import {useAppState, useUserState} from '@store/index';
import {useDispatch} from 'react-redux';
import {
  updateReward,
  updateRewardHistory,
  updateUserCredit,
  updateUserHistory,
} from '@store/slices/userSlice';

interface PaymentScreenProps {
  navigation: StackNavigationProp<any, any>;
}

const PaymentScreen: React.FC<PaymentScreenProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const [paymentIndex, setPaymentIndex] = React.useState<PaymentMethodType>(0);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [modalText, setModalText] = useState<string>('');
  const {userInfo} = useUserState();
  const {basket, usedCoupon} = useAppState();
  const couponTotal = usedCoupon.reduce((a, b) => a + b.price, 0);
  const itemTotal = basket.reduce((a, b) => a + b.price, 0);
  const BackAction = () => (
    <TopNavigationAction
      onPress={() => {
        setModalText('정말로 주문을 취소하시겠습니까?');
        setModalOpen(true);
      }}
      icon={(props) => <Icon {...props} name="arrow-back" />}
    />
  );
  const handlePay = (total: number) => {
    const {credit, rewards} = userInfo;
    if (total > credit) {
      setModalOpen(true);
      setModalText('주문을 하기에 돈이 충분하지 않습니다.');
      return;
    }

    setModalOpen(true);
    setModalText('결제 완료!');
    dispatch(updateReward(rewards + 1));
    dispatch(updateUserCredit(credit - total));
    dispatch(
      updateUserHistory({
        class: HistoryClassType.use,
        timestamp: Date.now(),
        price: total,
        product: basket,
        paymentMethod: paymentIndex,
      }),
    );
    dispatch(
      updateRewardHistory({
        title: '적립',
        description: '일반 적립',
        timestamp: Date.now(),
        class: '적립',
        count: 1,
      }),
    );
  };
  return (
    <SafeAreaView>
      <TopNavigation
        alignment="center"
        title={(evaProps) => <Text {...evaProps}>장바구니</Text>}
        accessoryLeft={BackAction}
      />
      <Divider />
      <ScrollView style={styles.container}>
        <Layout style={styles.couponContainer}>
          <Text style={styles.title}>결제</Text>
          <Divider />
          <Layout
            style={{
              marginBottom: 15,
            }}>
            <Layout
              style={{
                paddingTop: 7.5,
                paddingHorizontal: 15,
              }}>
              <Text
                style={{
                  paddingVertical: 5,
                }}>
                결제 수단
              </Text>
              <RadioGroup
                selectedIndex={paymentIndex}
                onChange={(index) => setPaymentIndex(index)}
                style={{
                  flexDirection: 'row',
                  marginBottom: 5,
                }}>
                <Radio>현장 결제</Radio>
                <Radio>카드 결제</Radio>
              </RadioGroup>
            </Layout>
            <Divider />
            <Button
              appearance="ghost"
              style={{
                padding: 0,
                justifyContent: 'space-between',
              }}
              onPress={() =>
                navigation.navigate('coupon', {
                  isUsing: true,
                })
              }
              accessoryLeft={() => <Text>쿠폰 사용하기</Text>}
              accessoryRight={() => (
                <Icon
                  style={{
                    width: 22,
                    height: 22,
                  }}
                  fill="#000"
                  name="chevron-right-outline"
                />
              )}
            />
            <Divider />
          </Layout>
        </Layout>
        <Layout style={styles.itemContainer}>
          <Text style={styles.title}>결제할 메뉴</Text>
          <Divider />
          {basket.map((item, index) => (
            <>
              <Layout
                style={{
                  padding: 15,
                }}
                key={item.name + index}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginBottom: 5,
                  }}>
                  {item.name}
                </Text>
                <Text>{localizeCredit(item.price)}</Text>
              </Layout>
              <Divider />
            </>
          ))}
        </Layout>
        <Layout style={styles.priceContainer}>
          <Layout style={styles.priceWrapper}>
            <Text>총 주문금액</Text>
            <Text style={styles.price}>{localizeCredit(itemTotal)}</Text>
          </Layout>
          <Layout style={styles.priceWrapper}>
            <Text>총 할인금액</Text>
            <Text style={styles.discount}>- {localizeCredit(couponTotal)}</Text>
          </Layout>
          <Layout>
            {usedCoupon.map((coupon) => (
              <Layout style={styles.priceWrapper}>
                <Text category="c1">{coupon.name}</Text>
                <Text category="c1" style={styles.discount}>
                  - {localizeCredit(coupon.price)}
                </Text>
              </Layout>
            ))}
          </Layout>
          <Divider />
          <Layout style={styles.priceWrapper}>
            <Text>최종 결제금액</Text>
            <Text status="info" style={styles.priceTotal}>
              {localizeCredit(
                itemTotal - couponTotal > 0 ? itemTotal - couponTotal : 0,
              )}
            </Text>
          </Layout>
        </Layout>
        <Button
          onPress={() => handlePay(itemTotal - couponTotal)}
          style={{
            marginBottom: 15,
          }}>
          결제 & 주문하기
        </Button>
      </ScrollView>
      <Modal
        visible={isModalOpen}
        backdropStyle={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
        onBackdropPress={() => setModalOpen(false)}>
        <Card disabled={true}>
          <Text
            category="h6"
            style={{
              marginBottom: 15,
            }}>
            {modalText}
          </Text>
          <Layout
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Button
              style={{flex: 1, marginRight: 15}}
              onPress={() => {
                setModalOpen(false);
                navigation.goBack();
              }}>
              네
            </Button>
            {modalText === '정말로 주문을 취소하시겠습니까?' ? (
              <Button
                style={{flex: 1, marginLeft: 15}}
                onPress={() => setModalOpen(false)}>
                아니오
              </Button>
            ) : null}
          </Layout>
        </Card>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height - 80,
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  title: {
    paddingVertical: 10,
    fontSize: 17,
    fontWeight: 'bold',
  },
  itemContainer: {
    marginBottom: 20,
  },
  couponContainer: {},
  priceContainer: {
    marginBottom: 20,
  },
  priceWrapper: {
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
  },
  discount: {
    color: '#666',
  },
  priceTotal: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default PaymentScreen;
