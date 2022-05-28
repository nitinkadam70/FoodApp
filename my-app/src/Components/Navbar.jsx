import React from 'react'
import styles from '../meal.module.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
      <div className={styles.Navbar}>

        <div>
          <Link to="/home">Home</Link>
        </div>
        <div>
          <Link to="/veg">Veg</Link>
        </div>
        <div>
          <Link to="/nonveg">Non-Veg</Link>
        </div>
        <div>
          <Link to="/seafood">Sea-Food</Link>
        </div>
        <div>
          <Link to="/aboutus">About Us</Link>
        </div>
        <div>
          <Link to="/faq">FAQs</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div style={{ marginLeft: "55%" }}>
          <Link to="/cart">Cart</Link>
        </div>

      </div>
    </>
  )
}

export default Navbar