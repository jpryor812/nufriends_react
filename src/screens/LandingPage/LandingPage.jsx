import React from "react";
import "./style.css";

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="div">
        <div className="overlap">
          <img className="emoji-waving-hand" alt="Emoji waving hand" src={process.env.PUBLIC_URL + "/img/emoji-waving-hand-sign.svg"} />
          <div className="text-wrapper">Find My Friends</div>
        </div>
        <div className="overlap-group">
          <p className="p">Find Five New Friends in Five Minutes</p>
          <div className="text-wrapper-2">Never Feel Alone Again</div>
          <div className="group">
            <div className="text-wrapper-3">nufriends</div>
          </div>
          <img className="img" alt="Emoji waving hand" src={process.env.PUBLIC_URL + "/img/emoji-waving-hand-sign-1.png"} />
          <img className="busts-in-silhouette" alt="Busts in silhouette" src={process.env.PUBLIC_URL + "/img/busts-in-silhouette.svg"} />
          <img className="robot-final" alt="Robot final" src={process.env.PUBLIC_URL + "/img/robot-final-3-1-1.svg"} />
        </div>
        <p className="text-wrapper-4">
          Worried about the cold start to the conversation? Your AI Companion, who knows you best, will facilitate that
          first conversation for you!
        </p>
        <p className="text-wrapper-5">
          Answer a few questions to help us get to know you, and then we’ll match you with people we feel you’ll build a
          connection with!
        </p>
        <img className="icon-mail" alt="Icon mail" src={process.env.PUBLIC_URL + "/img/icon-mail.png"} />
      </div>
    </div>
  );
};
