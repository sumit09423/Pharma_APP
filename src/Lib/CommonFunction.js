import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const onSubmitError = error => {
  const ErrorMessage = Object.values(error).map((e, index) => {
    if (index === 0) {
      return e.message;
    }
  });
  Toast.show({
    type: 'error',
    text1: ErrorMessage[0],
    visibilityTime: 2500,
    autoHide: true,
  });
};

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
};

export const getData = async key => {
  const value = await AsyncStorage.getItem(key);
  if (value) {
    return value;
  } else {
    return '';
  }
};

export const isblank = value => {
  if (value === '' || value === undefined || value === null) {
    return true;
  }
  return false;
};
