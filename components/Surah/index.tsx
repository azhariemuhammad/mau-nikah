interface Surah {
  bgColor: string;
}
const Surah = ({ bgColor }: Surah) => {
  return (
    <div className={`mx-[-30px] p-[2rem]  text-center bg-[${bgColor}]`}>
      <p className="pb-8 text-sm">
        Dan di antara tanda-tanda kekuasaan-Nya lah Dia menciptakan untukmu
        istri-istri dari jenismu sendiri, supaya kamu cenderung dan merasa
        tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang.
        Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda
        bagi kaum yang berfikir.
      </p>
      <p className="text-sm text-bold">QS Ar-Rum:21</p>
    </div>
  );
};

Surah.defaultProps = {
  bgColor: '#FEECE9',
};

export default Surah;
