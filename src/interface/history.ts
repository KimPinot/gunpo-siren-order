export type HistoryType = {
  class: HistoryClassType;
  timestamp: number;
  price: number;
  product: string[];
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
