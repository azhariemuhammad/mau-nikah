import Image from 'next/image';

import styles from '@/styles/Home.module.css';
import AudioPlayer from '@/components/AudioPlayer';

export interface TopBannerRoseProps {
  nicknameWomen: string;
  nicknameMan: string;
  audioUrl: string;
}
const TopBannerRose = ({
  nicknameWomen,
  nicknameMan,
  audioUrl,
}: TopBannerRoseProps) => {
  return (
    <div className="bg-[#fff] max-w-[640px] m-auto">
      <div className={styles.container}>
        <div className="mb-8 bg-red">
          <Image
            alt="Mountains"
            src="https://user-images.githubusercontent.com/19600009/151924036-f7e90cf6-955d-4c07-8a77-a8bb32a00bb3.jpg"
            layout="fill"
            objectFit="cover"
          />
          <div className="relative mx-[-30px]">
            <div className={styles.background__flower}>
              <div className="grid place-content-center h-screen">
                <h1 className="text-5xl font-bold font-sacramento text-white text-center mt-7">
                  {nicknameWomen}
                </h1>
                <h1 className="text-5xl font-bold font-sacramento text-white text-center">
                  &amp;
                </h1>
                <h1 className="text-5xl font-bold font-sacramento text-white text-center">
                  {nicknameMan}
                </h1>

                <div className="relative mt-8 bottom-[-60%]">
                  <h3 className="text-3xl font-bold text-center text-pink-800 font-sacramento">
                    Undangan Pernikahan
                  </h3>

                  <h5 className="text-center mt-1 text-2xl font-bold text-white">
                    Sabtu, 12 Februari 2022
                  </h5>
                  <div className="flex justify-center">
                    <div className={styles.icon__arrows}>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {audioUrl && <AudioPlayer audioUrl={audioUrl} />}
          </div>
        </div>
      </div>
    </div>
  );
};

TopBannerRose.defaultProps = {
  nicknameWomen: '',
  nicknameMan: '',
  audioUrl: '',
};

export default TopBannerRose;
