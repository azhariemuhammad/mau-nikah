import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import wedding from '../public/images/wedding-1.jpg';
import basmallah from '../public/images/basmallah.png';
import styles from '../styles/Home.module.css';

const Invitation: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Tangerine&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Gentium+Basic&family=Tangerine&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.container}>
        <main>
          <div className="mb-8">
            <Image
              alt="Mountains"
              src={wedding}
              layout="fill"
              objectFit="cover"
            />
            <div className="relative">
              <div className="grid place-content-center h-screen">
                <h3 className="text-3xl text-center font-gentium ">
                  Undangan Pernikahan
                </h3>
                <h1 className="text-7xl text-white text-center font-tangerine">
                  Fira &amp; Alif
                </h1>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col text-center justify-center">
            <div className={styles.basmallah}>
              <Image src={basmallah} alt="basmallah" />
            </div>
            <p>Assalamu'alaikum Wr. Wb.</p>
            <br />
            <p>
              Atas nama Allah SWT yang Maha Pengasih dan Maha Penyayang, kami
              dengan senang hati untuk mengundang anda dan berbagi kegembiraan
              di pernikahan kami
            </p>
          </div>
        </main>
      </div>
    </>
  );
};

export default Invitation;
