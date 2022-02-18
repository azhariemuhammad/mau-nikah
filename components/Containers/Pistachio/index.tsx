import dayjs from 'dayjs';
import AOS from 'aos';

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
import { useEffect, useMemo } from 'react';
import { locale } from 'locale';

dayjs.locale(locale as ILocale);

const PistachioContainer = ({ weddData }: WeddData) => {
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
  } = weddData || {};

  // const eventDate = '02/26/2022';

  useEffect(() => {
    AOS.init();
  }, []);

  const mainEventDate = useMemo(() => {
    if (rundowns.length) {
      const mainEvent = rundowns.find((item) => item.is_main_event == true);
      console.log({ mainEvent });
      return mainEvent as Rundown;
    }
    return {} as Rundown;
  }, [rundowns]);
  return (
    <>
      <TopBannerPistachio
        audioUrl={audio_url}
        mainBanner={bride_main_banner}
        nicknameWomen={nickname_women}
        nicknameMan={nickname_man}
      />
      <div className="bg-[#ffff] max-w-[640px] m-auto">
        <div className={styles.container}>
          <main className="text-center">
            <div className="text-center pt-[3rem]">
              <p className="text-3xl  font-bold font-reey">
                {nickname_man} &amp; {nickname_women}
              </p>
            </div>
            <div className="pt-[2rem]">
              <p className="font-bold italic">Undangan pernikahan</p>
              <p className="font-bold italic">
                {dayjs(mainEventDate.event_date_start).format(
                  'dddd, DD MMMM YYYY'
                )}
              </p>
            </div>
            <div className="mt-[30px]">
              <button className="rounded-md p-2 text-white bg-oceanblue">
                Save the Date
              </button>
            </div>
            <div className="mt-[24px]">
              <CountdownTimer
                eventDate={mainEventDate.event_date_start}
                bgColor="oceanblue"
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
          </main>
        </div>
      </div>
      <div className="text-center p-8">
        <p data-aos="fade-up">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
          Bapak/Ibu/Saudara/i berkenan hadir dan memberikan Doa restu kepada
          kedua mempelai
        </p>
      </div>
      <div className="bg-[#ffff] max-w-[640px] m-auto">
        <div className={styles.container}>
          <Surah bgColor="oceanblue" />
          <RundownComponent rundown={weddData.rundowns} />

          <BrideRelativesInfo
            manRelative={weddData.man_relatives}
            womenRelative={weddData.women_relatives}
          />
          <div className="my-[40px]">
            <Gallery photos={photos} />
          </div>
          <div className="my-[40px]">
            <TandaKasihComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default PistachioContainer;
