import React from "react";
import Head from 'next/head';
import Image from 'next/image';
import styles from './style.css';  // If you prefer using CSS modules, you can rename this file to `style.module.css`

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Nufriends - Find My Friends</title>
        <meta name="description" content="Find five new friends in five minutes" />
      </Head>
      
      <div className={styles['landing-page']}>
        <div className={styles.div}>
          <div className={styles.overlap}>
            <Image
              className={styles['emoji-waving-hand']}
              alt="Emoji waving hand"
              src="/emoji-waving-hand-sign.svg"
              width={79}
              height={70}
            />
            <div className={styles['text-wrapper']}>Find My Friends</div>
          </div>

          <div className={styles['overlap-group']}>
            <p className={styles.p}>Find Five New Friends in Five Minutes</p>
            <div className={styles['text-wrapper-2']}>Never Feel Alone Again</div>
            <div className={styles.group}>
              <div className={styles['text-wrapper-3']}>nufriends</div>
            </div>
            <Image
              className={styles.img}
              alt="Emoji waving hand"
              src="/emoji-waving-hand-sign-1.png"
              width={75}
              height={60}
            />
            <Image
              className={styles['busts-in-silhouette']}
              alt="Busts in silhouette"
              src="/busts-in-silhouette.svg"
              width={65}
              height={68}
            />
            <Image
              className={styles['robot-final']}
              alt="Robot final"
              src="/robot-final-3-1-1.svg"
              width={75}
              height={100}
            />
          </div>

          <p className={styles['text-wrapper-4']}>
            Worried about the cold start to the conversation? Your AI Companion, who knows you best, will facilitate that
            first conversation for you!
          </p>
          <p className={styles['text-wrapper-5']}>
            Answer a few questions to help us get to know you, and then we’ll match you with people we feel you’ll build a
            connection with!
          </p>
          <Image
            className={styles['icon-mail']}
            alt="Icon mail"
            src="/icon-mail.png"
            width={71}
            height={53}
          />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
