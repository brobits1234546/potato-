import React, { useState } from 'react';
import { Upload, Leaf, AlertCircle } from 'lucide-react';
import Welcome from './components/Welcome';
import ImageUpload from './components/ImageUpload';
import ResultsPopup from './components/ResultsPopup';

function App() {
  const [step, setStep] = useState<'welcome' | 'upload' | 'results'>('welcome');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [results, setResults] = useState<any>(null);

  const handleImageSelect = async (image: string) => {
    setSelectedImage(image);
    // Simulate enhanced API call with more detailed disease information
    setTimeout(() => {
      setResults({
        disease: 'Late Blight',
        cause: 'Phytophthora infestans fungus',
        severity: 'High',
        spreadRate: 'Rapid - Can destroy entire fields within days',
        symptoms: [
          'Dark brown to black lesions on leaves',
          'White fuzzy growth on leaf undersides',
          'Stem lesions that turn brown or black',
          'Tuber rot with reddish-brown discoloration'
        ],
        description: 'Late blight is one of the most severe potato diseases worldwide, infamous for causing the Irish Potato Famine. The disease thrives in cool, wet conditions (60-70°F, high humidity) and can spread rapidly through water splash, wind, and infected seed potatoes. Early detection is crucial as the disease can destroy entire crops within 7-10 days under favorable conditions.',
        environmentalFactors: [
          'High humidity (>90%)',
          'Moderate temperatures (60-70°F)',
          'Prolonged leaf wetness',
          'Poor air circulation'
        ],
        solution: [
          'Immediate Actions:',
          '- Remove and destroy infected plants immediately',
          '- Apply appropriate fungicides (e.g., chlorothalonil or copper-based)',
          '- Increase plant spacing to improve air circulation',
          
          'Preventive Measures:',
          '- Use certified disease-free seed potatoes',
          '- Implement crop rotation (3-4 year cycle)',
          '- Improve field drainage',
          '- Monitor weather conditions',
          
          'Long-term Management:',
          '- Plant resistant varieties when available',
          '- Maintain proper soil pH (5.8-6.5)',
          '- Practice regular field scouting',
          '- Keep detailed records of disease occurrence'
        ],
        organicControls: [
          'Copper-based fungicides (approved for organic use)',
          'Beneficial bacteria applications',
          'Compost tea sprays',
          'Enhanced biological soil activity'
        ]
      });
      setStep('results');
    }, 1500);
  };

  const resetApp = () => {
    setStep('welcome');
    setSelectedImage(null);
    setResults(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {step === 'welcome' && (
        <Welcome onStart={() => setStep('upload')} />
      )}
      
      {step === 'upload' && (
        <ImageUpload onImageSelect={handleImageSelect} />
      )}
      
      {step === 'results' && results && (
        <ResultsPopup 
          results={results}
          selectedImage={selectedImage}
          onClose={resetApp}
        />
      )}
    </div>
  );
}

export default App