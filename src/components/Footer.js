import React from "react"
import AudioPlayer from "./AudioPlayer"

const Footer = ({ id, list, songs }) => {
    return (
        <div>

            <AudioPlayer
                ids={id}
                list={list}
                src={songs}
            />
        </div>
    )
}

export default Footer