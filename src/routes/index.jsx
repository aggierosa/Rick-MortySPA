import { Routes, Route } from "react-router-dom";
import Login from "../components/LoginForm";
import Register from "../components/RegisterForm";
import Characters from "../components/Characters";
import { useEffect, useState } from "react";

const Routers = () => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  useEffect(() => {
    const tok = JSON.parse(localStorage.getItem("@KenzieHub:token"));
    setToken(tok);
    if (token) {
      setAuth(true);
    }
  }, [auth, token]);

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Login user={user} setUser={setUser} auth={auth} setAuth={setAuth} />
        }
      >
      </Route>
      <Route path="/register" element={<Register />}>
      </Route>
      <Route
        path="/dashboard"
        element={<Characters auth={auth} setAuth={setAuth} user={user} />}
      ></Route>
    </Routes>
  );
};

export default Routers;
