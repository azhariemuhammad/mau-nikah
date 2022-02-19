import { useMemo } from 'react';
import { Carousel, Slide } from '@/components/Carousel';
import { normalizePhotos } from 'helpers/normalizePhotos';
import Image from 'next/image';

const Gallery = (props: { photos: Array<string> }) => {
  const photos = props.photos;
  const images = useMemo(() => normalizePhotos(photos), [photos]);
  console.log({ images });
  if (!images.length) return null;
  return (
    <div className="text-center pt-[2rem]">
      <h3 className="text-4xl mb-8 pt-5 text-slate-800 font-sacramento">
        Gallery
      </h3>

      {images.map((item) => (
        <div
          className="mb-4"
          style={{ width: '100%', height: '500px', position: 'relative' }}
          key={item.id}
        >
          <Image
            src={item.imageUrl}
            alt="avatar"
            layout="fill"
            // width={100}
            objectFit="cover"
            // height={100}
          />
        </div>
      ))}
      {/* <Carousel options={{ autoplay: 2000 }}>
        {images.map((item) => (
          <Slide key={item.id}>
            <Image
              src={item.imageUrl}
              alt="avatar"
              layout="responsive"
              width={100}
              height={100}
            />
          </Slide>
        ))}
      </Carousel> */}
    </div>
  );
};

export default Gallery;
