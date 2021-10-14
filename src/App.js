import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./containers/Home/Home";
import Signin from "./containers/Signin/Signin";
import Signup from "./containers/Signup/Signup";
import PrivateRoute from "./components/HOC/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./redux/actions/auth.actions";
import Products from "./containers/Products/Products";
import Orders from "./containers/Orders/Orders";
import Category from "./containers/Category/Category";
import { getInitialData } from "./redux/actions/initialData.action";
import NewPage from "./containers/NewPage/NewPage";

const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    if (auth.authenticate) {
      dispatch(getInitialData());
    }
  }, [auth.authenticate]);
  return (
    <div className="App">
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute path="/page" component={NewPage} />
        <PrivateRoute path="/category" component={Category} />

        <PrivateRoute path="/products" component={Products} />
        <PrivateRoute path="/orders" component={Orders} />

        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
};

export default App;
