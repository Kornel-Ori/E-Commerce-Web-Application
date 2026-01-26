import React from "react"
import {DisplayAllCars} from "./components/DisplayAllCars"
import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
import {Home} from "./components/Home"
import {About} from "./components/About"
import {DisplayCar} from "./components/DisplayCar"



import "bootstrap/dist/css/bootstrap.css"
import "./css/App.css"


export const App = props =>
{
    return (
        <BrowserRouter>
         <header style={{ display: "flex", gap: "20px", padding: "10px 20px", alignItems: "center"}}>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/cars">Cars</Link>
            <Link to="/car/:id">Car</Link>
        </header>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/car/:id" component={DisplayCar}/>
            <Route exact path="/cars" component={DisplayAllCars}/>
            <Route path="*" component={() => <h3>Invalid URL. Webpage does not exist</h3>}/>
        </Switch>

        <footer>
            Footer
        </footer>
    </BrowserRouter>
    )
}