import React from "react"
import axios from "axios"
import { SERVER_HOST } from "../config/global_constants"

const ProductTableRow = (props) => {
    const addToCart = () => {
        axios.post(`${SERVER_HOST}/cart/add/${props.product._id}`)
            .then(res => {
                alert("Product added to cart!")
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
            <td>{props.product.price}</td>
            <td>
                <button className="green-button" onClick={addToCart}>
                    Add to Cart
                </button>
            </td>
        </tr>
    )
}

export default ProductTableRow