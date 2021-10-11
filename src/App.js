import { Switch } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Nav from "./Components/Nav/Nav";
import ContactsPage from "./Components/Pages/ContactsPage/ContactsPage";
import LoginPage from "./Components/Pages/LoginPage/LoginPage";
import "./App.css";
import AuthPage from "./Components/Pages/AuthPage/AuthPage";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import { currentUser } from "./redux/auth/authOperations";
import PublicRoute from "./Components/PublicRoute/PublicRoute";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <div className="container">
      <Nav />
      <Switch>
        <PrivateRoute path="/contacts">
          <ContactsPage />
        </PrivateRoute>
        <PublicRoute path="/users/login" restricted>
          <LoginPage />
        </PublicRoute>
        <PublicRoute path="/users/signup" restricted>
          <AuthPage />
        </PublicRoute>
      </Switch>
    </div>
  );
}

export default App;
