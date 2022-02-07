import { useState, useEffect } from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'

function Player({ accessToken, trackUri }) {
    const [play, setPlay] = useState(false)

    useEffect(() => setPlay(true), [trackUri])

    console.log(accessToken)
    if (!accessToken) return null
    return (<SpotifyPlayer 
        token={accessToken}
        showSaveIcon
        callback={state => {
            if (!state.isPlaying) setPlay(false)
        }}
        play={play}
        uris={trackUri ? [trackUri] : []}
    />)

}

export default Player
