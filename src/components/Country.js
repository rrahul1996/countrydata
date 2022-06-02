import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "../country.css"

export default function Country() {
    const [country, setCountry] = useState([])
    const {name} = useParams()

    useEffect(() => {
        const CountryData = async () => {
            const result = await fetch(`https://restcountries.com/v2/name/${name}`)
            const country = await result.json()
            setCountry(country)
            console.log(country)
        }
        CountryData()
    }, [])

  return (
    <div>
    <Link to="/" className="light">
        <i className='fas fa-arrow-left'>Back</i>
    </Link>
      <section className='country'>
        {country.map((c) => {
            const {numericCode, flag, name, nativeName,
                population, region, subregion,
                capital, topLevelDomain,currencies,
                languages, borders,} = c
                return   <article key={numericCode}>
                        <div className='flag'>
                                <img src={flag} alt={name}/>
                        </div>
                        <div className="country-details">
                            <div>
                                <h2>{name}</h2>
                                <h5>Native Name: <span>{nativeName}</span></h5>
                                <h5> Population: <span>{population.toLocaleString()}</span></h5>
                                <h5> Region: <span>{region}</span></h5>
                                <h5>Sub Region: <span>{subregion}</span></h5>
                                <h5>Capital: <span>{capital}</span>{" "}</h5>
                            </div>

                            <div>
                                <h5>
                                Top Level Domain: <span>{topLevelDomain}</span>
                                </h5>
                                <h5>
                                Currencies: <span>{currencies[0].name}</span>
                                </h5>
                                <h5>
                                Languages: <span>{languages[0].name}</span>
                                </h5>
                            </div>
                            <div>
                                <h3>Border Countries: </h3>
                                <div className='borders'>
                                    {borders.map((border) => {
                                        return( 
                                            <ul key={border}>
                                                <li>{border}</li>
                                            </ul>
                                        )
                                    } )}
                                </div>
                            </div>
                        </div>
                    </article>
        })}
      </section>
    </div>
  )
}
