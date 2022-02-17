import LoaderLove from '@/components/Loader';
import { motion, Variants } from 'framer-motion';
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
    bgColor,
  } = props;

  const cardVariants: Variants = {
    offscreen: {
      x: 1000,
    },
    onscreen: {
      x: 0,
      rotate: -10,
      transition: { duration: 0.7, type: 'tween' },
      // transition: {
      //   type: 'spring',
      //   bounce: 0.4,
      //   duration: 0.8,
      // },
    },
  };

  return (
    <>
      <div id="couple-1">
        {avatarWomen && (
          <motion.div
            className="card-container overflow-hidden relative"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.div
              variants={cardVariants}
              className={`w-full rounded-full max-w-[256px] ${styles.avatar__wrapper}`}
            >
              <Image
                src={avatarWomen}
                width={256}
                height={256}
                className="rounded-full"
              />
            </motion.div>
          </motion.div>
        )}
        <div className="py-8">
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
        <LoaderLove />
      </div>
      <div id="couple-2">
        {avatarMen && (
          <motion.div
            className="card-container overflow-hidden relative"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.div variants={cardVariants} className={`w-full`}>
              <Image
                src={avatarMen}
                width={256}
                height={256}
                className="rounded-full"
              />
            </motion.div>
          </motion.div>
        )}
        <div className="py-8">
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
