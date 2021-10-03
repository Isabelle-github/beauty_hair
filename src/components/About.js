import React from "react";
import "./styles/about.scss";

const About = () => {
  return (
    <main>
      <div className="parallax bgAbout">
        <h1>Who is behind Beauty Grace?</h1>
      </div>
      <section className="offers">
        <article>
          <figure>
            {/* <img src="#" alt="pic"></img> */}
            <figcaption>Call me Tatiana :) </figcaption>
          </figure>
          <p>
            What is it to tell about myself lol? Call me Tatiana :) I am a
            married woman, mother of three, live in the UK but have my roots in
            Africa (Yeah you guessed well, that's where the talent comes from
            lol).<br></br> I am very warm a chatty person. I love to be
            surrounded by people. That's all i can say. You want to know me
            better? Contact me :)
          </p>
        </article>
        <article>
          <figure>
            {/* <img src="#" alt="pic"></img> */}
            <figcaption>Hair Styling is a Hobby</figcaption>
          </figure>
          <p>
            It started like a hobby and yet one day i told myself it wouldn't be
            a crime to make some money with this little hobby of mine. Few days
            later Beauty Grace was born. <br></br>I am so devoted into this, and
            love the expression of joy on the faces of my customers, as they
            walk out my doors totally transformed and satisfied with their new
            look. It melts my heart every time anew.
          </p>
        </article>
        <article>
          <figure>
            {/* <img src="#" alt="pic"></img> */}
            <figcaption>Some other Dreams :) </figcaption>
          </figure>
          <p>
            I love beauty in general. My husband always refers to me as his sexy
            girl, even after many years of mariage and children.<br></br>{" "}
            <br></br>That's why i dream to learn professional make-up and who
            knows, maybe become a real make-up artist one day lol.
          </p>
        </article>
      </section>
    </main>
  );
};

export default About;
