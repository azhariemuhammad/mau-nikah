import useSWR from 'swr';
import wedFetcher from '@/utils/wedFetch';

const useGetWallOfLove = (url: string, isSkip = false) => {
  const { data: response, error } = useSWR(!isSkip ? url : null, wedFetcher);

  const result = response?.data || [];
  const count = response?.count || 0;
  const page = response?.page || 0;

  return {
    result,
    error,
    count,
    page,
  };
};

export default useGetWallOfLove;
