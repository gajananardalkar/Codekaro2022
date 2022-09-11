import {Link} from 'react-router-dom';
// import style from './Navigation.module.css'

function Navigation(){
    return(
        <div className='PageNavigation'>
           <div className='CKMNavigation'><Link to= '/'>CKM</Link></div>
           <div className='HomeNavigation'><Link to= '/'>Home</Link></div>
           <div className='HomeNavigation'><Link to= '/AddMeetings'>Add Meeting</Link></div>
        </div>
    );
}
export default Navigation;