"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const manuallyDisabledRef = useRef(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px) and (pointer: fine)");

    const audio = new Audio("/audio/theme.mp3");
    audio.loop = true;
    audio.preload = "auto";
    audioRef.current = audio;

    let active = false;

    const playMusic = async () => {
      if (
        !media.matches ||
        !active ||
        manuallyDisabledRef.current ||
        !audio.paused
      ) {
        return;
      }

      try {
        await audio.play();
        setBlocked(false);
      } catch {
        setBlocked(true);
      }
    };

    const handleInteraction = () => {
      void playMusic();
    };

    const syncPlayback = () => {
      const desktop = media.matches;
      active = desktop;
      setIsDesktop(desktop);

      if (!desktop) {
        audio.pause();
        audio.currentTime = 0;
        setIsPlaying(false);
        setBlocked(false);
        return;
      }

      void playMusic();
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    window.addEventListener("pointerdown", handleInteraction);
    window.addEventListener("keydown", handleInteraction);
    media.addEventListener("change", syncPlayback);

    syncPlayback();

    return () => {
      active = false;
      window.removeEventListener("pointerdown", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
      media.removeEventListener("change", syncPlayback);
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
      manuallyDisabledRef.current = true;
      audio.pause();
      setBlocked(false);
      return;
    }

    manuallyDisabledRef.current = false;

    try {
      await audio.play();
      setBlocked(false);
    } catch {
      setBlocked(true);
    }
  }, []);

  if (!isDesktop) return null;

  return (
    <button
      type="button"
      data-music-toggle
      onClick={togglePlayback}
      aria-label={isPlaying ? "Zatrzymaj muzykę" : "Włącz muzykę"}
      aria-pressed={isPlaying}
      className="fixed bottom-5 right-5 z-100 flex items-center gap-2 rounded-full border border-white/20 bg-[#08082b]/90 px-4 py-3 font-mono text-xs text-white shadow-lg shadow-purple-950/40 backdrop-blur-md transition hover:border-[#fdc302] hover:text-[#fdc302] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fdc302]"
    >
      <span aria-hidden="true">{isPlaying ? "♫" : "▶"}</span>
      <span>
        {blocked ? "Włącz muzykę" : isPlaying ? "Muzyka ON" : "Muzyka OFF"}
      </span>
    </button>
  );
}
