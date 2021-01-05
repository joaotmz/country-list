import styled from 'styled-components';

const MainWrapper = styled.div`
    position: relative;
    background-color: ${props => props.bgColor || props.theme.colors.firstColor};
    width: 100%;
    height: 100vh;
`;

export { MainWrapper }
