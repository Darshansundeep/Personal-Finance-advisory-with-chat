import React, { useState } from 'react';
import { X, Mail, Download } from 'lucide-react';

interface EmailModalProps {
  onClose: () => void;
  onDirectDownload: () => void;
  onEmailSubmit: (e: React.FormEvent) => void;
  email: string;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function EmailModal({
  onClose,
  onDirectDownload,
  onEmailSubmit,
  email,
  onEmailChange,
}: EmailModalProps) {
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    onEmailSubmit(e);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md m-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Choose Your Option</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Mail className="w-6 h-6 text-indigo-600" />
              </div>
              <h4 className="font-semibold text-lg">Enhanced Experience</h4>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Get your financial summary via email and unlock access to our expert chat service - completely free!
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    onEmailChange(e);
                    setError('');
                  }}
                  placeholder="Enter your email address"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    error ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2.5 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
              >
                Continue with Email
              </button>
            </form>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">OR</span>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-gray-200 rounded-lg">
                <Download className="w-6 h-6 text-gray-700" />
              </div>
              <h4 className="font-semibold text-lg">Quick Download</h4>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Download your financial summary directly as a PDF file.
            </p>
            <button
              onClick={onDirectDownload}
              className="w-full border-2 border-gray-300 text-gray-700 py-2.5 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Download PDF Only
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}