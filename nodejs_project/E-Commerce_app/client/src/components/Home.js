import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div style={{
            textAlign: "center",
            padding: "80px 20px",
            maxWidth: "800px",
            margin: "0 auto"
        }}>
            <h1 style={{
                fontSize: "48px",
                marginBottom: "20px",
                color: "#333"
            }}>
                Welcome to E-Commerce Store
            </h1>
            
            <p style={{
                fontSize: "20px",
                color: "#665",
                marginBottom: "40px",
                lineHeight: "1.6"
            }}>
                Discover our wide selection of energy-efficient appliances. 
                Quality products with great energy ratings for your home.
            </p>
            
            <Link 
                to="/Login" 
                className="green-button"
                style={{
                    display: "inline-block",
                    padding: "15px 40px",
                    fontSize: "20px",
                    textDecoration: "none",
                    borderRadius: "5px"
                }}
            >
                Login
            </Link>
            <Link 
                to="/DisplayAllProducts" 
                className="green-button"
                style={{
                    display: "inline-block",
                    padding: "15px 40px",
                    fontSize: "20px",
                    textDecoration: "none",
                    borderRadius: "5px"
                }}
            >
                Register
            </Link>
            
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "30px",
                marginTop: "80px"
            }}>
                <div style={{
                    padding: "30px",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "8px"
                }}>
                    <h3 style={{ marginBottom: "15px" }}>🌟 Quality Products</h3>
                    <p style={{ color: "#665" }}>
                        Top-rated appliances with excellent energy efficiency
                    </p>
                </div>
                
                <div style={{
                    padding: "30px",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "8px"
                }}>
                    <h3 style={{ marginBottom: "15px" }}>🚚 Fast Delivery</h3>
                    <p style={{ color: "#665" }}>
                        Quick and reliable shipping to your doorstep
                    </p>
                </div>
                
                <div style={{
                    padding: "30px",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "8px"
                }}>
                    <h3 style={{ marginBottom: "15px" }}>💰 Best Prices</h3>
                    <p style={{ color: "#665" }}>
                        Competitive prices on all our products
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home