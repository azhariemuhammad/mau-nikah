import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import styles from '@/styles/Home.module.css';

import wedFetcher from '@/utils/wedFetch';

import Invitation from '@/components/Containers/Invitation';
import LoaderLove from '@/components/Loader';

const InvitationPage: NextPage = () => {
  const router = useRouter();
  const slug = router?.query?.slug || '';
  console.log({ router });

  const { data: response, error } = useSWR(
    slug ? `/api/wedding/${slug}` : null,
    wedFetcher
  );
  const { data = [] } = response || {};
  console.log({ data, error });
  if (!data.length) {
    return (
      <div className="grid place-content-center h-screen max-w-[640px] m-auto">
        <h2 className="text-3xl text-center text-fuchsia-500 font-sacramento">
          NikahHariIni
        </h2>
        <LoaderLove />
      </div>
    );
  }
  return <>{data.length && <Invitation weddData={data[0]} />}</>;
};

export default InvitationPage;
