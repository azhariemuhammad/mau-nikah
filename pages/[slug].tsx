import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import wedding from '../public/images/wedding-1.jpg';
import basmallah from '../public/images/basmallah.png';
import arrum1 from '../public/images/arrum1.png';
import avatar from '../public/images/avatar.jpg';
import avatar1 from '../public/images/avatar-1.jpg';
import qrcode from '../public/images/qrcode.jpeg';
import styles from '../styles/Home.module.css';
import { Carousel, Slide } from '../components/Carousel';
import CountdownTimer from '../components/CountdownTimer';
import WelcomePage from '../components/WelcomePage';

const Invitation: NextPage = () => {
  const [hasOpen, setHasOpen] = useState(false);
  const [isOpenModal, setOpenModal] = useState(false);

  const handleOpenInvitation = () => {
    setOpenModal(true);
    setTimeout(() => {
      setHasOpen(true);
    }, 600);
  };
  if (!hasOpen) {
    return (
      <WelcomePage
        isOpen={isOpenModal}
        guestName="Ami"
        handleOpenInvitation={handleOpenInvitation}
      />
    );
  }

  return (
    <>
      <div className="bg-[#fff] max-w-[640px] m-auto">
        <div className={styles.container}>
          <main>
            <div className="mb-8">
              <Image
                alt="Mountains"
                src={wedding}
                layout="fill"
                objectFit="cover"
              />
              <div className="relative mx-[-30px]">
                <div className={styles.background__flower}>
                  <div className="grid place-content-center h-screen">
                    <h1 className="text-5xl font-bold font-sacramento text-white text-center mt-5">
                      Musliha
                    </h1>
                    <h1 className="text-5xl font-bold font-sacramento text-white text-center">
                      &amp;
                    </h1>
                    <h1 className="text-5xl font-bold font-sacramento text-white text-center">
                      Afwan
                    </h1>

                    <br />

                    <br />
                    <br />
                    <div className="mt-8">
                      <h3 className="text-3xl font-bold text-center text-pink-800 font-sacramento  mt-9">
                        Undangan Pernikahan
                      </h3>

                      <h5 className="text-center font-bold text-white">
                        Sabtu, 12 Februari 2022
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-8 flex flex-col text-center justify-center">
              <div className={styles.basmallah}>
                <Image src={basmallah} alt="basmallah" />
              </div>
              <p>Assalamu&apos;alaikum Wr. Wb.</p>

              <br />
              <p>
                Atas nama Allah SWT yang Maha Pengasih dan Maha Penyayang, kami
                dengan senang hati untuk mengundang anda dan berbagi kegembiraan
                di pernikahan kami
              </p>
            </div>

            <div className="my-8 flex flex-col text-center">
              <div id="couple-1">
                <div
                  className={`w-full rounded-full max-w-[256px] ${styles.avatar__wrapper}`}
                >
                  <Image src={avatar} width={256} height={256} />
                </div>
                <div className="my-8">
                  <i className="text-4xl text-pink-800 font-bold font-tangerine">
                    Putri Ancona
                  </i>
                  <p className="text-sm">Putri tercinta</p>
                  <p className="text-md">Bapak M. Nur Marassabey</p>
                  <p className="text-md">Ibu Halija bin Wael</p>
                </div>
              </div>
              <div id="couple-2">
                <div
                  className={`w-full rounded-full max-w-[256px] ${styles.avatar__wrapper}`}
                >
                  <Image src={avatar1} width={256} height={256} />
                </div>
                <div className="my-8">
                  <i className="text-4xl font-bold font-tangerine text-pink-800">
                    Syamsudin
                  </i>
                  <p className="text-sm">Putra tercinta</p>
                  <p className="text-md">Bapak M. Nur Marassabey</p>
                  <p className="text-md">Ibu Halija bin Wael</p>
                </div>
              </div>
              <div className="my-8">
                <p>Sabtu</p>
                <p>15 Januari 2022</p>
              </div>
              <div className="py-5">
                <CountdownTimer />
              </div>
              <div className="my-8">
                <p>
                  Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
                  Bapak/Ibu/Saudara/i berkenan hadir dan memberikan Doa restu
                  kepada kedua mempelai
                </p>
              </div>
            </div>

            <div className="mx-[-30px] p-[2rem]  text-center bg-[#FEECE9]">
              <p className="pb-8 text-sm">
                Dan di antara tanda-tanda kekuasaan-Nya lah Dia menciptakan
                untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung
                dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa
                kasih dan sayang. Sesungguhnya pada yang demikian itu
                benar-benar terdapat tanda-tanda bagi kaum yang berfikir.
              </p>
              <p className="text-sm text-bold">Surat Ar-Rum Ayat 21</p>
            </div>

            <div id="schedule" className="text-center py-8">
              <h3 className="text-5xl text-pink-800 font-sacramento">Acara</h3>
              <div className="py-5">
                <h5 className="font-bold text-pink-800">AKAD NIKAH</h5>
                <p>15 Januari 2022</p>
                <p>09.00 - 10.00</p>
              </div>
              <div className="py-5">
                <h5 className="font-bold text-pink-800">RESEPSI</h5>
                <p>15 Januari 2022</p>
                <p>11.00 - Selesai</p>
              </div>
              <div className="py-5">
                <h5 className="font-bold text-pink-800">
                  KEDIAMAN MEMPELAI WANITA
                </h5>
                <p>
                  Juanda, Jalan Gotong Royong RT 04 RW 14 No.65-Komplek H. Amir
                  Cisalak, Sukmajaya Depok - Jawa Barat{' '}
                </p>
              </div>
              <div>
                <button className="bg-rose-800 rounded text-white font-bold py-2 px-4  hover:bg-rose-700">
                  Lihat Lokasi
                </button>
              </div>
            </div>

            <div className="mx-[-30px] px-[2rem] text-center bg-[#FEECE9]">
              <div className="py-5">
                <h3 className="text-5xl mb-8 text-pink-800 font-sacramento">
                  Turut Mengundang
                </h3>
                <h5>KELUARGA MEMPELAI LAKI-LAKI</h5>
                <p>Keluarga besar Alm. H Sayid Muchsin Alhamid</p>
                <p>Keluarga besar Polpoke</p>
              </div>
              <div className="py-5">
                <h5>KELUARGA MEMPELAI PEREMPUAN</h5>
                <p>Keluarga besar Alm. H Sayid Muchsin Alhamid</p>
                <p>Keluarga besar Polpoke</p>
              </div>
            </div>
            <br />
            <br />

            <div className="text-center">
              <h3 className="text-5xl mb-8 pt-5 text-pink-800 font-sacramento">
                Gallery
              </h3>

              <Carousel options={{ autoplay: 2000 }}>
                <Slide>
                  <Image src={wedding} alt="avatar" />
                </Slide>
                <Slide>
                  <Image src={avatar1} alt="avatar" />
                </Slide>
                <Slide>
                  <Image src={avatar} alt="avatar" />
                </Slide>
              </Carousel>
            </div>

            <div id="tanda-kasih" className="mt-4 text-center">
              <div className={styles.shadow__custom}>
                <h3 className="text-5xl mb-8 pt-5 text-pink-800 font-sacramento">
                  Tanda Kasih
                </h3>
                <p>
                  Kehadiran dan doa anda adalah hadiah terbaik untuk kami. Namun
                  jika memberi adalah suatu bentuk tanda kasih bagi anda, tombol
                  ini akan menjadi media terbaik yang bisa kami sediakan secara
                  virtual di masa pandemi.
                </p>
                <br />
                <p>Wassalamualaikum Warahmatullahi Wabarakatuh.</p>
              </div>
              <div className="mt-8">
                <Image src={qrcode} />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Invitation;
