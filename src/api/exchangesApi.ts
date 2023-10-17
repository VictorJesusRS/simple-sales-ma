import * as SQLite from 'expo-sqlite';
import React, { useState} from 'react'
import { DATABASE_NAME } from '../database/databaseConfig';
import { ExchangeStoreDTO } from '../types/Exchange';

export const createTable = async ( db: SQLite.SQLiteDatabase ) => {

    return new Promise((resolve, reject) => {
        db.transaction( tx => {
            // tx.executeSql("DROP TABLE  exchanges ")
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS exchanges ( id INTEGER PRIMARY KEY AUTOINCREMENT, currency VARCHAR(120) UNIQUE, value DECIMAL(4, 2) )",
                null,
                (txOb, resulSet) => {
                    // console.log('createTable exchanges')
                    resolve(resulSet.rows._array)
                    return resulSet.rows._array
                },
                (txOb, error) => {
                    console.log( 'error',  error)
                    reject(error)
                    throw new Error(error.message);
                        // return true
                    }
                )
        })
    })  

}

export const seeder = async ( db: SQLite.SQLiteDatabase ) => {
    return new Promise((resolve, reject) => {

        const defaultRows: ExchangeStoreDTO[] = [
            {
                currency: "VEF",
                value: 0
            }
        ]
        
        db.transaction( tx => {
            db.transaction( tx => {

                defaultRows.forEach(( row ) => {
                    tx.executeSql( 
                        `INSERT INTO exchanges ( currency, value) VALUES ( ?, ? )`,
                        [ row.currency, row.value ],
                        (txOb, resulSet) => resulSet.rows._array,
                        (txOb, error) => {
                                console.log( 'error exchanges seeder row', error )
                                return true
                            }
                        )
                })
           
            },
            (error) => {
                console.log( 'error exchanges seeder', error )
                reject(error)
            },
            () => {
                console.log('success seder exchanges')
                resolve(true)
            }
        )
        })
    })  
} 

export const store = ( db: SQLite.SQLiteDatabase, data ) => {

    db.transaction( tx => {
        tx.executeSql( 
            `INSERT INTO exchanges ( currency, value) VALUES ( '${data.currency}', '${data.value}' )`,
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

export const patch = ( db: SQLite.SQLiteDatabase, data ) => {
    db.transaction( tx => {

        tx.executeSql( 
            ` UPDATE exchanges SET value = ${data.value} WHERE currency =  '${data.currency}' `,
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

export const getByCurrency = ( db: SQLite.SQLiteDatabase, setUsd, name ) => {

    db.transaction( async tx => {
        tx.executeSql( 
            `SELECT * FROM exchanges WHERE currency = '${name}'`,
            null,
            (txOb, resulSet) => {
                console.log('resulSet exchanges', resulSet.rows._array)
                console.log('resulSet exchanges 2', resulSet.rows._array[0])
                setUsd( resulSet.rows._array[0] )
            },
            (txOb, error) => {
                    // console.log( error )
                    return false
                }
            )
    })

}