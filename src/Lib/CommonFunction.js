import Toast from 'react-native-toast-message';

export const onSubmitError = error => {
  console.log('Error', error);
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
  console.log(ErrorMessage);
};
