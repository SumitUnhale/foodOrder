import { useParams } from "react-router-dom";
import useResInfo from "../utils/useResInfo";
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
    
    return (
        <div className="w-180 mx-auto m-4 p-4 text-center bg-gray-50 rounded shadow-sm">
            <div><h2 className="text-3xl font-bold my-3">{name}</h2></div>
            <div className="my-2 text-sm">⭐ {avgRating} ({totalRatingsString}) {costForTwoMessage}</div>
            <div className="fam my-2 text-sm font-bold">{cuisines.join(", ")}</div>
            <div className="my-2 text-xs">{sla.slaString || ""}</div>
            <div className="pt-2">
                <ul>
                    <MenuList itemCards={itemCards} />
                </ul>
            </div>
        </div>
    );
};

export default RestaurantMenu;
