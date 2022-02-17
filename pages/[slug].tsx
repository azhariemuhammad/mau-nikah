import { useRouter } from 'next/router';
import useSWR from 'swr';
import styles from '@/styles/Home.module.css';
import getWeddingBySlug from 'models/getWeddings';

import wedFetcher from '@/utils/wedFetch';

import Invitation from '@/components/Containers/Invitation';
import LoaderLove from '@/components/Loader';
import { Wedding } from '@/components/Containers/interface';

interface InvitationResponse {
  response: {
    error: string;
    data: Array<Wedding>;
    count: number;
    status: number;
    statusText: string;
    body: Array<Wedding>;
  };
}
const InvitationPage = ({ response }: InvitationResponse) => {
  const router = useRouter();
  // const slug = router?.query?.slug || '';
  // console.log({ router });

  // const { data: response, error } = useSWR(
  //   slug ? `/api/wedding/${slug}` : null,
  //   wedFetcher
  // );
  const { data = [] } = response || {};
  console.log({ response });

  console.log({ data: data[0] });

  // console.log({ data, error });
  // if (!data.length) {
  //   return (
  //     <div className="grid place-content-center h-screen max-w-[640px] m-auto">
  //       <h2 className="text-3xl text-center text-fuchsia-500 font-sacramento">
  //         NikahHariIni
  //       </h2>
  //       <LoaderLove />
  //     </div>
  //   );
  // }
  return <>{data.length && <Invitation weddData={data[0]} />}</>;
};

interface Props {
  params: {
    slug: string;
  };
}
export async function getServerSideProps({ params }: Props) {
  const response = await getWeddingBySlug(params.slug);

  return {
    props: {
      response,
    },
  };
}

export default InvitationPage;
