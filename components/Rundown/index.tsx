import { Rundown } from '../Containers/interface';

interface RundownList {
  rundown: Array<Rundown>;
}
interface Event {
  eventName: string;
  eventDate: string;
  eventTimeStart: string;
  eventTimeEnd: string;
  pinPoint: string;
  address: string;
}
const EventDetail = (props: Event) => {
  const {
    eventName,
    eventDate,
    eventTimeStart,
    eventTimeEnd,
    pinPoint,
    address,
  } = props;
  return (
    <>
      <div className="py-5">
        <h5 className="font-bold text-pink-800">{eventName}</h5>
        <p>{eventDate}</p>
        <p>
          {eventTimeStart} - {`${eventTimeEnd ? eventTimeEnd : 'Selesai'}`}
        </p>
      </div>
      <div className="py-5">
        <h5 className="font-bold text-pink-800">TEMPAT</h5>
        <p>{address}</p>
      </div>
      <div>
        <a
          href={pinPoint}
          className="btn bg-rose-800 rounded text-white font-bold py-2 px-4  hover:bg-rose-700"
        >
          Lihat Lokasi
        </a>
      </div>
    </>
  );
};

const RundownComponent = ({ rundown }: RundownList) => {
  if (!rundown.length) return null;
  return (
    <div id="schedule" className="text-center py-8">
      <h3 className="text-4xl text-pink-800 font-sacramento">Acara</h3>
      {rundown.map((item, key) => (
        <EventDetail
          key={key}
          eventName={item.event_name}
          eventDate={item.event_date}
          eventTimeStart={item.event_time_start}
          eventTimeEnd={item.event_time_end}
          pinPoint={item.pin_point}
          address={item.address}
        />
      ))}
    </div>
  );
};

export default RundownComponent;
