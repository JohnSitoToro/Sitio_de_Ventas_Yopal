import { createContext, useContext, useState, useEffect } from "react";

const CategoriasContext = createContext();
export const useCategorias = () => useContext(CategoriasContext);

export const CategoriasProvider = ({ children }) => {
  const categoriasDisponibles = [
    "Belleza", "Alimentacion", "Vitaminas", 
    "Suplementos", 
  ];

  const [categorias, setCategorias] = useState(() => {
    const stored = localStorage.getItem("categorias");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("categorias", JSON.stringify(categorias));
  }, [categorias]);

  const agregarCategoria = (nombre) => {
    const nuevo = { id: Date.now(), nombre };
    setCategorias([...categorias, nuevo]);
  };

  const editarCategoria = (id, datos) => {
    setCategorias(categorias.map(c => c.id === id ? { ...c, ...datos } : c));
  };

  const eliminarCategoria = (id) => {
    setCategorias(categorias.filter(c => c.id !== id));
  };

  return (
    <CategoriasContext.Provider value={{
      categorias,
      categoriasDisponibles,
      agregarCategoria,
      editarCategoria,
      eliminarCategoria
    }}>
      {children}
    </CategoriasContext.Provider>
  );
};
