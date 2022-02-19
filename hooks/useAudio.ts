import { useCallback, useEffect, useState } from 'react';
import { AUDIO_1 } from 'constants/index.js';
const useAudio = (url: string) => {
  const [audio, setAudio] = useState(AUDIO_1);
  const [playing, setPlaying] = useState(true);

  const toggle = () => setPlaying(!playing);

  const player = useCallback(() => {
    if (!audio) {
      // @ts-ignore
      setAudio(new Audio(url || ''));
    }
    if (audio) {
      // @ts-ignore
      audio.load();
      return playing
        ? audio
            // @ts-ignore
            ?.play()
            .then(() => console.log('Playback resumed successfully'))
            .catch((e: unknown) => alert(e))
        : // @ts-ignore
          audio?.pause();
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
