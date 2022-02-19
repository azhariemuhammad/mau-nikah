import { capitalizeEachWord } from '@/utils/capitalizeEachWord';
import { normalizeRelatives } from 'helpers/normalizeRelatives';
import { useMemo } from 'react';

interface BrideRelatives {
  manRelative: Array<string>;
  womenRelative: Array<string>;
  bgColor: string;
}

interface Relative {
  id: number;
  relative: string;
}
const BrideRelativesInfo = (props: BrideRelatives) => {
  const manRelative = props.manRelative;
  const womenRelative = props.womenRelative;
  const manRelativeNormalized = useMemo(
    () => normalizeRelatives(manRelative || []) as Array<Relative>,
    [manRelative]
  );
  const womenRelativeNormalized = useMemo(
    () => normalizeRelatives(womenRelative || []) as Array<Relative>,
    [womenRelative]
  );

  return (
    <div className={`mx-[-30px] p-[2rem] text-center bg-${props.bgColor}`}>
      <div className="py-5">
        <h3 className="text-4xl mb-8 text-slate-800 font-sacramento">
          Turut Mengundang
        </h3>
        <h5 className="text-lime-800">KELUARGA MEMPELAI LAKI-LAKI</h5>
        {manRelativeNormalized.map((item) => (
          <p key={item.id} className="text-slate">
            {capitalizeEachWord(item.relative)}
          </p>
        ))}
      </div>
      <div className="py-5">
        <h5 className="text-lime-800">KELUARGA MEMPELAI PEREMPUAN</h5>
        {womenRelativeNormalized.map((item) => (
          <p key={item.id} className="text-slate">
            {capitalizeEachWord(item.relative)}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BrideRelativesInfo;
