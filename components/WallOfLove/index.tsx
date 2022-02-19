import dayjs from 'dayjs';
import Image from 'next/image';
import LoveIcon from '@/public/icons/love.svg';
import { Message } from '@/components/Containers/interface';
import styles from '@/styles/Home.module.css';
import { locale } from 'locale';
// import { randomIntFromRange } from 'helpers/randomNumberRange';

dayjs.locale(locale as ILocale);

interface WallOfLoveProps {
  message: Message;
}

const WallOfLove = ({ message }: WallOfLoveProps) => {
  return (
    <>
      <li className="text-sm mb-2 leading-6 list-none" data-aos="fade-bottom">
        <div className={` ${styles.shadow__custom}`}>
          <div className="flex">
            <div
              className={`rounded-full bg-sky-500 shadow-lg shadow-sky-500/50`}
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
            <div className="pl-2">
              <p className="text-lg font-bold">{message.sender}</p>
              <p className="text-sm">{message.sender_description}</p>
            </div>
          </div>
          <div className="mt-2">
            <p className="text-lg p-2">{message.message}</p>
          </div>
          <div className="mt-2">
            <p className="text-sm p-2">
              {dayjs(message.created_at).format('dddd, DD MMMM YYYY')}
            </p>
          </div>
        </div>
      </li>
    </>
  );
};

export default WallOfLove;
