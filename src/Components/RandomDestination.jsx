import React from "react";
import { useGetRandomDestinationQuery } from "../api/randomDestinationAPI";
function RandomDestination() {
  //extracts data in below
  const { data, isLoading, isSuccess, isError, error } =
    useGetRandomDestinationQuery();

  let content;
  if (isLoading) {
    content = <p>Loading ...</p>;
  } else if (isSuccess) {
    console.log(data);
    content = (
      <div className="text-center norder p-3">
        <h4 className="text-success">Random Travel Suggestion:</h4>
        {data.city}. {data.country}
      </div>
    );
  } else if (isError) {
    content = <p>{error}</p>;
  }
  return <div className="pt-3">{content} </div>;
}

export default RandomDestination;
