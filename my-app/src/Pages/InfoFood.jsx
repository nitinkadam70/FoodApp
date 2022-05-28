import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import styles from '../meal.module.css'


const InfoFood = () => {

  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {

      try {

        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        let data = await res.json();
        setData(data);
        console.log(data)
      }
      catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  return (
    <div style={{ display: "flex", textAlign: 'justify', justifyContent: "space-around", marginTop: "20px", gap: "40px" }}>
      {!!data && (
        <>
          <div className={styles.imgInfo}>
            <img style={{ width: "400px", height: "400px" }}
              src={data.meals[0].strMealThumb} alt={data.meals[0].strMeal} />
          </div>
          <div>
            <h1>Name : {data.meals[0].strMeal}</h1>
            <br />
            <p>Area : {data.meals[0].strArea}</p>
            <p>Categoty : {data.meals[0].strCategory}</p>
            <br />
            <p>Description : {data.meals[0].strInstructions}</p>
            <br />
            <ul>
              <li>Ingredient
                <ol>
                  <li>{data.meals[0].strIngredient1}</li>
                  <li>{data.meals[0].strIngredient2}</li>
                  <li>{data.meals[0].strIngredient3}</li>
                  <li>{data.meals[0].strIngredient4}</li>
                  <li>{data.meals[0].strIngredient5}</li>
                  <li>{data.meals[0].strIngredient6}</li>
                </ol>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  )
}

export default InfoFood