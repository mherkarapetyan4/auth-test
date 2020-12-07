import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 70px;
  background: white;
`

export const ImageWrapper = styled.div`
  float: right;
  padding: 10px;
  box-sizing: border-box;
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > img {
    height: 20px;
    cursor: pointer;
  }
`;