import React, { useState, useEffect } from "react";
import ResturentCart from "./ResturentCart";
import resList from "../utils/apiData";


const Body = () => {

    const [resturentList, setResturentList] = useState([]);

    useEffect(()=>{
      fetchData();
    }, [])

    const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3038945&lng=70.80215989999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log(json);

      //Optional Chaining
      setResturentList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    if(resturentList.length === 0){
      return <h1> Loading... </h1>
    }

    return(
        <div className="body">
            <div className="filter">
              <button className="filter-btn" onClick={() => {
                const filterdList = resturentList.filter(res => res.info.avgRating > 4.4)
                setResturentList(filterdList)
              }} >Top Rated Resturents</button>
            </div>
            <div className="resturent-carts">
                {/* First way 
                <ResturentCart resData={resList[0]} />
                <ResturentCart resData={resList[1]} />
                <ResturentCart resData={resList[2]} />
                <ResturentCart resData={resList[3]} />
                <ResturentCart resData={resList[4]} />
                <ResturentCart resData={resList[5]} />
                <ResturentCart resData={resList[6]} />
                <ResturentCart resData={resList[7]} />
                <ResturentCart resData={resList[8]} />
                <ResturentCart resData={resList[9]} />
                <ResturentCart resData={resList[10]} />
                <ResturentCart resData={resList[11]} />
                <ResturentCart resData={resList[12]} />
                <ResturentCart resData={resList[13]} />
                <ResturentCart resData={resList[14]} />
                <ResturentCart resData={resList[15]} />
                <ResturentCart resData={resList[16]} />
                <ResturentCart resData={resList[17]} />
                <ResturentCart resData={resList[18]} />
                <ResturentCart resData={resList[19]} />
                 */}
                 {/* and use map function to loop array (Secound way) */}
                { 
                  resturentList.map((resturent) => <ResturentCart key={resturent.info.id} resData={resturent} />)
                }
            </div>
        </div>
    )
}

export default Body;