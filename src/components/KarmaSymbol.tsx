import React from 'react';

interface KarmaSymbolProps {
  className?: string;
}

export const KarmaSymbol = ({ className = '' }: KarmaSymbolProps) => (
  <div className={`karma-symbol ${className}`}>
    <div className="transform rotate-45 bg-blue-400" style={{ width: '100%', height: '100%' }} />
  </div>
);

export default KarmaSymbol;