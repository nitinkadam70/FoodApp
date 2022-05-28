import React from 'react'
import styles from '../meal.module.css'


const Footer = () => {
  return (
    <div className={styles.footer}>
      <img src="https://b.zmtcdn.com/data/collections/cc6ea486370806c8c9b4704f0854e243_1539668755.jpg?output-format=webp" alt="footerImg" />
      <div><i class="fa-brands fa-facebook"></i></div>
      <div><i class="fa-brands fa-instagram"></i></div>
      <div><i class="fa-brands fa-linkedin"></i></div>
      <div><i class="fa-brands fa-youtube"></i></div>
    </div>
  )
}

export default Footer