import {createSlice} from '@reduxjs/toolkit';
import {getData, isblank, storeData} from '../Lib/CommonFunction';

const initialState = {
  userType: !isblank(getData('userType')) ? getData('userType') : '',
};

const CommonReducer = createSlice({
  name: 'CommonReducer',
  initialState,
  reducers: {
    setUserType(state, action) {
      state.userType = action.payload;
      storeData('userType', action.payload);
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const {setUserType, setLoading} = CommonReducer.actions;
// export const {setData, addItem, removeItem} = CommonReducer.actions;
export default CommonReducer.reducer;
