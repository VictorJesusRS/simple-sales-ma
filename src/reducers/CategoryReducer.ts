import { reducerAction } from "../types/ReducerAction";
import { databaseBuild, db, reset, DATABASE_NAME, databaseSeed } from '../database/databaseConfig';

export enum CategoryActionsType {
    CREATE_TABLE = "create table",
    SEEDER = "seeder",
    STORE = "store",
    INDEX = "index",
    SEARCH_BY_NAME = "search by name",
}


export const categoryReducer = ( state: Object, action: reducerAction ) => {
    
    return new Promise((resolve, reject) => {

        switch (action.type) {
            case CategoryActionsType.CREATE_TABLE:
                
                break;
    
            case CategoryActionsType.SEEDER:
                
                break;
            case CategoryActionsType.STORE:
                
                break;
            case CategoryActionsType.INDEX:
                
                break;
            case CategoryActionsType.SEARCH_BY_NAME:
                
                break;
        
            default:
                break;
        }
    })

} 
