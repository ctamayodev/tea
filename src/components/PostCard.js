import React, { useState } from "react";

const SimplifyDateTime = (dateTime) => {
  return Intl.DateTimeFormat('en-US').format(dateTime)
    const now = new Date(Date.now());
    const dt = new Date(dateTime);
    const elapsedMinutes = now.getMinutes() - dt.getMinutes();
    const elapsedHours = now.getHours() - dt.getHours();
    console.log(dt,elapsedMinutes);
    if (elapsedMinutes < 0)
        return "Future!";
    if (elapsedMinutes < 5)
        return "just now...";
    if (elapsedMinutes > 5)
        return "5m ago";
    if (elapsedMinutes > 10)
        return "10m ago";
    if (elapsedMinutes > 15)
        return "15m ago";
    if (elapsedMinutes > 30)
        return "30m ago";
    if (elapsedMinutes > 60)
        return "1h ago";
    return Intl.DateTimeFormat('en-US').format(dateTime)
}

function PostCard(props) {
  return (
    <div className="card p-3" style={{marginTop:"5px"}}>
      <div className="card-body text-left m-0 p-3">{props.post.content}</div>
      <div className="card-text text-muted text-right">
        <span>-{props.post.username} | {SimplifyDateTime(props.post.createdDateTime)}</span>
      </div>
    </div>
  );
}

export default PostCard;
