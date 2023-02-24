import './App.css';
import Audio from './components/Audio/Audio';
import bodyScan from './meditations/StillMind4MinuteBodyScan.mp3';
import MARCBreath from './meditations/MARCBreathSoundBodyMeditation.mp3';
import Mountain from './meditations/PadraigTheMountain.mp3';
import Movements from './meditations/CoreyRoosGentleMindfulYoga.mp3'
import fiveMinuteBells from './meditations/FreeMindfulness5MinuteJustBells.mp3';
import twentyMinute from './meditations/FreeMindfulness20MinuteBellsWithIntervals.mp3';
import Yoga from './assets/Yoga - Relax.svg';
import TrackList from './components/TrackList/TackList';
import { useState } from 'react';
import CustomTimer from './components/CustomTimer/CustomTimer';
function App() {
  const [selectedTrack, setSelectedTrack] = useState({ src: "", title: "" })
  const [selectedAudio, setSelectedAudio] = useState({});
  const [timer, setTimer] = useState(0);
  const allTracks = [
    {
      name: "4 Minute Body Scan",
      src: bodyScan,
      artist: "Melbourne Mindfulness Centre & Still Mind"
    },
    {
      name: "Breath, Sound and Body",
      src: MARCBreath,
      artist:"Mindful Awareness Research Center, UCLA"
    },
    {
      name: "Mountain Imagry Meditation",
      src: Mountain,
      artist: "Padraig O'Morain"
    },
    {
      name: "Gentle Yoga",
      src: Movements,
      artist: "Corey Roos, White Cloud Wellness"
    },
    {
      name: "Self-Guided 5 minutes of bells",
      src: fiveMinuteBells,
      artist: "Peter Morgan, Free Mindfulness"
    },
    {
      name: "Self-Guided 20 minute",
      src: twentyMinute,
      artist: "Peter Morgan, Free Mindfulness"
    },
  ];
  function trackClick(track) {
    setSelectedTrack(track)
    setSelectedAudio(track.src)

  }
  return (
    <div className="App">
      <header className="header">
        <h1 className="header__main">Mindful Meditations</h1>
        <h2 className="header__subheading">Guided Meditation on your terms</h2>
      </header>
      <img src={Yoga} className="header__image" alt="Character in a yoga pose with green flower behind them." />
      <CustomTimer/>
      <Audio
        src={selectedAudio}
        title={selectedTrack.name}
      />
      <TrackList
        tracks={allTracks}
        handleTrackClick={trackClick}
      />
    </div>
  );
}

export default App;
