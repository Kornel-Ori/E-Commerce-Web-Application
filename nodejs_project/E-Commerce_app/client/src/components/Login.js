import React, { useState, useEffect } from "react"
import DisplayAllProducts from "./DisplayAllProducts" 
import { SERVER_HOST } from "../config/global_constants"
import axios from "axios"
import { Link } from "react-router-dom"

const Login = (props) => {
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
        <div className="form-container" style={{width: "50%"}}>
            <h1>Login</h1>
            <div style={{ marginBottom: "20px" }}>
                    <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
                        Email:
                    </label>
                    <input
                        type="email"
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        style={{
                            width: "80%",
                            padding: "10px",
                            fontSize: "16px",
                            borderRadius: "4px",
                            border: "1px solid #ccc"
                        }}
                    />
                </div>
                
                <div style={{ marginBottom: "20px" }}>
                    <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
                        Password:
                    </label>
                    <input
                        type="password"
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        style={{
                            width: "80%",
                            padding: "10px",
                            fontSize: "16px",
                            borderRadius: "4px",
                            border: "1px solid #ccc"
                        }}
                    />
                </div>
            <Link className="blue-button" to="/DisplayAllProducts">
                Add New Product
            </Link>
        </div>
    )
}

export default Login