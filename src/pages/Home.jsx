import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Videos from "../components/Videos";
import useGetVideos from "../hooks/useGetVideos";

const Home = () => {
  const [category, setCategory] = useState("New");

  const { loading, videos, nextPageToken, loadingMore, getVideos } =
    useGetVideos();

  useEffect(() => {
    getVideos(`search?part=snippet&q=${category}`);
  }, [category, getVideos]);

  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sm: "auto", md: "calc(100vh - 77px)" },
          px: { md: 2 },
          position: "sticky",
          top: "77px",
          backgroundColor: "#000",
          zIndex: "999",
        }}
      >
        <Sidebar setCategory={setCategory} category={category} />
      </Box>

      <Box pl={{ xs: 3, md: 4 }} pr={3} py={2} width={{ md: "100%" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          ml={{ md: 3 }}
          textAlign={{ xs: "center", sm: "unset" }}
          color="#fff"
        >
          {category} <span style={{ color: "#FC1503" }}>Videos</span>
        </Typography>

        <Videos
          videos={videos}
          loading={loading}
          nextPageToken={nextPageToken}
          loadingMore={loadingMore}
          getVideos={getVideos}
          url={`search?part=snippet&q=${category}&pageToken=${nextPageToken}`}
        />
      </Box>
    </Stack>
  );
};

export default Home;
