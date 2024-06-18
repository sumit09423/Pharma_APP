import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from '../login/Login';
import AdminPage from '../Admin';
import DrListPage from '../Admin/drindex';
import Parent from '../components/Parent';

const AdminScreen = () => {
    const AdminStack = createNativeStackNavigator();
    return (
        <AdminStack.Navigator initialRouteName='AdminPage'>
            <AdminStack.Screen
                name="AdminPage"
                component={AdminPage}
                options={{ headerShown: false }}
            />
            <AdminStack.Screen
                name="Drlist"
                component={DrListPage}
                options={{ headerShown: false }}
            />
            <AdminStack.Screen
                name="Tab"
                component={Parent}
                options={{ headerShown: false }}
            />
        </AdminStack.Navigator>
    );
};

export default AdminScreen;
