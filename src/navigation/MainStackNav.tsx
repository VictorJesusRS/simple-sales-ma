import { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage'

import { GENERAL_DRAWER, DASHBOARD } from './RoutesName';
import DashboardScreen from '../screens/DashboardScreen';
import GeneralDrawer from './GeneralDrawer';
// import { databaseBuild, db, reset, DATABASE_NAME, databaseSeed } from '../database/databaseConfig';

import { databaseReducer, DatabaseActionsType } from '../reducers/DatabaseReducer';

const Stack = createNativeStackNavigator();

export default function MainStackNav() {

  const prepareDB = async () => {

    await databaseReducer({}, { 
      type: DatabaseActionsType.RESET, 
    })

    const dbi = await databaseReducer({}, {
      type: DatabaseActionsType.OPEN,
    })


    await databaseReducer({}, {
      type: DatabaseActionsType.BUILD,
      payload: {
        dbi
      }
    })

    await databaseReducer({}, {
      type: DatabaseActionsType.SEED,
      payload: {
        dbi
      }
    })

    return Promise.resolve(true)
  }



  useEffect(() => {
    (async () => {

      await prepareDB();
      const item = await AsyncStorage.getItem("launched") 

      if ( item !== "1" ) {
        await prepareDB();
        console.log("first launch")
        await AsyncStorage.setItem("launched", "1")
      }

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
