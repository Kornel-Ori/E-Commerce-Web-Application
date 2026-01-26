import React from "react"


export const CarTableRow = props =>
{    
    return (
        <tr>
            <td>{props.car.model}</td>
            <td>{props.car.colour}</td>
            <td>{props.car.year}</td>
            <td>{props.car.price}</td>
        </tr>
    )
}