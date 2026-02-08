import React, { useState } from "react"
import ProductTableRow from "./ProductTableRow"

const ProductTable = (props) => {
    const [favorites, setFavorites] = useState([])
    
    const handleFavoriteClick = (productId) => {
        if (favorites.includes(productId)) {
            // Remove from favorites
            setFavorites(favorites.filter(id => id !== productId))
        } else {
            // Add to favorites
            setFavorites([...favorites, productId])
        }
    }
    
    const isFavorite = (productId) => {
        return favorites.includes(productId)
    }
    
    return (
        <table >
            <thead>
                <tr>
                    <th>Favorite</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Energy Rating</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Add</th>
                </tr>
            </thead>
            <tbody>
                {props.products.map((product) => (
                    <ProductTableRow 
                        key={product._id} 
                        product={product}
                        isFavorite={isFavorite(product._id)}
                        onFavoriteClick={() => handleFavoriteClick(product._id)}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default ProductTable