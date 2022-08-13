import Foodcard from "./foodcard";

function Cart(props){
    return(
        <button className='cart'>Dish's Container{props.cart}</button>
    );

}
export default Cart;