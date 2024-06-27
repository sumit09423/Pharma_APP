import {configureStore} from '@reduxjs/toolkit';
import CommonReducer from './Reducer/CommonReducer';

const store = configureStore({
  reducer: {
    CommonReducer: CommonReducer,
  },
});

export default store;
