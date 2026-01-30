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
            .catch(err => {
                console.error("Error fetching products:", err)
            })
    }, [])
    
    return (
        <div>
            <nav style={{ 
                display: "grid", 
                gridTemplateColumns: "1fr auto 1fr", 
                alignItems: "center", 
                padding: "10px", 
                borderBottom: "1px solid #ccc" 
            }}>
                <div></div>
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="search-bar"
                    style={{ width: "300px", padding: "8px" }}
                />
                <div style={{ textAlign: "right" }}>
                    <Link 
                        className="cart-button" 
                        to="/cart" 
                        style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}
                    >
                        Go to Cart
                    </Link> 
                </div>
            </nav>
            <div className="form-container">
                <div className="table-container">
                    <ProductTable products={products} />
                </div>
                <Link className="blue-button" to="/AddProduct">
                    Add New Product
                </Link>
            </div>
        </div>
    )
}

export default DisplayAllProducts