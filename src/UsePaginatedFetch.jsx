import React, { useState } from "react";
import _ from 'lodash';

export default function UsePaginatedFetch(url, pageSize) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();

    const paginatedData = _.chunk(data, pageSize);
    console.log(paginatedData);

    setData(paginatedData);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return [loading, data];
}
