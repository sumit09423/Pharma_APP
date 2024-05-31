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
import SignUp from './src/login/SignUp';
import Verification from './src/login/Verification';
import Profile from './src/Profile';
import Profile2 from './src/Profile/Profile2';
import Profile3 from './src/Profile/Profile3';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Verification"
          component={Verification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile1"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile2"
          component={Profile2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile3"
          component={Profile3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Category"
          component={Category}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SearchProduct"
          component={SearchProduct}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MultipleProduct"
          component={MultipleProduct}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductCategory"
          component={ProductCategory}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Myorder"
          component={Myorder}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
