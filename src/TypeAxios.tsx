import axios from "axios"
import { useEffect, useState } from "react"

type Songs = {
  playlistName: String,
  songs:SongsArray[]
}

type SongsArray = {
  name: String
}

async function getSongs() {
  const response = await axios.get<Songs>('https://be-ask.tanaypratap.repl.co/playlist')
  return response.data
}


export const TypeAxios = () => {
  const [playlist, setPlaylist] = useState<Songs | null>(null)
  
  useEffect(() => {
    (
      async function () {
        const data = await getSongs();
        setPlaylist(data);
      }()
    )
  },[])

  return (
    <div>
      <h1>Axios Using TypeScript</h1>
      <h2>{playlist?.playlistName}</h2>
      {
        playlist?.songs.map(song => {
          return <li>{ song.name }</li>
        })
      }
    </div>
  )
}

