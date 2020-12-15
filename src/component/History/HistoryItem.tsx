import React from 'react';
import {ListItem, Text, Layout} from '@ui-kitten/components';
import {HistoryType} from '@interface/history';
import {PaymentMethodType, HistoryClassType} from '@interface/history';
import {localizeCredit} from '@lib/utils';
import {StyleSheet} from 'react-native';

interface HistoryItemProps {
  index: number;
  item: HistoryType;
}

const HistoryItem: React.FC<HistoryItemProps> = ({index, item}) => {
  const title =
    item.product.length >= 2
      ? `${item.product[0].name} 외 ${item.product.length - 1}`
      : item.product[0].name;
  const isAddHistory = item.class === HistoryClassType.add;
  const paymentMethod =
    item.paymentMethod === PaymentMethodType.inApp ? '현금' : '카드';
  return (
    <ListItem
      disabled={true}
      title={title}
      description={`${paymentMethod} | ${item.timestamp}`}
      accessoryRight={() => (
        <Layout style={styles.priceContainer}>
          <Text
            category="s2"
            style={styles.price}
            status={isAddHistory ? 'primary' : ''}>
            {localizeCredit(item.price)}
          </Text>
        </Layout>
      )}
    />
  );
};

const styles = StyleSheet.create({
  priceContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default React.memo(HistoryItem);
