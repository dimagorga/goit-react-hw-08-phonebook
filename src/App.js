import { Switch, Route, Redirect } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "./Components/Nav/Nav";
import ContactsPage from "./Components/Pages/ContactsPage/ContactsPage";
import LoginPage from "./Components/Pages/LoginPage/LoginPage";
import "./App.css";
import AuthPage from "./Components/Pages/AuthPage/AuthPage";
import { currentUser } from "./redux/auth/authOperations";
import { getIsAuth } from "./redux/auth/authSelectors";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <div className="container">
      <Nav />
      <Switch>
        <Route path="/contacts">
          <ContactsPage />
        </Route>
        <Route path="/users/login">
          <LoginPage />
        </Route>
        <Route path="/users/signup">
          <AuthPage />
        </Route>
      </Switch>
      {isAuth ? <Redirect to="/contacts" /> : <Redirect to="/users/login" />}
    </div>
  );
}

export default App;
