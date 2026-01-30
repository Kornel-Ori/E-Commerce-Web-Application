import React, { useState, useEffect } from "react"
import ProductTable from "./ProductTable"
import { SERVER_HOST } from "../config/global_constants"
import axios from "axios"
import { Link } from "react-router-dom"

const DisplayAllProducts = (props) => {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        axios.get(`${SERVER_HOST}/products`)
            .then(res => {
                setProducts(res.data)
            })
            .catch(err => {
                console.error("Error fetching products:", err)
            })
    }, [])
    
    return (
        <div className="form-container">
            <h1>All Products</h1>
            <div className="table-container">
                <ProductTable products={products} />
            </div>
            <Link className="blue-button" to="/AddProduct">
                Add New Product
            </Link>
        </div>
    )
}

export default DisplayAllProducts