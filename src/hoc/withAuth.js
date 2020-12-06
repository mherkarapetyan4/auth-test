import React from 'react'
import { useSelector } from 'react-redux'
import {Redirect} from 'react-router-dom'

export default function withAuth(Component) {
  return () => {
    const isAuth = useSelector(state => state.app.isAuth)
    
    if(isAuth) {
      return <Component />
    } else {
      return <Redirect to="/auth"/> 
    }
  }
}