import useSWR from 'swr';
import wedFetcher from '@/utils/wedFetch';

const useSendingLove = (url: string) => {
  const { data: response } = useSWR(url, wedFetcher);
  const result = response?.data || {};
  const { data } = result;

  return {
    result,
  };
};

export default useSendingLove;
