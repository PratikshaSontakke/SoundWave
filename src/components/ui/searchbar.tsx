import { Search } from "lucide-react";
import { Input } from "./input";

const Searchbar = () => {
  return (
    <div className="relative pt-2 mx-auto -mt-2 md:w-full md:ml-20 md:mr-20">
      <Input
        className=" focus-visible:ring-transparent h-10 px-5 pr-16 text-sm focus:outline-none border-b-2 border-accent"
        type="search"
        name="search"
        placeholder="Search songs, playlist & artist"
      />
      <button type="submit" className="absolute right-0 top-0 mr-8 mt-6">
        <Search size={20} />
      </button>
    </div>
  );
};

export default Searchbar;
