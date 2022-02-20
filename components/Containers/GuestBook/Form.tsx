import { ChangeEvent, ChangeEventHandler, useRef, useState } from 'react';
import styles from '@/styles/Home.module.css';
import { Message } from '@/components/Containers/interface';

interface SendingLoveProps {
  weddingId: number;
  onsubmit: (item: Message) => void;
}
const FormGuestBook = ({ weddingId, onsubmit }: SendingLoveProps) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [isBrideGuest, setIsBrideGuest] = useState(false);
  const [progress, setProgress] = useState('none');

  const handleOnchangeSender = (e: ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setName(e.target.value);
  };

  const handleOnchangeDesc = (e: ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setDescription(e.target.value);
  };
  const handleOnchangeMessage = (e: unknown) => {
    // @ts-ignore
    setMessage(e.target.value);
  };

  const handleSendingLove = async (e: any) => {
    e.preventDefault();

    const payload = {
      wedding_id: weddingId,
      sender_description: description,
      sender: name,
      message,
      is_brides_guest: isBrideGuest,
      is_grooms_guest: !isBrideGuest,
      is_attend: true,
    };
    setProgress('sending');
    onsubmit(payload);
  };

  const isDisabled = message.length < 3 || name.length < 3;
  return (
    <>
      <div className={`my-8 ${styles.shadow__custom}`}>
        <form>
          <div className="mt-2">
            <label className="block">
              <span className="block text-sm font-medium text-slate-700">
                Nama Tamu{' '}
                <span className="text-sm font-regular text-slate-400">
                  wajib diisi
                </span>
              </span>
              <input
                type="text"
                value={name}
                placeholder="Amri"
                onChange={handleOnchangeSender}
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
              />
            </label>
          </div>
          <div className="mt-6">
            <label className="block ">
              <span className="block text-sm font-medium text-slate-700">
                Sebagai
              </span>
              <input
                type="text"
                placeholder="Teman kantor"
                value={description}
                onChange={handleOnchangeDesc}
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
              />
            </label>
          </div>

          <div className="mt-6">
            <label className="block mt-2">
              <span className="block text-sm font-medium text-slate-700">
                Tamu dari:{' '}
                <span className="text-sm font-regular text-slate-400">
                  wajib diisi
                </span>
              </span>
              <div className="flex">
                <label
                  htmlFor="groom"
                  className="block text-sm p-2 font-bold text-slate-700"
                >
                  Mempelai Pria:
                </label>
                <input
                  type="radio"
                  id="groom"
                  checked={!isBrideGuest}
                  onChange={() => setIsBrideGuest(false)}
                  className="appearance-none rounded-full h-6 w-6 border border-gray-300 bg-white checked:bg-olive checked:border-olive focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                />
              </div>
              <div className="flex">
                <label
                  htmlFor="bride"
                  className="block text-sm p-2 font-bold text-slate-700"
                >
                  Mempelai Wanita:
                </label>
                <input
                  type="radio"
                  id="bride"
                  checked={isBrideGuest}
                  onChange={() => setIsBrideGuest(true)}
                  className="appearance-none rounded-full h-6 w-6 border border-gray-300 bg-white checked:bg-olive checked:border-olive focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                />
              </div>
            </label>
          </div>

          <div className="mt-6">
            <label className="block mt-2">
              <span className="block text-sm font-medium text-slate-700">
                Ucapan dan Doa{' '}
                <span className="text-sm font-regular text-slate-400">
                  wajib diisi
                </span>
              </span>

              <textarea
                placeholder="Selamat ya"
                value={message}
                rows={5}
                onChange={handleOnchangeMessage}
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
              />
            </label>
          </div>
          <div className="mt-6 text-right">
            <button
              disabled={isDisabled || progress === 'sending'}
              onClick={handleSendingLove}
              type="button"
              className="bg-olive shadow-lg disabled:opacity-50 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white"
            >
              Daftar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormGuestBook;
