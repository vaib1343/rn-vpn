import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {routesConfig} from './config/routes.config';
import Home from './pages/Home/Home';
import Server from './pages/Servers/Server';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName={routesConfig.HOME}>
      <Stack.Screen name={routesConfig.HOME} component={Home} />
      <Stack.Screen name={routesConfig.SERVER} component={Server} />
    </Stack.Navigator>
  );
}
