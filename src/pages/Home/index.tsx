import { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "@/app/hooks";
import {
  getSongs,
  setCurrentSong,
  setIsPlaying,
  setOffsetParam,
} from "@/features/songSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import Loader from "@/components/ui/Loader";
import { Button } from "@/components/ui/Button";
import SongCard from "@/components/ui/SongCard";

function Home() {
  const { isPlaying, currentSong, loading, offsetParam, searchParam, songs } =
    useSelector((state: RootState) => state.song);
  const dispatch = useAppDispatch();
  const [offset, setOffset] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>();

  useEffect(() => {
    dispatch(getSongs({ offset: offsetParam, searchTerm: searchParam }));
  }, [offsetParam, searchParam]);

  useEffect(() => {
    dispatch(setOffsetParam(offset));
  }, [offset]);

  useEffect(() => {
    if (currentSong) {
      if (audioRef.current) audioRef.current.src = currentSong.songUrl;
    }
  }, [currentSong]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {songs?.length ? (
            <div className="w-full flex flex-col items-center">
              <div className="grid pt-5 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 ml-5 mr-5">
                {songs?.map((item: any, index: any) => {
                  return (
                    <SongCard
                      song={item}
                      key={index}
                      isPlaying={isPlaying}
                      currentSong={currentSong}
                      audioRef={audioRef}
                      handlePause={() => {
                        audioRef.current?.pause();
                        dispatch(setIsPlaying(false));
                      }}
                      handlePlay={() => {
                        audioRef.current?.play();
                        dispatch(setCurrentSong(item));
                        dispatch(setIsPlaying(true));
                      }}
                    />
                  );
                })}
              </div>
              <Button
                variant="outline"
                onClick={() => setOffset((prev) => prev + 12)}
                className="my-5 mx-auto"
              >
                Load More
              </Button>
            </div>
          ) : (
            <div className="flex justify-center">No results found</div>
          )}
        </>
      )}
    </>
  );
}

export default Home;
