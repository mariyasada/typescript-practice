import { createContext, useContext, useEffect, useState } from "react";
import { AuthContextType, UserData, ProviderProps } from "../Types";
import { useNavigate } from "react-router";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState<UserData>({} as UserData);
  const navigate=useNavigate();

  useEffect(() => {
    let userFromLocalStorage = localStorage.getItem("userData");
    if (userFromLocalStorage) {
      try {
        const parsedUser = JSON.parse(userFromLocalStorage);
        if (typeof parsedUser === "object" && parsedUser !== null) {
          setUser(parsedUser);
        }
      } catch (error) {
        console.log("error parsing authentication data", error);
      }
    }
  }, []);

  const loginHandler = (data: UserData) => {
    localStorage.setItem("userData",JSON.stringify(data))
    navigate("/productpage")
  };

  const logoutHandler = () => {
    localStorage.removeItem('userData');
    navigate("/");
    setUser({} as UserData)
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, loginHandler, logoutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
