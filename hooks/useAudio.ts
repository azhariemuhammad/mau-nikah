import { useCallback, useEffect, useState } from 'react';

const useAudio = () => {
  const [playing, setPlaying] = useState(true);

  const toggle = () => setPlaying(!playing);

  const player = useCallback(() => {
    const audio = document.getElementById('myAudio') as HTMLAudioElement;

    if (audio) {
      audio.load();
      return playing
        ? audio
            ?.play()
            .then(() => console.log('Playback resumed successfully'))
            .catch((e) => console.error(e))
        : audio?.pause();
    }
  }, [playing]);

  // @ts-ignore
  useEffect(() => player(), [player]);

  useEffect(() => {
    const audio = document.getElementById('myAudio') as HTMLAudioElement;
    if (!audio) return;
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return { playing, toggle };
};

export default useAudio;
