import React, { useEffect, useRef } from "react";

interface EmojiSpawnerProps {
  emojis: string[];
}

const EmojiSpawner: React.FC<EmojiSpawnerProps> = ({ emojis }) => {
  const emojiContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const spawnEmoji = () => {
      const emojiEl = document.createElement("div");
      emojiEl.classList.add("emoji-animate");

      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
      emojiEl.innerHTML = randomEmoji;

      emojiEl.style.position = "absolute";
      emojiEl.style.pointerEvents = "none";
      emojiEl.style.fontSize = "4rem";

      if (emojiContainerRef.current) {
        emojiContainerRef.current.appendChild(emojiEl);

        const { width, height } =
          emojiContainerRef.current.getBoundingClientRect();

        const leftPosition = Math.random() * width;
        const topPosition = height;
        const randomRotation = Math.floor(Math.random() * 180) - 90;

        emojiEl.style.left = `${leftPosition}px`;
        emojiEl.style.top = `${topPosition}px`;

        const animation = emojiEl.animate(
          [
            { opacity: 1, transform: `translateY(0px)  rotate(0deg)` },
            {
              opacity: 0.2,
              transform: `translateY(-${height}px) rotate(${randomRotation}deg)`,
            },
          ],
          {
            duration: 2000,
            easing: "cubic-bezier(.47,.48,.44,.86)",
          },
        );

        animation.onfinish = () => emojiEl.remove();
      }
    };

    const intervalId = setInterval(spawnEmoji, 1000);

    return () => clearInterval(intervalId);
  }, [emojis]);

  return (
    <div
      ref={emojiContainerRef}
      className="emoji-container"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
};

export default EmojiSpawner;
