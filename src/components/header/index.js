import React from 'react';
import Search from '../search';
import { Box, Title } from './styles';

export default function Header({ title, countries, filtered }) {

    return (
        <>
            <Box>
                <Title>{title}</Title>
                <Search countries={countries} filtered={filtered}></Search>
            </Box>
        </>
    )
}