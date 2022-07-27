import { createContext, useState } from "react";
import { sparmapi } from "../../services/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState();

  const handleUserInfo = (newUserInfo) => {
    setUserInfo(newUserInfo);
  };

  return (
    <UserContext.Provider value={{ userInfo, handleUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
