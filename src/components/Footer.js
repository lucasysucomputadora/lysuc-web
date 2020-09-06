import React from "react"
import AudioPlayer from "./AudioPlayer"

const Footer = ({ id, list, songs }) => {
    return (
        <div>
            <AudioPlayer
                ids={id}
                list={list}
                song={songs}
            />
        </div>
    )
}

export default Footer