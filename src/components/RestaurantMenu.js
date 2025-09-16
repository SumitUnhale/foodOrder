import { useParams } from "react-router-dom";
import useResInfo from "../utils/useResInfo";

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

    const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || [];

    return (
        <div className="resCardMenu">
            <div><h2>{name}</h2></div>
            <div>⭐ {avgRating} ({totalRatingsString}) {costForTwoMessage}</div>
            <div className="fam">{cuisines.join(", ")}</div>
            <div>{sla.slaString || ""}</div>
            <div>
                <ul>
                    <h3>Our Top Menus ({itemCards.length})</h3>
                    {itemCards.map((item, index) => (
                        <li key={index}>
                            {item?.card?.info?.name} - ₹{(item?.card?.info?.price || 0) / 100}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RestaurantMenu;
