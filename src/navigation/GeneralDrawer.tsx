import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome'; 

import { PRODUCTS_NAV, CATEGORY_NAV, SETTINGS } from './RoutesName';
import ProductsNav from './products/ProductsNav';
import CategoriesNav from './categories/CategoriesNav';


const Drawer = createDrawerNavigator();

const GeneralDrawer = () => {
    return (
        <Drawer.Navigator
            initialRouteName={CATEGORY_NAV}
        >
          <Drawer.Screen 
          name={PRODUCTS_NAV}
          component={ProductsNav} 
          options={{
            title: "Productos",
            drawerIcon: ({ color }) => (
              <MaterialCommunityIcons name="view-list" color={color} size={ 24 } />
            ),
          }}
          />
          <Drawer.Screen 
          name={CATEGORY_NAV}
          component={CategoriesNav} 
          options={{
            title: "Categorías",
            drawerIcon: ({ color }) => (
              <MaterialCommunityIcons name="view-list" color={color} size={ 24 } />
            ),
          }}
          />
        <Drawer.Screen 
          name={SETTINGS} 
          component={CategoriesNav} 
          options={{
            title: "Configuración",
            drawerIcon: ({ color }) => (
              <FontAwesome name="gear" color={color} size={ 24 } />
            ),
          }}
          />
        </Drawer.Navigator>
      );
}

export default GeneralDrawer
