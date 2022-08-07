import './App.css';
import FoodCard from './Components/FoodCard'
// import React, { useState } from 'react';


function App() {
  return (
    <div className='foodcontainer'>
      <FoodCard food = "Biryani" img = "https://source.unsplash.com/1600x800/?Biryani" price = "199" offer = "Order Samosa now and get 35% off" order ="Order Now" />
      <FoodCard food = "Burger" img = "https://source.unsplash.com/1600x800/?Burger" price = "149" offer = "Order Samosa now and get 50% off" order ="Order Now"/>
      <FoodCard food = "Pizza" img = "https://source.unsplash.com/1600x800/?Pizza" price = "249" offer = "Order Samosa now and get 20% off" order ="Order Now" />
      <FoodCard food = "Biryani" img = "https://source.unsplash.com/1600x800/?Biryani" price = "199" offer = "Order Samosa now and get 35% off" order ="Order Now" />
      <FoodCard food = "Veg Thali" img = "https://source.unsplash.com/1600x800/?Veg-Thali" price = "179" offer = "Order Samosa now and get 10% off" order ="Order Now" />
      <FoodCard food = "Burger" img = "https://source.unsplash.com/1600x800/?Burger" price = "149" offer = "Order Samosa now and get 50% off" order ="Order Now"/>
    </div>
  );
}

export default App;
