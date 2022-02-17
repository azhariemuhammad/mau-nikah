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
import { WeddData } from './interface';
import BrideInfo from '../BrideInfo';
import RundownComponent from '../Rundown';
import Gallery from '../Gallery';
import BrideRelativesInfo from '../BrideRelativesInfo';
import TopBannerPistachio from '../TopBanner/Pistachio';
import RoseContainer from './Rose';
import PistachioContainer from './Pistachio';

const Invitation = ({ weddData }: WeddData) => {
  const [hasOpen, setHasOpen] = useState(false);
  const [isOpenModal, setOpenModal] = useState(false);

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
    theme,
  } = weddData || {};

  const handleOpenInvitation = () => {
    setOpenModal(true);
    setTimeout(() => {
      setHasOpen(true);
    }, 550);
  };
  if (!hasOpen) {
    return (
      <WelcomePage
        isOpen={isOpenModal}
        handleOpenInvitation={handleOpenInvitation}
        meta={weddData.meta}
        slug={slug}
      />
    );
  }

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

  return (
    <>
      <MetaHeadComponent meta={weddData.meta} slug={slug} />
      {theme === 'rose' && <PistachioContainer weddData={weddData} />}
      {theme === 'pistachio' && <RoseContainer weddData={weddData} />}
    </>
  );
};

export default Invitation;
