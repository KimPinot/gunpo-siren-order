import {HistoryType, RewardHistoryType} from '@interface/history';

export type ProductInfoType = {
  name: string;
  price: number;
  uri: string;
};

export type CouponType = {
  name: string;
  couponNum: number;
  expired: number;
  price: number;
};

export type UserType = {
  userId: number;
  credit: number;
  userHistory: HistoryType[];
  rewards: number;
  rewardHistory: RewardHistoryType[];
  coupons: CouponType[];
};
