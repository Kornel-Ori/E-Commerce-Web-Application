import React from "react"
import ProductTableRow from "./ProductTableRow"

const ProductTable = (props) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Energy Rating</th>
                <th>Price</th>
            </tr>
            </thead>

            <tbody>
            {props.products.map((product) => (
                <ProductTableRow key={product._id} product={product} />
            ))}
            </tbody>
        </table>
    )
}

export default ProductTable
