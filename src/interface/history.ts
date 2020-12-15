import {ProductInfoType} from '@interface/types';

export type HistoryType = {
  class: HistoryClassType;
  timestamp: number;
  price: number;
  product: ProductInfoType[];
  paymentMethod: PaymentMethodType;
};

export enum HistoryClassType {
  'add',
  'use',
}

export enum PaymentMethodType {
  'local',
  'inApp',
}

export type RewardHistoryType = {
  title: string;
  description: string;
  timestamp: number;
  class: string;
  count: number;
};
