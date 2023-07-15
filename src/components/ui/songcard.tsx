import { Play } from "lucide-react";
import { Card, CardContent, CardDescription } from "./card";

const Songcard = ({ item }: any) => {
  const { imageUrl, trackName, songUrl, artistName } = item;

  return (
    <>
      <Card>
        <CardContent className="shadow-lg rounded p-2">
          <div className="group relative">
            <img className="rounded w-full" src={imageUrl} />
            <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
              <button
                className="bg-red hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition"
                onClick={() => {
                  const audio = new Audio(songUrl);
                  audio.play();
                }}
              >
                <Play size={44} />
              </button>
            </div>
          </div>
          <CardDescription>
            <h3 className="text-lg">{trackName}</h3>
            <p>{artistName}</p>
          </CardDescription>
        </CardContent>
      </Card>
    </>
  );
};

export default Songcard;
