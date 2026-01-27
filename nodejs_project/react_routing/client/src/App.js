import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {DisplayAllCars} from "./components/DisplayAllCars"
import {AddCar} from "./components/AddCar"


import "bootstrap/dist/css/bootstrap.css"
import "./css/App.css"


export const App = props =>
{
    return (
    <BrowserRouter>
        <Switch>                 
        <Route exact path="/" component={DisplayAllCars} />
        <Route exact path="/DisplayAllCars" component={DisplayAllCars}/> 
        <Route exact path="/AddCar" component={AddCar}/> 
        <Route path="*" component={() => <h3>Invalid URL. Webpage does not exist</h3>}/>                         
            </Switch>
    </BrowserRouter>
    )
}