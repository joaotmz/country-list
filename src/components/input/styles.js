import styled from 'styled-components';

const BoxField = styled.div`
  position: relative;
  margin: 10px 5px;
  background-color: inherit;
  .visited{
    top: -10px;
    font-size: 9pt;
    color: #5264ae;
    background-color: inherit;
    padding: 0 5px;
    opacity: 1;
  }
`;

const InputField = styled.input`
  font-size: 15px;
  padding: 10px 10px 10px 5px;
  display: block;
  border: 1px solid #757575;
  border-radius: 5px;
  padding: 18.5px 14px;
  width: calc(100% - 30px);
  outline: none;
  background-color: inherit;
  &:focus{
    border: 2px solid #2196F3;
  }
  ::placeholder{
    color: #c5c5c5;
  }
`;

const Label = styled.label`
  color: #999;
  font-size: 14pt;
  position: absolute;
  pointer-events: none;
  left: 15px;
  top: 20px;
  transition: 0.2s ease all;
  opacity: 0;
  ${InputField}:focus ~ & {
    top: -10px;
    font-size: 10pt;
    color: #2196F3;
    background-color: inherit;
    padding: 0 5px;
    opacity: 1;
  }

`;


export {
  BoxField,
  Label,
  InputField
}
