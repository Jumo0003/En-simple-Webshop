"use client";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";

const Cookiebtn = ({ setIsAccepted }) => {
  return (
    <button onClick={() => setIsAccepted(true)} className="cookie-consent-popup-cta pointer">
      I like Cookies
    </button>
  );
};

const CookieConsentPopup = () => {
  const [isAccepted, setIsAccepted] = useState(false);

  return (
    !isAccepted && (
      <section className="cookie-consent-popup">
        <header className="cookie-consent-popup-header">
          <LiaCookieBiteSolid size={50} />
          <IoIosClose onClick={() => setIsAccepted(true)} className="pointer" size={25} />
        </header>

        <footer className="cookie-consent-popup-footer">
          <p className="cookie-consent-popup-paragraph">We use cookies to improve your user experience!</p>
          <Cookiebtn setIsAccepted={setIsAccepted} />
        </footer>
      </section>
    )
  );
};

export default CookieConsentPopup;
