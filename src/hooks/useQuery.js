import { useEffect, useState } from "react";
import courseService from "../services/courseService";

const useQuery = (callbackPromise) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    //     fetch(`http://cfd-reactjs.herokuapp.com/elearning/v4/courses
    // `)
    //       .then((res) => res.json())
    //       .then((res) => {
    //         setCourses(res.data);
    //       });
    setLoading(true);
    callbackPromise()
      .then((res) => res.data)
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return {
    data,
    loading,
    error,
  };
};
export default useQuery;
