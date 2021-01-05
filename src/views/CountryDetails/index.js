import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardInfo from '../../components/country-info/index'
import { BodyPage } from './style'


export default function CountryDetails() {
    const prepareItemCard = (item) => {
        return item.map(element => { return { image: element.flag.svgFile, title: element.name, subtitle: element.capital, context: element }});
    }

    const [countryDetails, setCountryDetails] = useState([]);

    let { id } = useParams();
    
    useEffect(() => {
        async function fetchData() {
            await fetch('https://countries-274616.ew.r.appspot.com', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    query: `
                    query {
                        Country(alpha3Code: "${id}") {
                            name
                            area
                            population
                            capital
                          flag {
                            svgFile
                          }
                          topLevelDomains {
                            name
                          }
                        }
                      }
                ` })
            })
                .then(res => res.json())
                .then(res => {
                    debugger
                    let fList = prepareItemCard(res.data.Country)
                    setCountryDetails(fList)
                })
                .catch(err => console.log(err))
        }
        fetchData();
    }, []);
  return(
      <>   
        <BodyPage>
            {/* <CardInfo></CardInfo> */}
        </BodyPage>
      </>
  );
}
