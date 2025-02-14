import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [shake, setShake] = useState(false);
  const audioRef = useRef(null);

  const handleYesClick = () => {
    setMessage(
      "Happy Valentine's Day, mi amor!\n\nI truly appreciate having you as my girl—your love, kindness, and compassion mean the world to me. You are my source of comfort when I’m down, the reason I smile every day, and your beauty continues to amaze me.\n\nI love you to the moon and back, and love you the most in the universe.\n\nHappy Valentine's Day, Dami. ❤️"
    );
    setShowPopup(true);
    if (audioRef.current) {
      audioRef.current.play(); // Play the song when button is clicked
    }
  };

  const handleNoClick = () => {
    setMessage("Oops! This option is unavailable 😉");
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-pink-100 text-center p-4 relative">
      <h1 className="text-3xl font-bold text-red-500">
        Will you be my Valentine? ❤️
      </h1>

      {/* Image Section with Circular Layout */}
      <div className="mt-6 relative w-64 h-64">
        <img
          src="/img_1.JPG"
          alt="Her 1"
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full shadow-lg"
        />
        <img
          src="/img_4.jpg"
          alt="Her 2"
          className="absolute top-1/2 left-0 transform -translate-y-1/2 w-32 h-32 rounded-full shadow-lg"
        />
        <img
          src="/img_2.PNG"
          alt="Her 3"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full shadow-lg"
        />
      </div>

      <div className="mt-6 flex flex-col space-y-4">
        <button
          className="bg-red-500 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:bg-red-700 transition shadow-lg animate-bounce"
          onClick={handleYesClick}
        >
          Yes
        </button>
        <button
          className={`bg-gray-400 text-white px-6 py-3 rounded-lg text-xl font-semibold cursor-not-allowed ${
            shake ? "animate-shake" : ""
          }`}
          onClick={handleNoClick}
        >
          No
        </button>
      </div>

      {/* Audio Element (Hidden) */}
      <audio ref={audioRef} src="/song/dist.mp3" preload="auto" />

      {/* Popup Message */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-md bg-opacity-30">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center sm:w-full lg:w-3/4">
            <p className="text-lg text-red-500 font-bold whitespace-pre-line">
              {message}
            </p>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
