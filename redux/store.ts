import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './blogSlice';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
};

const persistedReducer = persistReducer(persistConfig, blogReducer);

const store = configureStore({
	reducer: {
		blogReducer: persistedReducer,
	},
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}),
});

export default store;
export const persistor = persistStore(store);
