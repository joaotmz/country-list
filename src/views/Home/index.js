import React, { useState, useEffect } from 'react';
import CardItem from '../../components/card-item';
import Header from '../../components/header';
import { MainWrapper } from '../../theme/style-common';
import { BoxList } from './style';
import { useHistory } from 'react-router-dom';


import ReactLoading from 'react-loading';

export default function Home() {

    const [countries, setCountries] = useState([]);
    const [filteredList, setFilteredList] = useState([]);

    const prepareItemCard = (item) => {
        return item.map(element => { return { image: element.flag.svgFile, title: element.name, subtitle: element.capital, id: element.alpha3Code, context: element }});
    }

    useEffect(() => {
        async function fetchData() {
            await fetch('https://countries-274616.ew.r.appspot.com', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    query: `
                    query {
                        Country {
                          name
                          capital
                          alpha3Code
                          flag {
                            svgFile
                          }
                        }
                      }
                ` })
            })
                .then(res => res.json())
                .then(res => {
                    let fList = prepareItemCard(res.data.Country)
                    setCountries(fList)
                    setFilteredList(fList)
                })
                .catch(err => console.log(err))
        }
        fetchData();
    }, []);

    



    return (
        <>
            {
                filteredList && filteredList.length > 0 &&
                    <Header title="Country List" countries={countries} filtered={setFilteredList}></Header>
                }
            
            <MainWrapper>
                <BoxList>
                    {
                        filteredList.map((item, index) => (
                            <CardItem key={index} item={item}/>
                        ))
                    }

                </BoxList>
            </MainWrapper>
        </>
    )
}