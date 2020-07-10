import React, {useEffect, useState} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'
import { fetchApiCountries } from './../Api/index';
import './country.css';

const CountrySelector = ({ handleCountryChange })=>{
    const [fetchCountries, SetfetchCountries] = useState([]);
    useEffect(()=>{
        async function fetchedCountries(){
            const Apidata = await fetchApiCountries();
            SetfetchCountries(Apidata);
            console.log(fetchCountries);
        }
        fetchedCountries();
    }, [SetfetchCountries])
    return(
        <FormControl>
            <NativeSelect className="formcontrol" defaultValue= "" onChange = {(e)=> handleCountryChange(e.target.value)} >
                <option value="">Global</option>
         {fetchCountries.map((country, i)=> <option  key = {i} value = {country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
      
    )
}
export default CountrySelector;