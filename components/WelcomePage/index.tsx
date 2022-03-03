import { capitalizeEachWord } from '@/utils/capitalizeEachWord';
import { useRouter } from 'next/router';
import { Meta } from '../Containers/interface';
import MetaHeadComponent from '../MetaHead';

import { useScrollBlock } from '@/hooks/useScrollBlock';
import styles from './welcome.module.css';

interface WelcomePage {
  isOpen: boolean;
  handleOpenInvitation: () => void;
  meta: Meta;
  slug: string;
  nicknameMan: string;
  nicknameWomen: string;
}
const WelcomePage = ({
  isOpen,
  meta,
  slug,
  handleOpenInvitation,
  nicknameWomen,
  nicknameMan,
}: WelcomePage) => {
  const [blockScroll, allowScroll] = useScrollBlock();
  if (isOpen) {
    allowScroll();
  } else {
    blockScroll();
  }

  const { query } = useRouter();

  const guest = (query?.to as string) || '';

  return (
    <>
      <MetaHeadComponent meta={meta} slug={slug} />

      <div
        className={`px-[2rem]  text-center grid h-[100vh] place-content-center ${
          styles.modal
        } ${isOpen ? styles.shown : ''}`}
      >
        <div className="absolute inset-x-0 bottom-20">
          <div className="mb-8">
            <h5 className="text-white">KEPADA BAPAK/IBU/SAUDARA/I</h5>
            <h5 className="text-bold text-white text-2xl mb-1">{guest}</h5>
            <p className="text-white">
              Dengan senang hati mengundang Anda untuk hadir di hari pernikahan
              kami
            </p>

            <h1 className="text-3xl font-bold font-reey text-white text-center mt-5">
              {nicknameWomen}
            </h1>
            <h1 className="text-3xl font-bold font-reey text-white text-center">
              &amp;
            </h1>
            <h1 className="text-3xl font-bold font-reey text-white text-center">
              {nicknameMan}
            </h1>
          </div>
          <div className="mt-8">
            <button
              className="rounded-full bg-primary text-white h-[40px] w-[170px]"
              onClick={handleOpenInvitation}
            >
              Buka Undangan
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default WelcomePage;
