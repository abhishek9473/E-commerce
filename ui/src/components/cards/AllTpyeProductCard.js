import React from "react";
import { useRouter } from "next/router";

function AllTpyeProductCard({ nextPage, imgUrl, cardContent }) {
  const router = useRouter();

  return (
    <>
      <a onClick={() => router.push(`${nextPage}`)}>
          <div className="categoryWiseProductCardLayout card-hover-style">
          <div className="h-52 w-52">
            <img src={imgUrl} className="cardImage" alt="image" />
          </div>
          <div className="categoryWiseProductCardContent">
            <a className="">{cardContent}</a>
          </div>
        </div>
      </a>
    </>
  );
}

export default AllTpyeProductCard;
