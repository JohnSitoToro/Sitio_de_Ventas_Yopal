import { CategoriasProvider } from "../../context/CategoriasContext";
import { ProductosProvider } from "../../context/ProductosContext";

import Catalogos from "./catalogos/Catalogos";
import Productos from "./productos/Productos";

const Inventario = () => {
  return (
    <CategoriasProvider>
      <ProductosProvider>
        <div style={{ padding: 20 }}>
          <h1>Panel de Inventario</h1>

          <div style={{ display: "grid", gap: 30 }}>
            <Catalogos />
            <Productos />
          </div>
        </div>
      </ProductosProvider>
    </CategoriasProvider>
  );
};

export default Inventario;
