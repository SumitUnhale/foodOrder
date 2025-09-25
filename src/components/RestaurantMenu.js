import { useParams } from "react-router-dom";
import useResInfo from "../utils/useResInfo";
import { imageId } from "../utils/Contants";
import MenuList from "./MenuList";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useResInfo(resId);    

    if (!resInfo || !resInfo.cards) {
        return <div><div className="makeItCen"><h3>Loading or data not available...</h3></div></div>;
    }

    const info = resInfo?.cards?.[2]?.card?.card?.info || {};
    const name = info.name || "Unknown";
    const avgRating = info.avgRating || "N/A";
    const costForTwoMessage = info.costForTwoMessage || "";
    const totalRatingsString = info.totalRatingsString || "0 ratings";
    const cuisines = info.cuisines || [];
    const sla = info.sla || {};

    const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(itemCards);
    
    return (
        <div className="w-150 mx-auto m-4 p-4 text-center bg-gray-50 rounded">
            <div><h2 className="text-3xl font-bold my-3">{name}</h2></div>
            <div className="my-2">⭐ {avgRating} ({totalRatingsString}) {costForTwoMessage}</div>
            <div className="fam my-2 text-sm font-bold">{cuisines.join(", ")}</div>
            <div className="my-2 text-sm">{sla.slaString || ""}</div>
            <div className="pt-2">
                <ul>
                    {/* <MenuList itemCArds={itemCards} /> */}
                    {itemCards.map((item, index) => (
                        <div key={index}>
                            <div className="bg-orange-100">
                                <div className="flex justify-between m-2 p-3 font-bold text-xl">
                                    <span>{item?.card?.card?.title} ({item?.card?.card?.itemCards.length})</span>
                                    <span>⬇️</span>
                                </div>
                                <div className="bg-orange-50 p-2">
                                {item?.card?.card?.itemCards.map((item) => (
                                    <div className="flex text-left p-2 justify-between border-b-2 border-gray-200" key={item.card?.info.id}>
                                        <div className="w-[85%]">
                                            <span className="font-bold">{item?.card?.info?.name} </span> <span className="ml-2"> ₹{item?.card?.info?.price / 100} </span> 
                                            <div className="my-1">⭐ {item?.card?.info?.ratings?.aggregatedRating?.rating}</div>
                                            <p className="text-[12px]">{item?.card?.info?.description}</p>                                          
                                        </div>
                                        <div className="">
                                            <img className="w-20 h-auto" src={imageId + item?.card?.info?.imageId} />
                                        </div>
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RestaurantMenu;
