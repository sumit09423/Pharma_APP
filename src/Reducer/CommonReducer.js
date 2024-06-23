import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userType: '',
};

const CommonReducer = createSlice({
  name: 'CommonReducer',
  initialState,
  reducers: {
    setUserType(state, action) {
      state.userType = action.payload;
    },
  },
});

export const {setUserType} = CommonReducer.actions;
// export const {setData, addItem, removeItem} = CommonReducer.actions;
export default CommonReducer.reducer;
