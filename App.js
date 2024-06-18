import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AuthScreen from './src/AuthScreen';
import MainScreen from './src/MainScreen';
import { FormProvider } from './src/context/FormContext';
import AdminScreen from './src/Adminscreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <FormProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Auth"
            component={AuthScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Admin"
            component={AdminScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FormProvider>
  );
};

export default App;
