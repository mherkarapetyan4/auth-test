import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { USERS } from "../constants/users";
import {getUserById, setIsAuth, setUser} from "../store/actions/app";
import {deleteKeyStorage} from "../util";
import {LOCAL_STORAGE_KEY} from "../constants/endpoints";


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
    if(!isValid) {
      return false
    }
    //  make request get user deatails, and save 
    // 


    // dispatch(setIsAuth(true));
    dispatch(getUserById(userId, history))
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

        setErrorMessage("")
        setUserId(foundedUser.id)
          setIsValid(true);

    }
  }, [username, password, isFinishedLogin])

  const logout = () => {
    deleteKeyStorage(LOCAL_STORAGE_KEY);
    dispatch(setUser(null));
    dispatch(setIsAuth(false));
    history.replace('/auth');
  }

  return {
    username, password, 
    setUsername, setPassword,
    onClickHandler,
    setIsFinishedLogin,
    isValid,
    errorMessage,
    logout
  }
}

export default useAuth