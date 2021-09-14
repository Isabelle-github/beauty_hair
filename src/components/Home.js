import React from "react";
import firstWoman from "../img/firstWoman.jpg";
import redHair from "../img/readHair.png";

const Home = () => {
  return (
    <main>
      <div className="parallax">
        <h2>Ready for a perfect haircut in Philadelphia, PA?</h2>
      </div>
      <section className="testimonial">
        <article>
          <figure>
            <img src={`${redHair}`} alt="pic"></img>
            <figcaption>Manuella Sotto</figcaption>
          </figure>
          <p>
            Are you ready for next level nail treatment. Our expert staff will
            make your nails shine like never before.
          </p>
        </article>
        <article>
          <figure>
            <img src={`${redHair}`} alt="pic"></img>
            <figcaption>Manuella Sotto</figcaption>
          </figure>
          <p>
            Are you ready for next level nail treatment. Our expert staff will
            make your nails shine like never before.
          </p>
        </article>
        <article>
          <figure>
            <img src={`${redHair}`} alt="pic"></img>
            <figcaption>Manuella Sotto</figcaption>
          </figure>
          <p>
            Are you ready for next level nail treatment. Our expert staff will
            make your nails shine like never before.
          </p>
        </article>
      </section>
    </main>
  );
};

export default Home;
