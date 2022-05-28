import React, { useContext } from 'react'
import { AuthContext } from '../contest/AuthProvider'

const Cart = () => {

  const { handleLogout } = useContext(AuthContext)
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Cart