import React from "react";
import PopularListsThisMonthGrid from "./PopularListsThisMonthGrid/PopularListsThisMonthGrid";

const PopularListsThisMonth = () => {
  
  return (
    <>
      <section className="popular-month-lists">
        <h2 className="popular-month-lists__heading">
          Популярные подборки в этом месяце
        </h2>
        <PopularListsThisMonthGrid />
      </section>

      <hr />

    </>
  );
};

export default PopularListsThisMonth;
