import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import axios from "axios";

const SignUp = () => {
  const [accessToken, setAccessToken] = useState("");
  const [userData, setUserData] = useState(null);
  const [userPages, setUserPages] = useState(null);

  const responseFacebook = (response) => {
    setAccessToken(response.accessToken);
  };

  const handleClick = async () => {
    try {
      const response = await axios.get(`/api/user?accessToken=${accessToken}`);
      console.log(response.data.userData);
      console.log(response.data.userPages);
      setUserData(response.data.userData);
      setUserPages(response.data.userPages);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {accessToken ? (
        <div>
          <h2>User Data</h2>
          {userData ? (
            <div>
              <p>Name: {userData.name}</p>
              <p>Email: {userData.email}</p>
              <img src={userData.picture.data.url} alt="profile" />
            </div>
          ) : (
            <p>Loading user data...</p>
          )}

          <h2>User Pages</h2>
          {userPages ? (
            <ul>
              {userPages.data.map((page) => (
                <li key={page.id}>{page.name}</li>
              ))}
            </ul>
          ) : (
            <p>Loading user pages...</p>
          )}
        </div>
      ) : (
        <FacebookLogin
          appId="111618935219639"
          autoLoad={false}
          fields="name,email,picture,permissions"
          callback={responseFacebook}
        />
      )}

      {userData && userPages && (
        <button onClick={handleClick}>Load User Pages</button>
      )}
    </div>
  );
};

export default SignUp;
