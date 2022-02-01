import { useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

import wedding from '@/public/images/wedding-1.jpg';
import basmallah from '@/public/images/basmallah.png';
import avatar from '@/public/images/avatar.jpg';
import divider from '@/public/icons/divider.svg';
import avatar1 from '@/public/images/avatar-1.jpg';
import qrcode from '@/public/images/qrcode.jpeg';
import styles from '@/styles/Home.module.css';
import MetaHeadComponent from '@/components/MetaHead';
import { Carousel, Slide } from '@/components/Carousel';
import CountdownTimer from '@/components/CountdownTimer';
import WelcomePage from '@/components/WelcomePage';
import LoaderLove from '@/components/Loader';

const Invitation: NextPage = () => {
  const [hasOpen, setHasOpen] = useState(false);
  const [isOpenModal, setOpenModal] = useState(false);

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
      <MetaHeadComponent />

      <div className="bg-[#fff] max-w-[640px] m-auto">
        <div className={styles.container}>
          <main>
            <div className="mb-8 bg-red">
              <Image
                alt="Mountains"
                src="https://user-images.githubusercontent.com/19600009/151924036-f7e90cf6-955d-4c07-8a77-a8bb32a00bb3.jpg"
                layout="fill"
                objectFit="cover"
              />
              <div className="relative mx-[-30px]">
                <div className={styles.background__flower}>
                  <div className="grid place-content-center h-screen">
                    <h1 className="text-5xl font-bold font-sacramento text-white text-center mt-7">
                      Fatma
                    </h1>
                    <h1 className="text-5xl font-bold font-sacramento text-white text-center">
                      &amp;
                    </h1>
                    <h1 className="text-5xl font-bold font-sacramento text-white text-center">
                      Afwan
                    </h1>

                    <div className="relative mt-8 bottom-[-60%]">
                      <h3 className="text-3xl font-bold text-center text-pink-800 font-sacramento">
                        Undangan Pernikahan
                      </h3>

                      <h5 className="text-center mt-1 text-2xl font-bold text-white">
                        Sabtu, 12 Februari 2022
                      </h5>
                      <div className="flex justify-center">
                        <div className={styles.icon__arrows}>
                          <span></span>
                        </div>
                      </div>
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
                {/* <motion.div
                  className="card-container overflow-hidden relative"
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.8 }}
                >
                  <motion.div
                    variants={cardVariants}
                    className={`w-full rounded-full max-w-[256px] ${styles.avatar__wrapper}`}
                  >
                    <Image src={avatar} width={256} height={256} />
                  </motion.div>
                </motion.div> */}
                <div className="my-8">
                  <i className="text-3xl text-pink-800 font-bold font-tangerine">
                    Musliha Fatma Sanaky S.Pd
                  </i>
                  <p className="text-sm">Putri tercinta</p>
                  <p className="text-md">Bapak Abdul basir Sanaky</p>
                  <p className="text-md">Ibu Hayati Pelupessy</p>
                </div>
              </div>
              {/* <h3 className="text-5xl font-bold text-pink-800">

              </h3> */}
              <LoaderLove />
              <div id="couple-2">
                {/* <motion.div
                  className="card-container overflow-hidden relative"
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.8 }}
                >
                  <motion.div variants={cardVariants} className={`w-full`}>
                    
                  </motion.div>
                </motion.div> */}
                <div className="my-8">
                  <i className="text-3xl font-bold font-tangerine text-pink-800">
                    Afwan Ryan M Ely A.Md AK
                  </i>
                  <p className="text-sm">Putra tercinta</p>
                  <p className="text-md">Bapak Jakaria Ely</p>
                  <p className="text-md">Ibu Mujna Ollong</p>
                </div>
              </div>
              <div className="my-8">
                <Image width={200} height={100} src={divider} />
                <p className="text-2xl mt-2 text-pink-800 font-bold">Sabtu</p>
                <p className="text-1xl text-pink-800 font-bold">
                  12 Februari 2022
                </p>
              </div>
              <div className="py-5">
                {+new Date(eventDate) > +new Date() && (
                  <CountdownTimer eventDate={eventDate} />
                )}
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
              <p className="text-sm text-bold">QS Ar-Rum:21</p>
            </div>

            <div id="schedule" className="text-center py-8">
              <h3 className="text-4xl text-pink-800 font-sacramento">Acara</h3>
              <div className="py-5">
                <h5 className="font-bold text-pink-800">AKAD NIKAH</h5>
                <p>12 Februari 2022</p>
                <p>09.00 - 10.00</p>
              </div>
              <div className="py-5">
                <h5 className="font-bold text-pink-800">RESEPSI</h5>
                <p>12 Februari 2022</p>
                <p>11.00 - Selesai</p>
              </div>
              <div className="py-5">
                <h5 className="font-bold text-pink-800">TEMPAT</h5>
                <p>Kediaman mempelai pria</p>
                <p>Desa Hila</p>
              </div>
              <div>
                <a
                  href="https://maps.app.goo.gl/v9qr4x1G6hLWCoVB8"
                  className="btn bg-rose-800 rounded text-white font-bold py-2 px-4  hover:bg-rose-700"
                >
                  Lihat Lokasi
                </a>
              </div>
            </div>

            <div className="mx-[-30px] px-[2rem] text-center bg-[#FEECE9]">
              <div className="py-5">
                <h3 className="text-4xl mb-8 text-pink-800 font-sacramento">
                  Turut Mengundang
                </h3>
                <h5 className="text-pink-800">KELUARGA MEMPELAI LAKI-LAKI</h5>
                <p>Bpk Jakaria Ely dan istri Mujna ollong</p>
              </div>
              <div className="py-5">
                <h5 className="text-pink-800">KELUARGA MEMPELAI PEREMPUAN</h5>
                <p>Bpk Abdul basir Sanaky dan Istri Hayati Pelupessy</p>
              </div>
            </div>
            <br />
            <br />

            <div className="text-center">
              <h3 className="text-4xl mb-8 pt-5 text-pink-800 font-sacramento">
                Gallery
              </h3>

              <Carousel options={{ autoplay: 2000 }}>
                <Slide>
                  <Image
                    src="https://user-images.githubusercontent.com/19600009/151929852-57aac81a-0b64-44a6-bfa4-f7f298d6bc77.jpg"
                    alt="avatar"
                    layout="responsive"
                    width={100}
                    height={100}
                  />
                </Slide>
                <Slide>
                  <Image
                    src="https://user-images.githubusercontent.com/19600009/151729257-580369ee-d3f2-4bfc-a98d-28f26600654f.jpg"
                    alt="avatar"
                    layout="responsive"
                    width={100}
                    height={100}
                  />
                </Slide>
                <Slide>
                  <Image
                    src="https://user-images.githubusercontent.com/19600009/151794472-13fa3c1c-f856-4daf-81db-051c90c36af5.jpg"
                    alt="avatar"
                    layout="responsive"
                    width={100}
                    height={100}
                  />
                </Slide>
                <Slide>
                  <Image
                    src="https://user-images.githubusercontent.com/19600009/151794330-e881a4a1-6244-4db9-9cec-553138512eba.jpg"
                    alt="avatar"
                    layout="responsive"
                    width={100}
                    height={100}
                  />
                </Slide>
              </Carousel>
            </div>

            {/* <div id="tanda-kasih" className="mt-4 text-center">
              <div className={styles.shadow__custom}>
                <h3 className="text-4xl mb-8 pt-5 text-pink-800 font-sacramento">
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
            </div> */}
          </main>
        </div>
      </div>
    </>
  );
};

export default Invitation;
