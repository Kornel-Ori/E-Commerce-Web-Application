import React, {useState, useEffect} from "react"
import {CarTable} from "./CarTable"
import {SERVER_HOST} from "../config/global_constants"
import axios from "axios"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

export const DisplayAllCars = props =>
{
    const [cars, setCars] = useState([])


    useEffect(() =>
    {
        axios.get(`${SERVER_HOST}/cars`)
        .then(res => 
            {
                setCars(res.data)
            })
    }, [])


    return (
    <div className="form-container">
        <div className="table-container">
            <CarTable cars={cars} /> 
        </div>
        <Link className="blue-button" to="AddCar">Add New Car</Link>
    </div>
    )
}