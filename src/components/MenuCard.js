import { useDispatch } from "react-redux";
import { addItem } from "../utils/cardSlice";
import { imageId } from "../utils/Contants";
const MenuCard = ({ item, isOpen, onToggle }) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }
     
    return(
        <div>
            {
                <div className="bg-orange-100 hover:bg-orange-200">
                    <div onClick={onToggle} className="flex justify-between m-2 p-3 font-bold text-base cursor-pointer">
                    <span>
                        {item?.card?.card?.title} ({item?.card?.card?.itemCards.length})
                    </span>
                    <span>⬇️</span>
                    </div>
                    {isOpen && <div className="bg-orange-50 p-2">
                    {item?.card?.card?.itemCards.map((item) => (
                        <div
                        className="flex items-center text-left p-2 justify-between border-b-2 border-gray-200"
                        key={item.card?.info?.id}
                        >
                        <div className="w-[85%]">
                            <span className="font-bold">{item?.card?.info?.name}</span>
                            <span className="ml-2">
                            ₹{item?.card?.info?.price / 100}
                            </span>
                            <div className="my-1">
                            ⭐ {item?.card?.info?.ratings?.aggregatedRating?.rating}
                            </div>
                            <p className="text-[12px]">
                            {item?.card?.info?.description}
                            </p>
                        </div>
                        <div className="">
                            <button onClick={() => handleAddItem(item)} className="button ml-4 absolute bg-black text-white rounded px-2 text-xs py-1 cursor-pointer hover:bg-white hover:text-black">Add +</button>
                            <img
                            className="w-20 h-auto rounded"
                            src={imageId + item?.card?.info?.imageId}
                            alt={item?.card?.info?.name}
                            />
                        </div>
                        </div>
                    ))}
                    </div>}
                </div>
            }
        </div>
    )
}

export default MenuCard;