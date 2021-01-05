import React from 'react';
import { Box, Image, Title, SubTitle} from './styles';

export default function CardInfo({item}) {

    return (
        <>
            <Box>
                <Image src={item.image}></Image>
                <Title>{item.title}</Title>
                <SubTitle>{item.subtitle}</SubTitle>
            </Box>
        </>
    )
}