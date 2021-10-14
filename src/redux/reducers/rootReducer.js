import { combineReducers } from "redux";
import authReducers from "./auth.reducers";
import userReducer from "./user.reducers";
import productReducer from "./product.reducers";
import orderReducer from "./order.reducers";
import categoryReducer from "./category.reducers";
import pageReducer from "./page.reducer";

const rootReducer = combineReducers({
  auth: authReducers,
  user: userReducer,
  product: productReducer,
  order: orderReducer,
  category: categoryReducer,
  page: pageReducer,
});
export default rootReducer;
