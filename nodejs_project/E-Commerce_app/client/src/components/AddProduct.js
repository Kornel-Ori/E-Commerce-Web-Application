import React, {useState, useEffect} from "react"
import {SERVER_HOST} from "../config/global_constants"
import axios from "axios"
import {Link, Redirect} from "react-router-dom"
import {Button} from "./Button"


export const AddProduct = props =>
{

    const [model, setModel] = useState("")
    const [redirectToDisplaAllProducts, setRedirctToDisplaAllProducts] = useState(false)
    

    const handleModelCahnge = event =>
    {
        setModel(event.target.value)
    }
    const handleSubmit = () =>
    {
        axios.post(`${SERVER_HOST}/add/${model}/red/2025/40000`)
        .then(res => 
            {
                setRedirctToDisplaAllProducts(true)
            })

    }


    return (
    <div className="form-container">
        {redirectToDisplaAllProducts?<Redirect to="/DisplayAllProducts"/>:null}
        <h1>Add Products</h1>
        <form>
            <label>Model</label>
            <input type="text" name="model" onChange={handleModelCahnge}/>
            
            <label></label>
        </form>
        <Link className="red-button" to="/DisplayAllProducts">Cancel</Link>
        <Button value="Submit" onClick={handleSubmit} className="green-button"/> 
       
    </div>
    )
}