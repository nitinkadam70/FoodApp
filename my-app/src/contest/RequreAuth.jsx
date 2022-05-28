import React, { useContext } from 'react'
import { AuthContext } from "./AuthProvider";

const RequreAuth = ({ children }) => {

  const { token } = useContext(AuthContext)
  return (

  if (token) return children
  else return <h1>Please access this page</h1>
  )
}

export default RequreAuth
