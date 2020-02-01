import { createStore, applyMiddleware } from 'redux'
import { Reducer } from '../Reducer/Reducer'
import reduxThunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'dragons']
}

const persistedReducer = persistReducer(persistConfig, Reducer)

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(persistedReducer)
const persistor = persistStore(store)

export { store, persistor }