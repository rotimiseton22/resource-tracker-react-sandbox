import { useState, useEffect } from "react";

//data is available but loading
//data is available for use
//error

export function useFetch(uri) {
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);

  useEffect(() => {
    if (!uri) return;

    fetch(uri)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [uri]);

  return [loading, data, error];
}
