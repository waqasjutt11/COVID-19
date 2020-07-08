import axios from 'axios';
const url = 'https://covid19.mathdro.id/api';
export const getData = async () => {

    const { data: { lastUpdate } } = await axios.get('https://covid19.mathdro.id/api');
    return { lastUpdate };
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
