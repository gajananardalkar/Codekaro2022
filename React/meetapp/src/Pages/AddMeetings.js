import {useRef} from 'react'

function AddMeeting(){
    
    const meetingtitleinput = useRef();
    const usernameinput = useRef();
    const meetingtime = useRef();
    const meetingdetails = useRef();

    function SubmitHandler(event){
        event.preventDefault()
        console.log("Form Submitted")

        const title = meetingtitleinput.current.value;
        const username = usernameinput.current.value;
        const time = meetingtime.current.value;
        const desc = meetingdetails.current.value;

        console.log(title, username, time, desc)

        const meetingdata = {
            title: title,
            username : username,
            time : time,
            desc : desc
        }

        console.log(meetingdata)

        fetch('https://meet-app-1da6d-default-rtdb.firebaseio.com/meetings.json', {
            method : 'Post',
            body: JSON.stringify(meetingdata)
        })
    }


    return(
        <div>
            {/* <a href="#">Add Meetings</a> */}
            <form onSubmit= {SubmitHandler} className="form">
                <div><input ref={meetingtitleinput} className="input" type='text' placeholder="Enter meeting Title"></input></div>
                <div><input ref={usernameinput} className="input" type='text' placeholder="Enter Your name"></input></div>
                <div> <input ref={meetingtime} className="input" row = '3'  type='datetime-local' placeholder=""></input></div>
                <div><textarea ref={meetingdetails} rows={4} className="input" type = 'text' placeholder="Suggestion/ Feedback" ></textarea></div>
                <div><button className="btn" type="Submit">Create new Meeting</button></div>
            </form>
        </div>
    );
}

export default AddMeeting;