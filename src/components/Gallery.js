import React from "react";
// import { useState } from "react";
import { Spring, animated } from "@react-spring/web";
import picsArr from "../photos";
const Gallery = () => {
  // const [pictures, setpics] = useState(picsArr);

  // for (let i = 0; i < 49; i++) {
  //   picsArr.push({
  //     id: i,
  //     imgSrc: `process.end.PUBLIC_URL/pics/pic${i}.jpeg`,
  //   });
  // }

  // console.log(picsArr);
  return (
    <main>
      <div className="parallax bgGallery">
        <Spring
          from={{ opacity: 0, marginTop: -500 }}
          to={{ opacity: 1, marginTop: 0 }}
          config={{ dalay: 1000, duration: 2000 }}
        >
          {(props) => (
            <animated.div style={props}>
              <h1>HAVE A LOOK AT MY WORK</h1>
            </animated.div>
          )}
        </Spring>
      </div>
      <section className="imageGallery">
        {picsArr &&
          picsArr.map((pic) => {
            return (
              <figure key={pic.id}>
                <img src={pic.imgSrc} alt="img"></img>
              </figure>
            );
          })}
      </section>
    </main>
  );
};

export default Gallery;
