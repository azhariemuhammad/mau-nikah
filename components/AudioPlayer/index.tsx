import useAudio from '@/hooks/useAudio';
import { AUDIO_1 } from '../../constants';
import styles from './audio.module.css';

const AudioPlayer = ({ audioUrl }: { audioUrl: string }) => {
  const { playing, toggle } = useAudio(audioUrl || '');

  return (
    <>
      <audio preload="auto" id="myAudio">
        <source src={audioUrl} />
      </audio>
      <a onClick={toggle} className={styles.audio__btn}>
        {!playing ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-music"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="6" cy="17" r="3" />
            <circle cx="16" cy="17" r="3" />
            <polyline points="9 17 9 4 19 4 19 17" />
            <line x1="9" y1="8" x2="19" y2="8" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-player-pause"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        )}
      </a>
    </>
  );
};

export default AudioPlayer;
