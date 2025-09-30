
import { useState } from "react";
import MenuCard from "./MenuCard";
const MenuList = ({ itemCards = [] }) => {
const[isOpen, setIsOpen] = useState(null);
const handleIndex = (index) => {
    setIsOpen(index === isOpen ? null : index);   
}
  return (
    <div>
      {itemCards.map((item, index) => (
        <div key={index} className="shadow-md">
            <MenuCard item={item} isOpen={index === isOpen} onToggle={()=>handleIndex(index)} />
        </div>
      ))}
    </div>
  );
};

export default MenuList;
