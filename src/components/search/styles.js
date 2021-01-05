import styled from 'styled-components';

const Box = styled.div`
    position: absolute;
    right: 70px;
    bottom: 15px;
`;


const Input = styled.input`
    font-size: 14pt;
    padding: 10px 10px 10px 5px;
    display: block;
    border: 1px solid #757575;
    border-radius: 5px;
    padding: 19px 14px;
    width: 350px;
    outline: none;
    background-color: #fff;
    &:focus{
      border: 2px solid #2196F3;
    }
    ::placeholder{
      color: #c5c5c5;
    }
`;

export {
  Box,
  Input
}
