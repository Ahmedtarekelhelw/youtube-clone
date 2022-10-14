import { Grid } from "@mui/material";
import React from "react";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import VideoCardSkeleton from "./VideoCardSkeleton";

const Videos = ({ videos, channel, loading, videoDetails }) => {
  if (loading)
    return (
      <Grid container spacing={2}>
        {Array(6)
          .fill(<VideoCardSkeleton />)
          .map((item, i) => (
            <Grid item xs={12} sm={6} md={videoDetails ? 12 : 4} key={i}>
              {item}
            </Grid>
          ))}
      </Grid>
    );

  return (
    <Grid container spacing={2}>
      {videos?.map(
        (v, i) =>
          (v?.id?.videoId || v?.id?.channelId) && (
            <Grid item key={i} xs={12} sm={6} md={videoDetails ? 12 : 4}>
              {v?.id?.videoId && <VideoCard video={v} />}
              {v?.id?.channelId && !channel && (
                <ChannelCard channelDetail={v} loading={loading} />
              )}
            </Grid>
          )
      )}
    </Grid>
  );
};

export default Videos;
