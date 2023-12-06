import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";
import { AuthContext } from "../context/auth";
import { useHistory } from "react-router-dom";
import UserProfile from "../pages/UserProfile";
import Img2 from "../Face.png";

const avatarStyle = {
  width: "50px",
  height: "50px",
  //
};


const Navbar = () => {
  const history = useHistory();
  const { user } = useContext(AuthContext);

  const handleSignout = async () => {
    await updateDoc(doc(db, "users", auth.currentUser.uid), {
      isOnline: false,
    });
    await signOut(auth);
    history.replace("/login");
  };
  return (
    <nav>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <a href="https://community-speak.vercel.app/" style={{ marginLeft: '10px' }}>
          <img
            src={Img2}
            alt="avatar"
            style={avatarStyle}
          />
        </a>
        <h3>
          <Link to="/" style={{ marginLeft: '5px' }}>Community Speak Messenger</Link>
        </h3>
      </div>


      <div className="centered-div">
        {user && <UserProfile user={user} />}
      </div>

      <div>
        {user ? (
          <>
            <Link to="/profile">Profile</Link>
            <button className="btn" onClick={handleSignout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
