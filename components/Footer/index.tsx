import Image from 'next/image';
import copyright from '@/public/icons/copyright.svg';
import WhatsappIcon from '@/public/icons/WhatsApp.png';
import Instagram from '@/public/icons/Instagram.png';

const Footer = () => {
  const baseWhatsappLink = `https://wa.me`;
  const text = encodeURIComponent(`
Halo kak 

Boleh tanya untuk price list undangan websitenya ☺`);
  const phoneNumber = `6282248467118`;
  const formatText = `${baseWhatsappLink}/${phoneNumber}?text=${encodeURIComponent(
    text
  )}`;
  return (
    <div className="bg-[#334257] p-12">
      <h2 className="text-3xl text-center text-fuchsia-500 font-sacramento">
        NikahHariIni
      </h2>
      <div className="flex justify-center mt-[14px]">
        <a className="mr-2">
          <Image src={Instagram} width={34} height={32} />
        </a>
        <a className="ml-2" href={baseWhatsappLink}>
          <Image src={WhatsappIcon} width={34} height={32} />
        </a>
      </div>
      <Image src={copyright} width={11} height={12} />
      <p className="text-white text-sm text-center">
        © 2022 Undangan nikah online by nikahariini
      </p>
    </div>
  );
};

export default Footer;
