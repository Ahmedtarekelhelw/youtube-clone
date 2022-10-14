import { useCallback, useState } from "react";
import { fetchFromApi } from "../utils/FetchFromApi";

let vid = [];
const useGetVideos = () => {
  const [videos, setVideos] = useState(vid);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [nextPageToken, setNextPageToken] = useState("");

  const getVideos = useCallback((url, loadmore) => {
    if (!loadmore) {
      setLoading(true);
      setVideos(vid);
    } else {
      setLoadingMore(true);
    }
    fetchFromApi(url)
      .then((data) => {
        if (loadmore) {
          setVideos((prev) => [...prev, ...data?.items]);
          setNextPageToken(data?.nextPageToken);
          setLoadingMore(false);
          return;
        }
        setVideos(data?.items);
        setNextPageToken(data?.nextPageToken);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { videos, loading, loadingMore, nextPageToken, getVideos };
};

export default useGetVideos;
