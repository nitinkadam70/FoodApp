import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../contest/AuthProvider';



const MapData = (prop) => {

    const { idMeal } = prop;

    //const { token } = useContext(AuthContext);

   /* const AddToCart = () => {

        if (token) alert("Added to Cart");
        else alert("Please Login First")
    }
    */

    return (
        <>
            <Link to={`/meals/${idMeal}`}>
                <img style={{ width: "300px", height: "200px" }}
                    src={prop.image} alt={prop.name} />
                <h2>{prop.name}</h2>
            </Link>
            <button  style={{ background: "green" }}>Add to Cart</button>

        </>
    )
}

export default MapData