import React from "react"
import {CarTableRow} from "./CarTableRow"


export const CarTable = props =>
{
    return (
    <table>
        <thead>
            <tr>
                <th>Model</th>
                <th>Colour</th>
                <th>Year</th>
                <th>Price</th>
            </tr>
        </thead>
    
        <tbody>
            {props.cars.map((car) => <CarTableRow key={car._id} car={car}/>)}
    </tbody>
    </table>
    )
}