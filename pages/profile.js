import React, { useEffect, useState } from "react";
import { Sidebar } from "../components/Sidebar.js";
import { PfpCard } from "../components/PfpCard.js";

import styles from "../styles/profile.module.css";
import Image from "next/image";
import SettingsIcon from "@mui/icons-material/Settings";
var p = 2;
var c = 421;
var n = 4;

const profile = () => {
  const [profile, setProfile] = useState([]);
  let s = [];
  const fetchProfileData = () => {
    fetch("https://minigram-backend.onrender.com/post")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProfile(data);
      });
  };

  useEffect(() => {
    fetchProfileData();
  }, []);
  let p = [];

  p = profile.map((info) => console.log(info.creator.username));

  return (
    <div>
      <Sidebar />
      {profile.map((info, index) => {
        if (index == 0) {
          return (
            <div className={styles.head}>
              <div className={styles.pfp}>
                <img
                  src="https://i.pinimg.com/564x/1c/cc/08/1ccc08a48b254afb114ae470d9c94355.jpg" //for api integration src="info.creator.profilePic"
                ></img>
              </div>
              <div className={styles.bio}>
                <div className={styles.edit}>
                  <p>{info.creator.username}</p>
                  <button className={styles.editb}>edit profile</button>
                  <SettingsIcon sx={{ fontSize: 30 }} />
                </div>
                <div className={styles.data}>
                  <div className={styles.posts}>
                    <div className={styles.bo}>{info.creator.posts.length}</div>{" "}
                    posts
                  </div>
                  <div className={styles.conex}>
                    <div className={styles.bo}>{c}</div> connections
                  </div>
                </div>
                <div className={styles.caption}>
                  Got war in my mind ♡ {info.creator.bio}
                </div>
                <div className={styles.links}>
                  <a href="https://www.w3.org/Provider/Style/dummy.html">
                    {info.creator.email}
                  </a>
                </div>
              </div>
            </div>
          );
        }
      })}
      )
      <div className="content">
        <PfpCard />
      </div>
    </div>
  );
};

export default profile;
