import React, { createContext, useContext, useState } from "react";

const GlobalbtnContext = createContext();

export function GlobalbtnProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function togglePopup() {
    setIsOpen(!isOpen);
  }

  return (
    <GlobalbtnContext.Provider value={{ isOpen, togglePopup }}>
      {children}
    </GlobalbtnContext.Provider>
  );
}

export function usePopupBtn() {
  const context = useContext(GlobalbtnContext);
  if (!context) {
    throw new Error("usePopupBtn must be used within a GlobalbtnProvider");
  }
  return context; // Return the whole context object
}
