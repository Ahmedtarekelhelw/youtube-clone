import { Button, Grid } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import VideoCardSkeleton from "./VideoCardSkeleton";

const Videos = ({
  videos,
  channel,
  loading,
  videoDetails,
  url,
  nextPageToken,
  getVideos,
  loadingMore,
}) => {
  if (loading) {
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
  }

  const loadMore = () => {
    if (nextPageToken) {
      getVideos(url, true);
    }
  };

  return (
    <>
      <Grid container spacing={2}>
        {videos?.map((v, i) => (
          <Grid item key={i} xs={12} sm={6} md={videoDetails ? 12 : 4}>
            {(v?.id?.videoId || v?.id?.playlistId) && <VideoCard video={v} />}
            {v?.snippet?.resourceId?.videoId && (
              <VideoCard video={v} playlistDetails />
            )}
            {v?.id?.channelId && !channel && (
              <ChannelCard channelDetail={v} loading={loading} />
            )}
          </Grid>
        ))}
      </Grid>

      {nextPageToken && (
        <Button
          variant="outlined"
          onClick={loadMore}
          sx={{
            display: "block",
            margin: "20px auto",
            color: "white",
            borderColor: "white",
            "&:hover": {
              borderColor: "white",
            },
          }}
        >
          {loadingMore ? "Loading...." : "LoadMore"}
        </Button>
      )}
    </>
  );
};

export default Videos;
