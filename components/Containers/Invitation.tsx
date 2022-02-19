import { useState, useEffect } from 'react';
import AOS from 'aos';

import MetaHeadComponent from '@/components/MetaHead';

import WelcomePage from '@/components/WelcomePage';

import { WeddData } from './interface';
import RoseContainer from './Rose';
import PistachioContainer from './Pistachio';

const Invitation = ({ weddData }: WeddData) => {
  const [isOpenModal, setOpenModal] = useState(false);

  const { nickname_women, nickname_man, slug, theme } = weddData || {};

  const handleOpenInvitation = () => {
    setOpenModal(true);
  };

  useEffect(() => {
    AOS.init();
  }, [AOS]);

  return (
    <>
      <MetaHeadComponent meta={weddData.meta} slug={slug} />

      <WelcomePage
        isOpen={isOpenModal}
        handleOpenInvitation={handleOpenInvitation}
        meta={weddData.meta}
        nicknameMan={nickname_man}
        nicknameWomen={nickname_women}
        slug={slug}
      />
      {theme === 'pistachio' && (
        <PistachioContainer weddData={weddData} isOpenModal={isOpenModal} />
      )}
      {theme === 'rose' && <RoseContainer weddData={weddData} />}
    </>
  );
};

export default Invitation;
