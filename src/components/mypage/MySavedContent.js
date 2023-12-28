import React from "react";
import filledStar from "../../assets/filled_star.svg";
import X from "../../assets/mypageX.svg";

import axios from "axios";

function MySavedContent({ data, i, id }) {

  const item = data

  const session = sessionStorage.getItem('user')
  const session_id = session ? JSON.parse(session).id : null;

  console.log(session_id)
  console.log(item[i].restaurant_seq)

  const handleBookmarkDelete = async () => {
    try {
      const response = await axios.post("api/bookmarks/delete", {
        userID: session_id,
        restaurant_seq: item[i].restaurant_seq,
      });

      console.log(id);
      console.log(item.restaurant_seq);

      if (response.data) {
        console.log("delete");
      }
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="relative mb-5 flex h-24 w-full flex-row bg-white p-6 shadow-md">
      <div className="mr-3 flex items-center justify-center">
        <span className="text-2xl text-[#325FFF] hover:cursor-pointer">
          {item[i].restaurantName}
        </span>
      </div>
      <div className="ml-1 flex-col items-center">
        <div className="flex items-center">
          <img src={filledStar} alt="star" className="w-3" />
          <span className="ml-1 text-sm">{item[i].bookmarkCount}</span>
        </div>
        <div className="flex items-center">
          <div className="w-1/3">
            <span className="text-[#5A5A5A] text-sm">{item[i].category}</span>
          </div>
          <div className="ml-2 flex justify-start">
            <div className="flex justify-center items-center mx-1 h-5 w-20 rounded-2xl border-[1px] border-[#5A5A5A] bg-[#CCE7D0] text-xs text-[#5A5A5A]">
              소주: {item[i].sojuPrice}
            </div>
            <div className="flex justify-center items-center mx-1 h-5 w-20 rounded-2xl border-[1px] border-[#5A5A5A] bg-[#e8e6b1] text-xs text-[#5A5A5A]">
              맥주: {item[i].beerPrice}
            </div>
          </div>
        </div>
      </div>
      <img
        src={X}
        alt="x"
        className="absolute right-3 top-4 w-4 hover:cursor-pointer"
        onClick={handleBookmarkDelete}
      />
    </div>
  );
}

export default MySavedContent;
