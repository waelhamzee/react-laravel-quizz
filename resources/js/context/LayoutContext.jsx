import { createContext, useContext, useState } from "react";

const LayoutContext = createContext();

const LayoutProvider = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [pageTitle, setPageTitle] = useState("...");

  const handleDrawerToggle = () => {
    setOpenSidebar((prevOpen) => !prevOpen);
  };

  return (
    <LayoutContext.Provider
      value={{
        openSidebar,
        handleDrawerToggle,
        pageTitle,
        setPageTitle,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

const useLayoutContext = () => {
  return useContext(LayoutContext);
};

export { LayoutProvider, useLayoutContext };