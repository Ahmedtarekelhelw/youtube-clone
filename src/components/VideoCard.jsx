import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({ video: { id, snippet } }) => {
  return (
    <Card
      sx={{
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <CardActionArea>
        <Link to={id.videoId ? `/video/${id.videoId}` : demoVideoUrl}>
          <CardMedia
            component="img"
            height="140"
            image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
            alt={snippet?.title}
          />
        </Link>
        <CardContent sx={{ backgroundColor: "#1E1E1E", height: "106px" }}>
          <Link to={id.videoId ? `/video/${id.videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>
          <Link
            to={
              snippet?.channelId
                ? `/channel/${snippet?.channelId}`
                : demoChannelUrl
            }
          >
            <Typography
              variant="subtitle2"
              color="gray"
              display="flex"
              alignItems="center"
            >
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircleIcon
                sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
              />
            </Typography>
          </Link>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default VideoCard;
