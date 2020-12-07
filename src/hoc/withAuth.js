import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Redirect } from 'react-router-dom'
import {storage} from "../util";
import {LOCAL_STORAGE_KEY} from "../constants/endpoints";
import {setUser} from "../store/actions/app";

export default function withAuth(Component) {
  return () => {
    const isAuth = useSelector(state => state.app.isAuth);
    const isLoggedIn = storage(LOCAL_STORAGE_KEY);
    const dispatch = useDispatch();

    useEffect(() => {
      if(isLoggedIn) {
        dispatch(setUser(JSON.parse(isLoggedIn)))
      } else {
        dispatch(setUser(null))
      }
    }, [])

    if(isAuth || !!isLoggedIn) {
      return <Component />
    } else {
      return <Redirect to="/auth"/> 
    }
  }
}