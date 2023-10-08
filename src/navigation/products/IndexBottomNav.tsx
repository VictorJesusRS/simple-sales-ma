import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Products from '../../screens/products/Products';
import Detail from '../../screens/products/Detail';

const Tab = createMaterialBottomTabNavigator();

const IndexBottomNav = () => {
  return (
    <Tab.Navigator 
    initialRouteName="Products"
    screenOptions={{  }}
    >
        <Tab.Screen 
        name="Products" 
        component={Products}  
        options={{
            title: "Productos",
        }}  
        />
        <Tab.Screen 
        name="Product" 
        component={Detail}  
        options={{
            title: "Añadir"
        }}  
        initialParams={{ isNew: true }}
        />
    </Tab.Navigator>
  )
}

export default IndexBottomNav

const styles = StyleSheet.create({})