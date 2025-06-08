
import { useState, useEffect } from 'react';

const ScrollCharacter = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      
      // Trigger jump animation when scrolling down
      if (newScrollY > scrollY) {
        setIsJumping(true);
        setTimeout(() => setIsJumping(false), 300);
      }
      
      setScrollY(newScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  return (
    <div 
      className={`fixed bottom-8 right-8 z-50 transition-transform duration-300 ${
        isJumping ? 'animate-bounce' : ''
      }`}
      style={{
        transform: `translateY(${scrollY * 0.1}px)`,
      }}
    >
      {/* Cute Girl Character */}
      <div className="relative">
        {/* Character Body */}
        <div className="w-16 h-20 bg-gradient-to-b from-pink-300 to-pink-400 rounded-full relative">
          {/* Head */}
          <div className="w-12 h-12 bg-gradient-to-b from-pink-200 to-pink-300 rounded-full absolute -top-6 left-2">
            {/* Eyes */}
            <div className="flex justify-center space-x-2 pt-3">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <div className="w-2 h-2 bg-black rounded-full"></div>
            </div>
            {/* Mouth */}
            <div className="w-3 h-1 bg-red-400 rounded-full absolute bottom-2 left-1/2 transform -translate-x-1/2"></div>
            
            {/* Hair */}
            <div className="absolute -top-2 left-1 w-10 h-6 bg-gradient-to-r from-amber-600 to-amber-700 rounded-t-full"></div>
            <div className="absolute -top-1 left-0 w-3 h-3 bg-amber-600 rounded-full"></div>
            <div className="absolute -top-1 right-0 w-3 h-3 bg-amber-600 rounded-full"></div>
          </div>
          
          {/* Arms */}
          <div className="absolute top-2 -left-2 w-4 h-6 bg-pink-300 rounded-full transform rotate-12"></div>
          <div className="absolute top-2 -right-2 w-4 h-6 bg-pink-300 rounded-full transform -rotate-12"></div>
          
          {/* Legs */}
          <div className="absolute bottom-0 left-2 w-3 h-8 bg-pink-400 rounded-full"></div>
          <div className="absolute bottom-0 right-3 w-3 h-8 bg-pink-400 rounded-full"></div>
          
          {/* Feet */}
          <div className="absolute -bottom-2 left-1 w-5 h-3 bg-purple-500 rounded-full"></div>
          <div className="absolute -bottom-2 right-2 w-5 h-3 bg-purple-500 rounded-full"></div>
        </div>
        
        {/* Speech Bubble */}
        <div className={`absolute -top-8 -left-12 bg-white border-2 border-primary rounded-lg px-2 py-1 text-xs font-medium transition-opacity duration-200 ${
          isJumping ? 'opacity-100' : 'opacity-0'
        }`}>
          Wheee! 🎉
          <div className="absolute bottom-0 left-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white transform translate-y-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ScrollCharacter;
