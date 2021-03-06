import React from 'react';



import 'react-datepicker/dist/react-datepicker.css';



class Calendar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
 
  render() {
    return(
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    )
  }
}





export default Calendar;