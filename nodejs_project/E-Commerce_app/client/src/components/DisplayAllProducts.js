import React, { useState, useEffect } from "react"
import ProductTable from "./ProductTable"
import { SERVER_HOST } from "../config/global_constants"
import axios from "axios"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

const DisplayAllProducts = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`${SERVER_HOST}/products`)
            .then(res => {
                setProducts(res.data)
            })
    }, [])

    return (
        <div className="form-container">
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
