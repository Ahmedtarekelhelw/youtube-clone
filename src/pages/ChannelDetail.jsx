import { Box } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ChannelCard from "../components/ChannelCard";
import Videos from "../components/Videos";
import useGetDetail from "../hooks/useGetDetail";
import useGetVideos from "../hooks/useGetVideos";
const ChannelDetail = () => {
  const { getVideos, videos, loading, loadingMore, nextPageToken } =
    useGetVideos();

  const { id } = useParams();

  const { detail: channelDetail } = useGetDetail(
    `channels?part=snippet&id=${id}`
  );

  useEffect(() => {
    getVideos(`search?channelId=${id}&part=snippet%2Cid&order=date`);
  }, [id, getVideos]);

  return (
    <>
      <Box>
        <div
          style={{
            height: "300px",
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
          }}
        />

        <ChannelCard
          loading={loading}
          channelDetail={channelDetail}
          marginTop="-93px"
        />
      </Box>
      <Box p={3} position="relative">
        {
          <Videos
            videos={videos}
            channel
            loading={loading}
            nextPageToken={nextPageToken}
            loadingMore={loadingMore}
            getVideos={getVideos}
            url={`search?channelId=${id}&part=snippet%2Cid&order=date&pageToken=${nextPageToken}`}
          />
        }
      </Box>
    </>
  );
};

export default ChannelDetail;
