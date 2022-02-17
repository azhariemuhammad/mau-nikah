import { useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

import divider from '@/public/icons/divider.svg';

import styles from '@/styles/Home.module.css';
import MetaHeadComponent from '@/components/MetaHead';

import CountdownTimer from '@/components/CountdownTimer';
import WelcomePage from '@/components/WelcomePage';

import Footer from '@/components/Footer';
import TopBannerRose from '@/components/TopBanner/Rose';
import Opening from '@/components/Opening';
import Surah from '@/components/Surah';
import { WeddData } from '../interface';
import BrideInfo from '@/components/BrideInfo';
import RundownComponent from '@/components/Rundown';
import Gallery from '@/components/Gallery';
import BrideRelativesInfo from '@/components/BrideRelativesInfo';
import TopBannerPistachio from '@/components/TopBanner/Pistachio';

const RoseContainer = ({ weddData }: WeddData) => {
  const cardVariants: Variants = {
    offscreen: {
      x: 1000,
    },
    onscreen: {
      x: 0,
      rotate: -10,
      transition: { duration: 1, type: 'tween' },
      // transition: {
      //   type: 'spring',
      //   bounce: 0.4,
      //   duration: 0.8,
      // },
    },
  };

  const eventDate = '02/12/2022';

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

  return (
    <>
      <TopBannerRose
        audioUrl={audio_url}
        nicknameWomen={nickname_women}
        nicknameMan={nickname_man}
      />

      <div className="bg-[#FEF5ED] max-w-[640px] m-auto">
        <div className={styles.container}>
          <main>
            <Opening />

            <div className="py-8 flex flex-col text-center">
              <BrideInfo
                fullnameMan={fullname_man}
                fullnameWomen={fullname_women}
                fatherNameMan={father_name_man}
                fatherNameWomen={father_name_women}
                motherNameMan={mother_name_man}
                motherNameWomen={mother_name_women}
              />
              {/* <div className="my-8">
                <Image width={200} height={100} src={divider} />
                <p className="text-2xl mt-2 text-pink-800 font-bold">Sabtu</p>
                <p className="text-1xl text-pink-800 font-bold">
                  12 Februari 2022
                </p>
              </div> */}
              <CountdownTimer eventDate={eventDate} />
              <div className="my-8">
                <p>
                  Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
                  Bapak/Ibu/Saudara/i berkenan hadir dan memberikan Doa restu
                  kepada kedua mempelai
                </p>
              </div>
            </div>

            <Surah />

            <RundownComponent rundown={weddData.rundowns} />

            <BrideRelativesInfo
              manRelative={weddData.man_relatives}
              womenRelative={weddData.women_relatives}
            />
            <Gallery photos={photos} />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default RoseContainer;
