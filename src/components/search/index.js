import React, { useCallback, useEffect, useState } from 'react';
import { Box, Input } from './styles';
import { debounce } from "lodash";

export default function Search({ countries, filtered }) {

    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);


    const onChangeValue = (e) => {
        setSearchValue(e.target.value)
    };

    useEffect(() => {
        if(searchValue){
            let result = filterItem(searchValue)
            if(result && result.length > 0){
                filtered(result)
            }else{
                filtered(countries) 
            }
        }
    }, [searchValue])


    const filterItem = (val) => {
        if (val.length > 0) {
          return countries.filter(option => option.title.toLowerCase().includes(val.toLowerCase()));
        }
      }

    return (
        <>
            <Box>
                <Input type="text" name="search" placeholder="Pesquisar..." onChange={onChangeValue}></Input>
            </Box>
        </>
    )
}