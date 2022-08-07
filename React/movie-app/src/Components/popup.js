function Popup(props){
    return(
        <div className="modal">
            <div className="modal-container">
                <img>{props.picture}</img>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default Popup;