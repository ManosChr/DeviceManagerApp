import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // storage: FilesystemStorage, // This storage can be used on Android to prevent issues with the storage limitations in the RN AsyncStorage implementation.
  // blacklist: ['some_reducer'], // will not be persisted
  // stateReconciler: autoMergeLevel2, // defines how incoming state is merged in with initial state (hardSet, autoMergeLevel1, autoMergeLevel2)
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store: any = createStore(persistedReducer, applyMiddleware(thunk))
  let persistor = persistStore(store)
  return { store, persistor }
}
