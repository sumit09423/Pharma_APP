import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Welcome from './src/login';
import Login from './src/login/Login';
import Landing from './src/Dr_User/Index';
import Category from './src/Dr_User/Category';
import SearchProduct from './src/Dr_User/SearchProduct';
import MultipleProduct from './src/Dr_User/MultipleProduct';
import ProductCategory from './src/Dr_User/ProductCategory';
import ProductDetails from './src/Dr_User/ProductDetails';
import Myorder from './src/Dr_User/Myorder';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Landing'>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: '', headerShown: false }}
        />
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{ title: '', headerShown: false }}
        />
        <Stack.Screen
          name="Category"
          component={Category}
          options={{ title: '', headerShown: false }}
        />
        <Stack.Screen
          name="SearchProduct"
          component={SearchProduct}
          options={{ title: '', headerShown: false }}
        />
        <Stack.Screen
          name="MultipleProduct"
          component={MultipleProduct}
          options={{ title: '', headerShown: false }}
        />
        <Stack.Screen
          name="ProductCategory"
          component={ProductCategory}
          options={{ title: '', headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{ title: '', headerShown: false }}
        />
        <Stack.Screen
          name="Myorder"
          component={Myorder}
          options={{ title: '', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
