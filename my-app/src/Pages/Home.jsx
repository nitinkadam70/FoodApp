import React, { useState, useEffect } from 'react'
import styles from '../meal.module.css'
import MapData from './MapData';

const Home = () => {

  const [data, setData] = useState([]);

  useEffect(() => {

    const getData = async () => {
      try {
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`);
        let data = await res.json();
        setData(data.meals)
        console.log(data)
      }
      catch (error) {
        console.log(error)
      }
    };
    getData()
  }, [])

  return (
    <div>
      <div className={styles.Banner}>
        <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" alt="Banner" />
        <h1>Order Your Favourite Food 10% OFF</h1>
      </div>

      <br />
      <div className={styles.products}>
        {data.map((el, index) => (
          <div>
            <MapData key={el.idMeal} name={el.strMeal} image={el.strMealThumb} {...el} />
          </div>
        ))}
      </div>
    </div>

  )
}

export default Home