import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProductInfoType, CouponType} from '@interface/types';

interface AppState {
  basket: ProductInfoType[];
  usedCoupon: CouponType[];
}

const initialState: AppState = {
  basket: [],
  usedCoupon: [],
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setBasket(state, action: PayloadAction<ProductInfoType[]>) {
      state.basket = action.payload;
    },
    setUsedCoupon(state, action: PayloadAction<CouponType[]>) {
      state.usedCoupon = action.payload;
    },
  },
});

export const {
  setBasket,
  setUsedCoupon,
} = appSlice.actions;

export default appSlice.reducer;
