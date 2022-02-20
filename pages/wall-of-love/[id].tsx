import { useSWRConfig } from 'swr';
import useGetWallOfLove from '@/hooks/useGetWallOfLove';

import { Message } from '@/components/Containers/interface';

import { useEffect, useRef, useState } from 'react';
import WallOfLove from '@/components/WallOfLove';
import { useRouter } from 'next/router';

const WallOfLovePage = () => {
  const router = useRouter();
  const { id = 0 } = router.query;

  const [curentPage, setCurrentPage] = useState(0);
  const isSkip = id === 0;
  const { result, error, count } = useGetWallOfLove(
    `/api/love/${id}?page=${curentPage}&size=10`,
    isSkip
  );
  const { mutate } = useSWRConfig();

  const [messages, setMessages] = useState<Array<Message>>(result);

  useEffect(() => {
    if (result.length && !error) {
      setMessages(result);
    }
  }, [result.length, error, messages]);

  const handleLoadMore = () => {
    setCurrentPage(curentPage + 1);
  };

  return (
    <div className="max-w-[640px] m-auto">
      <h3 className="text-4xl mt-[32px] text-center mb-8 pt-5 text-slate-800 font-sacramento">
        Wall of Love
      </h3>
      <div className="px-[2rem] mt-[32px]">
        {messages.length > 0 &&
          messages.map((item: Message) => {
            return <WallOfLove message={item} key={item.id} />;
          })}
        <div className="text-center my-4">
          {messages.length < count && (
            <button
              type="button"
              className="bg-olive shadow-lg  hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white"
              onClick={handleLoadMore}
            >
              Selanjutnya
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WallOfLovePage;
