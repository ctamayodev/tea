import React from "react";

function InfoCard(props) {
    console.log(props.name, props.idx, props.align);
    const imgUrl = props.imgUrl;
    const align = props.align;

    const getDescriptionClassName =()=> {
        if (align==="right")
            return "col-12 col-md-6 d-flex align-items-center order-1 order-md-0";
        if (align==="left")
            return "col-12 col-md-6 d-flex align-items-center order-0 order-md-1";
    };

    const getImageClassName =()=> {
        if (align==="right")
            return "col-12 col-md-6 order-0 order-md-1";
        if (align==="left")
            return "col-12 col-md-6 order-1 order-md-0";
    };

    const getImage = () => {
        return "url(" + imgUrl + ")"
    }

  return (
    <div className="row m-5">
      <div className={getDescriptionClassName()}>
        <div className="p-15">
          <h1 className="fancy">{props.name}</h1><br/>{props.description}
        </div>
      </div>
      <div className={getImageClassName()}>
        <div
          style={{
            height: "50vh",
            backgroundSize: "contain",
            backgroundPositionX: "center",
            backgroundPositionY: "center",
            backgroundRepeat: "no-repeat",
            backgroundImage: getImage(),
          }}
        ></div>
      </div>
    </div>
  );
}

export default InfoCard;
