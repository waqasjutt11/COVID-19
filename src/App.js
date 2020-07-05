import React from 'react';
import './App.css';
import {Cards, Charts, CountrySelector} from './componente'
import Appbar from './componente/AppBar/AppBar';
import { getData } from './componente/Api'

class App extends React.Component{
  state = {
    data: {},
  }
  async componentDidMount(){
    const Apidata = await getData()
    this.setState({ data: Apidata});
    console.log(Apidata)
    }
  render(){
  return (

    <div className="App">
      <Appbar />
      <Cards data = {this.state.data} />
      <CountrySelector />
      <Charts />
     
    </div>
  );
}
}

export default App;
