import React, {useEffect, useState} from 'react'
import {Line, Bar} from 'react-chartjs-2';
import {fetchDailydata} from '../Api/index';
import './charts.css';


function Charts({ data:{confirmed, recovered, deaths}, country }){
    const [dailyData, setDailydata ] = useState([])
useEffect(()=>{
    async function ApiData(){
        const getData = await fetchDailydata();
        setDailydata(getData);
    }
    ApiData();
}, []);
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

       
    );
    console.log(recovered, deaths, confirmed)
    const BarChart =(
             confirmed
             ?(
             <Bar
                 data={{
                    labels: ['Infected','Recovered', 'Deaths' ],
                    datasets:[{
                        label: 'people',
                        backgroundColor: [
                            '#ff9100',
                            '#00c853',
                            'red',
                        ],
                        data: [confirmed.value, recovered.value, deaths.value]
                        
                    }]
                 }}
                 options={{
                     legend: {display: false},
                     title:{display: true, text: `Cureent state in ${country}`}
                 }}
                 />

             ): null
    )
    return(
        <div className = "chart">
        {country ? BarChart : LineChart }
        </div>
       
    )
}
export default Charts;