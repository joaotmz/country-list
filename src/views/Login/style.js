import styled from 'styled-components';

const BoxCenter = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: inherit;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const Box = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colors.firstColor};
    width: 90%;
    max-width: 80%;
`;

const BoxSpace = styled(Box)`
  padding: 20px 0;
`;

const Title = styled.h2`
    font-size: 14pt;
    color: gray;
`;

const SubTitle = styled.p`
    font-size: 11pt;
    color: #000;
`;


const ButtonSubmit = styled.button`
    outline: none;
    border: 0;
    padding: 12px 60px;
    color: #f7f5f5;
    font-size: 13pt;
    cursor: pointer;
    background-color: ${props => props.theme.buttonColors.submit.normal};
    border-radius: 8px;
    &:hover{
        background-color: ${props => props.theme.buttonColors.submit.hover};
    }
`;

export { BoxCenter, Box, BoxSpace, Title, SubTitle, ButtonSubmit };
