import React, { createContext, useState } from 'react';

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [lostItems, setLostItems] = useState([]);
  const [foundItems, setFoundItems] = useState([]);

  const addLostItem = (item) => {
    setLostItems((prev) => [...prev, { ...item, id: Date.now() }]);
  };

  const addFoundItem = (item) => {
    setFoundItems((prev) => [...prev, { ...item, id: Date.now() }]);
  };

  return (
    <ItemContext.Provider value={{ lostItems, foundItems, addLostItem, addFoundItem }}>
      {children}
    </ItemContext.Provider>
  );
};