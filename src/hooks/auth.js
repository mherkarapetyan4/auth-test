import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { USERS } from "../constants/users";
import { getUserById, setIsAuth } from "../store/actions/app";
import axios from "axios";


const useAuth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isFinishedLogin, setIsFinishedLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const onClickHandler = () => {
    console.log("logiigigigign");
    if(!isValid) {
      return false
    }
    //  make request get user deatails, and save 
    // 


    // dispatch(setIsAuth(true));
    dispatch(getUserById(userId))

  }

  useEffect(() => {
    if(isFinishedLogin && password) {
      const foundedUser = USERS.find(user => user.login === username);

      setIsValid(false);

      if(!foundedUser) {
        setErrorMessage("Такой пользователь не найден")
        return;
      }

      if(foundedUser.password !== password) {
        setErrorMessage("Пароль не верен")
        return;
      }

      // if(foundedUser && foundedUser.password === password) {
        setErrorMessage("")
        setUserId(foundedUser.id)
          setIsValid(true);
      // }
      console.log("hello world", foundedUser, password)

    }
  }, [username, password, isFinishedLogin])

  return {
    username, password, 
    setUsername, setPassword,
    onClickHandler,
    setIsFinishedLogin,
    isValid,
    errorMessage
  }
}

export default useAuth