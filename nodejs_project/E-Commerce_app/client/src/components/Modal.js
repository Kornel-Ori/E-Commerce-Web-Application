import React from "react"
import { Link } from "react-router-dom"

const Modal = ({ show, message, onClose }) => {
    if (!show) return null
    
    return (
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000
        }} onClick={onClose}>
            <div style={{
                backgroundColor: "white",
                padding: "40px",
                borderRadius: "10px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                maxWidth: "450px",
                textAlign: "center",
                animation: "slideIn 0.3s ease"
            }} onClick={(e) => e.stopPropagation()}>
                <div style={{
                    fontSize: "60px",
                    color: "#28a745",
                    marginBottom: "20px"
                }}>
                    ✓
                </div>
                <h2 style={{ marginBottom: "15px", color: "#333" }}>Added to Cart!</h2>
                <p style={{ marginBottom: "30px", color: "#666", fontSize: "16px" }}>
                    {message}
                </p>
                <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                    <button className="green-button" onClick={onClose}>
                        Continue Shopping
                    </button>
                    <Link className="blue-button" to="/cart">
                        View Cart
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Modal