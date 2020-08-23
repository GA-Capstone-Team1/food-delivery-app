import { Reducer } from "./rootReducer";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import storage from "redux-persist/es/storage";
import { persistReducer, persistStore } from "redux-persist";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, Reducer);

// const store = createStore(
//   persistedReducer,
//   composeWithDevTools(applyMiddleware(thunk, logger))
// );

// let persistor = persistStore(store);

// export { store, persistor };

export const store = createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
