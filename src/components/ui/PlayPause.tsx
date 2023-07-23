import { Play, Pause } from "lucide-react";

interface PlayPauseProps {
  isPlaying: boolean;
  currentSong: Song | null;
  song: Song | null;
  handlePause: () => void;
  handlePlay: () => void;
  size?: number;
  color?: string;
}
export const PlayPause = (props: PlayPauseProps) => {
  const { isPlaying, currentSong, handlePause, handlePlay, song, size, color } =
    props;
  return (
    <>
      {isPlaying && currentSong?.id === song?.id ? (
        <Pause size={size || 44} onClick={handlePause} color={color} />
      ) : (
        <Play size={size || 44} onClick={handlePlay} color={color} />
      )}
    </>
  );
};
