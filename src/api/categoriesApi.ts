import * as SQLite from 'expo-sqlite';
import { CategoryStoreDTO } from '../types/Category';

export const createTable = async ( db: SQLite.SQLiteDatabase ) => {

    return new Promise((resolve, reject) => {
        db.transaction( tx => {
            // tx.executeSql("DROP TABLE  products ")
           
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS categories ( id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(120), description TEXT NULL )",
                null,
                (txOb, resulSet) => {
                    // console.log('createTable categories')
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

        const defaultRows: CategoryStoreDTO[] = [
            {
                name: "Varios",
                description: "",
            }
        ]
        
        db.transaction( tx => {
            db.transaction( tx => {

                defaultRows.forEach(( row ) => {
                    console.log('aaa', row)
                    tx.executeSql( 
                        `INSERT INTO categories ( name, description) VALUES ( ?, ? )`,
                        [ row.name, row.description],
                        (txOb, resulSet) => resulSet.rows._array,
                        (txOb, error) => {
                                console.log( 'error categories seeder row', error )
                                return true
                            }
                        )
                })
           
            },
            (error) => {
                console.log( 'error categories seeder', error )
                reject(error)
            },
            () => {
                console.log('success seeder categories')
                resolve(true)
            }
        )
        })
    })  
} 

export const store = async ( db: SQLite.SQLiteDatabase, data: CategoryStoreDTO ) => {

    return new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql( 
                // `INSERT INTO products ( name, description ) VALUES ( '${data.name}', '${data.description}' )`,
                `INSERT INTO categories ( name, description ) VALUES ( '?', '?' )`,
                [ data.name, data.description ],
                (txOb, resulSet) => {
                    resolve(resulSet.rows._array)
                    return resulSet.rows._array
                },
                (txOb, error) => {
                        console.log( 'error', error )
                        reject(error)
                        throw new Error(error.message);
                        // return true
                    }
                )
        })
    })



    console.log('stored', data)
}

export const index = ( db: SQLite.SQLiteDatabase, setProducts ) => {

    return new Promise(( resolve, reject) => {
        db.transaction( async tx => {
        
            tx.executeSql( 
                `SELECT * FROM categories`,
                null,
                (txOb, resulSet) => {
                    // console.log('resulSet', resulSet.rows._array)
                    setProducts( resulSet.rows._array )
                    resolve( resulSet.rows._array )
                },
                (txOb, error) => {
                        console.log( 'error', error )
                        reject(error)
                        throw new Error(error.message);
                        return false
                    }
                )
        })
    })


}

export const searchByName = ( db: SQLite.SQLiteDatabase, setProducts, name ) => {

    return new Promise(( resolve, reject) => {
        db.transaction( async tx => {
            tx.executeSql( 
                `SELECT * FROM categories WHERE name like '%${name}%'`,
                null,
                (txOb, resulSet) => {
                    // console.log('resulSet', resulSet.rows._array)
                    setProducts( resulSet.rows._array )
                    resolve( resulSet.rows._array )
                },
                (txOb, error) => {
                        console.log( error )
                        reject(error)
                        return false
                    }
                )
        })
    })

}

