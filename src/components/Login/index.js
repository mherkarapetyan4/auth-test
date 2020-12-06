import useAuth from "../../hooks/auth"
import Button from "../UI/Button"
import Input from "../UI/Input"
import { ErrorMessage, FormWrapper, LoginWrapper, Title } from "./styles"

const Login = () => {
  const {onClickHandler, setUsername, setPassword, setIsFinishedLogin, errorMessage, isValid} = useAuth()
  return <LoginWrapper>
    <Title>Вход</Title>
    <FormWrapper>
      <Input placeholder="Логин" onChange={e => setUsername(e.target.value)} onBlur={e => setIsFinishedLogin(true)} />
      <Input placeholder="Пароль" onChange={e => setPassword(e.target.value)} type="password"/>
{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      
      <Button label="Войти" onClick={onClickHandler} disabled={!isValid}/>
    </FormWrapper>
  </LoginWrapper>
}


export default Login