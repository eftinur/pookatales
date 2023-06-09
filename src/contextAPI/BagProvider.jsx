import { createContext } from "react";

// Creating a context API to store data
export const BAG_CONTEXT = createContext();

const BagProvider = ({children}) => {
  const test = "TEST";

  const value = {
    test,
  };
  return <BAG_CONTEXT.Provider value={value}>
    {children}
  </BAG_CONTEXT.Provider>;
};

export default BagProvider;
