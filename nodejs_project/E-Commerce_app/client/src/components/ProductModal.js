import React from "react"

const ProductModal = ({ show, product, quantity, onQuantityChange, onIncrease, onDecrease, onAddToCart, onClose }) => {
    if (!show) return null
    
    return (
        <div 
            style={{
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
            }}
            onClick={onClose}
        >
            <div 
                style={{
                    backgroundColor: "white",
                    padding: "40px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                    maxWidth: "500px",
                    width: "90%"
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                    <h2 style={{ margin: 0, color: "#333" }}>{product.name}</h2>
                    <button 
                        onClick={onClose}
                        style={{
                            background: "none",
                            border: "none",
                            fontSize: "30px",
                            cursor: "pointer",
                            color: "#999",
                            lineHeight: 1
                        }}
                    >
                        ×
                    </button>
                </div>
                
                {/* Product Image */}
                <div style={{
                    width: "100%",
                    height: "200px",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "80px",
                    marginBottom: "20px"
                }}>
                    📦
                </div>
                
                <div style={{ marginBottom: "15px" }}>
                    <strong style={{ color: "#666" }}>Category:</strong>
                    <p style={{ margin: "5px 0", fontSize: "16px" }}>{product.category}</p>
                </div>
                
                <div style={{ marginBottom: "15px" }}>
                    <strong style={{ color: "#666" }}>Energy Rating:</strong>
                    <p style={{ 
                        margin: "5px 0", 
                        fontSize: "20px", 
                        fontWeight: "bold",
                        color: product.energyRating.includes("A+++") ? "#28a745" : 
                               product.energyRating.includes("A++") ? "#5cb85c" : "#ffc107"
                    }}>
                        {product.energyRating}
                    </p>
                </div>
                
                <div style={{ marginBottom: "20px" }}>
                    <strong style={{ color: "#666" }}>Price:</strong>
                    <p style={{ 
                        margin: "5px 0", 
                        fontSize: "28px", 
                        fontWeight: "bold",
                        color: "#007bff"
                    }}>
                        €{product.price}
                    </p>
                </div>
                
                <div style={{ 
                    display: "flex", 
                    gap: "10px", 
                    alignItems: "center",
                    marginBottom: "20px",
                    padding: "15px",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "5px",
                    justifyContent: "space-between"
                }}>
                    <strong style={{ color: "#666" }}>Quantity:</strong>
                    <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                        <button onClick={onDecrease} className="button-minus">
                            -
                        </button>
                        <input
                            type="number"
                            value={quantity}
                            onChange={onQuantityChange}
                            min="1"
                            style={{
                                width: "50px",
                                textAlign: "center",
                                padding: "5px",
                                WebkitAppearance: "none",
                                MozAppearance: "textfield",
                                border: "1px solid #ccc",
                                borderRadius: "4px"
                            }}
                        />
                        <button onClick={onIncrease} className="button-plus">
                            +
                        </button>
                    </div>
                </div>
                
                <button 
                    className="green-button"
                    onClick={onAddToCart}
                    style={{
                        width: "100%",
                        padding: "15px",
                        fontSize: "18px",
                        fontWeight: "bold"
                    }}
                >
                    Add to Cart - €{(product.price * quantity).toFixed(2)}
                </button>
            </div>
        </div>
    )
}

export default ProductModal