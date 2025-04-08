import React from 'react';
import { X, AlertCircle, ThermometerSun, Wind, Sprout } from 'lucide-react';

interface ResultsPopupProps {
  results: {
    disease: string;
    cause: string;
    severity: string;
    spreadRate: string;
    symptoms: string[];
    description: string;
    environmentalFactors: string[];
    solution: string[];
    organicControls: string[];
  };
  selectedImage: string | null;
  onClose: () => void;
}

const ResultsPopup: React.FC<ResultsPopupProps> = ({ results, selectedImage, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800 flex items-center">
              <AlertCircle className="w-8 h-8 text-red-500 mr-2" />
              Disease Detected
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {selectedImage && (
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={selectedImage}
                  alt="Selected potato"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="space-y-6">
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <h3 className="font-bold text-xl text-red-700">{results.disease}</h3>
                <p className="text-red-600 mt-1">{results.cause}</p>
                <div className="mt-2 flex items-center gap-4">
                  <span className="text-sm font-medium text-red-800">Severity: {results.severity}</span>
                  <span className="text-sm font-medium text-red-800">Spread: {results.spreadRate}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-orange-500" />
                    Symptoms
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    {results.symptoms.map((symptom, index) => (
                      <li key={index}>{symptom}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700">Description</h4>
                  <p className="text-gray-600 mt-1">{results.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 flex items-center gap-2">
                    <ThermometerSun className="w-5 h-5 text-yellow-500" />
                    Environmental Factors
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    {results.environmentalFactors.map((factor, index) => (
                      <li key={index}>{factor}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 flex items-center gap-2">
                    <Wind className="w-5 h-5 text-blue-500" />
                    Treatment & Prevention
                  </h4>
                  <div className="text-gray-600 mt-2 space-y-2">
                    {results.solution.map((item, index) => (
                      <p key={index} className={item.startsWith('-') ? 'ml-4' : 'font-semibold mt-2'}>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 flex items-center gap-2">
                    <Sprout className="w-5 h-5 text-green-500" />
                    Organic Control Methods
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    {results.organicControls.map((control, index) => (
                      <li key={index}>{control}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultsPopup;