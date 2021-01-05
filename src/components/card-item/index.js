import React from 'react';
import { useHistory } from 'react-router-dom';
import { BoxCard, Image, Title, SubTitle } from './styles';

export default function CardItem({item}) {

    let history = useHistory();

    const toDetails = (id) => {
        history.push(`/details/${id}`)
    }

    return (
        <>
            <BoxCard onClick={() => toDetails(item.id) }>
                <Image src={item.image}></Image>
                <Title>{item.title}</Title>
                <SubTitle>{item.subtitle}</SubTitle>
            </BoxCard>
        </>
    )
}