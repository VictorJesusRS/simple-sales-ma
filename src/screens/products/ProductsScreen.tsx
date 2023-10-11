import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Formik } from 'formik';
import { TextInput, Button } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native'
import { index, searchByName } from '../../api/products/products.api';
import SearchBar from '../../components/products/SearchBar';
import ListAll from '../../components/products/ListAll';

export default function ProductsScreen() {
  const [ products, setProducts ] = React.useState([])
  const isFocused = useIsFocused()

  React.useEffect( () => {
    if (isFocused) {
      index( setProducts )
    }
}, [isFocused])

  React.useEffect( () => {
     console.log('ProductsScreen', products)
 }, [products])

  return (
    <View
      style={styles.ContentWrapper}
    >
      <View>
        <SearchBar products={products} setProducts={setProducts}/>
      </View>
      <View> 
        <ListAll products={products} />
      </View>
      
    </View>
  )
}


const styles = StyleSheet.create({
  ContentWrapper: {
    // backgroundColor: 'red',
  },
  centerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
})