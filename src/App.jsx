import { useEffect, useState, useRef } from "react";
import "./App.css";

import heroMandap from "./assets/hero-mandap.png";
import flowerLeft from "./assets/flower-left.png";
import flowerRight from "./assets/flower-right.png";
import upsideFlowers from "./assets/upside-flowers.png";
import goldenFlowers from "./assets/golden-flowers.png";
import venue from "./assets/venue.png";
import weddingMusic from "./assets/invitation song.mp3";
import bride from "./assets/bride.png";
import groom from "./assets/groom.png";

function App() {
  const [showReport, setShowReport] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (isMusicPlaying) {
      audioRef.current.pause();
      setIsMusicPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsMusicPlaying(true);
      } catch (error) {
        console.log("Music could not be played:", error);
        setIsMusicPlaying(false);
      }
    }
  };

  const [showSupport, setShowSupport] = useState(false);
  const [reportDescription, setReportDescription] = useState("");
  const [showPrivacy, setShowPrivacy] = useState(false);

  const calculateTimeLeft = () => {
    const weddingDate = new Date(
      "October 30, 2026 00:00:00"
    ).getTime();

    const now = new Date().getTime();
    const difference = weddingDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(
        difference / (1000 * 60 * 60 * 24)
      ),
      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),
      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),
      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    };
  };

  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft()
  );

  /* WISHES */
  const wishes = [
    "Wishing you both a lifetime filled with love, shared dreams, laughter, and beautiful adventures.",
    "May your journey together be filled with happiness, love, and countless beautiful memories.",
    "Wishing you both endless joy, togetherness, and a wonderful life ahead.",
  ];

  const [wishIndex, setWishIndex] = useState(0);

  /* SEND WISHES */
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleWishSubmit = (event) => {
    event.preventDefault();

    if (!name.trim() || !message.trim()) {
      alert("Please enter your name and wishes.");
      return;
    }

    alert(
      "Your wishes have been sent successfully! ❤️"
    );

    setName("");
    setMessage("");
  };

  const handleReportSubmit = () => {
    if (!reportDescription.trim()) {
      alert("Please describe the problem before submitting.");
      return;
    }

    alert(
      "Thank you. Your report has been submitted."
    );

    setReportDescription("");
    setShowReport(false);
  };

  return (
    <div className="wedding-page">

      {/* =========================================
          NAVBAR
          ========================================= */}

      <nav className="navbar">

        <a href="#home" className="active">
          Home
        </a>

        <a href="#about">
          About
        </a>

        <a href="#gallery">
          Gallery
        </a>

      </nav>


      {/* =========================================
          HERO SECTION
          ========================================= */}

      <section
        className="hero"
        id="home"
      >

        <img
          src={upsideFlowers}
          alt=""
          className="upside-flowers"
        />

        <div className="hero-content">

          <p className="invitation-text">
            Inviting you to the celebration of
          </p>

          <div className="couple-names">

            <span>
              Alia Nair
            </span>

            <span className="wed-text">
              wed
            </span>

            <span>
              Aryan Kapoor
            </span>

          </div>

          <p className="wedding-date">
            Oct 30 &amp; 31, 2026 | Hall Complex
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Hall+Complex,+1st+B+Cross+Rd,+7th+Block,+Koramangala,+Bengaluru,+Karnataka+560095"
            target="_blank"
            rel="noopener noreferrer"
            className="map-button"
          >
            View in Map
          </a>


          {/* MANDAP */}

          <div className="mandap-scene">

            <img
              src={flowerLeft}
              alt=""
              className="flower-left"
            />

            <img
              src={heroMandap}
              alt="Wedding Mandap"
              className="mandap-image"
            />

            <img
              src={flowerRight}
              alt=""
              className="flower-right"
            />

          </div>

        </div>


        {/* FLOATING BUTTONS */}

        <div className="floating-buttons">

          <a
            href="tel:+919632106706"
            className="floating-call"
            aria-label="Call"
          >
            📞
          </a>

          <button
            className="floating-button"
            aria-label={
              isMusicPlaying
                ? "Pause music"
                : "Play music"
            }
            onClick={toggleMusic}
          >
            {isMusicPlaying ? "🔊" : "🔇"}
          </button>

        </div>


        <div className="hero-bottom"></div>

      </section>


      {/* =========================================
          COUNTDOWN SECTION
          ========================================= */}

      <section
        className="countdown-section"
        id="countdown"
      >

        <div className="countdown-content">

          <h2>
            Let the Countdown begins
          </h2>

          <div className="countdown-boxes">

            <div className="countdown-item">

              <span className="countdown-number">
                {timeLeft.days}
              </span>

              <span className="countdown-label">
                Days
              </span>

            </div>


            <div className="countdown-item">

              <span className="countdown-number">
                {timeLeft.hours}
              </span>

              <span className="countdown-label">
                Hrs
              </span>

            </div>


            <div className="countdown-item">

              <span className="countdown-number">
                {timeLeft.minutes}
              </span>

              <span className="countdown-label">
                Mins
              </span>

            </div>


            <div className="countdown-item">

              <span className="countdown-number">
                {timeLeft.seconds}
              </span>

              <span className="countdown-label">
                Secs
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          COUPLE SECTION
          ========================================= */}

      <section
        className="couple-section"
        id="about"
      >

        <div className="couple-container">

          <img
            src={goldenFlowers}
            alt=""
            className="golden-flower-left"
          />

          <img
            src={goldenFlowers}
            alt=""
            className="golden-flower-right"
          />


          {/* ALIA */}

          <div className="alia-row">

            <div className="alia-details couple-text">

              <h2>
                Alia Nair
              </h2>

              <p className="family-text">
                D/o Mr. Suresh Nair &amp; Mrs. Lakshmi Nair
              </p>

              <p className="description">
                A free spirit wrapped in grace, Alia moves
                through life with quiet confidence, an
                infectious laugh, and a kindness that
                makes everyone around her feel at home.
              </p>

            </div>


            <div className="alia-picture couple-photo">

              <img
                src={bride}
                alt="Alia Nair"
              />

            </div>

          </div>


          {/* ARYAN */}

          <div className="aryan-row">

            <div className="aryan-picture couple-photo">

              <img
                src={groom}
                alt="Aryan Kapoor"
              />

            </div>


            <div className="aryan-details couple-text">

              <h2>
                Aryan kapoor
              </h2>

              <p className="family-text">
                S/o Mr. Rajesh Kapoor &amp; Mrs. Meena Kapoor
              </p>

              <p className="description">
                A gentle soul with a poet's heart and an
                architect's mind, Aryan finds beauty in the
                details, whether in the curve of a building
                or the warmth of a quiet afternoon.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          WISHES SECTION
          ========================================= */}

      <section
        className="wishes-section"
        id="wishes"
      >

        <div className="wishes-decoration wishes-decoration-left">

          <span></span>
          <span></span>
          <span></span>
          <span></span>

        </div>


        <div className="wishes-content">

          <div className="wishes-heading">

            <h2>
              Wishes for the couple
            </h2>

            <p>
              Send your warm wishes
              <br />
              to the lovely couple
            </p>

          </div>


          <div className="wishes-card">

            <div className="wish-text">

              <p>
                {wishes[wishIndex]}
              </p>

            </div>


            <div className="wish-bottom">

              <button
                className="wish-arrow"
                onClick={() =>
                  setWishIndex(
                    (wishIndex - 1 + wishes.length) %
                    wishes.length
                  )
                }
              >
                ‹
              </button>

              <span>
                {wishIndex + 1} of {wishes.length}
              </span>

              <button
                className="wish-arrow"
                onClick={() =>
                  setWishIndex(
                    (wishIndex + 1) %
                    wishes.length
                  )
                }
              >
                ›
              </button>

            </div>

          </div>

        </div>


        <div className="wishes-decoration wishes-decoration-right">

          <span></span>
          <span></span>
          <span></span>
          <span></span>

        </div>

      </section>


      {/* =========================================
          SEND YOUR WISHES SECTION
          ========================================= */}

      <section
        className="send-wishes-section"
        id="send-wishes"
      >

        <div className="send-wishes-decoration send-wishes-decoration-left">

          <span></span>
          <span></span>
          <span></span>

        </div>


        <div className="send-wishes-content">

          <h2>
            Send Your Wishes
          </h2>

          <p className="send-wishes-subtitle">
            Share your blessings and heartfelt wishes
            <br />
            with the lovely couple
          </p>


          <form
            className="wish-form"
            onSubmit={handleWishSubmit}
          >

            <div className="wish-input-group">

              <label htmlFor="guest-name">
                Your Name
              </label>

              <input
                id="guest-name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(event) =>
                  setName(event.target.value)
                }
              />

            </div>


            <div className="wish-input-group">

              <label htmlFor="guest-message">
                Your Wishes
              </label>

              <div className="wish-textarea-wrapper">

                <textarea
                  id="guest-message"
                  placeholder="Write your wishes for the couple..."
                  value={message}
                  onChange={(event) =>
                    setMessage(event.target.value)
                  }
                  rows="5"
                />

                <button
                  type="button"
                  className="sparkle-button"
                  onClick={() => {
                    setMessage(
                      "Wishing you both a beautiful life filled with love, happiness and wonderful memories. ❤️"
                    );
                  }}
                  aria-label="Add a wish suggestion"
                >
                  ✨
                </button>

              </div>

            </div>


            <button
              type="submit"
              className="send-wishes-button"
            >
              Send Wishes
            </button>

          </form>

        </div>


        <div className="send-wishes-decoration send-wishes-decoration-right">

          <span></span>
          <span></span>
          <span></span>

        </div>

      </section>


      {/* =========================================
          WEDDING CELEBRATIONS SECTION
          ========================================= */}

      <section
        className="celebrations-section"
        id="celebrations"
      >

        <h2 className="celebrations-title">
          The wedding celebrations begins!
        </h2>


        <div className="celebration-card">

          {/* VENUE IMAGE */}

          <div className="celebration-image">

            <img
              src={venue}
              alt="Wedding venue"
            />

          </div>


          {/* EVENT DETAILS */}

          <div className="celebration-details">

            <h3>
              Day1
            </h3>

            <p className="celebration-date">
              30 October 2026
            </p>


            <div className="celebration-divider"></div>


            <div className="celebration-row">

              <span>
                Haldi
              </span>

              <strong>
                7:30 pm
              </strong>

            </div>


            <div className="celebration-divider"></div>


            <div className="celebration-row">

              <span>
                Dinner
              </span>

              <strong>
                9:00 pm
              </strong>

            </div>


            <div className="celebration-divider"></div>


            <p className="venue-name">
              Hall Complex
            </p>


            <a
              href="https://maps.google.com/?cid=3260281787863214776"
              target="_blank"
              rel="noreferrer"
              className="celebration-map-button"
            >
              View in Map
            </a>

          </div>

        </div>

      </section>


      {/* =========================================
          FOOTER
          ========================================= */}

      <footer className="site-footer">

        <div className="footer-main">

          <p className="footer-heading">
            Wedding Invitation website by
          </p>

          <h2 className="footer-logo">
            SHREYA SHETTY
          </h2>

        </div>


        <div className="footer-links">

          <button
            type="button"
            className="footer-report-button"
            onClick={() => setShowReport(true)}
          >
            Report a Problem
          </button>

          <button
            type="button"
            className="footer-support-button"
            onClick={() => setShowSupport(true)}
          >
            Contact Support
          </button>

          <button
            type="button"
            className="footer-privacy-button"
            onClick={() => setShowPrivacy(true)}
          >
            Privacy Policy
          </button>

        </div>


        <p className="footer-powered">
          Powered by Invitation Nation
        </p>


        <p className="footer-copyright">
          © 2026 Invitation Nation. All rights reserved.
        </p>

      </footer>


      {/* =========================================
          REPORT A PROBLEM POPUP
          ========================================= */}

      {showReport && (

        <div
          className="report-overlay"
          onClick={() => {
            setShowReport(false);
            setReportDescription("");
          }}
        >

          <div
            className="report-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              type="button"
              className="report-close"
              onClick={() => {
                setShowReport(false);
                setReportDescription("");
              }}
              aria-label="Close"
            >
              ×
            </button>


            <h2>
              Report a Problem
            </h2>


            <p className="report-subtitle">
              Let us know what's not working.
            </p>


            <div className="report-field">

              <label htmlFor="issue-type">
                Issue Type *
              </label>

              <select id="issue-type">

                <option value="">
                  Select an issue...
                </option>

                <option value="technical">
                  Technical Glitch
                </option>

                <option value="content">
                  Incorrect Content
                </option>

                <option value="design">
                  Design Issue
                </option>

                <option value="other">
                  Other
                </option>

              </select>

            </div>


            <div className="report-field">

              <label htmlFor="problem-description">
                Describe the problem *
              </label>

              <textarea
                id="problem-description"
                maxLength="300"
                placeholder="Please explain the issue briefly so we can review it."
                value={reportDescription}
                onChange={(event) =>
                  setReportDescription(event.target.value)
                }
              ></textarea>


              <div className="report-counter">
                {reportDescription.length}/300
              </div>

            </div>


            <button
              type="button"
              className="submit-report-button"
              onClick={handleReportSubmit}
            >
              SUBMIT REPORT
            </button>


            <p className="confidential-text">
              CONFIDENTIAL SUBMISSION
            </p>

          </div>

        </div>

      )}


      {showSupport && (

        <div
          className="report-overlay"
          onClick={() => setShowSupport(false)}
        >

          <div
            className="report-modal support-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="report-close"
              onClick={() => setShowSupport(false)}
            >
              ×
            </button>


            <h2>
              Contact Support
            </h2>


            <p className="report-subtitle">
              We're here to help with any questions.
            </p>


            <div className="report-field">

              <label>
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email address"
              />

            </div>


            <div className="report-field">

              <label>
                Message
              </label>

              <textarea
                placeholder="How can we help you?"
                rows="5"
              ></textarea>

            </div>


            <button
              type="button"
              className="submit-report-button"
              onClick={() => {
                alert(
                  "Your message has been sent successfully!"
                );
                setShowSupport(false);
              }}
            >
              SEND MESSAGE
            </button>


            <p className="confidential-text">
              We’ll get back to you as soon as possible.
            </p>

          </div>

        </div>

      )}


      {showPrivacy && (

        <div
          className="report-overlay"
          onClick={() => setShowPrivacy(false)}
        >

          <div
            className="report-modal privacy-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="report-close"
              onClick={() => setShowPrivacy(false)}
            >
              ×
            </button>


            <h2>
              Privacy Policy
            </h2>


            <p className="privacy-text">
              Your privacy is important to us. This wedding invitation website 
              is created to share wedding details and allow guests to interact 
              with the invitation.
            </p>


            <p className="privacy-text">
              Any information submitted through the website, such as wishes or 
              support messages, is used only for the purpose of managing this 
              invitation experience.
            </p>


            <p className="privacy-text">
              We do not sell or share your personal information with third 
              parties.
            </p>


            <p className="privacy-last">
              Thank you for being part of our special celebration. ❤️
            </p>

          </div>

        </div>

      )}


      {/* =========================================
          WEDDING MUSIC
          ========================================= */}

      <audio
        ref={audioRef}
        src={weddingMusic}
        preload="auto"
        loop
      />

    </div>
  );
}

export default App;