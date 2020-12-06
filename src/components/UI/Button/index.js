import styled from "styled-components";

const Button = ({onClick, label, disabled}) => {
  return <ButtonWrapper onClick={disabled ? null : onClick} disabled={disabled} >
    {label}
    </ButtonWrapper>
}


const ButtonWrapper = styled.div`
  min-width: 100px;
  width: 100%;
  border-radius: 5px;
  color: white;
  padding: 10px;
  text-align:center;
  box-sizing: border-box;
  background: ${props => props.disabled ? "lightgray" : "lightblue"}
`

export default Button

