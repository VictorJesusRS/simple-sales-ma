import { StyleSheet, Text, SectionList, View, SafeAreaView, Dimensions   } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-paper';
import { useExchange } from '../../hooks/currenryScrapping';
import { getByCurrency, patch, store as storeExchange } from '../../api/exchangesApi';

const screenHeight = Math.round( Dimensions.get('screen').height )

const ListAll =  ({ products }) => {
  
  const [ usdX, setUsdX ] = React.useState(Object)
  // useExchange()

  React.useEffect( () => {
    // getByCurrency( setUsdX, 'VEF')
  }, [products])

  React.useEffect( () => {
    console.log('usdX', usdX)
  }, [usdX])


  const [ productsBySection, setProductsBySection ] = React.useState([])

  const formatProducts = ( products ) => {
    setProductsBySection([
      {
        title: 'Regulares',
        data: products
      }
    ])
  }

  React.useEffect( () => {
    formatProducts( products )
    console.log('products', products)
    console.log('v', (products[0]?.price * usdX?.exchange).toFixed(2).replace('.', ','))
    console.log('p', products[0]?.price )
    console.log('e', usdX?.exchange)
  }, [products, usdX])

  return (
    <SafeAreaView>
        <View  style={styles.listWrapper}>
            <SectionList
                style={styles.card}
                sections={productsBySection}
                keyExtractor={(item, index) => item.name + index}
                renderItem={({item, index}) => (
                    <View style={[ styles.row, index % 2 === 0 ? styles.rowHighlighted : styles.rowHighlighted2 ]}>
                      <View style={styles.col2}>
                        <Text>{item.name}</Text>
                      </View>
                      <View style={styles.col}>
                        <Text>$ {item.price}</Text>
                      </View>
                      <View style={styles.col}>
                        <Text>V {(item?.price * usdX?.exchange).toFixed(2).replace('.', ',')}</Text>
                        <View>
                          <Text>p { item?.price  }</Text>
                        </View>
                        <View>
                          <Text>e { usdX?.exchange  }</Text>
                        </View>
                      </View>
                    </View>
                )}
                renderSectionHeader={({section: {title}}) => (
                    <View style={styles.sectionTitleWrapper}> 
                        <Text  style={styles.sectionTitle}>{title}</Text>
                        <Divider/>
                    </View>
                )}
                />
        </View >
    </SafeAreaView >
  )
}

export default ListAll

const styles = StyleSheet.create({
    listWrapper: {
      backgroundColor: 'white',
      borderRadius: 8,
    },
    card: {
      paddingHorizontal: 15,
      height: screenHeight - 238,
    },
    sectionTitle: {
        fontWeight: 'bold'
    },
    sectionTitleWrapper: {
        padding: 15, 
    },
    name: {

    },
    row: {
      flex: 3,
      flexDirection: 'row',
      paddingVertical: 7.5,
      paddingHorizontal: 10,
      gap: 8,
  
    },
    col: {
      flex: 1,
      textAlign:'right',
      alignItems: 'flex-end',
      borderColor: 'black',
      borderWidth: 1,
    },
    col2: {
      flex: 1,
    },
    rowHighlighted: {
      backgroundColor: 'rgba( 0, 0, 0, 0.1)'
    },
    rowHighlighted2: {
      backgroundColor: 'rgba( 0, 0, 0, 0.05)',
    }
})