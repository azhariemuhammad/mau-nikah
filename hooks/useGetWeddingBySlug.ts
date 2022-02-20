import useSWR from 'swr';
import wedFetcher from '@/utils/wedFetch';

const useGetWeddingBySlug = (slug: string | string[]) => {
  const url = `/api/wedding/${slug}`;
  const { data: response, error } = useSWR(
    slug.length ? url : null,
    wedFetcher
  );

  const result = response?.data || [];

  return {
    result,
    error,
  };
};

export default useGetWeddingBySlug;
