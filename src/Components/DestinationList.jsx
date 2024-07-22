import { useGetAllDestinationQuery } from "../api/DestinationAPI";
import Destination from "./Destination";

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
        <Destination
          destination={destination}
          key={destination.id}
        ></Destination>
      );
    });
  } else if (isError) {
    content = <p>{error}</p>;
  }
  return <div className="pt-3">{content} </div>;
}

export default DestinationList;
