import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  const onlineStatus = useOnlineStatus();
  return (
    <>
    <div className="Header">
        <img width={60} className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSal0nxLnxuil4WuaeUWZc_1RsE5XdoYYuW8D9TCICKV31hiIMCEpYs7HkAXUNUH9bjRmM&usqp=CAU" />
        <ul className="nav-link">
          <Link>onlineStatus : { onlineStatus === false ? "🔴" : "✅"}</Link>
          <Link to="/">Home</Link>
          <Link to="/grocery">Grocery</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </ul>
    </div>
    </>

    
  )
}

export default Header;
