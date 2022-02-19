import LoaderLove from '@/components/Loader';

import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import AOS from 'aos';
import { useEffect } from 'react';

interface BrideInfo {
  fullnameMan: string;
  fullnameWomen: string;
  fatherNameMan: string;
  fatherNameWomen: string;
  motherNameMan: string;
  motherNameWomen: string;
  bgColor?: string;
  avatarMen: string;
  avatarWomen: string;
}
const BrideInfo = (props: BrideInfo) => {
  const {
    fullnameMan,
    fullnameWomen,
    fatherNameMan,
    fatherNameWomen,
    motherNameMan,
    motherNameWomen,
    avatarMen,
    avatarWomen,
  } = props;

  useEffect(() => {
    AOS.init();
  }, [AOS]);

  return (
    <>
      <div id="couple-1" data-aos="fade-right">
        {avatarWomen && (
          <div
            className={`w-full rounded-lg shadow-md  max-w-[256px] ${styles.avatar__wrapper}`}
          >
            <Image
              src={avatarWomen}
              width={150}
              height={150}
              layout="responsive"
              className="rounded-lg shadow-md"
            />
          </div>
        )}
        <div className="py-8" data-aos="fade-up">
          <i className={`text-3xl text-zinc-900 font-bold font-sacramento`}>
            {fullnameWomen}
          </i>
          <p className="text-sm">Putri tercinta</p>
          <p className="text-md">Bapak {fatherNameWomen}</p>
          <p className="text-md">Ibu {motherNameWomen}</p>
        </div>
      </div>
      {/* <h3 className="text-5xl font-bold text-pink-800">

              </h3> */}
      <div className="mb-[2rem]">
        <LoaderLove bgColor="oceanblue" />
      </div>
      <div id="couple-2" data-aos="fade-right">
        {avatarMen && (
          <div
            className={`w-full rounded-lg shadow-md max-w-[256px] ${styles.avatar__wrapper}`}
          >
            <Image
              src={avatarMen}
              width={150}
              height={150}
              layout="responsive"
              className="rounded-lg shadow-md"
            />
          </div>
        )}
        <div className="py-8" data-aos="fade-up">
          <i className="text-3xl font-bold font-sacramento text-zinc-900">
            {fullnameMan}
          </i>
          <p className="text-sm">Putra tercinta</p>
          <p className="text-md">Bapak {fatherNameMan}</p>
          <p className="text-md">Ibu {motherNameMan}</p>
        </div>
      </div>
    </>
  );
};

export default BrideInfo;
