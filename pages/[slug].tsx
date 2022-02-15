import { useCallback, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import useSWR from 'swr';

import { supabase } from '@/utils/supabaseClient';
import wedFetcher from '@/utils/wedFetch';
import MetaHeadComponent from '@/components/MetaHead';

import Invitation from '@/components/Containers/Invitation';

const InvitationPage: NextPage = () => {
  const router = useRouter();
  const slug = router?.query?.slug || '';
  console.log({ router });

  const { data: response, error } = useSWR(
    slug ? `/api/wedding/${slug}` : null,
    wedFetcher
  );
  const { data = [] } = response || {};
  console.log({ data, error });

  return (
    <>
      <MetaHeadComponent />
      {data.length && <Invitation weddData={data[0]} />}
    </>
  );
};

export default InvitationPage;
