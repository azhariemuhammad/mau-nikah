import { useSWRConfig } from 'swr';
import useGetWallOfLove from '@/hooks/useGetWallOfLove';
import WallOfLove from '.';
import SendingLove from './SendingLove';
import { Message } from '@/components/Containers/interface';
import postLove from 'models/postLove';
import { useEffect, useRef, useState } from 'react';

interface ContainerWallOfLoveProps {
  weddingId: number;
}
const ContainerWallOfLove = ({ weddingId }: ContainerWallOfLoveProps) => {
  const [curentPage, setCurrentPage] = useState(0);
  const { result, error, count } = useGetWallOfLove(
    `/api/love/${weddingId}?page=${curentPage}`
  );
  const { mutate } = useSWRConfig();
  const [key, setKey] = useState(0);
  const [messages, setMessages] = useState<Array<Message>>(result);
  const firstLoad = useRef(false);

  console.log({ count });
  useEffect(() => {
    if (result.length && !error) {
      setMessages(result);
      firstLoad.current = true;
    }
  }, [result]);

  const handleSendingLove = async (payload: Message) => {
    try {
      const { data, error } = await postLove(payload);
      if (!error && data?.length) {
        mutate(`/api/love/${weddingId}?page=${curentPage}`);
        setKey(key + 1);
      }
      // if()
      // if (ok) {
      //   renderToast('Berhasil menyimpan ide mu');
      //   push('/idea');
      // } else {
      //   renderToast('Gagal menyimpan ide mu', true);
      // }
    } catch (e) {
      console.error(e);
    }
  };

  const handleLoadMore = () => {
    setCurrentPage(curentPage + 1);
  };

  return (
    <div>
      <div key={key}>
        <SendingLove onsubmit={handleSendingLove} weddingId={weddingId} />
      </div>

      {messages.length > 0 &&
        !error &&
        messages.map((item: Message) => (
          <WallOfLove message={item} key={item.id} />
        ))}
      <div className="text-center my-4">
        {messages.length < count && (
          <button
            type="button"
            className="bg-oceanblue shadow-lg  hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white"
            onClick={handleLoadMore}
          >
            Selanjutnya
          </button>
        )}
      </div>
    </div>
  );
};

export default ContainerWallOfLove;
