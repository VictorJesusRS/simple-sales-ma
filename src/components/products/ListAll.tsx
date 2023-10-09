import { StyleSheet, Text, SectionList, View, SafeAreaView, Dimensions   } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-paper';


const screenHeight = Math.round( Dimensions.get('screen').height )

const ListAll = () => {
  const DATA = [
      {
        title: 'Main dishes',
        data: ['Pizza', 'Burger', 'Risotto'],
      },
      {
        title: 'Sides',
        data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
      },
      {
        title: 'Drinks',
        data: ['Water', 'Coke', 'Beer'],
      },
      {
        title: 'Desserts',
        data: ['Cheese Cake', 'Ice Cream'],
      },


      {
          title: 'Main dishes',
          data: ['Pizza', 'Burger', 'Risotto'],
        },
        {
          title: 'Sides',
          data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
        },
        {
          title: 'Drinks',
          data: ['Water', 'Coke', 'Beer'],
        },
        {
          title: 'Desserts',
          data: ['Cheese Cake', 'Ice Cream'],
        },
    ];

    
  return (
    <SafeAreaView>
        <View  style={styles.listWrapper}>
            <SectionList
                style={styles.card}
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({item, index}) => (
                    <View style={[ styles.row, index % 2 === 0 ? styles.rowHighlighted : styles.rowHighlighted2 ]}>
                      <View style={styles.col2}>
                        <Text>{item}</Text>
                      </View>
                      <View style={styles.col}>
                        <Text>{item}</Text>
                      </View>
                      <View style={styles.col}>
                        <Text>{item}</Text>
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
      marginVertical: 15,
      marginHorizontal: 15,
      paddingBottom: 15,
      backgroundColor: 'white',
      borderRadius: 8,

    },
    card: {
      paddingHorizontal: 15,
      height: screenHeight - 283,
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
      flex: 4,
      flexDirection: 'row',
      paddingVertical: 5,
      paddingHorizontal: 10,
    },
    col: {
      flex: 1,
    },
    col2: {
      flex: 2,
    },
    rowHighlighted: {
      backgroundColor: 'rgba( 0, 0, 0, 0.1)'
    },
    rowHighlighted2: {
      backgroundColor: 'rgba( 0, 0, 0, 0.05)',
    }
})