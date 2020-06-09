import publicReducer from './reducers'
import { createStore } from 'redux'
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2 
};
const myPersistReducer = persistReducer(persistConfig, publicReducer)
const store = createStore(myPersistReducer);

export const persistor = persistStore(store)
export {store};