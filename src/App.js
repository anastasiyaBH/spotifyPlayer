import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Authorization from './components/Authorization';
import Player from './components/Player'
import hash from './hash'

import * as $ from "jquery";


const App = () => {

  const [token, setToken] = useState(null);
  const [isPlaying, setIsPlaying] = useState('Paused');
  const [progress, setProgress] = useState(0);
  const [item, setItem] = useState({
    album: {
      images: [{ url: "" }]
    },
    name: "",
    artists: [{ name: "" }],
    duration_ms: 0,
  });

  const getCurrentlyPlaying = (token) => {
    console.log(token);
    fetch('https://api.spotify.com/v1/me/player',
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      }
    )
      .then((response) => {
        console.log (response);
        return response.json();
      }
      )
      .then((rez) => {
        console.log(rez);
      })
        /*let d = JSON.stringify(rez);
        console.log(d);
        setItem(data.item);
        setIsPlaying(data.is_playing);
        setProgress(data.progress_ms);
      })*/
  }

  useEffect(() => {
    console.log(hash);
    let _token = hash.access_token;
    if (_token) setToken(_token);
    getCurrentlyPlaying(_token);
  }, []);


  return (
    <>
      <Header text="Spotify Player" />
      <Authorization />
      {/*token && (
        <Player
          item={item}
          is_playing={isPlaying}
          progress_ms={progress}
        />
      )*/}
    </>
  );
};

export default App;
