import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import MetaHeadComponent from '@/components/MetaHead';
import Invitation from '@/components/Containers/Invitation';

const InvitationPage: NextPage = () => {
  const router = useRouter();
  console.log({ router });

  // useEffect(() => {
  //   if (router.query.slug !== 'afwanfatma') {
  //     router.push('/404');
  //   }
  // }, [router.query.slug]);
  return (
    <>
      <MetaHeadComponent />
      <Invitation />
    </>
  );
};

export default InvitationPage;
