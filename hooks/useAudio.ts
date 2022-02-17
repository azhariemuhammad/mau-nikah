import { useCallback, useEffect, useState } from 'react';

const useAudio = (url: string) => {
  const [audio, setAudio] = useState<HTMLAudioElement>();
  const [playing, setPlaying] = useState(true);

  const toggle = () => setPlaying(!playing);

  const player = useCallback(() => {
    if (!audio) {
      console.log({ audio, url });
      setAudio(new Audio(url || ''));
    }
    if (audio) {
      return playing ? audio.play() : audio.pause();
    }
  }, [audio, playing]);
  // @ts-ignore
  useEffect(() => player(), [player]);

  useEffect(() => {
    if (!audio) return;
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return { playing, toggle };
};

export default useAudio;
