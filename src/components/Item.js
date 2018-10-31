import React from 'react';


const Item = ({
   item,
   id,
   name,
   airdate
}) => {

    return(
      <div key = {item.id}>
        <img src = {item.image} alt = "poster" />
        <li>{item.name}</li>
        <span>{item.airdate}</span>
      </div>
    )

}

      



export default Item;
