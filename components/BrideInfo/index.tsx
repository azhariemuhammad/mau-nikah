import LoaderLove from '@/components/Loader';

import styles from '@/styles/Home.module.css';
import Image from 'next/image';

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

  return (
    <>
      <div id="couple-1" data-aos="fade-right">
        {avatarWomen && (
          <div
            className={`w-full rounded-full shadow-md  max-w-[256px] ${styles.avatar__wrapper}`}
          >
            <Image
              src={avatarWomen}
              width={150}
              height={150}
              layout="responsive"
              className="rounded-full shadow-md"
            />
          </div>
        )}
        <div className="py-8" data-aos="fade-up">
          <p className={`text-2xl text-zinc-900 font-bold `}>{fullnameWomen}</p>
          <p className="text-sm text-zinc-500">Putri tercinta</p>
          <p className="text-md text-zinc-500">Bapak {fatherNameWomen}</p>
          <p className="text-md text-zinc-500">Ibu {motherNameWomen}</p>
        </div>
      </div>
      {/* <h3 className="text-5xl font-bold text-pink-800">

              </h3> */}
      <div className="mb-[2rem]">
        <LoaderLove bgColor="primary" />
      </div>
      <div id="couple-2" data-aos="fade-right">
        {avatarMen && (
          <div
            className={`w-full rounded-full shadow-md max-w-[256px] ${styles.avatar__wrapper}`}
          >
            <Image
              src={avatarMen}
              width={150}
              height={150}
              layout="responsive"
              className="rounded-full shadow-md"
            />
          </div>
        )}
        <div className="py-8" data-aos="fade-up">
          <p className="text-2xl font-bold text-zinc-900">{fullnameMan}</p>
          <p className="text-sm text-zinc-500">Putra tercinta</p>
          <p className="text-md text-zinc-500">Bapak {fatherNameMan}</p>
          <p className="text-md text-zinc-500">Ibu {motherNameMan}</p>
        </div>
      </div>
    </>
  );
};

export default BrideInfo;
