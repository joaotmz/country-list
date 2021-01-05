import styled from 'styled-components';

const Box = styled.div`
    position: relative;
    display: inline-flex;
    flex-direction: column;
    background-color: #fff;
    width: 100%;
    height: 80px;
    box-shadow: 0 0 8px rgba(82,81,81, 0.4);
    padding: 20px;
    background-color: ${props => props.theme.header.background};
`;


const Title = styled.p`
    margin: 10px 0;
    font-size: 30pt;
    color: ${props => props.theme.header.fontColor};
    max-width: 50%;
`;

export {
  Box,
  Title
}
