import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Formik } from 'formik';
import { TextInput, Button } from 'react-native-paper';
import { index, searchByName } from '../../api/products/products.api';
import SearchBar from '../../components/products/SearchBar';
import ListAll from '../../components/products/ListAll';

export default function ProductsScreen() {
  const [ products, setProducts ] = React.useState([])
  React.useEffect( () => {
    console.log('products2222', products)
 }, [products])

  return (
    <View
      style={styles.ContentWrapper}
    >
      <View>
        <SearchBar/>
      </View>
      <View> 
        <ListAll/>
      </View>
      
    </View>
  )
}


const styles = StyleSheet.create({
  ContentWrapper: {
    backgroundColor: 'red',
  },
  centerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
})