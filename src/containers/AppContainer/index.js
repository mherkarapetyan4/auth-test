import { Routes } from "../../routes";
import styled from "styled-components"
const AppContainer = () => {
  return <ContainerWrapper>
    {/* handle routing  */}
  <Routes />

  </ContainerWrapper>

}

const ContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: lightgray
`

export default AppContainer