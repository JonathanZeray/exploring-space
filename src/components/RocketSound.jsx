import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function RocketSound() {
  const audioRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  useEffect(() => {
    const AudioEl = audioRef.current;
    AudioEl.loop = false;

    const handleClick = () => {
      if (!scrollTriggerRef.current) {
        gsap.to(window, {
          duration: 1,
          onComplete: () => {
            scrollTriggerRef.current = true;
          },
        });
      } else {
        AudioEl.play();
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    const AudioEl = audioRef.current;

    gsap.to(AudioEl, {
      scrollTrigger: {
        markers: true,
        trigger: AudioEl,
        start: () => `top+=${window.innerHeight * 0.001}`,
        end: () => `top+=${window.innerHeight * 1.5}`,
        onEnter: () => {
          if (scrollTriggerRef.current) {
            AudioEl.play();
          }
        },
        onLeaveBack: () => AudioEl.pause(),
        onEnterBack: () => {
          if (scrollTriggerRef.current) {
            AudioEl.play();
          }
        },
        onLeave: () => AudioEl.pause(),
      },
    });
  }, []);

  return (
    <audio ref={audioRef}>
      <source
        src="../../public/assets/Audio/rocket-sound.mp3"
        type="audio/mpeg"
      />
    </audio>
  );
}
