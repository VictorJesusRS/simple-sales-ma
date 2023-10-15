import * as SQLite from 'expo-sqlite';
import * as FileSystem from "expo-file-system";

import { 
    createTable as createTableExchanges,
    seeder as exchangeSeeder
} from '../api/exchangesApi';
import { 
    createTable as createTableProducts
} from '../api/products/productsApi';
import { 
    createTable as createTableCategories,
    seeder as categoriesSeeder
 } from '../api/categoriesApi';


export const DATABASE_NAME = "SSMADB";
export const db = ( name: string ) => {
    return new Promise<SQLite.SQLiteDatabase>((resolve, reject) => {
        try {
            
            resolve( SQLite.openDatabase(name) )
        } catch (error) {
            throw new Error(`DB error: ${error.message}`)
        }
    })
}

export const reset = async ( openDB: Function, dbName: string  ) => {
    

    return new Promise((resolve, reject) => {
        ( async () => {
            // const  uri  = await FileSystem.getInfoAsync(
            //     `${FileSystem.documentDirectory}SQLite/${dbName}`
            // );

            const  readedDirectory  = await FileSystem.readDirectoryAsync(
                `${FileSystem.documentDirectory}SQLite`
                );

            // console.log('readDirectory', readedDirectory)

            if (readedDirectory.includes(dbName)) {
                await FileSystem.deleteAsync(
                    `${FileSystem.documentDirectory}SQLite/${dbName}`
                )
            }
       
            if (readedDirectory.includes(`dbName-journal`)) {
                await FileSystem.deleteAsync(
                    `${FileSystem.documentDirectory}SQLite/${dbName}-journal`
                )
            }

            try {
                const db = await openDB(dbName)
                resolve(true)
            } catch (error) {
                reject(false)
                throw new Error(`dbReset failed: ${error.message}`);
            }

        })()
    })
}

export const databaseBuild = async ( db: SQLite.SQLiteDatabase ) => {

    return new Promise( async (resolve, reject) => {
        try {
            await createTableCategories( db )
            await createTableExchanges( db )
            await createTableProducts( db )
            resolve(true)
        } catch (error) {
            reject(error)
        }
    })

}

export const databaseSeed = async ( db: SQLite.SQLiteDatabase ) => {

    return new Promise( async (resolve, reject) => {
        try {
            await categoriesSeeder( db )
            await exchangeSeeder( db )
            resolve(true)
        } catch (error) {
            reject(error)
        }
    })

}
