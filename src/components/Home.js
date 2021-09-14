import React from "react";
import firstWoman from "../img/firstWoman.jpg";
import woman3 from "../img/woman3.jpg";
import woman4 from "../img/woman4.jpg";
import woman5 from "../img/woman5.jpg";
import woman6 from "../img/woman6.jpg";

const Home = () => {
  return (
    <main>
      <div className="parallax">
        <h2>Ready for a perfect haircut in Philadelphia, PA?</h2>
      </div>
      <section className="testimonial">
        <article>
          <figure>
            <img src={`${woman4}`} alt="pic"></img>
            <figcaption>Manuella Sotto</figcaption>
          </figure>
          <p>
            Are you ready for next level nail treatment. Our expert staff will
            make your nails shine like never before.
          </p>
        </article>
        <article>
          <figure>
            <img src={`${woman4}`} alt="pic"></img>
            <figcaption>Manuella Sotto</figcaption>
          </figure>
          <p>
            Are you ready for next level nail treatment. Our expert staff will
            make your nails shine like never before.
          </p>
        </article>
        <article>
          <figure>
            <img src={`${woman4}`} alt="pic"></img>
            <figcaption>Manuella Sotto</figcaption>
          </figure>
          <p>
            Are you ready for next level nail treatment. Our expert staff will
            make your nails shine like never before.
          </p>
        </article>
      </section>
      <div className="parallax parallax2">
        <h2>Ready for a perfect haircut in Philadelphia, PA?</h2>
      </div>
      <section className="testimonial">
        <article>
          <figure>
            <img src={`${woman4}`} alt="pic"></img>
            <figcaption>Manuella Sotto</figcaption>
          </figure>
          <p>
            Are you ready for next level nail treatment. Our expert staff will
            make your nails shine like never before.
          </p>
        </article>
        <article>
          <figure>
            <img src={`${woman4}`} alt="pic"></img>
            <figcaption>Manuella Sotto</figcaption>
          </figure>
          <p>
            Are you ready for next level nail treatment. Our expert staff will
            make your nails shine like never before.
          </p>
        </article>
        <article>
          <figure>
            <img src={`${woman4}`} alt="pic"></img>
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
