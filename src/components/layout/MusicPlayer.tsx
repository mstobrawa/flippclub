"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px) and (pointer: fine)");

    const audio = new Audio("/audio/theme.mp3");
    audio.loop = true;
    audio.preload = "none";
    audioRef.current = audio;
    audio.volume = 0.25;

    const syncDesktop = () => {
      setIsDesktop(media.matches);

      if (!media.matches) {
        audio.pause();
        audio.currentTime = 0;
      }
    };

    const handlePlay = () => {
      setIsPlaying(true);
      setError(false);
    };

    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    media.addEventListener("change", syncDesktop);

    syncDesktop();

    return () => {
      media.removeEventListener("change", syncDesktop);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const togglePlayback = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      return;
    }

    try {
      await audio.play();
      setError(false);
    } catch {
      setError(true);
    }
  }, []);

  if (!isDesktop) return null;

  return (
    <button
      type="button"
      onClick={togglePlayback}
      aria-label={isPlaying ? "Zatrzymaj muzykę" : "Włącz muzykę"}
      aria-pressed={isPlaying}
      className={`music-toggle fixed bottom-5 right-5 z-100 flex items-center gap-3 rounded-full border-2 px-5 py-4 font-mono text-sm font-bold uppercase tracking-wider transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fdc302] ${
        isPlaying
          ? "border-[#fdc302] bg-[#08082b]/95 text-[#fdc302] shadow-[0_0_20px_rgba(253,195,2,0.25)]"
          : "music-toggle-idle border-[#fdc302] bg-[#fdc302] text-[#08082b] shadow-[0_0_25px_rgba(253,195,2,0.55)] hover:scale-105 hover:bg-[#ffe36a]"
      }`}
    >
      <span className="text-xl" aria-hidden="true">
        {isPlaying ? "♫" : "▶"}
      </span>

      <span>
        {error ? "Spróbuj ponownie" : isPlaying ? "Muzyka ON" : "Włącz muzykę"}
      </span>

      {!isPlaying && (
        <span
          className="h-2 w-2 rounded-full bg-[#08082b]"
          aria-hidden="true"
        />
      )}
    </button>
  );
}
