import { useState, useEffect, useRef } from "react";
import { Music, Music2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MusicPlayerProps {
  isLocked: boolean;
}

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

const MusicPlayer = ({ isLocked }: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const visible = !isLocked;

  useEffect(() => {
    // Load YouTube API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        initPlayer();
      };
    } else {
      initPlayer();
    }

    function initPlayer() {
      playerRef.current = new window.YT.Player('youtube-player', {
        height: '1',
        width: '1',
        videoId: 'd1x84nMuJYA',
        playerVars: {
          autoplay: 0,
          loop: 1,
          playlist: 'd1x84nMuJYA,h-SdLmiEXko,IOe0tNoUGv8,FTYKmwltAQ8',
          controls: 0,
          showinfo: 0,
          modestbranding: 1,
          enablejsapi: 1
        },
        events: {
          onReady: (event: any) => {
            // Player is ready
          }
        }
      });
    }

    // Lắng nghe sự kiện click từ CurtainIntro
    const handleInitialPlay = () => {
      setIsPlaying(true);
      if (playerRef.current && playerRef.current.playVideo) {
        playerRef.current.playVideo();
      }
    };

    window.addEventListener('playWeddingMusic', handleInitialPlay);

    return () => {
      window.removeEventListener('playWeddingMusic', handleInitialPlay);
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      playerRef.current?.pauseVideo();
    } else {
      playerRef.current?.playVideo();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`fixed bottom-8 right-8 z-[60] transition-opacity duration-1000 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
      <div className="relative">
        <AnimatePresence>
          {visible && isPlaying && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="absolute -inset-4"
            >
              <div className="absolute inset-0 border-2 border-wedding-gold/20 rounded-full animate-[ping_3s_linear_infinite]" />
              <div className="absolute inset-0 border border-wedding-gold/40 rounded-full animate-[ping_2s_linear_infinite]" />
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={togglePlay}
          className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg backdrop-blur-md border ${isPlaying
            ? "bg-wedding-gold/20 border-wedding-gold text-wedding-gold"
            : "bg-white/10 border-white/20 border text-white/40"
            }`}
          aria-label={isPlaying ? "Mute Music" : "Play Music"}
        >
          {isPlaying ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Music className="w-5 h-5" />
            </motion.div>
          ) : (
            <Music2 className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Hidden YouTube Player Wrapper */}
      <div className="fixed pointer-events-none opacity-0 -z-50 invisible">
        <div id="youtube-player"></div>
      </div>
    </div>
  );
};

export default MusicPlayer;
