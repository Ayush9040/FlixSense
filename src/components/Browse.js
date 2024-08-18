import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Browse = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
          }).catch((error) => {
            // An error happened.
            navigate("/error");
          });
    }


    return (
        <div className="flex justify-between">
            <Header />
            <button className="absolute font-bold text-white p-5 right-4 top-2 z-50" onClick={handleSignOut}>(Sign Out)</button>
        </div>
    )
}

export default Browse;