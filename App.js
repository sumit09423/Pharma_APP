import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AuthScreen from './src/AuthScreen';
import MainScreen from './src/MainScreen';
import {FormProvider} from './src/context/FormContext';
import AdminScreen from './src/Adminscreen';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import store from './src/Store';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <FormProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen
              name="Auth"
              component={AuthScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Main"
              component={MainScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Admin"
              component={AdminScreen}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <Toast />
      </FormProvider>
    </Provider>
  );
};

export default App;
