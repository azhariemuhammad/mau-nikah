import type { NextPage } from 'next';
import Image from 'next/image';

import styles from '@/styles/Home.module.css';
import AudioPlayer from '@/components/AudioPlayer';

export interface TopBannerProps {
  nicknameWomen: string;
  nicknameMan: string;
  audioUrl: string;
  mainBanner: string;
}
const TopBannerPistachio = ({
  nicknameWomen,
  nicknameMan,
  audioUrl,
  mainBanner,
}: TopBannerProps) => {
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
          <AudioPlayer audioUrl={audioUrl} />
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