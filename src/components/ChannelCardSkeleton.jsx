import { Skeleton, Stack } from "@mui/material";

const ChannelCardSkeleton = () => {
  return (
    <Stack spacing={1}>
      <Skeleton
        variant="circular"
        sx={{ bgcolor: "#1E1E1E" }}
        width={200}
        height={200}
      />
      <Skeleton
        variant="text"
        sx={{ fontSize: "1.3rem", bgcolor: "#1E1E1E" }}
      />
    </Stack>
  );
};

export default ChannelCardSkeleton;
