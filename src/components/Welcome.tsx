import React from 'react';
import { Leaf } from 'lucide-react';

interface WelcomeProps {
  onStart: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8 bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
        <div className="flex justify-center">
          <Leaf className="w-16 h-16 text-green-500" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800">
          Potato Disease Detection
        </h1>
        <p className="text-xl text-gray-600">
          Upload a photo of your potato plant and let our AI identify any potential diseases
        </p>
        <button
          onClick={onStart}
          className="px-8 py-4 bg-green-500 text-white rounded-full text-lg font-semibold 
                   hover:bg-green-600 transition-colors duration-300 shadow-lg
                   hover:shadow-xl transform hover:-translate-y-1"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Welcome;