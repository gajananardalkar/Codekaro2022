import {Route, Routes, Link} from 'react-router-dom'
import './App.css';
// import Loginbtn from './Component/Loginbtn';
// import Signupbtn from './Component/Signupbtn';
import Home from './Pages/Home';
import AddMeetings from './Pages/AddMeetings'
import Navigation from './Component/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <h1>Meet app</h1>
      {/* <Loginbtn/> */}
      {/* <Signupbtn/> */}
      <Routes>
        <Route exact path = '/' element={<Home/>} />
        <Route exact path = '/AddMeetings' element = {<AddMeetings/>}/>
      </Routes>
    </div>
  );
}

export default App;
