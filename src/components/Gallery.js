import React from "react";
// import { useState } from "react";
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
        <h1>HAVE A LOOK AT MY WORK</h1>
      </div>
      <section className="imageGallery">
        {picsArr &&
          picsArr.map((pic) => {
            return (
              <article>
                <figure key={pic.id}>
                  <img src={pic.imgSrc} alt="img"></img>
                </figure>
                <div className="details">
                  <h2>hhhhhhh</h2>
                  <p>lorem Ipsum</p>
                </div>
              </article>
            );
          })}
      </section>
    </main>
  );
};

export default Gallery;
