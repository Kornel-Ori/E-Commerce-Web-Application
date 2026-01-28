import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {DisplayAllProducts} from "./components/DisplayAllProducts"
import {AddProduct} from "./components/AddProduct"


import "bootstrap/dist/css/bootstrap.css"
import "./css/App.css"


export const App = props =>
{
    return (
    <BrowserRouter>
        <Switch>                 
        <Route exact path="/" component={DisplayAllProducts} />
        <Route exact path="/DisplayAllProducts" component={DisplayAllProducts}/> 
        <Route exact path="/AddProduct" component={AddProduct}/> 
        <Route path="*" component={() => <h3>Invalid URL. Webpage does not exist</h3>}/>                         
            </Switch>
    </BrowserRouter>
    )
}