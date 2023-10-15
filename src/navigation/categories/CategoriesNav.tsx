import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import { CATEGORIES, CATEGORY } from '../RoutesName';
import CategoriesScreen from '../../screens/categories/CategoriesScreen';
import CategoryScreen from '../../screens/categories/CategoryScreen';

const Tab = createMaterialBottomTabNavigator();

const CategoriesNav = () => {

  return (
    <Tab.Navigator 
    initialRouteName={CATEGORIES}
    screenOptions={{  }}
    barStyle={{ height: 80, backgroundColor: 'white' }}
    >
      <Tab.Screen 
      name={CATEGORIES} 
      component={CategoriesScreen}  
      options={{
          title: "Categorías",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="view-list" color={color} size={ 24 } />
          ),
      }}  
      />
      <Tab.Screen 
      name={CATEGORY} 
      component={CategoryScreen}  
      options={{
          title: "Añadir",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus-circle-outline" size={24} />
          ),
      }}  
      initialParams={{ isNew: true }}
      />
    </Tab.Navigator>
  )
}

export default CategoriesNav

const styles = StyleSheet.create({})