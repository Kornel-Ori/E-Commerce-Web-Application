import React from "react"
import {Redirect, gotToHome, useState} from 'react-router-dom'

export const DisplayCar = props =>
{    
    const [goToHome, setGoToHome] = useState(false)
    const handleClick = e => {
        setGoToHome(true)
    }
    return (
        <div>
            {gotToHome?<Redirect to="/home"/>:null}
            <h1>Car... id is{props.match.params.id}</h1>
       <input type="button" value="Press me" onClick={handleClick}/>
        </div>
        
        
    )
}