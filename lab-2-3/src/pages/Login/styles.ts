import styled from "styled-components";

export const Input = styled.input`
  width: 145px; 
  height: 30px;
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;

  border: none;
  outline: none;

  font-size: 15px;
  letter-spacing: 1px;

  :hover {
    border: 2px solid #000000;
  }

  :focus {
    border: 2px solid #000000;
  }
`

export const Message = styled.span`
  margin-top: 10px;

  font-size: 14px;
  color: #ffffff;
`
