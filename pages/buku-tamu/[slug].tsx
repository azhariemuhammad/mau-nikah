import { useRouter } from 'next/router';
import 'aos/dist/aos.css';

import getWeddingBySlug from 'models/getWeddings';

import GuestBookContainer from '@/components/Containers/GuestBook';

import { Wedding } from '@/components/Containers/interface';
import LoaderLove from '@/components/Loader';
import useGetWeddingBySlug from '@/hooks/useGetWeddingBySlug';

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
const BukuTamuPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { result, error } = useGetWeddingBySlug(slug || '');

  const weddData = result?.[0] || ({} as Wedding);
  const weddingId = weddData.id || 0;
  const photos = weddData.photos || [];
  const nickNameWomen = weddData.nickname_women || '';
  const nicknameMan = weddData.nickname_man || '';

  return (
    <GuestBookContainer
      nicknameWomen={nickNameWomen}
      nicknameMan={nicknameMan}
      weddingId={weddingId}
      photos={photos}
    />
  );
};

export default BukuTamuPage;
