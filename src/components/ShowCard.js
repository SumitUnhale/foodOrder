import { useDispatch, useSelector } from "react-redux";
import { imageId } from "../utils/Contants";
import { clearCard } from "../utils/cardSlice";


const ShowCard = () => {
    const itemCards = useSelector((store) => store.card.items);
    console.log(itemCards);

    const dispatch = useDispatch();

    const handleClearCard = () => {
        dispatch(clearCard());
    }
    

    return(
        <div className="m-4 p-4 text-center">
            <div className="w-3/12 m-auto flex content-center justify-between">
                <div></div>
                <div className="font-bold text-2xl">Card</div>
                <button onClick={handleClearCard} className="hover:bg-white border border-white hover:text-black hover:border-black p-2 cursor-pointer bg-black text-white rounded-lg text-end">Clear Card</button>
            </div>
            {itemCards.length > 0
                ?
                <div className="w-6/12 m-auto mt-5">
                    {itemCards.map((item, index) => (
                        <div className="flex items-center text-left p-2 justify-between border-b-2 border-gray-200"
                            key={index}>
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
                                <img
                                className="w-20 h-auto rounded"
                                src={imageId + item?.card?.info?.imageId}
                                alt={item?.card?.info?.name}
                                />
                            </div>
                        </div>
                    ))}
                </div> 
                :
                <div className="w-6/12 m-auto mt-5 text-2xl">
                    <p>This no any card present...  Please add from Menulist</p>
                </div>
            }
        </div>
    )
}

export default ShowCard;