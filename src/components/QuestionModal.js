import React from 'react'
import axios from "axios";
import { logout, selectUser } from "../feature/userSlice";
import {changeCategory} from "../feature/filterSlice";
import { Modal } from "react-responsive-modal";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
// import { selectUser } from "../features/userSlice";
import CloseIcon from "@material-ui/icons/Close";
import { Avatar, Button, Input } from "@material-ui/core";
import { PeopleAltOutlined, ExpandMore } from "@material-ui/icons";
function QuestionModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Close = <CloseIcon />;
  const [selectedCategory, setSelectedCategory] = useState('');
  const user = useSelector(selectUser);
  const [question, setQuestion] = useState("");
  const [inputUrl, setInputUrl] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  console.log(typeof selectedCategory);
// console.log(category);
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
        category: selectedCategory,
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


  return (
    <>
          <Button onClick={() => setIsModalOpen(true)} style={{color:"white"}}>Add Question</Button>

    <Modal
            open={isModalOpen}
            closeIcon={Close}
            onClose={() => setIsModalOpen(false)}
            closeOnEsc
            center
            closeOnOverlayClick={false}
            styles={{
              overlay: {
                height: "auto",
              },
            }}
          >
            <div className="modal__title">
              <h5>Add Question</h5>
              {/* <h5>Share Link</h5> */}
            </div>
            <div className="modal__info">
              <Avatar src={user?.photo} className="avatar" />
              <div className="modal__scope">
              <select value={selectedCategory} onChange={handleCategoryChange}>
              <option value="public">Public</option>
              <option value="private">Private</option>
              <PeopleAltOutlined />
              <ExpandMore />
              </select>
                
               
                
              </div>
            </div>
            <form>
            <div className="modal__Field">
              <input  className="question-input"value={question} onChange={(e) => setQuestion(e.target.value)} type="text" placeholder="Start your question with 'What', 'How', 'Why', etc. "  
                />

              {/* <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              > */}
                <input
                  type="text"
                  className='question-input'
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  
                  placeholder="Optional: inclue a link that gives context"
                />
                {inputUrl !== "" && (
                  <img
                    style={{
                      height: "40vh",
                      objectFit: "contain",
                    }}
                    src={inputUrl}
                    alt="displayimage"
                  />
                )}
              <div className="dropdown-container">

      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Select a category</option>
        <option value="History">History</option>
        <option value="Business">Business</option>
        <option value="Psychology">Psychology</option>
        <option value="Sports">Sports</option>
        <option value="Music">Music</option>
        <option value="Science">Science</option>
        <option value="Movies">Movies</option>
        <option value="Technology">Technology</option>
        <option value="Discover Spaces">Discover Spaces</option>

      </select>
    {/* </div> */}

    </div>
    <div className="modal__buttons">
              <button className="cancle" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button onClick={handleSubmit} type="submit" className="add">
                Add Question
              </button>
            </div>
            </div>
            
            </form>
          </Modal></>


  )

}


export default QuestionModal