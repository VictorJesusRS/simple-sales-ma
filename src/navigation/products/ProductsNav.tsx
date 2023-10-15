import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { PRODUCTS, PRODUCT } from '../RoutesName';
import ProductsScreen from '../../screens/products/ProductsScreen';
import DetailScreen from '../../screens/products/DetailScreen';
import CategoriesScreen from '../../screens/categories/CategoriesScreen';

import CategoriesNav from '../categories/CategoriesNav';

const Tab = createMaterialBottomTabNavigator();

const ProductsNav = () => {

  return (
    <Tab.Navigator 
    initialRouteName={PRODUCTS}
    screenOptions={{  }}
    barStyle={{ height: 80, backgroundColor: 'white' }}
    >
        <Tab.Screen 
        name={PRODUCTS} 
        component={ProductsScreen}  
        options={{
            title: "Productos",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="view-list" color={color} size={ 24 } />
            ),
        }}  
        />
        <Tab.Screen 
        name={PRODUCT} 
        component={DetailScreen}  
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

export default ProductsNav

const styles = StyleSheet.create({})