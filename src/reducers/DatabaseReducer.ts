import { reducerAction } from "../types/ReducerAction";
import { databaseBuild, db, reset, DATABASE_NAME, databaseSeed } from '../database/databaseConfig';

export enum DatabaseActionsType { 
    BUILD = "Build",
    SEED = "Seed",
    RESET = "Reset",
    OPEN = "Open"
}

export const databaseReducer = async ( state: Object, action: reducerAction) => {
        switch (action.type) {
            case DatabaseActionsType.RESET:

                return await reset(  db, DATABASE_NAME )

            case DatabaseActionsType.OPEN:

                return await db(DATABASE_NAME)

            case DatabaseActionsType.BUILD:
                return await databaseBuild( action.payload.dbi )

            case DatabaseActionsType.SEED:
                return await databaseSeed( action.payload.dbi )
                break;
            default:
                break;
        }
}