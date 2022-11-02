import { Box, Stack } from "@mui/system";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";

import { Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import Videos from "../components/Videos";
import VideoSkeleton from "../components/VideoSkeleton";
import useGetVideos from "../hooks/useGetVideos";
import useGetDetail from "../hooks/useGetDetail";

const VideoDetail = () => {
  const { id } = useParams();

  const { getVideos, videos, loading } = useGetVideos();

  const { detail: videoDetail } = useGetDetail(
    `videos?part=snippet,statistics&id=${id}`
  );

  useEffect(() => {
    getVideos(`search?part=snippet&relatedToVideoId=${id}&type=video`);
  }, [id, getVideos]);

  return (
    <Stack direction={{ sm: "column", md: "row" }} spacing={2} p={2}>
      <Box
        flex={{ md: 1 }}
        position={{ md: "sticky" }}
        top="93px"
        height="calc(100vh - 109px)"
      >
        {loading ? (
          <VideoSkeleton />
        ) : (
          <Stack height="100%">
            <ReactPlayer
              url={`https://www.youtube-nocookie.com/embed/${id}`}
              controls
              width="100%"
              height="100%"
            />
            <Typography variant="h5" color="white" fontWeight="bold" my={2}>
              {videoDetail?.snippet?.title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography display="flex" alignItems="center" color="white">
                {videoDetail?.snippet?.channelTitle}
                <CheckCircleIcon
                  sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                />
              </Typography>
              <Stack direction="row" color="white">
                <Typography mr={2} variant="body2" sx={{ opacity: "0.7" }}>
                  {parseInt(
                    videoDetail?.statistics?.viewCount
                  ).toLocaleString()}{" "}
                  Views
                </Typography>
                <Typography variant="body2" sx={{ opacity: "0.7" }}>
                  {parseInt(
                    videoDetail?.statistics?.likeCount
                  ).toLocaleString()}{" "}
                  likes
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        )}
      </Box>
      <Box flex={0.3} pt={{ xs: 2, md: 0 }}>
        <Videos videos={videos} loading={loading} videoDetails />
      </Box>
    </Stack>
  );
};

export default VideoDetail;
