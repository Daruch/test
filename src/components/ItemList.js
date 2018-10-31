import React from 'react';
import Item from './Item';



const ItemList = ({
  items,
  date,
  onChange

}) => {
     
    if (!items) { return <p>Loading...</p>}; 


      
       
      const series = items.map(item => {
        return(
            <Item key = {item.id} item = {item}  />
          
      )});
    
      return(
         <ul className = "List">
           {series}
         </ul>
      )

}


<ItemList items = {this.state.data} 
                 date = {this.state.startDate}
                 onChange = {this.onDateClick}
               />
     



export default ItemList;
