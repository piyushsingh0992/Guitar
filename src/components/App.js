import React from "react";
import "./App.css";

export default function App() {
  function audioHandler(event) {
    var StringClass = event.target.className;
    var audio = document.getElementById(`${StringClass}`);

    if (audio!==null)
    { audio.pause();
      audio.play();
    
    

    document.querySelector(`.${StringClass}`).classList.toggle("playing");
    setTimeout(function () {
      document.querySelector(`.${StringClass}`).classList.toggle("playing");
    }, 300);}
  }

  return (
    <div className="App">
      <div className="container">
        <hr onClick={audioHandler} className="E-6" />
        <hr onClick={audioHandler} className="B" />
        <hr onClick={audioHandler} className="G" />
        <hr onClick={audioHandler} className="D" />
        <hr onClick={audioHandler} className="A" />
        <hr onClick={audioHandler} className="E-1" />
      </div>

      <audio id="E-6" src="audios/E-6.mp3"></audio>
      <audio id="B" src="audios/B.mp3"></audio>
      <audio id="G" src="audios/G.mp3"></audio>
      <audio id="D" src="audios/D.mp3"></audio>
      <audio id="A" src="audios/A.mp3"></audio>
      <audio id="E-1" src="audios/E-1.mp3"></audio>
    </div>
  );
}
