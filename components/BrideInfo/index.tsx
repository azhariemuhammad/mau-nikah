import LoaderLove from '@/components/Loader';

interface BrideInfo {
  fullnameMan: string;
  fullnameWomen: string;
  fatherNameMan: string;
  fatherNameWomen: string;
  motherNameMan: string;
  motherNameWomen: string;
}
const BrideInfo = (props: BrideInfo) => {
  const {
    fullnameMan,
    fullnameWomen,
    fatherNameMan,
    fatherNameWomen,
    motherNameMan,
    motherNameWomen,
  } = props;
  return (
    <>
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
          <i className="text-3xl text-pink-800 font-bold font-sacramento">
            {fullnameWomen}
          </i>
          <p className="text-sm">Putri tercinta</p>
          <p className="text-md">Bapak {fatherNameWomen}</p>
          <p className="text-md">Ibu {motherNameWomen}</p>
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
          <i className="text-3xl font-bold font-sacramento text-pink-800">
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
