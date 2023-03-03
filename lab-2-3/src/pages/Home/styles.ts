import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #e9700d;
`

export const Button = styled.button`
  width: 145px; 
  height: 30px;
  margin-top: 10px;
  border-radius: 10px;

  border: none;
  outline: none;

  font-size: 15px;
  color: #e9700d;

  :hover {
    border: 2px solid #000000;
    cursor: pointer;
  }

  :focus {
    border: 2px solid #000000;
  }

  :active {
    font-size: 17px;
  }
`
