import dayjs from 'dayjs';
import { motion, Variants } from 'framer-motion';
import { Rundown } from '@/components/Containers/interface';
import styles from '@/styles/Home.module.css';
import { locale } from 'locale';

dayjs.locale(locale as ILocale);

interface RundownList {
  rundown: Array<Rundown>;
}
interface Event {
  eventName: string;
  eventDateStart: string;
  eventDateEnd: string;
  pinPoint: string;
  address: string;
}
const EventDetail = (props: Event) => {
  const { eventName, eventDateStart, eventDateEnd, pinPoint, address } = props;
  console.log({ eventDateStart });
  return (
    <>
      <div className="py-1">
        <h5 className="font-bold text-pink-800">{eventName}</h5>
        <p>{dayjs(eventDateStart).format('DD MMMM YYYY')}</p>
        <p>
          {dayjs(eventDateStart).format('HH:mm')} -{' '}
          {`${eventDateEnd ? dayjs(eventDateEnd).format('HH:mm') : 'Selesai'}`}
        </p>
      </div>
      <div className="my-5">
        <p className="text-sm">TEMPAT</p>
        <p>{address}</p>
      </div>
      <div className="my-4">
        <a
          href={pinPoint}
          className="btn bg-oceanblue rounded text-white font-bold py-2 px-4 mb-2 hover:bg-rose-700"
        >
          Lihat Lokasi
        </a>
      </div>
    </>
  );
};

const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
  },
};

const RundownComponent = ({ rundown }: RundownList) => {
  if (!rundown.length) return null;
  return (
    <div id="schedule" className="text-center py-8">
      <h3 className="text-4xl mb-2 text-pink-800 font-sacramento">Acara</h3>
      {rundown.map((item, key) => (
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 'all' }}
          key={key}
        >
          <motion.div
            variants={cardVariants}
            animate={{ scale: [1.2, 1] }}
            key={key}
          >
            <div className={`${styles.shadow__custom} mb-4`}>
              <EventDetail
                key={key}
                eventName={item.event_name}
                eventDateStart={item.event_date_start}
                eventDateEnd={item.event_date_end}
                pinPoint={item.pin_point}
                address={item.address}
              />
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default RundownComponent;
