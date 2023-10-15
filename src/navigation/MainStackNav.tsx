import { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage'

import { GENERAL_DRAWER, DASHBOARD } from './RoutesName';
import DashboardScreen from '../screens/DashboardScreen';
import GeneralDrawer from './GeneralDrawer';
import { databaseBuild, db, reset, DATABASE_NAME, databaseSeed } from '../database/databaseConfig';


const Stack = createNativeStackNavigator();

export default function MainStackNav() {

  useEffect(() => {
    (async () => {
      // console.log('aa', await reset(  db, DATABASE_NAME ))
      await reset(  db, DATABASE_NAME )

      const dbi = await db(DATABASE_NAME)
      await databaseBuild( dbi )
      await databaseSeed( dbi )
    })()
  }, [])

  
  return (
    <Stack.Navigator 
      initialRouteName={GENERAL_DRAWER}
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={DASHBOARD} component={DashboardScreen} />
      <Stack.Screen name={GENERAL_DRAWER} component={GeneralDrawer} />
    </Stack.Navigator>
  );
};
