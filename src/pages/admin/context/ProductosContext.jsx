import { createContext, useContext, useState, useEffect } from "react";

const ProductosContext = createContext();
export const useProductos = () => useContext(ProductosContext);

export const ProductosProvider = ({ children }) => {
  const [productos, setProductos] = useState(() => {
    const stored = localStorage.getItem("productos");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("productos", JSON.stringify(productos));
  }, [productos]);

  const agregarProducto = (nuevo) => setProductos(prev => [...prev, nuevo]);
  const actualizarProducto = (editado) => setProductos(prev => prev.map(p => p.id === editado.id ? editado : p));
  const eliminarProducto = (id) => setProductos(prev => prev.filter(p => p.id !== id));

  return (
    <ProductosContext.Provider value={{ productos, agregarProducto, actualizarProducto, eliminarProducto }}>
      {children}
    </ProductosContext.Provider>
  );
};
