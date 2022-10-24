import { useEffect, useState } from "react";
import { fetchFromApi } from "../utils/FetchFromApi";

const useGetDetail = (url) => {
  const [detail, setDetail] = useState({});
  const [detaliLoading, setDetaliLoading] = useState(true);

  useEffect(() => {
    setDetaliLoading(true);
    fetchFromApi(url).then((data) => {
      setDetail(data?.items[0]);
      setDetaliLoading(false);
    });
  }, [url]);

  return { detail, detaliLoading };
};

export default useGetDetail;
