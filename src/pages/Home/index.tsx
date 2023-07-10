import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate()
  return (
    <div >
      <button onClick={() => {
        Cookies.remove("authUser");
        //Reloads page
        navigate(0)

      }}> Logout </button>
    </div>

  )
}

export default Home