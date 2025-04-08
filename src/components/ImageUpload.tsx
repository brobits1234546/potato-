import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';

interface ImageUploadProps {
  onImageSelect: (image: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageSelect }) => {
  const handleImageChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageSelect(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, [onImageSelect]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Upload Potato Image</h2>
          <p className="text-gray-600">
            Select a clear image of the potato plant for accurate disease detection
          </p>
          
          <label className="relative group cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-green-300 rounded-lg h-64 hover:border-green-500 transition-colors duration-300">
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
            <Upload className="w-12 h-12 text-green-500 mb-4" />
            <span className="text-sm text-gray-500">Click or drag image here</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default ImageUpload;