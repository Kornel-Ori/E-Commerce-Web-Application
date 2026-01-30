import React from "react"
import ProductTableRow from "./ProductTableRow"

const ProductTable = (props) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Energy Rating</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Add</th>
                {/* <th>Delete</th> */}
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
