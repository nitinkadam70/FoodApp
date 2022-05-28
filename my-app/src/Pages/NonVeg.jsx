import React, { useState, useEffect } from 'react'
import styles from '../meal.module.css'
import MapData from './MapData'

const NonVeg = () => {

    const [data, setData] = useState([])

    useEffect(() => {

        const getData = async () => {
            try {
                let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`);
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
            <h1 className={styles.Best}>Our Best Non Vegetarian Recipes</h1>

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

export default NonVeg