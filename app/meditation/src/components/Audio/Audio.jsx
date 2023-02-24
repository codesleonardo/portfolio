import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import './Audio.css';
export default function Audio(props){
    return(
    <>
        <h3><span className="audio__span">Now Playing: </span>{props.title? props.title : "Select below to choose"}</h3>
    <AudioPlayer
    src={props.src}
    />
    </>
    )
}