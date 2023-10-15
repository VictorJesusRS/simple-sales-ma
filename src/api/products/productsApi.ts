import * as SQLite from 'expo-sqlite';
import { ProductStoreDTO } from '../../types/Product';

export const createTable = ( db: SQLite.SQLiteDatabase ) => {

    return new Promise((resolve, reject) => {
        db.transaction( tx => {
            // tx.executeSql("DROP TABLE  products ")
            console.log('db')
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS products ( id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(120), description TEXT NULL, price FLOAT)",
                null,
                (txOb, resulSet) => {
                    resolve(resulSet.rows._array)
                    return resulSet.rows._array
                },
                (txOb, error) => {
                        console.log( 'error', error )
                        reject(error)
                        return true
                    }
                )
        })
    })

}


export const store = ( db: SQLite.SQLiteDatabase, data: ProductStoreDTO ) => {
    db.transaction( tx => {
        tx.executeSql( 
            `INSERT INTO products ( name, description, price) VALUES ( '${data.name}', '${data.description}', '${data.price}' )`,
            null,
            (txOb, resulSet) => resulSet.rows._array,
            (txOb, error) => {
                    console.log( 'error', error )
                    return true
                }
            )
    })

    console.log('stored', data)
}

export const index = ( db: SQLite.SQLiteDatabase, setProducts ) => {
    db.transaction( async tx => {
        
        tx.executeSql( 
            `SELECT * FROM products`,
            null,
            (txOb, resulSet) => {
                // console.log('resulSet', resulSet.rows._array)
                setProducts( resulSet.rows._array )
            },
            (txOb, error) => {
                    // console.log( error )
                    return false
                }
            )
    })

}

export const searchByName = ( db: SQLite.SQLiteDatabase, setProducts, name ) => {

    db.transaction( async tx => {
        tx.executeSql( 
            `SELECT * FROM products WHERE name like '%${name}%'`,
            null,
            (txOb, resulSet) => {
                // console.log('resulSet', resulSet.rows._array)
                setProducts( resulSet.rows._array )
            },
            (txOb, error) => {
                    // console.log( error )
                    return false
                }
            )
    })

}

