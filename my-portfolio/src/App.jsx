import React from "react";
import "./App.css";
import Header from "./components/Header";

import Text from "../src/components/text";

const App = () => {
  return (
    <div className="App">
      <Header />

      <main>
        <section className="hero-section">
          <video autoPlay loop muted className="background-video">
            <source src="/videos/background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-content">
            <div className="code-line">
              <span>System</span>
              <span style={{ color: "white" }}>
                .<span style={{ color: "#e06c75" }}>out</span>.
              </span>
              <span style={{ color: "#61afef" }}>println</span>
              <span></span>
              <div className="string">
                <span className="greeting en">"Hello World!"</span>
                <span className="greeting es">"¡Hola Mundo!"</span>
                <span className="greeting de">"Hallo Welt!"</span>
                <span className="greeting it">"Ciao Mondo!"</span>
              </div>
              {/* <h1 className="closure">;</h1> */}
            </div>
          </div>
        </section>
        <section id="core" className="info-section">
          <div className="info-card">
            <h3>Space Colony</h3>
          </div>
          <div className="info-card">
            <h3>Explore Space</h3>
          </div>
          <div className="info-card">
            <h3>Build Future Space</h3>
          </div>
          <Text />
        </section>
      </main>
    </div>
  );
};

export default App;
