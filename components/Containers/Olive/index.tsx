import Image from 'next/image';
import dayjs from 'dayjs';

import { Rundown, WeddData } from '@/components/Containers/interface';
import TopBannerPistachio from '@/components/TopBanner/Pistachio';
import styles from '@/styles/Home.module.css';
import CountdownTimer from '@/components/CountdownTimer';
import Opening from '@/components/Opening';
import Surah from '@/components/Surah';
import BrideInfo from '@/components/BrideInfo';
import RundownComponent from '@/components/Rundown';
import Gallery from '@/components/Gallery';
import BrideRelativesInfo from '@/components/BrideRelativesInfo';
import TandaKasihComponent from '@/components/TandaKasih';
import { useMemo } from 'react';
import { locale } from 'locale';
import ContainerWallOfLove from '@/components/WallOfLove/Container';
import Footer from '@/components/Footer';
import TopInfo from '@/components/TopInfo';
import PageImage from '@/public/images/page-image.png';

dayjs.locale(locale as ILocale);

const OliveContainer = ({ weddData, isOpenModal }: WeddData) => {
  const {
    fullname_man,
    fullname_women,
    father_name_man,
    father_name_women,
    mother_name_women,
    mother_name_man,
    photos,
    nickname_women,
    nickname_man,
    slug,
    audio_url,
    bride_main_banner,
    avatar_men,
    avatar_women,
    rundowns,
    id,
  } = weddData || {};

  const mainEventDate = useMemo(() => {
    if (rundowns.length) {
      const mainEvent = rundowns.find((item) => item.is_main_event == true);
      return mainEvent as Rundown;
    }
    return {} as Rundown;
  }, [rundowns]);

  return (
    <>
      <div className="z-10">
        <TopBannerPistachio
          audioUrl={audio_url}
          mainBanner={bride_main_banner}
          nicknameWomen={nickname_women}
          nicknameMan={nickname_man}
          isOpenModal={isOpenModal || false}
        />
      </div>
      {/* <div className="relative"> */}
      <div className="fixed top-0 h-screen w-full">
        <Image src={PageImage} alt="page image" layout="fill" />
      </div>
      {/* </div> */}
      <div className="bg-base-100 max-w-[640px] m-auto">
        <div className={styles.container}>
          <main className="text-center z-10 relative">
            <TopInfo
              nicknameMan={nickname_man}
              nicknameWomen={nickname_women}
              mainEventDate={mainEventDate}
            />
            <div className="mt-[24px]">
              <CountdownTimer
                eventDate={mainEventDate.event_date_start}
                bgColor="primary"
              />
            </div>
            <Opening />
            <BrideInfo
              fullnameMan={fullname_man}
              fullnameWomen={fullname_women}
              fatherNameMan={father_name_man}
              fatherNameWomen={father_name_women}
              motherNameMan={mother_name_man}
              motherNameWomen={mother_name_women}
              avatarMen={avatar_men}
              avatarWomen={avatar_women}
              bgColor="oceanblue"
            />
            <div className="text-center p-8">
              <p data-aos="fade-up">
                Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
                Bapak/Ibu/Saudara/i berkenan hadir dan memberikan Doa restu
                kepada kedua mempelai
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="bg-base-100 max-w-[640px] m-auto z-10">
        <div className={styles.container}>
          <Surah bgColor="primary" />
          <RundownComponent rundown={weddData.rundowns} />

          <BrideRelativesInfo
            manRelative={weddData.man_relatives}
            womenRelative={weddData.women_relatives}
            bgColor="white"
          />
          <div className="my-[40px] relative">
            <Gallery photos={photos} />
          </div>
          <div className="my-[40px]">
            <TandaKasihComponent />
          </div>
          <h3 className="text-4xl text-center mb-8 pt-5 text-slate-800 font-sacramento">
            Wall of Love
          </h3>
          <ContainerWallOfLove weddingId={id} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OliveContainer;
