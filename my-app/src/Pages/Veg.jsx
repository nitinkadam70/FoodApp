import React, { useState, useEffect } from 'react'
import styles from '../meal.module.css'
import MapData from './MapData'

const Veg = () => {

    const [data, setData] = useState([])

    useEffect(() => {

        const getData = async () => {
            try {
                let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork`);
                let data = await res.json();
                setData(data.meals)

            }
            catch (error) {
                console.log(error)
            }
        };
        getData()
    }, [])

    return (
        <>
            <h1 className={styles.Best}>Our Best Veg Food Recipes</h1>
            <div className={styles.products} style={{ marginTop: "2%" }}>
                {data.map((el, index) => (
                    <div>
                        <MapData key={el.idMeal} {...el} name={el.strMeal} image={el.strMealThumb} />
                    </div>
                ))}
            </div>
        </>


    )
}

export default Veg