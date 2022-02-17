import Image from 'next/image';
import qrcode from '@/public/images/qrcode.jpeg';

import styles from '@/styles/Home.module.css';

const TandaKasihComponent = () => {
  return (
    <div id="tanda-kasih" className="mt-4 text-center">
      <div className={styles.shadow__custom}>
        <h3 className="text-4xl mb-8 pt-5 text-pink-800 font-sacramento">
          Tanda Kasih
        </h3>
        <p>
          Kehadiran dan doa anda adalah hadiah terbaik untuk kami. Namun jika
          memberi adalah suatu bentuk tanda kasih bagi anda, tombol ini akan
          menjadi media terbaik yang bisa kami sediakan secara virtual di masa
          pandemi.
        </p>
        <br />
        <p>Wassalamualaikum Warahmatullahi Wabarakatuh.</p>
      </div>
      <div className="mt-8">
        <Image src={qrcode} />
      </div>
    </div>
  );
};

export default TandaKasihComponent;