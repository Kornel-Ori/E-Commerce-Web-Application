import React from "react"

const ProductTableRow = (props) => {
    return (
        <tr>
            <td>{props.product.name}</td>
            <td>{props.product.category}</td>
            <td>{props.product.energyRating}</td>
            <td>{props.product.price}</td>
        </tr>
    )
}

export default ProductTableRow
