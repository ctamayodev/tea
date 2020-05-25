import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import TeaInfo from "./TeaInfo";

function Home(props) {
  return (
    <>
      <section
        className="d-flex align-items-center position-relative vh-100 cover hero"
        style={{
          width: "100%",
          height: "500px",
          color: "white",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage: `url('https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')`,
        }}
      >
        <div className="container-fluid container-fluid-max">
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="header fancy">Let's have some tea.</div>
              <div className="subtitle">
                <div style={{ fontSize: "30px" }}>
                  <b className="fancy">Tea</b> - is an aromatic beverage commonly prepared by
                  pouring hot or boiling water over cured leaves of the Camellia
                  sinensis, an evergreen shrub (bush) native to East Asia
                  <br />
                  <a href="/tea" className="btn btn-dark">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        <TeaInfo teaInfo={props.teaInfo}/>
      {/* <div>
        {props.teaInfo.map((t,index) => (
          <InfoCard
            key={t.id}
            name={t.name}
            description={t.description}
            imgUrl={t.imgUrl}
            align={index%2===0?"right":"left"}
            idx={index}
          />
        ))}
      </div> */}
    </>
  );
}

export default Home;
