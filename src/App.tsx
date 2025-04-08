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
  disease: 'Early Blight',
  cause: 'Alternaria solani fungus',
  severity: 'Moderate to High',
  spreadRate: 'Moderate - Can damage leaves and reduce yields',
  symptoms: [
    'Small, dark brown spots with concentric rings on older leaves',
    'Yellowing around the lesions',
    'Leaf death starting from the edges inward',
    'Tuber lesions that may cause secondary infections'
  ],
  description: 'Early blight is a common potato disease caused by the Alternaria solani fungus. It typically affects older leaves first and can significantly reduce yield if left unmanaged. The disease thrives under warm, moist conditions (75-85°F) and spreads via wind, rain, and contaminated equipment.',
  environmentalFactors: [
    'Warm temperatures (75-85°F)',
    'High humidity and rainfall',
    'Dense planting leading to poor air circulation',
    'Wet soil conditions'
  ],
  solution: [
    'Immediate Actions:',
    '- Remove and destroy infected leaves and tubers',
    '- Apply appropriate fungicides (e.g., chlorothalonil or mancozeb)',
    '- Ensure proper drainage to avoid waterlogging',

    'Preventive Measures:',
    '- Use resistant potato varieties',
    '- Practice crop rotation (avoid potatoes for 2-3 years)',
    '- Maintain proper spacing for air circulation',

    'Long-term Management:',
    '- Avoid overhead irrigation to reduce leaf wetness',
    '- Regularly scout fields for symptoms',
    '- Keep detailed records of disease occurrence'
  ],
  organicControls: [
    'Neem oil sprays',
    'Compost tea applications',
    'Beneficial fungi such as Trichoderma spp.',
    'Crop rotation with non-solanaceous crops'
  ]
});

setResults({
  disease: 'Black Scab',
  cause: 'Streptomyces scabies bacteria',
  severity: 'Moderate',
  spreadRate: 'Slow - Affects tubers and can lead to market loss due to cosmetic damage',
  symptoms: [
    'Rough, dark brown to black lesions on tubers',
    'Scabby, crater-like surface on infected potatoes',
    'Discolored, malformed tubers',
    'Potential stunted plant growth'
  ],
  description: 'Black scab is caused by the bacterium Streptomyces scabies and primarily affects the tubers. The lesions appear as rough, dark scars on the surface, which reduce the marketability of the potatoes. The disease is often associated with high pH soil and dry conditions.',
  environmentalFactors: [
    'High soil pH (>5.8)',
    'Dry, arid conditions',
    'Soil with poor organic matter content',
    'Inadequate crop rotation'
  ],
  solution: [
    'Immediate Actions:',
    '- Remove and dispose of infected tubers',
    '- Improve irrigation practices to avoid drought stress',

    'Preventive Measures:',
    '- Amend soil with organic matter to lower pH',
    '- Avoid over-fertilizing with nitrogen',
    '- Rotate crops with non-solanaceous plants (e.g., legumes)',
    '- Use disease-free seed potatoes',

    'Long-term Management:',
    '- Maintain soil pH between 5.5 and 5.8',
    '- Ensure proper soil drainage to prevent dry stress',
    '- Implement soil health practices like adding compost or manure'
  ],
  organicControls: [
    'Lower pH with elemental sulfur or organic compost',
    'Use of beneficial soil bacteria (e.g., Bacillus spp.)',
    'Crop rotation with legumes or other non-solanaceous crops',
    'Avoid planting potatoes in dry, stressed soil conditions'
  ]
});

setResults({
  disease: 'Potato Virus Y (PVY)',
  cause: 'Potato virus Y',
  severity: 'High',
  spreadRate: 'Rapid - Spread by aphids and infected seed potatoes',
  symptoms: [
    'Mosaic patterns of light and dark green on leaves',
    'Leaf curling and distortion',
    'Stunted plant growth',
    'Reduced yield and tuber size',
    'Tubers with mottled or discoloration patterns'
  ],
  description: 'Potato Virus Y (PVY) is a viral disease spread primarily by aphids and through infected seed potatoes. The virus causes a range of symptoms, including stunted growth, leaf discoloration, and reduced yield. PVY can also be transmitted through mechanical damage during handling.',
  environmentalFactors: [
    'Presence of aphids',
    'Infected seed potatoes',
    'Warm weather (above 70°F)',
    'Poor insect control practices'
  ],
  solution: [
    'Immediate Actions:',
    '- Remove and destroy infected plants immediately',
    '- Apply insecticides to control aphid populations',
    '- Avoid using infected seed potatoes',

    'Preventive Measures:',
    '- Use virus-free certified seed potatoes',
    '- Control aphid populations with insecticides or organic repellents',
    '- Practice crop rotation and avoid planting potatoes near other infected crops',

    'Long-term Management:',
    '- Use resistant potato varieties',
    '- Monitor aphid populations regularly',
    '- Practice good field hygiene and sanitation'
  ],
  organicControls: [
    'Insecticidal soap for aphid control',
    'Neem oil for aphid repellence',
    'Beneficial insects like ladybugs to control aphids',
    'Cultural practices like row covers to exclude aphids'
  ]
});

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
