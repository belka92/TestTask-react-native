import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useTanStack = () => {
  const getBooks = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_SECRET_NAME}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const { isRefetching, isLoading, isError, data, refetch, fetchNextPage } =
    useInfiniteQuery(["books.test"], getBooks, {
      getNextPageParam: (lastPage) => lastPage.next,
      getPreviousPageParam: (firstPage) => firstPage.prev,
    });

  return {
    isRefetching,
    isLoading,
    isError,
    data: data,
    refetch,
    fetchNextPage,
  };
};
