import React from "react";
import Img1 from "../4.png";

const UserProfile = ({ user }) => {
    const avatarContainerStyle = {
        display: "flex",
        alignItems: "center",
        margin: "10px", // Add margin around the container
    };

    const avatarStyle = {
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        marginRight: "10px", // Add margin to the right of the avatar
        marginBottom: "10px", // Add margin to the right of the avatar
    };

    return (
        <div className="user-profile" style={avatarContainerStyle}>
            <img
                src={user.avatar || Img1}
                alt="avatar"
                style={avatarStyle}
            />
            <div className="user-info">
                <h3 className="centered-h1">welcome</h3>
                <p>{user.email}</p>
                {/* You can customize the user information display as needed */}
            </div>
        </div>
    );
};

export default UserProfile;
