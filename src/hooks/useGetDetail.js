import { useEffect, useState } from "react";
import { fetchFromApi } from "../utils/FetchFromApi";

const useGetDetail = (url) => {
  const [detail, setDetail] = useState({});

  useEffect(() => {
    fetchFromApi(url).then((data) => {
      setDetail(data?.items[0]);
    });
  }, [url]);

  return { detail };
};

export default useGetDetail;
