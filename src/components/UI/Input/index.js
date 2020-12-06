import styled from "styled-components";

const Input = (props) => {
  return <InputWrapper {...props}/>
}


const InputWrapper = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
  &:focus {
    outline: none;
    border-color: lightblue;
  } 
`

export default Input

