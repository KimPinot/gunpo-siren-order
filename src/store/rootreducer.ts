import {combineReducers} from 'redux';
import {appSlice} from '@store/slices/appSlice';
import {userSlice} from '@store/slices/userSlice';

const rootReducer = combineReducers({
  app: appSlice.reducer,
  user: userSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
