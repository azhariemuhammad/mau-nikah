import { useRouter } from 'next/router';
import 'aos/dist/aos.css';

import getWeddingBySlug from 'models/getWeddings';

import Invitation from '@/components/Containers/Invitation';

import { Wedding } from '@/components/Containers/interface';
import LoaderLove from '@/components/Loader';

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
  const { data = [] } = response || {};

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
