import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../index.css";

export default function UserDetails() {
  const [user, setuser] = useState("");

  const [userAcc, setuserAcc] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setuser(data.data);
      });
    fetch("http://localhost:5000/useraccount", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setuserAcc(data.data);
        console.log(userAcc.length);
        for (var i = 0; i < userAcc.length; i++) {
          console.log(userAcc[i].name);
        }
      });
  }, []);

  return (
    <div class="mainclass">
      <h1 class="title" style={{ paddingTop: "60px" }}>
        Welcome {user.fname} {user.lname}
      </h1>
      <br />
      <center>
        {userAcc.map((friend, index) => (
          <div class="row cardee" key={index}>
            <h3 style={{ paddingBottom: "20px", color: "#3D1766" }}>
              {friend.name}
            </h3>{" "}
            <p style={{ color: "#7B8FA1" }}> {friend.details}</p>
            <center>
              <Link
                to="/pro1"
                state={{ from: friend.Success, sensi: friend.sensors }}
              >
                <button
                  type="button"
                  class="btn btn-light"
                  style={{
                    backgroundColor: "#6F1AB6",
                    color: "white",
                    width: "40%",
                    alignSelf: "center",
                    justifyContent: "center",
                  }}
                >
                  Explore
                </button>
              </Link>
            </center>
          </div>
        ))}
      </center>
    </div>
  );
}
