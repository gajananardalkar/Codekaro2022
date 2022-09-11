function AddMeeting(){
    return(
        <div>
            {/* <a href="#">Add Meetings</a> */}
            <form className="form">
                <div><input className="input" type='text' placeholder="Enter meeting Title"></input></div>
                <div><input className="input" type='text' placeholder="Enter Your name"></input></div>
                <div> <input className="input" row = '3'  type='datetime-local' placeholder=""></input></div>
                <div><textarea rows={4} className="input" type = 'text' placeholder="Suggestion/ Feedback" ></textarea></div>
            </form>
        </div>
    );
}

export default AddMeeting;