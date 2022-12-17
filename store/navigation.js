import { createContext, useContext, useReducer } from "react";

const initialVal = {
    isShowNavigation: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_NAVIGATION":
      return { ...state, isShowNavigation: true };
    case "HIDE_NAVIGATION":
      return { ...state, isShowNavigation: false };
    default:
      return state;
  }
};

export const NavigationContext = createContext();
export const useNavigation = () => useContext(NavigationContext);

export const NavigationProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialVal);
  return (
    <NavigationContext.Provider value={[value, dispatch]}>
      {children}
    </NavigationContext.Provider>
  );
};
