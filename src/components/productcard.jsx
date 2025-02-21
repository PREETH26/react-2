// write product card here
import React from 'react';
import img from "../assets/react.svg"
import Button from "./button"
import '../App.css'


function productCard() {
    const checker={
        img: img,
        name: 'JQG Phone',
        price: '32,000',
        
    }
  return (
    <div>
      <Button props={checker}/>
    </div>
  );
}

export default productCard;