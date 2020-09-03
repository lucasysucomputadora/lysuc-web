import React from 'react'

function Playlist({ playlist, activeTrackIndex, onSelectTrackIndex }) {
 // console.log(playlist)
 return (
      <div>
        {playlist.map((track, i) => {
          const playing = activeTrackIndex === i;
          return (
            <div key={track.title}>
              {playing && <strong>{track.title} (playing)</strong>}
              {!playing &&
                <p style={{backgroundColor:"black", color:"white"}}
                  onClick={() => onSelectTrackIndex(i)}
                >
                  {track.title}
                </p>}
            </div>
          );
        })}
      </div>
    );
  }


export default Playlist
