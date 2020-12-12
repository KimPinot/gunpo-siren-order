import React from 'react';
import {Divider, List} from '@ui-kitten/components';
import HistoryItem from '@component/History/HistoryItem';
import {
  HistoryType,
  HistoryClassType,
  PaymentMethodType,
} from '@interface/history';

interface HistoryListProps {
  headerComponent?: React.ReactElement;
}

export const HistoryList: React.FC<HistoryListProps> = ({headerComponent}) => {
  const data: HistoryType[] = [
    {
      class: HistoryClassType.use,
      timestamp: Date.now() + 1,
      product: ['아이스 초코'],
      price: -1000,
      paymentMethod: PaymentMethodType.local,
    },
    {
      class: HistoryClassType.use,
      timestamp: Date.now() + 2,
      product: ['아이스 초코'],
      price: -1000,
      paymentMethod: PaymentMethodType.local,
    },
    {
      class: HistoryClassType.use,
      timestamp: Date.now() + 3,
      product: ['아이스 초코'],
      price: -1000,
      paymentMethod: PaymentMethodType.local,
    },
    {
      class: HistoryClassType.use,
      timestamp: Date.now() + 4,
      product: ['아이스 초코'],
      price: -1000,
      paymentMethod: PaymentMethodType.local,
    },
    {
      class: HistoryClassType.use,
      timestamp: Date.now() + 5,
      product: ['아이스 초코'],
      price: -1000,
      paymentMethod: PaymentMethodType.local,
    },
    {
      class: HistoryClassType.use,
      timestamp: Date.now() + 6,
      product: ['아이스 초코'],
      price: -1000,
      paymentMethod: PaymentMethodType.local,
    },
    {
      class: HistoryClassType.use,
      timestamp: Date.now() + 7,
      product: ['아이스 초코'],
      price: -1000,
      paymentMethod: PaymentMethodType.local,
    },
  ];
  return (
    <List
      data={data}
      style={{
        height: '100%',
        backgroundColor: '#fff',
      }}
      renderItem={(item) => <HistoryItem {...item} />}
      contentContainerStyle={{flexGrow: 1}}
      keyExtractor={(item, index) => index.toString()}
      ItemSeparatorComponent={Divider}
      ListHeaderComponent={headerComponent}
    />
  );
};
