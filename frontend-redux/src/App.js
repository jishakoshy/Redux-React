//App.js
import './App.css';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import UserReg from './Components/User/UserReg';
import UserLogin from './Components/User/UserLogin';
import UserProfile from './Components/User/UserProfile';
// import Home from './Pages/Home';
import UserProfileDetail from './Components/User/UserProfileDetail';
import Adminlogin from './Components/Admin/Admin_login';
import AdminDashboard from './Components/Admin/AdminDashboard';


function App() {

  return (
    <div className="App">
    <Router>
     
      <Routes>
        <Route path='/register' element={<UserReg />} /> 
      </Routes>
      <Routes>
        <Route path='/login' element={<UserLogin />} /> 
      </Routes>
      <Routes>
        <Route path='/userprofile' element={<UserProfile />} /> 
      </Routes>
      <Routes>
        <Route path='/userdetail' element={<UserProfileDetail />} /> 
      </Routes>
      <Routes>
        <Route path='/adminlogin' element={<Adminlogin />} /> 
      </Routes>
      <Routes>
        <Route path='/admindash' element={<AdminDashboard />} /> 
      </Routes>
    </Router>
  </div>
  );
}

export default App;
