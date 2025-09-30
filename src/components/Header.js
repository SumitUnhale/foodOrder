import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {

  const cardItems = useSelector((store) => store.card.items);
  console.log(cardItems);
  

  const onlineStatus = useOnlineStatus();
  return (
    <>
    <div className="Header flex">
        <img width={60} className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSal0nxLnxuil4WuaeUWZc_1RsE5XdoYYuW8D9TCICKV31hiIMCEpYs7HkAXUNUH9bjRmM&usqp=CAU" />
        <ul className="nav-link">
          <Link>onlineStatus : { onlineStatus === false ? "🔴" : "✅"}</Link>
          <Link to="/">Home</Link>
          <Link to="/grocery">Grocery</Link>
          <Link to="/card">Card - ( { cardItems.length } items )</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </ul>
    </div>
    </>

    
  )
}

export default Header;
