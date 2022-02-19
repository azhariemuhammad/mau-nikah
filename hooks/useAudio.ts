import { useCallback, useEffect, useState } from 'react';
import { AUDIO_1 } from 'constants/index.js';
const useAudio = (url: string) => {
  const [audio, setAudio] = useState<HTMLAudioElement>();
  const [playing, setPlaying] = useState(true);

  const toggle = () => setPlaying(!playing);

  const player = useCallback(() => {
    if (!audio) {
      setAudio(new Audio(AUDIO_1 || ''));
    }
    if (audio) {
      audio.load();
      return playing
        ? audio
            ?.play()
            .then(() => console.log('Playback resumed successfully'))
            .catch((e) => alert(e))
        : audio?.pause();
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
