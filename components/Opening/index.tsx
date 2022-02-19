import type { NextPage } from 'next';
import Image from 'next/image';

import styles from '@/styles/Home.module.css';
import basmallah from '@/public/images/basmallah.png';

const Opening: NextPage = () => {
  return (
    <div className="py-8 flex flex-col text-center justify-center">
      <div className={styles.basmallah}>
        <Image src={basmallah} alt="basmallah" />
      </div>
      <p>Assalamu&apos;alaikum Wr. Wb.</p>

      <br />
      <p>
        Atas nama Allah SWT yang Maha Pengasih dan Maha Penyayang, kami dengan
        senang hati untuk mengundang anda dan berbagi kegembiraan di pernikahan
        kami
      </p>
    </div>
  );
};

export default Opening;
