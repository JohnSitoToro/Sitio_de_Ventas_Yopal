import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout.jsx";

import About from "./pages/about/About.jsx";
import Admin from "./pages/admin/Admin.jsx";
import Login from "./pages/login/Login.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Productos from "./pages/admin/productos/Productos.jsx";
import Register from "./pages/register/Register.jsx";
import Home from "./pages/home/Home.jsx";
import Contactos from "./pages/contactos/Contactos.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import Catalogos from "./pages/admin/catalogos/Catalogos.jsx";
import Categorias from "./pages/admin/categorias/Categorias.jsx";
import Marcas from "./pages/marcas/Marcas.jsx";
import ShoppingCart from "./pages/profile/shopping/Shopping.jsx";
import Notification from "./pages/profile/notification/Notification.jsx";

import { ReceiptProvider } from "./pages/profile/notification/context/ReceiptContext.jsx";
import { CategoriasProvider } from "./pages/admin/context/CategoriasContext.jsx";
import { ProductosProvider } from "./pages/admin/context/ProductosContext.jsx";
import ProductosPorCategoria from "./pages/admin/productos/ProductosPorCategoria.jsx";


import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ReceiptProvider>
      <CategoriasProvider>
        <ProductosProvider>
          <Layout>
            <Routes>
              <Route index path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Admin" element={<Admin />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Products" element={<Productos />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/Contacts" element={<Contactos />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/productos/categoria/:categoriaId" element={<ProductosPorCategoria />} />
              <Route path="/categoria/:nombre" element={<ProductosPorCategoria />} />


              <Route path="/admin/productos" element={<Productos />} />
              <Route path="/admin/catalogos" element={<Catalogos />} />
              <Route path="/admin/categorias" element={<Categorias />} />

              <Route path="/NuestrasMarcas" element={<Marcas />} />
              <Route path="/ShoppingCart" element={<ShoppingCart />} />
              <Route path="/Notificaciones" element={<Notification />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </ProductosProvider>
      </CategoriasProvider>
    </ReceiptProvider>
  </BrowserRouter>
);
