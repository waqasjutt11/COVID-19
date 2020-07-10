import React from 'react';
import './App.css';
import {Cards, Charts, CountrySelector} from './componente'
import { getData } from './componente/Api'
import covidimage from '../src/images/image.png'

class App extends React.Component{
  state = {
    data: {},
    country: ''
  }
  async componentDidMount(){
    const Apidata = await getData();
    this.setState({ data: Apidata })
    console.log(Apidata);
    }
     handleCountryChange = async (country)=>{
      const Apidata = await getData(country);

      this.setState({ data: Apidata, country: country});
      console.log(Apidata);
    }
  render(){
    const { data, country } = this.state;
  return (

    <div className="App">
      <img src={covidimage} className="image" alt="COVID-19"/>
      <Cards data = {data} />
      <CountrySelector handleCountryChange = {this.handleCountryChange}/>
      <Charts data={data} country = {country} />
     
    </div>
  );
}
}

export default App;
