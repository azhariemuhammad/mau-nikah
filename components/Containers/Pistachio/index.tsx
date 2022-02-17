import { WeddData } from '../interface';
import TopBannerPistachio from '@/components/TopBanner/Pistachio';
import styles from '@/styles/Home.module.css';
import CountdownTimer from '@/components/CountdownTimer';
import Opening from '@/components/Opening';
import BrideInfo from '@/components/BrideInfo';
import Surah from '@/components/Surah';

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
  } = weddData || {};

  const eventDate = '02/26/2022';
  return (
    <>
      <TopBannerPistachio
        audioUrl={audio_url}
        nicknameWomen={nickname_women}
        nicknameMan={nickname_man}
      />
      <div className="bg-[#FEF5ED] max-w-[640px] m-auto">
        <div className={styles.container}>
          <main className="text-center">
            <div className="text-center pt-[3rem]">
              <p className="text-3xl  font-bold font-sacramento">
                {nickname_man} &amp; {nickname_women}
              </p>
            </div>
            <div className="pt-[2rem]">
              <p className="font-bold italic">Undangan pernikahan</p>
              <p className="font-bold italic">Sabtu, 26 Februari 2022</p>
            </div>
            <div className="mt-[30px]">
              <button className="rounded-md p-2 text-white bg-[#99A799]">
                Save the Date
              </button>
            </div>

            <CountdownTimer eventDate={eventDate} bgColor="olive" />
            <Opening />
            <BrideInfo
              fullnameMan={fullname_man}
              fullnameWomen={fullname_women}
              fatherNameMan={father_name_man}
              fatherNameWomen={father_name_women}
              motherNameMan={mother_name_man}
              motherNameWomen={mother_name_women}
            />
          </main>
        </div>
      </div>
      <div className="text-center p-8 bg-olive">
        <p>
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
          Bapak/Ibu/Saudara/i berkenan hadir dan memberikan Doa restu kepada
          kedua mempelai
        </p>
      </div>
      {/* <Surah /> */}
    </>
  );
};

export default PistachioContainer;
