import { Skeleton, Stack } from "@mui/material";

const VideoSkeleton = () => {
  return (
    <Stack height="100%" spacing={1}>
      <Skeleton variant="rounded" height="100%" sx={{ bgcolor: "#1E1E1E" }} />
      <Skeleton variant="text" sx={{ bgcolor: "#1E1E1E" }} />
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Skeleton variant="text" width={"20%"} sx={{ bgcolor: "#1E1E1E" }} />
        <Stack direction="row">
          <Skeleton
            variant="text"
            width={"100px"}
            sx={{ bgcolor: "#1E1E1E", mr: 2 }}
          />
          <Skeleton
            variant="text"
            width={"100px"}
            sx={{ bgcolor: "#1E1E1E" }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default VideoSkeleton;
