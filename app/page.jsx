"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Menu from "./components/menu/Menu";
import Home from "./components/home/Home";

export default function Homepage() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.wrapper}>
          <Home></Home>
          {/*
      <section id="html5" className={styles.}="scene">
        <div className={styles.}="header-content green-background">
          <div className={styles.}="header header-home dark-green">html5</div>
        </div>
        <div className={styles.}="main-content">
          <div className={styles.}="main-content-wrapper">
            <div className={styles.}="body-copy dark-green">
              Who doesn’t like clean, scalable, re-usable animations?
              <br />I have storyboarded and built tons of HTML5 banners,
              including many masters for <span className={styles.}="bold">SDL</span> and{" "}
              <span className={styles.}="bold">JP&nbsp;Morgan</span>.
            </div>
            <div id="cta-html5" className={styles.}="cta green-cta">
              See some examples here &#8594;
            </div>
            <div className={styles.}="tech-box dark-green">
              <p className={styles.}="small">TECH I use</p>
              <ul className={styles.}="list-middot">
                <li className={styles.}="tech-box-item">HTML / CSS</li>
                <li className={styles.}="tech-box-item">JAVASCRIPT</li>
                <li className={styles.}="tech-box-item">GREENSOCK</li>
                <li className={styles.}="tech-box-item">SVG ANIMATION</li>
                <li className={styles.}="tech-box-item">ADOBE PHOTOSHOP</li>
                <li className={styles.}="tech-box-item">GOOGLE WEB DESIGNER</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.}="say-hi dark-purple">
          SAY BONJOUR{" "}
          <a className={styles.}="say-hi-link dark-purple" href="#hi">
            HERE
          </a>
        </div>
      </section>

      <section id="motion" className={styles.}="scene">
        <div className={styles.}="header-content pink-background">
          <div className={styles.}="header header-home dark-pink">
            motion
            <br />
            graphics
          </div>
        </div>
        <div className={styles.}="main-content">
          <div className={styles.}="main-content-wrapper">
            <div className={styles.}="body-copy dark-pink">
              I like moving images. They are fun. I have animated, edited and
              created a lot of short videos for{" "}
              <span className={styles.}="bold">JP&nbsp;Morgan</span>.
            </div>
            <div id="cta-motion" className={styles.}="cta pink-cta">
              Watch an example here &#8594;
            </div>
            <div className={styles.}="tech-box dark-pink">
              <p className={styles.}="small">TECH I use</p>
              <ul className={styles.}="list-middot">
                <li className={styles.}="tech-box-item">ADOBE AFTER EFFECTS</li>
                <li className={styles.}="tech-box-item">ADOBE PREMIERE</li>
                <li className={styles.}="tech-box-item">ADOBE PHOTOSHOP</li>
                <li className={styles.}="tech-box-item">ADOBE ILLUSTRATOR</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.}="say-hi dark-purple">
          SAY HOLA{" "}
          <a className={styles.}="say-hi-link dark-pink" href="#hi">
            HERE
          </a>
        </div>
      </section>

      <section id="ui" className={styles.}="scene">
        <div className={styles.}="header-content light-blue-background">
          <div className={styles.}="header header-home dark-blue">
            user
            <br />
            interface
          </div>
        </div>
        <div className={styles.}="main-content">
          <div className={styles.}="main-content-wrapper">
            <div className={styles.}="body-copy dark-blue">
              I have concepted, designed and built a language learning app for
              Android and its accompanying website.
            </div>
            <a href="https://liisten.net/" target="_blank" className={styles.}="cta blue-cta">
              Visit the site here &#8594;
            </a>
            <div className={styles.}="tech-box dark-blue">
              <p className={styles.}="small">TECH I use</p>
              <ul className={styles.}="list-middot">
                <li className={styles.}="tech-box-item">HTML / CSS</li>
                <li className={styles.}="tech-box-item">TYPESCRIPT / JAVASCRIPT</li>
                <li className={styles.}="tech-box-item">ANGULAR</li>
                <li className={styles.}="tech-box-item">ADOBE XD</li>
                <li className={styles.}="tech-box-item">ADOBE PHOTOSHOP</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.}="say-hi dark-blue">
          SAY KONNICHIWA{" "}
          <a className={styles.}="say-hi-link dark-blue" href="#hi">
            HERE
          </a>
        </div>
      </section>

      <section id="hi" className={styles.}="scene">
        <div className={styles.}="header-content orange-background">
          <div className={styles.}="header header-home dark-blue">say hi</div>
        </div>
        <div className={styles.}="main-content">
          <div className={styles.}="main-content-wrapper">
            <div className={styles.}="body-copy dark-blue">
              <a
                href="mailto:hello@antoinepommert.com"
                className={styles.}="say-hi-email dark-blue bold"
              >
                hi@antoinepommert.com
              </a>
            </div>
          </div>
        </div>
      </section>

 

      <div id="overlay-motion" className={styles.}="overlay"></div>
      <div id="popover-motion">
        <video id="video-motion" src="assets/img/video.mp4" controls></video>
      </div>
      <div id="close-button-motion" className={styles.}="close-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26 26"
          fill="none"
          role="img"
          className={styles.}="icon fill-current"
        >
          <path
            d="M8.28596 6.51819C7.7978 6.03003 7.00634 6.03003 6.51819 6.51819C6.03003 7.00634 6.03003 7.7978 6.51819 8.28596L11.2322 13L6.51819 17.714C6.03003 18.2022 6.03003 18.9937 6.51819 19.4818C7.00634 19.97 7.7978 19.97 8.28596 19.4818L13 14.7678L17.714 19.4818C18.2022 19.97 18.9937 19.97 19.4818 19.4818C19.97 18.9937 19.97 18.2022 19.4818 17.714L14.7678 13L19.4818 8.28596C19.97 7.7978 19.97 7.00634 19.4818 6.51819C18.9937 6.03003 18.2022 6.03003 17.714 6.51819L13 11.2322L8.28596 6.51819Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      <div id="overlay-html5" className={styles.}="overlay"></div>
      <div id="popover-html5">
        <img src="assets/img/gallery.png" />
        <a
          id="popover-cta-html5"
          className={styles.}="cta green-cta"
          href="https://liisten.net/html5"
          target="_blank"
        >
          See live example &#8594;
        </a>
      </div>
      <div id="close-button-html5" className={styles.}="close-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26 26"
          fill="none"
          role="img"
          className={styles.}="icon fill-current"
        >
          <path
            d="M8.28596 6.51819C7.7978 6.03003 7.00634 6.03003 6.51819 6.51819C6.03003 7.00634 6.03003 7.7978 6.51819 8.28596L11.2322 13L6.51819 17.714C6.03003 18.2022 6.03003 18.9937 6.51819 19.4818C7.00634 19.97 7.7978 19.97 8.28596 19.4818L13 14.7678L17.714 19.4818C18.2022 19.97 18.9937 19.97 19.4818 19.4818C19.97 18.9937 19.97 18.2022 19.4818 17.714L14.7678 13L19.4818 8.28596C19.97 7.7978 19.97 7.00634 19.4818 6.51819C18.9937 6.03003 18.2022 6.03003 17.714 6.51819L13 11.2322L8.28596 6.51819Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      */}
        </div>
      </div>
      <Menu></Menu>
    </>
  );
}
