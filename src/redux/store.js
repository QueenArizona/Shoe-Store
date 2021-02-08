import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import topSalesReducer from './topSales/reducer';
import categoriesReducer from './categories/reducer';
import itemsListReducer from './itemsList//reducer';
import itemReducer from './item/reducer';
import searchFieldReducer from './search/reducer';
import cartReducer from './cart/reducer';
import thunk from "redux-thunk";

const reducer = combineReducers({
  topSales: topSalesReducer,
  categories: categoriesReducer,
  itemsList: itemsListReducer,
  item: itemReducer,
  search: searchFieldReducer,
  cart: cartReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
