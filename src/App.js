import React, { Component } from 'react';
import './App.css';
import DatePicker from 'react-datepicker';
import Item from './components/Item';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      startDate: moment(),
    };
    this.handleChange = this.handleChange.bind(this);
  }



  //Я поняла, что мне нужно что-то с датой сделать типа let data = this.state.startDate и потом присобачить ее в конец урлы, но оно не работает

  componentDidMount(){
    fetch('http://api.tvmaze.com/schedule?country=US&date=2018-09-30')
     .then(response => response.json())
     .then(data => this.setState({ data: data}));
}

 
handleChange(date) {
   this.setState({
    startDate: date
  });
 }

render() {
   console.log(this.state.startDate)
   console.log(this.state.data);
   
   
   const filtered = this.state.data.filter(item => {
    return  item.airdate.includes(moment(this.state.startDate));
 });
  console.log(filtered);
   
    return (
      <div className="App">
       <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
       /> 
       <ul>
         {filtered.map(item => {
           return(
            <Item key = {item.id} item = {item}  />  
          )}
         )}
        </ul>
     </div>
  )    
}

}

export default App;
