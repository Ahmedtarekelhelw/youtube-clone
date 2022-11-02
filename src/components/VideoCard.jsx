import { Link } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import {
  demoThumbnailUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({ video, playlistDetails }) => {
  const link = playlistDetails
    ? `/playlist/${video?.snippet?.playlistId}/video/${video?.snippet?.resourceId?.videoId}`
    : video?.id?.videoId
    ? `/video/${video.id.videoId}`
    : `/playlist/${video.id.playlistId}`;

  return (
    <Card
      sx={{
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <CardActionArea>
        <Link to={link}>
          <CardMedia
            component="img"
            height="140"
            image={video?.snippet?.thumbnails?.high?.url || demoThumbnailUrl}
            alt={video?.snippet?.title}
          />
          {video?.id?.playlistId && (
            <div className="overlay">
              <PlaylistPlayIcon />
            </div>
          )}
        </Link>
        <CardContent sx={{ backgroundColor: "#1E1E1E", height: "106px" }}>
          <Link to={link}>
            <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
              {video?.snippet?.title.slice(0, 60) ||
                demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>
          <Link
            to={
              video?.snippet?.channelId
                ? `/channel/${video?.snippet?.channelId}`
                : demoChannelUrl
            }
          >
            <Typography
              variant="subtitle2"
              color="gray"
              display="flex"
              alignItems="center"
            >
              {video?.snippet?.channelTitle || demoChannelTitle}
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
