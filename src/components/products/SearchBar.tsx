import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import { TextInput, Button } from 'react-native-paper';
import { index, searchByName } from '../../api/products/products.api';

const SearchBar = ( ) => {
    const [ products, setProducts ] = React.useState([])
    console.log('aaa', products)
    React.useEffect( () => {
       index( setProducts );
       console.log('index', products)
    }, [])
  
    React.useEffect( () => {
      console.log('products', products)
   }, [products])
  
    const searchAction = ( values ) => {
        console.log('form',  values.search)
        searchByName( setProducts, values.search );
        console.log('products2', products)
    }

  return (
    <View
    style={ styles.formCard }  
    >
    <Formik
      initialValues={{ 
        search: '',
       }}

      onSubmit={ (values) => {
        console.log('form', values)
      }}

      >

      {({ handleChange, handleBlur, handleSubmit, values, setFieldValue  }) => (

        <View >

          <TextInput
          onChangeText={handleChange('search')}
          // onBlur={handleBlur('search')}
          onBlur={ () => {
            searchAction( values )
          }}


          value={values.search}
          label="Buscar"
          mode="outlined"
          />
          
        </View>

      )}

      </Formik>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    formCard: {
        backgroundColor: 'white',
        paddingVertical: 30,
        paddingHorizontal: 30,
        height: 110,
      },
})