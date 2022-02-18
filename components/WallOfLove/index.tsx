import Image from 'next/image';
import LoveIcon from '@/public/icons/love.svg';

import styles from '@/styles/Home.module.css';

const WallOfLove = () => {
  return (
    <>
      <li className="text-sm leading-6 list-none">
        <div className={` ${styles.shadow__custom}`}>
          <div
            className="rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50"
            style={{ width: '50px', height: '48px', padding: '15px' }}
          >
            <div
              style={{ width: '20px', height: '20px', position: 'relative' }}
            >
              <Image
                layout="fill"
                objectFit="cover"
                alt="love icon"
                src={LoveIcon}
              />
            </div>
          </div>
          <div className="mt-2">
            <p className="text-md p-2">
              Happy Wedding Ma ...Sakinah Mawaddah...Warrohmah yaa
            </p>
          </div>
          <div className="mt-4">
            <p className="text-sm p-2">– James Godfrey, CFO, Cardamom</p>
          </div>
        </div>
      </li>
    </>
  );
};

export default WallOfLove;
