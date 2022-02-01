import { useRouter } from 'next/router';
import MetaHeadComponent from '../MetaHead';

import styles from './welcome.module.css';

interface WelcomePage {
  isOpen: boolean;
  handleOpenInvitation: () => void;
}
const WelcomePage = ({ isOpen, handleOpenInvitation }: WelcomePage) => {
  const {
    query: { to = '' },
  } = useRouter();

  const guest = to || '';
  return (
    <>
      <MetaHeadComponent />
      <div>
        <div
          className={`px-[2rem]  text-center grid h-[100vh] place-content-center ${
            styles.modal
          } ${isOpen ? styles.shown : ''}`}
        >
          <div className="mb-8">
            <h5 className="text-white">KEPADA BAPAK/IBU/SAUDARA/I</h5>
            <h5 className="text-bold text-white">{guest}</h5>
            <p className="text-white">
              Dengan senang hati mengundang Anda untuk hadir di hari pernikahan
              kami
            </p>

            <h1 className="text-5xl font-bold font-sacramento text-white text-center mt-5">
              Fatma
            </h1>
            <h1 className="text-5xl font-bold font-sacramento text-white text-center">
              &amp;
            </h1>
            <h1 className="text-5xl font-bold font-sacramento text-white text-center">
              Afwan
            </h1>
          </div>
          <div className="mt-8">
            <button
              className="rounded-full bg-rose-800 text-white h-[32px] w-[170px]"
              onClick={handleOpenInvitation}
            >
              Buka Undangan
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default WelcomePage;
