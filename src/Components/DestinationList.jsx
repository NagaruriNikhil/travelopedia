import React from "react";
import { useGetAllDestinationQuery } from "../api/DestinationAPI";

function DestinationList() {
  //extracts data in below
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllDestinationQuery();

  let content;
  if (isLoading) {
    content = <p>Loading ...</p>;
  } else if (isSuccess) {
    console.log(data);
    content = data.map((destination) => {
      return (
        <article key={destination.id}>
          <div className="text-center text-info p-2">
            <div>
              {destination.city}, {destination.country} -{" "}
              {destination.daysNeeded} days
            </div>
          </div>
        </article>
      );
    });
  } else if (isError) {
    content = <p>{error}</p>;
  }
  return <div className="pt-3">{content} </div>;
}

export default DestinationList;
