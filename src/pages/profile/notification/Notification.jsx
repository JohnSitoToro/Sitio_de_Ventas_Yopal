import { useReceipts } from "./context/ReceiptContext";
import "./Notification.css";

export default function Notification() {
  const { receipts, clearReceipts } = useReceipts();

  return (
    <div className="notifications-container">
      <h2 className="notifications-title">Compras realizadas</h2>

      {receipts.length > 0 && (
        <button className="clear-btn" onClick={clearReceipts}>
          Limpiar notificaciones
        </button>
      )}

      {receipts.length === 0 ? (
        <p className="no-receipts">No hay recibos generados.</p>
      ) : (
        receipts.map((receipt) => (
          <div key={receipt.id} className="receipt-card">
            <div className="receipt-header">
              <span className="receipt-id">Recibo #{receipt.id}</span>
              <span className="receipt-date">{receipt.date}</span>
            </div>

            {receipt.items.map((item) => (
              <div key={item.id} className="receipt-item">
                {item.qty} × {item.name} — ${item.qty * item.price}
              </div>
            ))}

            <div className="receipt-total">
              Total: ${receipt.total}
            </div>
          </div>
        ))
      )}
    </div>
  );
}