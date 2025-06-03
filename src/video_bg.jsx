import React from "react";

const VideoBackground = () => {
  const timeOfDay = getTimeOfDay();
  const videoSrc = `/video/${timeOfDay}.mp4`;

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="video-bg"
    >
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
};

function getTimeOfDay() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "morning";
  if (hour >= 12 && hour < 17) return "day";
  if (hour >= 17 && hour < 20) return "evening";
  return "night";
}

export default VideoBackground;
