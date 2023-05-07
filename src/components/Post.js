import { Avatar } from "@material-ui/core";
import {
  ArrowDownwardOutlined,
  ArrowUpwardOutlined,
  ChatBubbleOutlined,
  MoreHorizOutlined,
  RepeatOneOutlined,
  ShareOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./css/Post.css";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import CloseIcon from "@material-ui/icons/Close";
import ReactQuill from "react-quill";
import ReactTimeAgo from "react-time-ago";
import axios from "axios";
import ReactHtmlParser from "html-react-parser";
import { useSelector } from "react-redux";
import { selectUser } from "../feature/userSlice";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import AddCommentIcon from '@mui/icons-material/AddComment'

function LastSeen({ date }) {
  return (
    <div>
      <ReactTimeAgo date={date} locale="en-US" timeStyle="round" />
    </div>
  );
}

function Post({ post }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [answer, setAnswer] = useState("");
  const Close = <CloseIcon />;
  const [expanded, setExpanded] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Track the selected answer for comment reply

  const user = useSelector(selectUser);

  const handleQuill = (value) => {
    setAnswer(value);
  };

  const handleSubmit = async () => {
    if (post?._id && answer !== "") {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = {
        answer: answer,
        questionId: post?._id,
        user: user,
      };
      await axios
        .post("/api/answers", body, config)
        .then((res) => {
          console.log(res.data);
          alert("Answer added successfully");
          setIsModalOpen(false);
          window.location.href = "/";
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const handleCommentReply = (answerId) => {
    setSelectedAnswer(answerId);
  };

  return (
    <div className="post">
      <div className="post__info">
        <Avatar src={post?.user?.photo} />
        <h4>{post?.user?.userName}</h4>
        <small>
          <LastSeen date={post?.createdAt} />
        </small>
      </div>
      <div className="post__body">
        <div className="post__question">
          <p>{post?.questionName}</p>
          <button
            onClick={() => {
              setIsModalOpen(true);
              console.log(post?._id);
            }}
            className="post__btnAnswer"
          >
            Answer
          </button>
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
            <div className="modal__question">
              <h1>{post?.questionName}</h1>
              <p>
                asked by <span className="name">{post?.user?.userName}</span> on{" "}
                <span className="name">
                  {new Date
(post?.createdAt).toLocaleString()}
                </span>
              </p>
            </div>
            <div className="modal__answer">
              <ReactQuill
                value={answer}
                onChange={handleQuill}
                placeholder="Enter your answer"
              />
            </div>
            <div className="modal__button">
              <button className="cancle" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button onClick={handleSubmit} type="submit" className="add">
                Add Answer
              </button>
            </div>
          </Modal>
        </div>
        {post.questionUrl !== "" && <img src={post.questionUrl} alt="url" />}
      </div>
      <div className="post__footer">
        <div className="post__footerAction">
          <ArrowUpwardOutlined />
          <ArrowDownwardOutlined />
        </div>
        <div className="post__footerLeft">
          <ShareOutlined />
        </div>
      </div>
      <div>
        <button className="comment-btn" onClick={() => setExpanded(!expanded)}>
          {expanded ? <ChatBubbleIcon /> : <ChatBubbleIcon />}
        </button>
        {expanded && (
          <div>
            {post?.allAnswers?.map((_a) => (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    padding: "10px 5px",
                    borderTop: "1px solid lightgray",
                  }}
                  className="post-answer-container"
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#888",
                    }}
                    className="post-answered"
                  >
                    <Avatar src={_a?.user?.photo} />
                    <div
                      style={{
                        margin: "0px 10px",
                      }}
                      className="post-info"
                    >
                      <p>{_a?.user?.userName}</p>
                      <span>
                        <LastSeen date={_a?.createdAt} />
                      </span>
                    </div>
                  </div>
                  <div className="post-answer">{ReactHtmlParser(_a?.answer)}</div>
                  <div className="post__footer">
                    <div className="post__footerAction">
                      <ArrowUpwardOutlined />
                      <ArrowDownwardOutlined />
                    </div>
                    <div className="post__footerLeft">
                      <ShareOutlined />
                    </div>
                  </div>
                  <div>
                    <button
                      className="rep-but"
                      onClick={() => handleCommentReply(_a._id)}
                    >
                      {selectedAnswer === _a._id ? <AddCommentIcon /> : <AddCommentIcon />}
                    </button>
                    {selectedAnswer === _a._id && (
                      <div>
                        <textarea
                          className="text-comment"
                          style={{
                            marginTop: "10px",
                            padding: "5px",
                            fontSize: "14px",
                            border: "1px solid #ddd",
                            borderRadius: "4px",
                            resize: "vertical",
                          }}
                          placeholder="Add a comment..."
                        />
                        <button className="submit-btn" style={{ marginTop: "10px" }}>
                          Submit
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </>
            ))}
          </div>
        )}
      </div>
      <p
        style={{
          color: "rgba(0,0,0,0.5)",
          fontSize: "12px",
          fontWeight: "bold",
          margin: "10px 0",
        }}
      >
        {post?.allAnswers.length} Answer(s)
      </p>
    </div>
  );
}

export default Post;
