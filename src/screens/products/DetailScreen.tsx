import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import { TextInput, Button } from 'react-native-paper';

import Products from './ProductsScreen';
import { store, index } from '../../api/products/productsApi';
import { ProductStoreDTO } from '../../types/Product';
// const screenWidth = Math.round( Dimensions.get('screen').width )
// const screenHeight = Math.round( Dimensions.get('screen').height )

const DetailScreen = ({ route, navigation  }) => {
  const [ result, setResult ] = React.useState([])

  React.useEffect( () => {
    console.log('indexDetail', result )
  }, [result])

  return (  
    <ScrollView 
      style={styles.ContentWrapper}
    >

      <View
        style={styles.formCard}
      >
        
        <View
          style={styles.formWrapper}
        >
          <Formik
            initialValues={{ 
              name: '',
              description: '',
              price: '',
             }}

            onSubmit={ (values) => {
              console.log('form', values)
              const curatedValues = {
                ...values,
                price: parseFloat( values.price.replace(',', '.') )
              }

              try {
                store( curatedValues );
                navigation.navigate("Products")
              } catch (error) {
                throw new Error("Falla al guardar el producto");
              }

            }}

            >

            {({ handleChange, handleBlur, handleSubmit, values }) => (

              <View style={ styles.formGroup }>

                <TextInput
                style={styles.input}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                label="Nombre"
                mode="outlined"
                />

                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('description')}
                  onBlur={handleBlur('description')}
                  value={values.description}
                  label="Descripción"
                  mode="outlined"
                />

              <TextInput
                style={styles.input}
                onChangeText={handleChange('price')}
                onBlur={handleBlur('price')}
                value={values.price}
                label="Precio"
                mode="outlined"
                />

                <Button 
                  mode="contained" 
                  onPress={handleSubmit}
                >
                  Añadir
                </Button>

              </View>

            )}

            </Formik>
          </View>

        </View>
    </ScrollView>
  )
}

export default DetailScreen

const styles = StyleSheet.create({

  formWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  formCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingBottom: 30,
    paddingTop: 45,
  },
  ContentWrapper: {
    flex: 1,
    backgroundColor: 'red',
  },
  input: {
    width: 250,
    marginBottom: 15,
  },
  formGroup: {  }
})