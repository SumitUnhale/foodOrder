import { useState, useEffect } from "react";
import { DRESAPI } from "./Contants";

const useResInfo = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchRes();
    }, []);

    const fetchRes = async () =>{
        try{
            const data = await fetch(DRESAPI + resId);
            const json = await data.json();
            setResInfo(json?.data);
        } catch (error){
            console.log(error);   
        }
    }    
    return resInfo;
}
export default useResInfo;