import React, { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import {
  AssignmentTurnedInOutlined,
  // Close,
  NotificationsOutlined,
  PeopleAltOutlined,
  Search,
  ExpandMore,
} from "@material-ui/icons";
import CloseIcon from "@material-ui/icons/Close";
import { Avatar, Button, Input } from "@material-ui/core";
import "./css/QuoraHeader.css";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import axios from "axios";
import QModal from "./QuestionModal";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { logout, selectUser } from "../feature/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
function QuoraHeader() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState("");
  const [question, setQuestion] = useState("");
  const Close = <CloseIcon />;
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleSubmit = async () => {
    if (question !== "") {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = {
        questionName: question,
        questionUrl: inputUrl,
        user: user,
      };
      await axios
        .post("/api/questions", body, config)
        .then((res) => {
          console.log(res.data);
          alert(res.data.message);
          window.location.href = "/";
        })
        .catch((e) => {
          console.log(e);
          alert("Error in adding question");
        });
    }
  };
const navigateToProfile = () => {
  
    window.location.href = `/profile/${user?.userName}`;
  };

  const handleLogout = () => {
    const userName = localStorage.getItem("userName");
    if (window.confirm("Are you sure to logout ?")) {
      signOut(auth)
        .then(() => {
          dispatch(logout());
          console.log("Logged out");
        })
        .catch(() => {
          console.log("error in logout");
        });
    }
  };
  return (
    <div className="qHeader">
      <div className="qHeader-content">
        <div className="qHeader__logo">
          <img
            src="https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif"
            alt="logo"
          />
        </div>
        <div className="qHeader__icons">
          <Link to="/">
          <div className="qHeader__icon">
            <HomeIcon />
          </div>
          </Link>
          <div className="qHeader__icon">
            <FeaturedPlayListOutlinedIcon />
          </div>
          <Link to="/messages">
          <div className="qHeader__icon">
            <AssignmentTurnedInOutlined />
          </div>
          </Link>
          <Link to="/profile/username">
          <div className="qHeader__icon">
            <PeopleAltOutlined />
          </div>
          </Link>
          <div className="qHeader__icon">
            <NotificationsOutlined />
          </div>
        </div>
        <div className="qHeader__input">
          <Search />
          <input type="text" placeholder="Search questions" />
        </div>
        <div className="qHeader__Rem">
          <span onClick={navigateToProfile}>
            <Avatar src={user?.photo} />
          </span>

         <QModal/>
        </div>
      </div>
    </div>
  );
}

export default QuoraHeader;
