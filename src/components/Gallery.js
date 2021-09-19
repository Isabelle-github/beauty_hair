import React from "react";
import { Spring, animated } from "@react-spring/web";

const Gallery = () => {
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
              <h1>HAVE LOOK AT MY WORK</h1>
            </animated.div>
          )}
        </Spring>
      </div>
      <section>
        <figure></figure>
      </section>
    </main>
  );
};

export default Gallery;
