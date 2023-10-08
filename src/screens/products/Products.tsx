import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Formik } from 'formik';
import { TextInput, Button } from 'react-native-paper';
import { index, searchByName } from '../../api/products/products.api';

export default function Products() {

  const [ products, setProducts ] = React.useState([])

  React.useEffect( () => {
     index( setProducts );
  }, [])

  React.useEffect( () => {
    console.log('products', products)
 }, [products])

 const searchAction = ( text, values, setFieldValue ) => {
  console.log('form', values)
  searchByName( setProducts, text );
  // console.log('products2', products)
  setFieldValue('search', text)
 }

  return (
    <View
      style={styles.ContentWrapper}
    >
      <View>
        {/* { aaaaa } */}
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
                onChangeText={ text => {
                  searchAction( text, values, setFieldValue )
                }}
                onBlur={handleBlur('search')}

                value={values.search}
                label="Buscar"
                mode="outlined"
                />
                
              </View>

            )}

            </Formik>
          </View>
      </View>
      
    </View>
  )
}


const styles = StyleSheet.create({
  ContentWrapper: {
    flex: 1,
    backgroundColor: 'red',
  },
  centerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  formCard: {
    backgroundColor: 'white',
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
})