import { useState } from 'react';
import type { NextPage } from 'next';
import MetaHeadComponent from '@/components/MetaHead';
import Invitation from '@/components/Containers/Invitation';

const InvitationPage: NextPage = () => {
  return (
    <>
      <MetaHeadComponent />
      <Invitation />
    </>
  );
};

export default InvitationPage;
