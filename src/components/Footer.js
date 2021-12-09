import React from "react"
import AudioPlayer from "./AudioPlayer"

const Footer = ({ id, list, songs, pause }) => {
    return (
        <div>
            <AudioPlayer
                ids={id}
                list={list}
                song={songs}
                pause={pause}
            />
        </div>
    )
}

export default Footer