import React from 'react';

export const KarmaFrame = ({ children }: { children: React.ReactNode }) => (
  <div className="relative p-12">
    {/* Top left corner */}
    <div className="absolute top-0 left-0 w-12 h-12 border-l-4 border-t-4 border-blue-400 rounded-tl-lg" />
    
    {/* Top right corner */}
    <div className="absolute top-0 right-0 w-12 h-12 border-r-4 border-t-4 border-blue-400 rounded-tr-lg" />
    
    {/* Bottom left corner */}
    <div className="absolute bottom-0 left-0 w-12 h-12 border-l-4 border-b-4 border-blue-400 rounded-bl-lg" />
    
    {/* Bottom right corner */}
    <div className="absolute bottom-0 right-0 w-12 h-12 border-r-4 border-b-4 border-blue-400 rounded-br-lg" />
    
    {/* Karma symbols at corners */}
    <div className="absolute -top-2 -left-2 w-4 h-4 bg-blue-400 transform rotate-45" />
    <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 transform rotate-45" />
    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-400 transform rotate-45" />
    <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-blue-400 transform rotate-45" />
    
    {children}
  </div>
);

export default KarmaFrame;