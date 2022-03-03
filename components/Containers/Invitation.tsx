import { useState, useEffect } from 'react';
import AOS from 'aos';

import MetaHeadComponent from '@/components/MetaHead';

import WelcomePage from '@/components/WelcomePage';

import { WeddData } from './interface';
import RoseContainer from './Rose';
import OliveContainer from './Olive';

const Invitation = ({ weddData }: WeddData) => {
  const [isOpenModal, setOpenModal] = useState(false);

  const { nickname_women, nickname_man, slug, theme } = weddData || {};

  const handleOpenInvitation = () => {
    setOpenModal(true);
  };

  useEffect(() => {
    AOS.init();
  }, [AOS]);

  const curentTheme = theme === 'pistachio' ? 'olive' : 'rose';

  return (
    <>
      <MetaHeadComponent meta={weddData.meta} slug={slug} />
      <div data-theme={curentTheme}>
        <WelcomePage
          isOpen={isOpenModal}
          handleOpenInvitation={handleOpenInvitation}
          meta={weddData.meta}
          nicknameMan={nickname_man}
          nicknameWomen={nickname_women}
          slug={slug}
        />
      </div>
      {theme === 'pistachio' && (
        <div data-theme={curentTheme}>
          <OliveContainer weddData={weddData} isOpenModal={isOpenModal} />
        </div>
      )}
      {theme === 'rose' && (
        <div data-theme={curentTheme}>
          <RoseContainer weddData={weddData} />
        </div>
      )}
    </>
  );
};

export default Invitation;
