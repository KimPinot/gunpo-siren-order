import React from 'react';
import {Divider, List} from '@ui-kitten/components';
import {HistoryItem} from '@component/History/HistoryItem';
import {
  HistoryType,
  HistoryClassType,
  PaymentMethodType,
} from '@interface/history';

interface HistoryListProps {}

export const HistoryList: React.FC<HistoryListProps> = () => {
  const data: HistoryType[] = [
    {
      class: HistoryClassType.use,
      timestamp: Date.now() + 150000000,
      product: ['아이스 초코'],
      price: -1000,
      paymentMethod: PaymentMethodType.local,
    },
    {
      class: HistoryClassType.add,
      timestamp: Date.now() + 550000000,
      product: ['카드 충전'],
      price: 1000,
      paymentMethod: PaymentMethodType.local,
    },
    {
      class: HistoryClassType.use,
      timestamp: Date.now() + 750000000,
      product: ['아이스 초코', '아이스 티'],
      price: -1000,
      paymentMethod: PaymentMethodType.inApp,
    },
  ];
  return (
    <List
      data={data}
      renderItem={HistoryItem}
      ItemSeparatorComponent={Divider}
    />
  );
};
