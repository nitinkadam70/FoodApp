import React from 'react'
import styles from '../meal.module.css'

const FAQpage = () => {
  return (
    <div className={styles.para}>


      <h1>FAQs</h1>
      <br />
      <h2>Q.1 What are yout Delevery Hours ?</h2>
      <p>Answer: Our delivery hour is from 10:00 AM to 08:00 PM.</p>
      <br />
      <h2>Q.2 Can I edit my order ? </h2>
      <p>Answer: Your order can be edited before it reaches the kitchen. You could contact the customer support team via a call to do so. Once an order is placed and the kitchen starts preparing your food, you may not edit its contents.</p>
      <br />
      <br />
      <h2>Q.3 Did you support bulk order ?</h2>
      <p>Answer: In order to provide all customers with a great selection and to ensure on-time delivery of your meal, we request you to order bulk quantity at least 24 hours in advance.</p>
      <br />
      <h2>Q.4 I dont remenber my password ?</h2>
      <p>Answer: You have already created an account but you can't remember your password? Click on 'Login/Sign Up' at the top of the page. Then click on 'Forgot Password?'. Fill out your phone number and a password recovery will be sent to you by phone.</p>
      <br />

      <div>
        <h2 style={{ background: "red", padding: "10px", fontSize: "15px", color: "white" }}>Add your Question here
          <div>
            <label>Question : </label>
            <input type="text" placeholder='??' />
          </div>
        </h2>
      </div>

    </div>
  )
}

export default FAQpage