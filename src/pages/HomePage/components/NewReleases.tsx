import { Grid2, Typography } from '@mui/material';
import React from "react";
import useGetNewReleases from "../../../hooks/useGetNewReleases";
import ErrorMessage from "../../../common/components/ErrorMessage";

const NewReleases = () => {
  const {data, error, isLoading} = useGetNewReleases();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <ErrorMessage errorMessage={error.message}/>;
  }
  
  return <div>
    <Typography variant="h1" paddingTop="8px">
        New Releases Albums
    </Typography>
    {data && data.albums.items.length > 0 ? (
      <Grid2 container spacing={2}>
        {data.albums.items.map((album)=>(
          <Grid2 size={{xs:6, sm:4, md:3}} key={album.id}>
            <img src={album.images[0].url}/>
            <Typography>{album.name}</Typography>
            <Typography>{album.artists[0].name}</Typography>
          </Grid2>
        ))}
      </Grid2>
    ) : <Typography variant="h2">No data</Typography>} 
  </div>;
};

export default NewReleases;