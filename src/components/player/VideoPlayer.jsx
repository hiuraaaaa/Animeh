import React from 'react';

const VideoPlayer = ({ videos, poster }) => {
  return (
    <div className="industrial-banner mb-12 animate-fade-in bg-black relative">
      {/* Dots in corners */}
      <div className="dot -top-1.5 -left-1.5 bg-white"></div>
      <div className="dot -top-1.5 -right-1.5 bg-white"></div>
      <div className="dot -bottom-1.5 -left-1.5 bg-white"></div>
      <div className="dot -bottom-1.5 -right-1.5 bg-white"></div>

      {/* Video Container - 16:9 Aspect Ratio */}
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <video 
          controls 
          autoPlay
          poster={poster}
          className="absolute inset-0 w-full h-full"
        >
          <source src={videos['1080p']} type="video/mp4" label="1080p" />
          <source src={videos['720p']} type="video/mp4" label="720p" />
          <source src={videos['540p']} type="video/mp4" label="540p" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Quality Badge */}
      <div className="absolute top-4 right-4 z-10 px-3 py-1.5 bg-gray-900 bg-opacity-90 border border-white">
        <span className="text-[9px] font-bold uppercase tracking-widest text-white">
          HD Available
        </span>
      </div>

      {/* Video Info Bar (Optional) */}
      <div className="bg-gray-900 border-t-2 border-white px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Quality Options */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
              Quality:
            </span>
            <div className="flex gap-2">
              {['1080p', '720p', '540p'].map((quality) => (
                videos[quality] && (
                  <span 
                    key={quality}
                    className="text-[9px] font-bold uppercase tracking-widest text-white px-2 py-1 bg-gray-800 border border-gray-700"
                  >
                    {quality}
                  </span>
                )
              ))}
            </div>
          </div>
        </div>

        {/* Download Button (Optional) */}
        <button className="text-[10px] font-bold uppercase tracking-wider text-white hover:text-gray-300 transition-colors flex items-center gap-2">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          Download
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
