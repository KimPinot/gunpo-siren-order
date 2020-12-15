import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  HistoryClassType,
  PaymentMethodType,
  HistoryType,
  RewardHistoryType,
} from '@interface/history';
import {UserType} from '@interface/types';

interface UserState {
  isLoggedIn: boolean;
  userInfo: UserType;
}

const initialState: UserState = {
  isLoggedIn: true,
  userInfo: {
    rewards: 2,
    userId: 202020512001,
    credit: 10000,
    userHistory: [
      {
        class: HistoryClassType.use,
        timestamp: Date.now() - 300000000,
        price: -1000,
        product: [
          {
            name: '아이스 티',
            price: 1000,
            uri: 'hello',
          },
        ],
        paymentMethod: PaymentMethodType.local,
      },
      {
        class: HistoryClassType.use,
        timestamp: Date.now() - 600000000,
        price: -2000,
        product: [
          {
            name: '아이스 티',
            price: 1000,
            uri: 'hello',
          },
          {
            name: '아이스 티',
            price: 1000,
            uri: 'hello',
          },
        ],
        paymentMethod: PaymentMethodType.inApp,
      },
    ],
    rewardHistory: [
      {
        title: '적립',
        description: '일반 적립',
        timestamp: Date.now(),
        class: '일반 적립',
        count: +1,
      },
      {
        title: '적립',
        description: '일반 적립',
        timestamp: Date.now() - 300000,
        class: '일반 적립',
        count: +1,
      },
    ],
    coupons: [
      {
        name: '웰컴 쿠폰',
        couponNum: 11111111111,
        expired: Date.now() + 300000,
        price: 1000,
      },
    ],
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserInfo(state, action: PayloadAction<UserType>) {
      state.isLoggedIn = true;
      state.userInfo = action.payload;
    },
    removeUserInfo(state) {
      state.isLoggedIn = false;
      state.userInfo = initialState.userInfo;
    },
    updateUserCredit(state, action: PayloadAction<number>) {
      state.userInfo.credit = action.payload;
    },
    updateUserHistory(state, action: PayloadAction<HistoryType>) {
      state.userInfo.userHistory = [
        ...state.userInfo.userHistory,
        action.payload,
      ];
    },
    updateReward(state, action: PayloadAction<number>) {
      state.userInfo.rewards = action.payload;
    },
    updateRewardHistory(state, action: PayloadAction<RewardHistoryType>) {
      state.userInfo.rewardHistory = [
        ...state.userInfo.rewardHistory,
        action.payload,
      ];
    },
  },
});

export const {
  updateUserInfo,
  removeUserInfo,
  updateUserCredit,
  updateUserHistory,
  updateReward,
  updateRewardHistory,
} = userSlice.actions;

export default userSlice.reducer;
