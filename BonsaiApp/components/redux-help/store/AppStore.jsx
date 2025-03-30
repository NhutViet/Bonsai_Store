import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import cartSlice from "../slices/cart";
import AuthReducer from "../slices/AuthSlice";

const CartConfig = {
  key: "cart",
  storage: AsyncStorage,
};

const persistAuthConfig = {
  key: "auth",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  auth: persistReducer(persistAuthConfig, AuthReducer),
});

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
