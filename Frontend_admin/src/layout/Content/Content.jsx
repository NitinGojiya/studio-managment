import "./Content.css";
import ContentTop from '../../components/ContentTop/ContentTop';
import ContentMain from '../../components/ContentMain/ContentMain';
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Booking from "../../components/ContentMain/Booking";
import { useLocation } from "react-router-dom";
import Home from "../../components/ContentMain/Home";
const Content = () => {
  
const queryParams = new URLSearchParams(window.location.search);
const userId = queryParams.get("id");

if(userId != null)
{
  localStorage.setItem("adminlogin","true")
  localStorage.setItem("admin",userId)
  
}


  


console.log("User ID:", userId);
  return (
 

    <div className='main-content'>
      <ContentTop />
     <Router>
      <Routes>
      <Route path="/" element={<Home userId={userId}/>} />
        <Route path="/home" element={<ContentMain  />} />
        <Route path="/booking" element={<Booking userId={userId}/>} />
        <Route path="/profile" element={<ContentMain />} />
        <Route path="/Settings" element={<ContentMain />} />
      </Routes>
    </Router>
    </div>
    

  )
}

export default Content
