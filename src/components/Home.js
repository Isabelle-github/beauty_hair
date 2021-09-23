import React from "react";
import boxbraids from "../img/boxbraids.jpeg";
import cornrows from "../img/cornrows.jpeg";
import dreadlocs from "../img/dreadlocs4.jpeg";

const Home = () => {
  return (
    <main>
      <div className="parallax">
        <h1>Welcome to Beauty Grace! Get ready for a perfect hairstyle </h1>
      </div>
      <section className="offers">
        <article>
          <figure>
            <img src={`${cornrows}`} alt="pic"></img>
            <figcaption>Corn-Rows</figcaption>
          </figure>
          <p>
            Are you ready for next level stunning Corn-Rows? Beauty Grace
            posesses a rich catalogue of self made Corn-Rows hair styles which
            you can choose from :)
          </p>
        </article>
        <article>
          <figure>
            <img src={`${boxbraids}`} alt="pic"></img>
            <figcaption>Box-Braids</figcaption>
          </figure>
          <p>
            You are more into Braids? No problem :) How do you like them? thick,
            thin, short, long, coloured? There is everything for everyone!
          </p>
        </article>
        <article>
          <figure>
            <img src={`${dreadlocs}`} alt="pic"></img>
            <figcaption>Dread-Locs</figcaption>
          </figure>
          <p>
            And of Course our Dreadlocs fans, Beauty Grace cannot forget you :)
            Blond, dark, red haired, fake and real locs, you name it, we style
            it!
          </p>
        </article>
      </section>
      <div className="parallax parallax2">
        <h1>Happy customers comments</h1>
      </div>
      <section className="testimonial">
        <div className="talk-bubble tri-right border round btm-left-in">
          <div className="talktext">
            <p className="textWrapper">
              <span>
                Thank you for doing them I love them so much xxxxx Very
                beautiful
              </span>
            </p>
          </div>
        </div>
        <div className="talk-bubble tri-right border round btm-left-in">
          <div className="talktext">
            <p className="textWrapper">
              <span>
                Omg beautiful! He loves it thanks so much will be back xx
                Absolutely in love!!!
              </span>
            </p>
          </div>
        </div>
        <div className="talk-bubble tri-right border round btm-left-in">
          <div className="talktext">
            <p className="textWrapper">
              <span data-text="wow amazing, how you manage it? Super, so talented xxx">
                wow amazing, how you manage it? Super, so talented xxx
              </span>
            </p>
          </div>
        </div>
        <div className="talk-bubble tri-right border round btm-left-in">
          <div className="talktext">
            <p className="textWrapper">
              <span>
                Massive thank you xxx It is absolutely how I asked xxx amazing
                job, amazing girls
              </span>
            </p>
          </div>
        </div>
        <div className="talk-bubble tri-right border round btm-left-in">
          <div className="talktext">
            <p className="textWrapper">
              <span>
                Thank you so so so much. I am so in love with my hair, highly
                recommend you, thank you again
              </span>
            </p>
          </div>
        </div>
        <div className="talk-bubble tri-right border round btm-left-in">
          <div className="talktext">
            <p className="textWrapper">
              <span>
                Absolutely in love with it.. that looks so beautiful thanks babe
                I love it
              </span>
            </p>
          </div>
        </div>
        <div className="talk-bubble tri-right border round btm-left-in">
          <div className="talktext">
            <p className="textWrapper">
              <span>
                Stunning xx, cant wait when will be done my hair, love it thank
                you so much xx
              </span>
            </p>
          </div>
        </div>

        <div className="talk-bubble tri-right border round btm-left-in">
          <div className="talktext">
            <p className="textWrapper">
              <span>
                Beautiful as always! She loves them thank you so much xx
              </span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
