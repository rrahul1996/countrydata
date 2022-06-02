import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"


export default function Contries() {
    const [countries, setCountries] = useState([]);
    

    useEffect(() => {
        const Countries = async () => {
          const response = await fetch("https://restcountries.com/v2/all")
          const countries = await response.json()
          setCountries(countries);
        }
    
        Countries()
      }, [])

    

      const searchHandle = (e) => {
        if(e.target.value == "") {
            setCountries(countries)
        }
        else {
            const searchResult = countries.filter(item => item.name.toLowerCase().startsWith(e.target.value.toLowerCase()))
            setCountries(searchResult);
        }
      }

      const selectHandle = (e) => {
        e.preventDefault();
        const selectResult = countries.filter(item => item.region.toLowerCase(e.target.value))
        if(selectResult) {
            setCountries(selectResult);
        }
        else {
            setCountries(countries)
        }
      }

  return (
      
    <div>
        <div>
            <section className='filter'>
                <form className='control'>
                    <input onChange={searchHandle} type="search"  placeholder="Search Country"/>
                </form>
                <div className='region'>
                    <select onChange={selectHandle} name="select" id='select' className='select'> 
                    {countries.map((country) => {
                        const {  region } = country
                        return <option value="region">{region}</option>
                    })}
                    </select>
                </div>
            </section>
        </div>
        <section className="grid">
            {countries.map((country)=> {
                const { numericCode, name, flag, population, region, capital } = country

            return <article key={numericCode}>
                        <img src={flag} alt={name}/>
                        <div className="detail">
                            <h4 className="country_name">Name :<span>{name}</span></h4>
                            <h4>Population : <span>{population}</span></h4>
                            <h4>Region : <span>{region}</span></h4>
                            <h4>Capital : <span>{capital}</span></h4>
                            <div className="buttons">
                                <Link to={`/countries/${name}`} className="btn">
                                    See More
                                </Link>
                            </div>
                        </div>
                </article>
            })}
        </section>
    </div>
  )
}
