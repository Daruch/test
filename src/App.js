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


  
 componentDidMount(){

    fetch(`http://api.tvmaze.com/schedule?country=US&date=&{date}`)
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

   
  

    return (
      <div className="App">
       <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
       /> 
       <ul>
         {this.state.data.map(item => {
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
