import React, { useState } from "react"
import { SERVER_HOST } from "../config/global_constants"
import axios from "axios"
import { Link, Redirect } from "react-router-dom"
import { Button } from "./Button"

const AddProduct = (props) => {

    const [name, setName] = useState("")
    const [redirectToDisplayAllProducts, setRedirectToDisplayAllProducts] = useState(false)

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleSubmit = () => {
        axios.post(`${SERVER_HOST}/add/${name}/Appliance/A++/500`)
            .then(res => {
                setRedirectToDisplayAllProducts(true)
            })
    }

    return (
        <div className="form-container" style={{ marginBottom: "20px", maxWidth: "60%"}}>
            {redirectToDisplayAllProducts ? <Redirect to="/DisplayAllProducts" /> : null}

            <h1>Add Product</h1>

            <form style={{ marginBottom: "20px"}}>
                <div>
                    <div>
                        <label style={{
                            margin: "20px"
                        }}>Name</label>
                    </div>

                    <input placeholder="Enter your name"
                    style={{
                        margin: "20px",
                        maxWidth: "80%",
                        width: "800px",
                        padding: "10px",
                        fontSize: "16px",
                        borderRadius: "4px",
                        border: "1px solid #ccc"
                    }}
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    <div>
                        <label style={{
                            margin: "20px"
                        }}>Category</label>
                    </div>

                    <input placeholder="Enter your category"
                    style={{
                        margin: "20px",
                        maxWidth: "80%",
                        width: "800px",
                        padding: "10px",
                        fontSize: "16px",
                        borderRadius: "4px",
                        border: "1px solid #ccc"
                    }}
                        type="text"
                        name="category"
                        // value={category}
                        onChange={handleNameChange}
                    />
                </div>

                <div>
                    <div>
                        <label style={{
                            margin: "20px"
                        }}>Energy Rating</label>
                    </div>

                    <input placeholder="Enter your energy rating"
                    style={{
                        margin: "20px",
                        maxWidth: "80%",
                        width: "800px",
                        padding: "10px",
                        fontSize: "16px",
                        borderRadius: "4px",
                        border: "1px solid #ccc"
                    }}
                        type="text"
                        name="energy-rating"
                        // value={energy-rating}
                        onChange={handleNameChange}
                    />
                </div>

                <div>
                    <div>
                        <label style={{
                            margin: "20px"
                        }}>Price</label>
                    </div>

                    <input placeholder="Enter your price"
                    style={{
                        margin: "20px",
                        maxWidth: "80%",
                        width: "800px",
                        padding: "10px",
                        fontSize: "16px",
                        borderRadius: "4px",
                        border: "1px solid #ccc"
                    }}
                        type="text"
                        name="price"
                        // value={price}
                        onChange={handleNameChange}
                    />
                </div>


            </form>
            <div style={{
                textAlign: "center",
                padding: "80px 20px",
                maxWidth: "800px",
                margin: "0 auto"
            }}>
                <Link className="red-button" to="/DisplayAllProducts">Cancel</Link>
                <Button value="Submit" onClick={handleSubmit} className="green-button" 
                style={{
                    display: "inline-block",
                    padding: "15px 40px",
                    fontSize: "20px",
                    textDecoration: "none",
                    borderRadius: "5px"
                }}/>
            </div>

        </div>
    )
}

export default AddProduct
