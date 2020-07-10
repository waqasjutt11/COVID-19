import axios from 'axios';
const url = 'https://covid19.mathdro.id/api';
export const getData = async (country) => {
    let changeableUrl = url;
    if(country){
        changeableUrl = `${url}/countries/${country}`;
    }
    const { data: { lastUpdate, confirmed, recovered, deaths } } = await axios.get(changeableUrl);
    return { lastUpdate, confirmed, recovered, deaths };
}
getData();
export const fetchDailydata = async()=>{
   const { data } = await axios.get(`${url}/daily`);

   const resultData = data.map((dailyData)=>({
       confirmed: dailyData.confirmed.total,
       deaths: dailyData.deaths.total,
       date: dailyData.reportDate,
       recovered: dailyData.recovered.total,
   }))
   return resultData;
}
export const fetchApiCountries = async()=>{
      const {data: { countries }} = await axios.get(`${url}/countries`)
      return countries.map((country)=> country.name)
}