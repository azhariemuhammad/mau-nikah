import Image from 'next/image';

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
  return (
    <>
      <div className="relative z-10 w-full h-[475px]">
        <Image
          alt="Mountains"
          src={mainBanner}
          layout="fill"
          objectFit="cover"
        />
        {isOpenModal && <AudioPlayer audioUrl={audioUrl} />}
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
