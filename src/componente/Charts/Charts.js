import React, {useEffect, useState} from 'react'
import {Line, Bar} from 'react-chartjs-2';
import {fetchDailydata} from '../Api/index';
import './charts.css';


function Charts(){
    const [dailyData, setDailydata ] = useState([])
useEffect(()=>{
    async function ApiData(){
        const getData = await fetchDailydata();
        setDailydata(getData);
        console.log("Daily=", setDailydata);
    }
    ApiData();
});
    const LineChart = (
        dailyData !==0
        ? (
        <Line
        data={{
            labels: dailyData.map(({date})=> date),
            datasets:[{
                data: dailyData.map(({confirmed})=> confirmed),
                label: 'Infected',
                borderColor: "#ff9100",
                fill: true,

             },
            {
                data: dailyData.map(({deaths})=> deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true,

            }
            ]}} 
        
        />
        ) :null
    )
    return(
        <div className = "chart">
        {LineChart}
        </div>
       
    )
}
export default Charts;