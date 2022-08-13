import React, { useState } from 'react';
import Backdrop from './Backdrop';
import Popup from './Popup';
import Cart from './cart';
function Foodcard(props){
        let [count, setcount] = useState(0);
        let [popup, usepopup] = useState(false);
        let [cart, addcart] = useState(0)

        function increment(){
            setcount(count+1)
            addcart(cart + 1)
        //   console.log((setcount(count+1)));
            // return setcount;
        }

        // function cartCount(){
            //   addcart(cart + 1)
            //  console.log(foodcount)
        // }

        function popout(){
            usepopup(true)
            // return usepopup;
        }

        function hideback(){
            usepopup(false)
        }

    return(
        <div>           
            <div className = "foodcard" >
                <img className= 'foodimage'onClick={popout} src={props.img}></img>
                <span className="price">{props.Price}/- Only</span>
                <h3 className = 'foodname'>{props.foodname}</h3>
                <p className = 'fooddesc'>{props.fooddesc}</p>
                <span className = 'offer'>{props.offer}</span>
                <br></br>
                <button className = 'orderbtn' onClick={increment} >Order Now</button>
                <span className = 'bc'>{count}</span>
            </div>
            <button className='cart'>Dish's Container{cart}</button>
            {popup ? <Backdrop onClick = {hideback}/> : null }   
            {popup ? <Popup img ={props.img} price ={props.Price} foodname = {props.foodname} offer= {props.offer}/> :null}
        </div>
    );
}


export default Foodcard;