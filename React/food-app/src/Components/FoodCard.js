function FoodCard(){
    return(
        <div className="Card-Conatiner">
            <div className ="card-body">
                <h3 className='menu-name'>Samosa</h3>
                <img src="https://source.unsplash.com/800*400/?Samosa" className="Card-img"></img>
                <p className ='menu-disc'>Order Samosa noe and get 50% off</p>
                <button>Order Now</button>
            </div>
        </div>
    );
}

export default FoodCard;