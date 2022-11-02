import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Videos from "../components/Videos";
import useGetVideos from "../hooks/useGetVideos";

const SearchFeed = () => {
  const { searchTerm } = useParams();

  const { loading, videos, nextPageToken, loadingMore, getVideos } =
    useGetVideos();

  useEffect(() => {
    getVideos(`search?part=snippet,id&q=${searchTerm}`);
  }, [searchTerm, getVideos]);

  return (
    <Box p={3}>
      <Typography
        color="white"
        mb={3}
        fontSize={{ xs: "25px", sm: "35px" }}
        fontWeight={500}
        textAlign="center"
      >
        Search Results for{" "}
        <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Videos
        videos={videos}
        loading={loading}
        nextPageToken={nextPageToken}
        loadingMore={loadingMore}
        getVideos={getVideos}
        url={`search?part=snippet,id&q=${searchTerm}&pageToken=${nextPageToken}`}
      />
    </Box>
  );
};

export default SearchFeed;
