import styled from 'styled-components';

const BoxCard = styled.div`
    position: relative;
    display: inline-flex;
    flex-direction: column;
    background-color: #fff;
    width: 235px;
    height: 200px;
    margin: 15px;
    box-shadow: 0 0 8px rgba(82,81,81, 0.4);
    padding: 20px;
    background-color: #f7f6f6;
    cursor: pointer;
`;

const Image = styled.img`
  width: 100px;
  box-shadow: 0 0 10px #cac9c9;
`;


const Title = styled.p`
    margin: 10px 0;
    font-size: 17pt;
    line-height: 19pt;
`;

const SubTitle = styled.p`
    position: absolute;
    bottom: 10px;
    right: 20px;
    font-size: 14pt;
    font-weight: 700;
    color: gray;
`;

export {
  BoxCard,
  Image,
  Title,
  SubTitle
}
