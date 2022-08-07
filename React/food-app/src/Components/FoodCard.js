function FoodCard(props){
    
  function OrderHandler(){
    let cost = Number(props.price)
    console.log(cost)
    if(cost >= 200){
        let free = document.getElementById('free')
        free.classList.remove('d-none')
    //   let newtag = document.createElement('h6')
    //   let parentelement = document.getElementById('freeOrder')
    //   console.log(parentelement)
    //   parentelement.appendChild(newtag)
    //   newtag.innerHTML = "Eligible for Free Delievery"
           cost = 0
    //   console.log(cost)

    }else{
        let free = document.getElementById('notfree')
        free.classList.remove('d-none')
        // let newtag = document.createElement('h6')
        // let parentelement = document.getElementById('freeOrder')
        // console.log(parentelement)
        // parentelement.appendChild(newtag)
        // newtag.innerHTML = "Delievery Charges applicable"
        cost = 0
        // console.log(cost)
    }
    
}
    return(
        <div className="Card-Conatiner">
            <div className ="card-body">

                <h3 className='menu-name'>{props.food}</h3>
                <img src={props.img} className="Card-img"></img>
                <p className ='menu-disc'>{props.offer}</p>
                <h3>Only {props.price} /-</h3>
                <button className="btn" onClick={OrderHandler}>{props.order}</button>
                
                <div id="freeOrder">
                    <h6 className="d-none" id="notfree">Delievery Charges applicable</h6>
                    <h6 className="d-none" id="free">Eligible for Free Delievery</h6>
                </div>

            </div>
        </div>
    );
}

export default FoodCard;