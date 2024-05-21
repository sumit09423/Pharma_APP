import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Welcome from './src/login';
import Login from './src/login/Login';
import Landing from './src/Dr_User/Index';
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
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: '', headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            title: '',
            headerStyle: {
              // backgroundColor: 'transparent',
              // elevation: 0,
            },
          }}
        />
        <Stack.Screen
          name="Verification"
          component={Verification}
          options={{
            title: '',
            headerStyle: {
              // backgroundColor: 'transparent',
              // elevation: 0,
            },
          }}
        />
        <Stack.Screen
          name="Profile1"
          component={Profile}
          options={{
            title: '',
            headerStyle: {
              // backgroundColor: 'transparent',
              // elevation: 0,
            },
          }}
        />
        <Stack.Screen
          name="Profile2"
          component={Profile2}
          options={{
            title: '',
            headerStyle: {
              // backgroundColor: 'transparent',
              // elevation: 0,
            },
          }}
        />
        <Stack.Screen
          name="Profile3"
          component={Profile3}
          options={{
            title: '',
            headerStyle: {
              // backgroundColor: 'transparent',
              // elevation: 0,
            },
          }}
        />
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{title: '', headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
