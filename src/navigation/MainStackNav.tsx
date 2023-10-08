import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../screens/Dashboard';
import IndexBottomNav from './products/IndexBottomNav';

const Stack = createNativeStackNavigator();

export default function MainStackNav() {
  
  return (
    <Stack.Navigator 
      initialRouteName="ProductsNav"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="ProductsNav" component={IndexBottomNav} />
    </Stack.Navigator>
  );
};
