import React from "react"


export const ProductTableRow = props =>
{
    return (
    <tr>
        <td>{props.product.model}</td>
        <td>{props.product.colour}</td>
        <td>{props.product.year}</td>
        <td>{props.product.price}</td>
    </tr>
    )
}