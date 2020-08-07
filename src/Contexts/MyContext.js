import React from "react";

export const theme = {
  dark: {
    backgroundColor: "salmon",
    color: "white",
  },
  light: {
    backgroundColor: "blue",
    color: "white",
  },
};

export const MyContext = React.createContext(theme);

export const Container = (props) => {
  return (
    <div>
      <MyContext.Provider value={theme}>{props.children}</MyContext.Provider>
    </div>
  );
};
