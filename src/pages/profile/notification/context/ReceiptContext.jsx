
import { createContext, useContext, useState } from "react";

const ReceiptContext = createContext();

export const ReceiptProvider = ({ children }) => {
  const [receipts, setReceipts] = useState([]);

  const addReceipt = (receipt) => {
    setReceipts((prev) => [...prev, receipt]);
  };

  // 🔥 Nueva función para limpiar recibos
  const clearReceipts = () => {
    setReceipts([]);
  };

  return (
    <ReceiptContext.Provider value={{ receipts, addReceipt, clearReceipts }}>
      {children}
    </ReceiptContext.Provider>
  );
};

export const useReceipts = () => useContext(ReceiptContext);
