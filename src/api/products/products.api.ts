import * as SQLite from 'expo-sqlite';
import React, { useState} from 'react'
import { ProductStoreDTO } from '../../types/Product';

const db = SQLite.openDatabase('SSMADB')

export const store = ( data: ProductStoreDTO ) => {
    db.transaction( tx => {
        tx.executeSql( 
            `INSERT INTO products ( name, description, price) VALUES ( '${data.name}', '${data.description}', '${data.price}' )`,
            null,
            (txOb, resulSet) => resulSet.rows._array,
            (txOb, error) => {
                    console.log( error )
                    return true
                }
            )
    })

    console.log('stored', data)
}

export const index = ( setProducts ) => {

    db.transaction( async tx => {
        tx.executeSql( 
            `SELECT * FROM products`,
            null,
            (txOb, resulSet) => {
                console.log('resulSet', resulSet.rows._array)
                setProducts( resulSet.rows._array )
            },
            (txOb, error) => {
                    // console.log( error )
                    return false
                }
            )
    })

}

export const searchByName = ( setProducts, name ) => {

    db.transaction( async tx => {
        tx.executeSql( 
            `SELECT * FROM products WHERE name like '%${name}%'`,
            null,
            (txOb, resulSet) => {
                console.log('resulSet', resulSet.rows._array)
                setProducts( resulSet.rows._array )
            },
            (txOb, error) => {
                    // console.log( error )
                    return false
                }
            )
    })

}

export const createTable = () => {
    db.transaction( tx => {
        tx.executeSql("CREATE TABLE IF NOT EXISTS products ( id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(120), description TEXT NULL, price FLOAT)")
    })
}