import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./components/Home"
import DisplayAllProducts from "./components/DisplayAllProducts"
import AddProduct from "./components/AddProduct"
import Cart from "./components/Cart"
import Layout from "./components/Layout"
import "./css/App.css"

const App = (props) => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/DisplayAllProducts" component={DisplayAllProducts} />
                    <Route exact path="/AddProduct" component={AddProduct} />
                    <Route exact path="/cart" component={Cart} />
                    <Route path="*" component={() => <h3>Invalid URL. Webpage does not exist</h3>} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App