function Popup(props){
    return(
        <div className="popup">
            {/* <div className = "foodcard"> */}
                <img className= 'foodimage' src={props.img}></img>
                <span className="price">{props.price}/- Only</span>
                <h3 className = 'foodname'>{props.foodname}</h3>
                <span className = 'offer'>{props.offer}</span>
            {/* </div> */}
        </div>
    );
}

export default Popup;