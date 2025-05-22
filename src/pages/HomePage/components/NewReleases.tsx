import { Typography } from "@mui/material";
import React from "react";
import useGetNewReleases from "../../../hooks/useGetNewReleases";

const NewReleases = () => {
  const {data, error, isLoading} = useGetNewReleases();

  console.log("ddddd ", data);
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  
  // if (error) {
  //   return <div>Error occurred</div>;
  // }
  
  console.log("error: ", error); // 이제 data가 있을 때만 로그가 출력됨
  
  return <div>
    <Typography variant="h1" paddingTop="8px">
        New Releases Albums
    </Typography>
  </div>;
};

export default NewReleases;