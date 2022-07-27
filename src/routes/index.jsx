import { Routes, Route } from "react-router-dom";
import Login from "../components/LoginForm";
import Register from "../components/RegisterForm";
import Characters from "../components/Characters";
import { useEffect, useState } from "react";

const Routers = () => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Login
            token={token}
            setToken={setToken}
            user={user}
            setUser={setUser}
            auth={auth}
            setAuth={setAuth}
          />
        }
      />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={<Characters auth={auth} setAuth={setAuth} user={user} />}
      />
    </Routes>
  );
};

export default Routers;
