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
        <div className="form-container">
            {redirectToDisplayAllProducts ? <Redirect to="/DisplayAllProducts" /> : null}

            <h1>Add Product</h1>

            <form>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleNameChange}
                />
            </form>

            <Link className="red-button" to="/DisplayAllProducts">Cancel</Link>
            <Button value="Submit" onClick={handleSubmit} className="green-button" />
        </div>
    )
}

export default AddProduct
