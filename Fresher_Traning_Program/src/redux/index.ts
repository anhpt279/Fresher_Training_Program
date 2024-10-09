import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import { PERSIT_CONFIG } from "./constant";
import menu from "./modules/menu/reducer";
import theme from "./modules/theme/reducer";
import user from "./modules/user/reducer";

// Reducer function resolution
const reducer = combineReducers({
	menu,
	user,
	theme
});

// persitConfig configuration information
const persitConfig = {
	key: PERSIT_CONFIG,
	storage: storage
};

// create configuration persist information
const persist_reducers = persistReducer(persitConfig, reducer);

// Solve the problem that the same function supports multiple dispatches and asynchronous actions in React development
let store = createStore(persist_reducers, applyMiddleware(thunk));

const persistor = persistStore(store);

const clearPersistor = () => {
	localStorage.removeItem(`persist:${PERSIT_CONFIG}`);
};
export { clearPersistor, persistor, store };
