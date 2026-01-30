import React, { useState } from "react"
import axios from "axios"
import { SERVER_HOST } from "../config/global_constants"

const ProductTableRow = (props) => {
    const [quantity, setQuantity] = useState(1)
    
    const increaseQuantity = () => {
        setQuantity(quantity + 1)
    }
    
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    
    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value)
        if (value > 0) {
            setQuantity(value)
        }
    }
    
    const addToCart = () => {
        axios.post(`${SERVER_HOST}/cart/add/${props.product._id}/${quantity}`)
            .then(res => {
                alert(`${quantity} x ${props.product.name} added to cart!`)
                setQuantity(1) // Reset quantity after adding
            })
            .catch(err => {
                console.error("Error adding to cart:", err)
            })
    }
    
    return (
        <tr>
            <td>{props.product.name}</td>
            <td>{props.product.category}</td>
            <td>{props.product.energyRating}</td>
            <td>€{props.product.price}</td>
            <td>
                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <button onClick={decreaseQuantity} className="button-minus">
                        -
                    </button>
                    <input 
                        type="number" 
                        value={quantity}
                        onChange={handleQuantityChange}
                        min="1"
                        style={{ 
                            width: "50px", 
                            textAlign: "center",
                            padding: "5px",
                            WebkitAppearance: "none",
                            MozAppearance: "textfield"
                        }}
                    />
                    <button onClick={increaseQuantity} className="button-plus">
                        +
                    </button>
                </div>
            </td>
            <td>
                <button className="green-button" onClick={addToCart}>
                    Add to Cart
                </button>
            </td>
        </tr>
    )
}

export default ProductTableRow