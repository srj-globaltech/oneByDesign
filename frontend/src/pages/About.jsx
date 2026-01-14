// src/pages/About.jsx
import { useEffect } from 'react';
import './About.css';
import './Home.css';

const About = () => {

  // Scroll trigger animation for text
  useEffect(() => {
    const textElements = document.querySelectorAll('.about-text-reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
    );

    textElements.forEach(el => observer.observe(el));
    return () => textElements.forEach(el => observer.unobserve(el));
  }, []);

  // ONE SINGLE OBSERVER – NO FLICKERING, SMOOTH EVERYWHERE
  useEffect(() => {
    const elements = document.querySelectorAll('.scroll-trigger');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('triggered');
          } else {
            entry.target.classList.remove('triggered'); // allows re-trigger
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
      }
    );

    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []); // ← Only runs once!

  return (
    <>
      {/* ==================== HERO IMAGE SECTION WITH "ABOUT US" ==================== */}
      <section className="about-hero h-screen">
        <div className="about-hero-image">
          <div className="about-hero-overlay"></div>
          <h1 className="about-hero-title">About Us</h1>
        </div>
      </section>

      {/* ==================== MAIN TEXT SECTION – SCROLL TRIGGER ==================== */}
      <section className="about-content-section">
        <div className="about-content-container">

          <div className="about-text-wrapper">
            <p className="about-main-text about-text-reveal scroll-trigger">
              The Firm was started with a common goal of delivering Excellence in the designs conceptualized and executed. 
              Our aim was to design projects that goes beyond current norms and fads.
            </p>

            <p className="about-main-text about-text-reveal scroll-trigger">
              We have a highly collaborative and supportive team, coming together on every project to ensure 
              our clients get the very best space.
            </p>
          </div>

        </div>
      </section>



            {/* ==================== OUR MISSION & VALUES – CENTERED + ANIMATED ==================== */}
   
       {/* ==================== OUR MISSION & VALUES – EXACT + SMOOTH SCROLL ANIMATION ==================== */}
      <section className="mission-values-perfect">
        <div className="mission-values-inner">

          {/* Small Centered Image */}
          <div className="mission-image-box scroll-trigger scroll-animate">
            <div className="blue-bar-image"></div>
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80"
              alt="Architect at work"
              className="mission-img"
            />
          </div>

          {/* Mission + Values */}
          <div className="mission-values-flex">

            <div className="value-card scroll-trigger scroll-animate">
              <h3 className="value-title">Our Mission</h3>
              <div className="blue-bar"></div>
              <p className="value-desc">
               Our mission is to inspire and elevate the hearts and minds of all those who lay eyes on our thoughtfully designed spaces, executed with equal finesse
              </p>
            </div>

            <div className="value-card scroll-trigger scroll-animate">
              <h3 className="value-title">Our Values</h3>
              <div className="blue-bar"></div>
              <p className="value-desc">
               We strive to be a customer centric business. to be a single point of contact for various Architectural and Interior needs. 
              </p>
            </div>

          </div>
        </div>
      </section>
      {/* {About us footer part} */}

       <section className="bg-[#0F0F0F] sm:flex md:h-[500px] h-screen justify-between  items-center">
      {/* Text Block */}
      <div className="text-[#a9bcd0] w-full sm:w-1/2 gap-5 flex flex-col items-center justify-center text-center p-6">
        <p className="font-medium text-xl w-11/12 mb-4 rounded-md p-2">
          Est. since 2023
        </p>
        <p className="font-[4rem] text-4xl w-11/12 mb-6 rounded-md p-3">
          ABOUT US
        </p>
        <p className="md:text-lg text-lg w-[80%] rounded-md p-4">
          1 by Design is a one stop shop for all your Interior and Architecture
          Design solutions, delivering timeless and chic designed spaces executed
          turnkey. We offer services for luxury living, hospitality, and commercial
          workspaces along with curated furniture and styling.
        </p>
        <button className='pointer border'>
          Find Out More
        </button>
      </div>

      {/* Image Block */}
      <div className="w-full sm:w-1/2 flex justify-center items-center p-6">
        <img
          className="w-4/5 h-auto md:w-1/2 md:h-auto rounded-xl md:rounded-[4rem]"
          src="https://res.cloudinary.com/devcjzuyj/image/upload/q_auto,f_auto/v1768303719/Screenshot-2022-01-18-173016_n5lqin.jpg"
          alt="About Us"
        />
      </div>
    </section>



    </>
  );
};

export default About;