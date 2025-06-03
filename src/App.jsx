import React, { useEffect, useRef, useState } from 'react';
import Chat from './chat';
import VideoBackground from "./video_bg";

function getTimeOfDay() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "morning";
  if (hour >= 12 && hour < 17) return "day";
  if (hour >= 17 && hour < 20) return "evening";
  return "night";
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState('');

  const songs = [
    '/music/jeene.mp3',
    '/music/Gale.mp3',
    '/music/jugraafiya.mp3',
    '/music/Saawali.mp3',
    '/music/Fakira.mp3'
  ];

  // 🎵 Handle autoplay when currentSong changes
  useEffect(() => {
    const audio = audioRef.current;
    if (audio && currentSong) {
      audio.volume = 0.5;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Autoplay failed:", err);
        });
      }
    }
  }, [currentSong]);

  useEffect(() => {
    const heartContainer = document.createElement('div');
    heartContainer.className = 'hearts-bg';
    document.body.appendChild(heartContainer);

    for (let i = 0; i < 20; i++) {
      const heart = document.createElement('span');
      heart.innerText = '💖';
      heart.className = 'floating-heart';
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.animationDelay = `${Math.random() * 5}s`;
      heart.style.fontSize = `${16 + Math.random() * 20}px`;
      heartContainer.appendChild(heart);
    }

    return () => {
      document.body.removeChild(heartContainer);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!playing) {
      const randomSong = songs[Math.floor(Math.random() * songs.length)];
      setCurrentSong(randomSong); // triggers effect
    } else {
      audio.pause();
    }

    setPlaying(!playing);
  };

  if (loading) {
    return (
      <div className="loader-screen">
        <div className="heart-loader">💗</div>
        <p>Krish is joining... just for you, Himanshi Ji 💞</p>
      </div>
    );
  }

  return (
    <>
      <VideoBackground />

      <div className="app-content">
        <div style={{
          textAlign: 'center',
          fontSize: '14px',
          marginBottom: '10px',
          color: '#ffffff',
        }}>
          💞 Just ME & YOU 💞
        </div>
        <div className="tear-reveal">
          <img src="/ripped_paper.png" className="ripped" />
        </div>

        <button
          onClick={toggleMusic}
          style={{
            position: 'fixed',
            right: '10px',
            top: '10px',
            zIndex: 1000,
            background: 'transparent',
            color: '#FFC0CB',
            border: 'none',
            padding: '6px 12px',
            borderRadius: '10px',
            fontSize: '14px',
            cursor: 'pointer'
          }}
        >
          {playing ? '⏸' : '▶️'}
        </button>

        <audio ref={audioRef} src={currentSong} loop />

        <Chat />
      </div>
    </>
  );
}
