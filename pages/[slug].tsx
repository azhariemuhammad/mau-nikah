import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import wedding from '../public/images/wedding-1.jpg';
import basmallah from '../public/images/basmallah.png';
import arrum1 from '../public/images/arrum1.png';
import avatar from '../public/images/avatar.jpg';
import avatar1 from '../public/images/avatar-1.jpg';
import avatar2 from '../public/images/avatar2.jpg';
import styles from '../styles/Home.module.css';

const Invitation: NextPage = () => {
  return (
    <>
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
                <h3 className="text-3xl text-center">Undangan Pernikahan</h3>
                <h1 className="text-7xl text-white text-center">
                  Fira &amp; Alif
                </h1>
                <h5 className="text-center text-white">
                  Sabtu, 15 Januari 2022
                </h5>
              </div>
            </div>
          </div>
          <div className="my-8 flex flex-col text-center justify-center">
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

          <div className="my-8 flex flex-col text-center">
            <div id="couple-1">
              <div
                className={`w-full rounded-full max-w-[256px] ${styles.avatar__wrapper}`}
              >
                <Image src={avatar} width={256} height={256} />
              </div>
              <div className="my-8">
                <i>Putri Ancona</i>
                <p>Bapak M. Nur Marassabey</p>
                <p>Ibu Halija bin Wael</p>
              </div>
            </div>
            <div id="couple-2">
              <div
                className={`w-full rounded-full max-w-[256px] ${styles.avatar__wrapper}`}
              >
                <Image src={avatar1} width={256} height={256} />
              </div>
              <div className="my-8">
                <i>Syamsudin</i>
                <p>Bapak M. Nur Marassabey</p>
                <p>Ibu Halija bin Wael</p>
              </div>
            </div>
            <div className="my-8">
              <p>Sabtu</p>
              <p>15 Januari 2022</p>
            </div>
            <div className="my-8">
              <p>
                Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
                Bapak/Ibu/Saudara/i berkenan hadir dan memberikan Doa restu
                kepada kedua mempelai
              </p>
            </div>
          </div>

          <div className="mx-[-30px] px-[2rem] text-center bg-[#818cf8]">
            <div className={`py-8 ${styles.arrum}`}>
              <Image src={arrum1} alt="surat ar rum" />
            </div>
            <p className="pb-8">
              Dan di antara tanda-tanda kekuasaan-Nya lah Dia menciptakan
              untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung
              dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa
              kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar
              terdapat tanda-tanda bagi kaum yang berfikir.
            </p>
          </div>

          <div id="schedule" className="text-center py-8">
            <h3 className="text-5xl">Acara</h3>
            <div className="py-5">
              <h5 className="font-bold">AKAD NIKAH</h5>
              <p>15 Januari 2022</p>
              <p>09.00 - 10.00</p>
            </div>
            <div className="py-5">
              <h5 className="font-bold">RESEPSI</h5>
              <p>15 Januari 2022</p>
              <p>11.00 - Selesai</p>
            </div>
            <div className="py-5">
              <h5 className="font-bold">KEDIAMAN MEMPELAI WANITA</h5>
              <p>
                Juanda, Jalan Gotong Royong RT 04 RW 14 No.65-Komplek H. Amir
                Cisalak, Sukmajaya Depok - Jawa Barat{' '}
              </p>
            </div>
            <div>
              <button className="bg-blue-500 rounded text-white font-bold py-2 px-4  hover:bg-blue-700">
                Lihat Lokasi
              </button>
            </div>
          </div>

          <div className="mx-[-30px] px-[2rem] text-center bg-[#818cf8]">
            <div className="py-5">
              <h3 className="text-5xl mb-8">Turut Mengundang</h3>
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

          <div className="grid grid-flow-row grid-cols-2 gap-8 mt-[40px]">
            <div className="transform scale-110 -rotate-6">
              <Image src={wedding} alt="avatar" />
            </div>
            <div className="transform scale-110 -rotate-2">
              <Image src={avatar1} alt="avatar" />
            </div>
            <div className="transform translate-y-24">
              <Image src={avatar} alt="avatar" />
            </div>
            <div className="transform scale-110 -rotate-6">
              <Image src={wedding} alt="avatar" />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Invitation;
