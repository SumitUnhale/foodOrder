import React, { useEffect, useState } from 'react';
import Card from './card';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
const CartLayout = () => {
  const [restorantList, setRestorantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [seacrhVal, setSerachVal] = useState('');
  useEffect(()=>{
    fetchData();
  },[])
  const fetchData = async () => {
      const result = await fetch("https://swiggy-api-4c740.web.app/swiggy-api.json");
      // const result = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      // const result1 = await fetch("https://www.swiggy.com/dapi/restaurants/list/update");
      const data = await result.json();
      // const data1 = await result1.json();
      setFilteredList(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []);
      setRestorantList(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []);
      console.log("result" , data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []);
          // console.log("result1" , data1?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle
          // ?.restaurants || []);
  }
  const handleClick = (e) => {
    const filterData = restorantList.filter((res) => {
      return(
      res.info.name.toLowerCase().includes(seacrhVal.toLowerCase()) || res.info.cuisines.some((cuisine) => cuisine.toLowerCase().includes(seacrhVal.toLowerCase()))
    )
    })    
    setFilteredList(filterData);
  }

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) return <h1> You are offline, Please check yours internet connection.</h1>

  return (
    <div className='cardLayout'>
      <div className='search-input'>
        <input className='textinput' type='text' onChange={(e) => setSerachVal(e.target.value.trim())} />
        <button className='searchBtn' onClick={handleClick}> search </button>
      </div>
      <h1>Restaurants with online food delivery </h1>
      <div className='cardDiv'>
        {filteredList.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}><Card restaurant={restaurant} /></Link>
        ))}
      </div>
    </div>
  )
}

export default CartLayout;
