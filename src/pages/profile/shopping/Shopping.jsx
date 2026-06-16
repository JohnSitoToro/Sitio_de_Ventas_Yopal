import React, { useState } from "react";
import "./Shopping.css";
import { useReceipts } from "../notification/context/ReceiptContext";

// Importamos productos creados desde Admin
import { useProductos } from "../../admin/context/ProductosContext";

export default function ShoppingCart() {
  const { productos: productosAdmin } = useProductos();
  const [cart, setCart] = useState([]);
  const [receipt, setReceipt] = useState(null);

  // Convertimos productosAdmin a formato compatible con carrito
  const allProducts = productosAdmin.map(p => ({
    id: p.id,
    name: p.nombre,
    price: p.precio,
    image: p.imagen || null,
  }));

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0

  const { addReceipt } = useReceipts();

  const finalizePurchase = () => {
    if (cart.length === 0) {
      alert("El carrito está vacío");
      return;
    }

    const receiptData = {
      id: Date.now(),
      items: cart,
      total,
      date: new Date().toLocaleString(),
    };

    addReceipt(receiptData);
    setReceipt(receiptData);
    setCart([]);
    alert(
      "¡Compra finalizada con éxito!\n\n" +
      "Tu recibo de compra ha sido registrado y puedes consultarlo en la sección de Notificaciones."
    );
  };

  return (
    <div className="cart-container">
      <h2> Tus productos </h2>

      {allProducts.length === 0 && <p>No hay productos disponibles.</p>}

      {allProducts.map((product) => (
        <div key={product.id} className="product-item">
          {product.image && (
            <img
              src={product.image}
              alt={product.name}
              className="cart-product-image"
            />
          )}
          <span>
            <strong>{product.name}</strong> - ${product.price}
          </span>
          <button className="btn-add" onClick={() => addToCart(product)}>
            Agregar
          </button>
        </div>
      ))}

      <hr className="line" />

      <h2>🛒 Carrito de compras</h2>

      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            {item.image && (
              <img
                src={item.image}
                alt={item.name}
                className="cart-product-image"
              />
            )}
            <span>{item.name} (${item.price})</span>

            <div>
              <button className="qty-btn" onClick={() => decreaseQty(item.id)}>-</button>
              <span className="qty-display">{item.qty}</span>
              <button className="qty-btn" onClick={() => increaseQty(item.id)}>+</button>
            </div>

            <span>Subtotal: ${item.price * item.qty}</span>

            {/* Botón eliminar del carrito */}
            <button className="btn-delete-cart" onClick={() => removeFromCart(item.id)}>
              Eliminar
            </button>
          </div>
        ))
      )}

      <hr className="line" />

      <h3>Total a pagar: ${total}</h3>

      <button className="btn-finish" onClick={finalizePurchase}>
        Finalizar compra
      </button>

      {receipt && (
        <div className="receipt-box">
          <h2> Recibo de compra</h2>
          <p><strong>Fecha:</strong> {receipt.date}</p>

          {receipt.items.map((item) => (
            <div key={item.id} className="receipt-item">
              {item.qty} × {item.name} = ${item.qty * item.price}
            </div>
          ))}

          <h3>Total: ${receipt.total}</h3>
        </div>
      )}
    </div>
  );
}
