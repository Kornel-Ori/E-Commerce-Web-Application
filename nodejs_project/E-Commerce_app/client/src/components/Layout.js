import React from "react"
import { Link } from "react-router-dom"

const Layout = ({ children }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            {/* Navbar */}
            <nav className="nav-bar">
                <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "24px", fontWeight: "bold" }}>
                    E-Commerce Store
                </Link>
                
                <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                    <input 
                        type="text" 
                        placeholder="Search products..." 
                        className="search-bar"
                    />
                    <Link to="/DisplayAllProducts" style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>
                        Products
                    </Link>
                    <Link to="/cart" className="cart-link" >
                        🛒 Cart
                    </Link>
                </div>
            </nav>
            {/* Main Content */}
            <div className="content" style={{ flex: "1" }}>
                {children}
            </div>

            {/* Footer */}
            <footer style={{
                backgroundColor: "#343a40",
                color: "white",
                padding: "30px 30px",
                marginTop: "50px",
                borderTop: "2px solid #ccc"
            }}>
                <div style={{ 
                    display: "grid", 
                    gridTemplateColumns: "1fr 1fr 1fr", 
                    gap: "30px",
                    maxWidth: "1200px",
                    margin: "0 auto"
                }}>
                    {/* Column 1 */}
                    <div>
                        <h4 style={{ marginBottom: "15px" }}>About Us</h4>
                        <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
                            Your trusted e-commerce store for quality products with great energy ratings.
                        </p>
                    </div>
                    
                    {/* Column 2 */}
                    <div>
                        <h4 style={{ marginBottom: "15px" }}>Quick Links</h4>
                        <ul style={{ listStyle: "none", padding: 0 }}>
                            <li style={{ marginBottom: "8px" }}>
                                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                                    Home
                                </Link>
                            </li>
                            <li style={{ marginBottom: "8px" }}>
                                <Link to="/DisplayAllProducts" style={{ color: "white", textDecoration: "none" }}>
                                    Products
                                </Link>
                            </li>
                            <li style={{ marginBottom: "8px" }}>
                                <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
                                    Cart
                                </Link>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Column 3 */}
                    <div>
                        <h4 style={{ marginBottom: "15px" }}>Contact</h4>
                        <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
                            Email: info@ecommerce.com<br />
                            Phone: +353 123 456 789<br />
                            Address: Dublin, Ireland
                        </p>
                    </div>
                </div>
                
                {/* Copyright */}
                <div style={{ 
                    textAlign: "center", 
                    marginTop: "30px", 
                    paddingTop: "20px", 
                    borderTop: "1px solid #555",
                    fontSize: "14px"
                }}>
                    © {new Date().getFullYear()} E-Commerce Store. All rights reserved.
                </div>
            </footer>
        </div>
    )
}

export default Layout