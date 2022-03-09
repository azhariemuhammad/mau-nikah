import dayjs from 'dayjs';

interface TopInfoProps {
  nicknameMan: string;
  nicknameWomen: string;
  mainEventDate: {
    event_date_start: string;
  };
}
const TopInfo = (props: TopInfoProps) => {
  const { nicknameMan, nicknameWomen, mainEventDate } = props;
  return (
    <>
      <div className="text-center mb-[2rem] pt-[3rem] z-10">
        <p className="text-3xl  font-bold font-reey">
          {nicknameMan} &amp; {nicknameWomen}
        </p>
      </div>
      <div className="pt-[2rem]">
        <p className="font-bold italic">Undangan pernikahan</p>
        <p className="font-bold italic">
          {dayjs(mainEventDate.event_date_start).format('dddd, DD MMMM YYYY')}
        </p>
      </div>
      <div className="mt-[30px]">
        <button className="rounded-md p-2 text-white bg-primary">
          Save the Date
        </button>
      </div>
    </>
  );
};

export default TopInfo;
