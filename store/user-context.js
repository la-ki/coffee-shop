import { createContext, useContext, useState } from 'react';
import {
  getStorage,
  removeStorage,
  setStorage,
} from '../utils/helpers/storage';

const UserContext = createContext({
  userStorage: [],
});
const UserDispatchContext = createContext({
  addUser: (userData) => {},
  clearUser: () => {},
  updateUserInfo: (newUserData) => {},
});

export const useUserData = () => {
  return useContext(UserContext);
};
export const useUserUpdate = () => {
  return useContext(UserDispatchContext);
};

const useUser = () => {
  const USER_KEY = 'user-data';
  const [userStorage, setUserStorage] = useState(getStorage(USER_KEY));

  const addUser = (userData) => {
    setStorage(USER_KEY, userData);
    setUserStorage(userData);
  };

  const updateUserInfo = (newUserData) => {
    setStorage(USER_KEY, newUserData);
    setUserStorage(newUserData);
  };

  const clearUser = () => {
    removeStorage(USER_KEY);
    setUserStorage(null);
  };

  return {
    userStorage,
    setUserStorage,
    addUser,
    updateUserInfo,
    clearUser,
  };
};

const UserProvider = ({ children }) => {
  const { userStorage, setUserStorage, addUser, updateUserInfo, clearUser } =
    useUser();

  return (
    <UserContext.Provider value={{ userStorage }}>
      <UserDispatchContext.Provider
        value={{
          setUserStorage,
          addUser,
          updateUserInfo,
          clearUser,
        }}
      >
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};

export default UserProvider;
