import Searchbar from "../../components/ui/searchbar";
import Songcard from "../../components/ui/songcard";
import Footer from "../../components/ui/footer";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getSongs } from "../../features/songSlice";

function Home() {
  const songList = useAppSelector((state) => state.song.songs);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSongs(2));
  }, []);

  // const [offset, setOffset] = useState(0);

  return (
    <>
      <div className=" ml-10 pt-2 py-8 flex justify-center">
        <Searchbar />
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 ml-5 mr-5">
        {songList.map((item: any) => {
          return (
            <>
              {" "}
              <Songcard item={item} key={item?.id} />{" "}
            </>
          );
        })}
      </div>

      <Footer />
    </>
  );
}

export default Home;
