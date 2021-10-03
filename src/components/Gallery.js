import React from "react";
// import toTop from "../img/toTop.png";
// import { useState } from "react";
import picsArr from "../photos";
import "./styles/gallery.scss";

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
      <section id="imageGallery">
        {picsArr &&
          picsArr.map((pic) => {
            return (
              <article key={pic.id}>
                <figure>
                  <img src={pic.imgSrc} alt="img"></img>
                </figure>
                <div className="detailBox">
                  <p className="detailText">
                    Beautiful box braids. Colour: dark red. Lenght: Shoulders.
                    Styling time: 3 Hours; Keeping: till 2 Months; Suitable:
                    Winter, Autumn
                  </p>
                </div>
              </article>
            );
          })}
        <a className="toTheTop" href="#imageGallery" alt="back To Top">
          &#x2191;
          {/* <img src={`${toTop}`} alt="back To Top"></img> */}
        </a>
      </section>
    </main>
  );
};

export default Gallery;
