import Image from 'next/image';

import AudioPlayer from '@/components/AudioPlayer';

export interface TopBannerProps {
  audioUrl: string;
  mainBanner: string;
  isOpenModal: boolean;
}
const TopBannerFlower = ({
  audioUrl,
  mainBanner,
  isOpenModal,
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
          {isOpenModal && <AudioPlayer audioUrl={audioUrl} />}
        </div>
      </div>
    </>
  );
};

TopBannerFlower.defaultProps = {
  nicknameWomen: '',
  nicknameMan: '',
  audioUrl: '',
};

export default TopBannerFlower;
