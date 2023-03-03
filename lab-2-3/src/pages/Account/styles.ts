import styled from "styled-components";

export const Panel = styled.div`
  width: 160px;
  height: 110px;
  padding: 5px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Left = styled.div`
  width: 40%;
  height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`

export const Right = styled.div`
  width: 60%;
  height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
`

export const Text = styled.p`
  color: #ffffff;
`
