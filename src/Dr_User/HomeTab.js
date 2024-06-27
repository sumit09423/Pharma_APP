import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Landing from './Index';
import Category from './Category';

const Stack = createNativeStackNavigator();

const HomeTab = () => {
  return (
    <Stack.Navigator initialRouteName="Landing">
      {/* <Stack.Screen
        name="Landing"
        component={Landing}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="Category1"
        component={Category}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};

export default HomeTab;
