import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { SERVER_HOST } from "../config/global_constants"

const Cart = (props) => {
    const [cartItems, setCartItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Fetch cart from server
        axios.get(`${SERVER_HOST}/cart`)
            .then(res => {
                setCartItems(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.error("Error fetching cart:", err)
                setLoading(false)
            })
    }, [])

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
    }

    const removeFromCart = (productId) => {
        axios.delete(`${SERVER_HOST}/cart/remove/${productId}`)
            .then(res => {
                setCartItems(res.data)
            })
            .catch(err => {
                console.error("Error removing from cart:", err)
            })
    }

    const updateQuantity = (productId, newQuantity) => {
        axios.put(`${SERVER_HOST}/cart/update/${productId}/${newQuantity}`)
            .then(res => {
                setCartItems(res.data)
            })
            .catch(err => {
                console.error("Error updating quantity:", err)
            })
    }

    if (loading) {
        return <div className="form-container">Loading cart...</div>
    }

    return (
        <div className="form-container">
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div className="table-container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Energy Rating</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map(item => (
                                <tr key={item._id}>
                                    <td>{item.name}</td>
                                    <td>{item.category}</td>
                                    <td>{item.energyRating}</td>
                                    <td>€{item.price}</td>
                                    <td>
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
                                            min="1"
                                            style={{ width: "60px" }}
                                        />
                                    </td>
                                    <td>€{(item.price * item.quantity).toFixed(2)}</td>
                                    <td>
                                        <button
                                            className="red-button"
                                            onClick={() => removeFromCart(item._id)}
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="cart-total">
                        <h3>Total: €{calculateTotal().toFixed(2)}</h3>
                    </div>
                    <button className="green-button">Checkout</button>
                    <Link className="blue-button" to="/DisplayAllProducts">
                Continue Shopping
            </Link>
                </div>
            )}
            
        </div>
    )
}

export default Cart