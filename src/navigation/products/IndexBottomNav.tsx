import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Products from '../../screens/products/ProductsScreen';
import Detail from '../../screens/products/Detail';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

const IndexBottomNav = () => {

  return (
    <Tab.Navigator 
    initialRouteName="Products"
    screenOptions={{  }}
    barStyle={{ height: 80, backgroundColor: 'white' }}
    >
        <Tab.Screen 
        name="Products" 
        component={Products}  
        options={{
            title: "Productos",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="view-list" color={color} size={ 24 } />
            ),
        }}  
        />
        <Tab.Screen 
        name="Product" 
        component={Detail}  
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

export default IndexBottomNav

const styles = StyleSheet.create({})