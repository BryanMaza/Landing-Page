import React, { createContext, FC, useContext, useState } from "react";

export type ContextType = {
  isOpenMenu: boolean;
  openMenu: () => void;
  closeMenu: () => void;
};

const AppContext = createContext<ContextType | null>(null);
const Context: FC = ({ children }) => {
  const [isOpenMenu, setIsOpenNavbar] = useState(false);

  const openMenu = () => setIsOpenNavbar(true);
  const closeMenu = () => setIsOpenNavbar(false);

  return (
    <AppContext.Provider value={{ isOpenMenu, openMenu, closeMenu }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, Context };
