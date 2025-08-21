import React, { useState } from "react";
import "./Home.css";
import { LineChart, TrendingUp, RefreshCcw } from "lucide-react";
import bitcoin from "../assets/bitcoin.png";

import Auth from "../LoginSignUp/Auth"; 

const Home = () => {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <div className="crypto-containerr">
      <div className="navbarr">
        <h1 className="logoo">CryptoPlace</h1>
        <button className="btn-primaryy" onClick={() => setShowAuth(true)}>
          Get Started
        </button>
      </div>

      <div className="heroo">
        <div className="heroo-textt">
          <h2 className="firstt">Track Crypto Like</h2>
          <h2 className="secondd">Never Before 🚀</h2>
          <p>
            Real-time cryptocurrency prices, history, and insights <br /> all in
            one place. Stay ahead in the digital market <br /> with CryptoPlace.
          </p>
          <button className="btn-secondaryy" onClick={() => setShowAuth(true)}>
            Explore Now
          </button>
        </div>
        <div className="heroo-imagee">
          <img src={bitcoin} alt="bitcoinn" />
        </div>
      </div>

      <div className="features">
        <div className="feature-card">
          <div className="feature-title blue">
            <LineChart size={20} /> Live Prices
          </div>
          <p>Stay updated with real-time cryptocurrency market movements.</p>
        </div>

        <div className="feature-card">
          <div className="feature-title purple">
            <TrendingUp size={20} /> Historical Data
          </div>
          <p>Access detailed history and analyze trends with interactive charts.</p>
        </div>

        <div className="feature-card">
          <div className="feature-title pink">
            <RefreshCcw size={20} /> Change Rate
          </div>
          <p>Convert your crypto to your own currency with ease.</p>
        </div>
      </div>

      {showAuth && <Auth onClose={() => setShowAuth(false)} />}
    </div>
  );
};

export default Home;
