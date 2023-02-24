import "./TrackList.css";

export default function TrackList({tracks, handleTrackClick}){
    return(
        <ul className="track__list">
        {tracks.map((track)=>{
            return(
                <li onClick={()=>{handleTrackClick(track)}} className="track__item">
                    <h4 className="track__text">{track.name}</h4>
                    <h5 className="track__text">{track.artist}</h5>
                </li>
            )
        })}
        </ul>
    )


}