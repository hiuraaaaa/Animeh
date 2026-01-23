import React from 'react';

const VideoPlayer = ({ videos, poster }) => {
  return (
    <div className="bg-black rounded-lg overflow-hidden shadow-2xl mb-8 animate-fade-in">
      <video 
        controls 
        autoPlay
        poster={poster}
        className="w-full aspect-video"
      >
        <source src={videos['1080p']} type="video/mp4" label="1080p" />
        <source src={videos['720p']} type="video/mp4" label="720p" />
        <source src={videos['540p']} type="video/mp4" label="540p" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
