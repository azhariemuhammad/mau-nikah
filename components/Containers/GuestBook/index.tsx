import { useState } from 'react';
import { useRouter } from 'next/router';
import SendingLove from '@/components/WallOfLove/SendingLove';
import postLove from 'models/postLove';
import { Message } from '@/components/Containers/interface';
import FormGuestBook from './Form';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

interface GuestBookContainerProps {
  weddingId: number;
  photos: Array<string>;
  nicknameMan: string;
  nicknameWomen: string;
}

const GuestBookContainer = ({
  weddingId,
  photos,
  nicknameWomen,
  nicknameMan,
}: GuestBookContainerProps) => {
  const router = useRouter();
  const [key, setKey] = useState(0);
  const handleRegister = async (payload: Message) => {
    try {
      const { data, error } = await postLove(payload);
      if (!error && data?.length) {
        setKey(key + 1);
        router.push(`/wall-of-love/${weddingId}`);
      }
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <div className="bg-[#ffff] max-w-[640px] m-auto">
        <div className="px-[2rem]">
          <h3 className="mt-8 text-4xl text-center mb-8 text-slate-800 font-sacramento">
            Buku Tamu
          </h3>
          <div className="text-center mb-[4rem] pt-[1`rem]">
            <p className="text-3xl  font-bold font-reey">
              {nicknameMan} &amp; {nicknameWomen}
            </p>
          </div>
          <div key={key}>
            <FormGuestBook weddingId={weddingId} onsubmit={handleRegister} />
          </div>
          {/* {photos.length > 1 && <Gallery photos={photos} />} */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GuestBookContainer;
