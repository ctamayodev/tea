import React from "react";
import InfoCard from "./InfoCard";

function TeaInfo(props) {
  return (
    <div>
      {props.teaInfo.map((t, index) => (
        <InfoCard
          key={t.id}
          name={t.name}
          description={t.description}
          imgUrl={t.imgUrl}
          align={index % 2 === 0 ? "right" : "left"}
          idx={index}
        />
      ))}
    </div>
  );
}

export default TeaInfo;
