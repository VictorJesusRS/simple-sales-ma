import * as SQLite from 'expo-sqlite';
import React, { useState} from 'react'

const db = SQLite.openDatabase('SSMADB')

export const createTable = () => {
    db.transaction( tx => {
        // tx.executeSql("DROP TABLE  exchanges ")
        tx.executeSql("CREATE TABLE IF NOT EXISTS exchanges ( id INTEGER PRIMARY KEY AUTOINCREMENT, currency VARCHAR(120) UNIQUE, exchange DECIMAL(4, 2) )")
        db.transaction( tx => {
            tx.executeSql( 
                `INSERT INTO exchanges ( currency, exchange) VALUES ( 'VEF', 0 )`,
                null,
                (txOb, resulSet) => resulSet.rows._array,
                (txOb, error) => {
                        console.log( 'error3', error )
                        return true
                    }
                )
        })
    })
}
createTable()

export const store = ( data ) => {

    db.transaction( tx => {
        tx.executeSql( 
            `INSERT INTO exchanges ( currency, exchange) VALUES ( '${data.currency}', '${data.exchange}' )`,
            null,
            (txOb, resulSet) => resulSet.rows._array,
            (txOb, error) => {
                    console.log( 'error1', error )
                    return true
                }
            )
    })

    console.log('stored', data)
}

export const patch = ( data ) => {
    createTable()
    db.transaction( tx => {

        tx.executeSql( 
            ` UPDATE exchanges SET exchange = ${data.exchange} WHERE currency =  '${data.currency}' `,
            null,
            (txOb, resulSet) => resulSet.rows._array,
            (txOb, error) => {
                    console.log( 'error2', error )
                    return true
                }
            )
    })

    // console.log('patched', data)
}

export const getByCurrency = ( setUsd, name ) => {

    db.transaction( async tx => {
        tx.executeSql( 
            `SELECT * FROM exchanges WHERE currency = '${name}'`,
            null,
            (txOb, resulSet) => {
                // console.log('resulSet', resulSet.rows._array)
                setUsd( resulSet.rows._array[0] )
            },
            (txOb, error) => {
                    // console.log( error )
                    return false
                }
            )
    })

}