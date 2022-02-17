import type { NextPage } from 'next';
import Image from 'next/image';

import styles from '@/styles/Home.module.css';
import AudioPlayer from '@/components/AudioPlayer';

export interface TopBannerProps {
  nicknameWomen: string;
  nicknameMan: string;
  audioUrl: string;
}
const TopBannerPistachio = ({
  nicknameWomen,
  nicknameMan,
  audioUrl,
}: TopBannerProps) => {
  return (
    <>
      <div className="bg-red">
        <div style={{ width: '100%', height: '255px', position: 'relative' }}>
          <Image
            alt="Mountains"
            src="https://user-images.githubusercontent.com/19600009/151729257-580369ee-d3f2-4bfc-a98d-28f26600654f.jpg"
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
