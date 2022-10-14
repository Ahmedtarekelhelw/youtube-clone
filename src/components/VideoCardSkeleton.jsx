import { Skeleton, Stack } from "@mui/material";
import React from "react";

const VideoCardSkeleton = () => {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rounded" height={200} sx={{ bgcolor: "#1E1E1E" }} />
      <Skeleton variant="text" sx={{ bgcolor: "#1E1E1E" }} />
      <Skeleton variant="text" width={"50%"} sx={{ bgcolor: "#1E1E1E" }} />
    </Stack>
  );
};

export default VideoCardSkeleton;
