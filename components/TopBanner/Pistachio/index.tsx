import type { NextPage } from 'next';
import Image from 'next/image';

import styles from '@/styles/Home.module.css';
import AudioPlayer from '@/components/AudioPlayer';

export interface TopBannerProps {
  audioUrl: string;
  mainBanner: string;
  isOpenModal: boolean;
}
const TopBannerPistachio = ({
  audioUrl,
  mainBanner,
  isOpenModal,
}: TopBannerProps) => {
  console.log({ isOpenModal });
  return (
    <>
      <div className="bg-red">
        <div style={{ width: '100%', height: '475px', position: 'relative' }}>
          <Image
            alt="Mountains"
            src={mainBanner}
            layout="fill"
            objectFit="cover"
          />
          {isOpenModal && <AudioPlayer audioUrl={audioUrl} />}
        </div>
      </div>
    </>
  );
};

TopBannerPistachio.defaultProps = {
  nicknameWomen: '',
  nicknameMan: '',
  audioUrl: '',
};

export default TopBannerPistachio;
