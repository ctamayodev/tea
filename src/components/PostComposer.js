import React, { useState } from "react";
import uuid from "react-uuid";

function PostComposer(props) {
  const [postContent, setPostContent] = useState("");
  const [isPostEmpty, setIsPostEmpty] = useState(true);

  const handleSubmit = (event) => {
    props.submitPost(postContent);
    setPostContent("");
    event.preventDefault();
  };

  const onTyping = (e) => {
    const { value } = e.target;
    setPostContent(value);
    setIsPostEmpty(true);

    if (value.length > 0) setIsPostEmpty(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col col-10">
          <textarea
            className="form-control rounded-0 border-0 p-1"
            style={{ backgroundColor: "transparent" }}
            rows="3"
            placeholder="what..."
            onChange={onTyping}
            value={postContent}
          ></textarea>
        </div>
        <div className="col">
          <button
            type="submit"
            disabled={isPostEmpty}
            className="btn btn-primary w-100"
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
}

export default PostComposer;
