import React, {useState, useEffect} from "react"
import {CarTable} from "./CarTable"


export const DisplayAllCars = props =>
{
    const [cars, setCars] = useState([])
    
    useEffect(() =>
        {
            const cars = [{_id: 0, model: "Avensis", colour: "Red", year: 2020, price: 30000},
                {_id: 1, model: "Yaris", colour: "Green", year: 2010, price: 2000},
                {_id: 2, model: "Corolla", colour: "Red", year: 2019, price: 20000},
                {_id: 3, model: "Avensis", colour: "Silver", year: 2018, price: 20000},
                {_id: 4, model: "Camry", colour: "White", year: 2020, price: 50000}]
            setCars(cars)
        }, [])
    
        return (           
            <div className="form-container">
                <div className="table-container">
                    <CarTable cars={cars} /> 
                </div>
            </div> 
            
        )
}