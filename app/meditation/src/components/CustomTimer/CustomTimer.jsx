import React, { useState } from "react";
import './CustomTimer.css';
import gongSound from '../../meditations/Metal_Gong-Dianakc-109711828.mp3';
import bell from '../../meditations/Temple Bell Bigger-SoundBible.com-1940249027.mp3';
export default function CustomTimer() {
  const [timer, setTimer] = useState(0);
  const gongMusic = new Audio(gongSound);
  const bellSound = new Audio(bell);

  function handleSubmit(e) {
    e.preventDefault();
    bellSound.play()
    let startTime = new Date().getTime();    
    let rand = Math.round(Math.random() * (300000)) + 500;
    const interval = setInterval(function () {
      if (new Date().getTime() - startTime > timer) {
        clearInterval(interval);
        return;
      }
      gongMusic.play()
    }, rand);
    setTimeout(function(){bellSound.play()}, timer)
  }

  function updateChange(e) {
    setTimer(e.target.value * 60 * 1000)
    console.log(timer)
  }
  return (
    <form className="timer__form" onSubmit={handleSubmit}>
      <p>Enter custom meditation time:</p> <input placeholder="enter time in minutes" onChange={updateChange} />
      <input type="submit" value="Start" />
    </form>
  )

}